'use client'
import { NULLPOST } from '@/app/constants/board'
import { selectedPostId } from '@/app/recoil/board'
import { useRecoilState, useRecoilValue } from 'recoil'
import CommentContainer from './CommentContainer'
import Button from '../../common/Button'
import { useEffect, useState } from 'react'
import { deletePostAlert } from '@/app/utils/toast'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useModal } from '@/app/hooks/useModal'
import DeleteModal from '../../admin/common/DeleteModal'

interface BoardDetailContainer {
  nickname: string
}

const BoardDetailContainer = ({ nickname }: BoardDetailContainer) => {
  const [selectedId, setSelectedId] = useRecoilState(selectedPostId)
  const isSelected = selectedId !== 999
  const [data, setData] = useState<BoardInfoTypes | null>(null)
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  console.log(selectedId, '아이디 변경')

  const deletePost = async (id: number) => {
    console.log('삭제')
    deletePostAlert()
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/detail/delete?postId=${id}`,
      {
        method: 'DELETE',
      },
    )
    setSelectedId(999)
    window.location.reload()
  }

  useEffect(() => {
    if (isSelected) {
      const fetchData = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/detail?id=${selectedId}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        const resData = await response.json()
        setData(resData.result.boardInfo)
      }
      fetchData()
    }
  }, [selectedId])

  return (
    <div className="w-full h-full relative border-white border-b-2">
      <ToastContainer />

      {isSelected ? (
        <div className="w-full h-full relative">
          <div className="">
            <div className="absolute left-6 top-6 text-3xl font-semibold">
              {data?.title}
            </div>
            <div className="absolute right-8 top-[52px] text-sm font-normal">
              {data?.registrationDate}
            </div>
            <div className="absolute left-9 top-[120px] flex text-[15px] font-semibold">
              {data?.memberName}
            </div>
            {data?.memberName === nickname && (
              <div className="absolute gap-x-3 right-8 top-[120px] flex text-[15px] font-semibold">
                <Button
                  buttonText={'수정'}
                  type={'editPost'}
                  isDisabled={false}
                  onClickHandler={function (): void {
                    throw new Error('Function not implemented.')
                  }}
                />
                <Button
                  buttonText={'삭제'}
                  type={'deletePost'}
                  isDisabled={false}
                  onClickHandler={openModal}
                  className="text-[#000000] bg-white border-black border-2"
                />
                <div onClick={handleModalClick}>
                  {isOpen && (
                    <DeleteModal
                      closeModal={closeModal}
                      deleteUser={() => deletePost(data?.boardId || 0)}
                    />
                  )}
                </div>
              </div>
            )}

            {data?.peopleNumber && (
              <div className="absolute top-[160px] left-9 flex gap-x-4 items-center">
                <div className="text-white w-[76px] flex items-center justify-center text-base font-semibold bg-[#7AA9E7] rounded-2xl py-[2px]">
                  {data?.peopleNumber}명
                </div>
                <div className="text-[15px] font-medium text-[#486283]">
                  {data?.recruitment}
                </div>
              </div>
            )}
            <div className="flex absolute pr-8 left-7 top-[220px] break-all h-[70%] overflow-y-auto">
              {data?.content}
            </div>
          </div>
          <CommentContainer />
        </div>
      ) : (
        <div className="flex flex-col w-full h-full items-center justify-center text-black text-2xl gap-y-2 font-medium">
          <span>{NULLPOST[0]}</span>
          <span>{NULLPOST[1]}</span>
        </div>
      )}
    </div>
  )
}

export default BoardDetailContainer
