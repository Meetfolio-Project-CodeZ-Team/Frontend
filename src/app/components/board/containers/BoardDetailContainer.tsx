'use client'
import { NULLPOST } from '@/app/constants/board'
import { PROFILE_EMOJI } from '@/app/constants/signup'
import { useModal } from '@/app/hooks/useModal'
import { selectedPostId } from '@/app/recoil/board'
import { deletePostAlert } from '@/app/utils/toast'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRecoilState } from 'recoil'
import DeleteModal from '../../admin/common/DeleteModal'
import Button from '../../common/Button'
import CommentContainer from './CommentContainer'

interface BoardDetailContainerProps {
  nickname: string
}

const BoardDetailContainer = ({ nickname }: BoardDetailContainerProps) => {
  const [selectedId, setSelectedId] = useRecoilState(selectedPostId)
  const isSelected = selectedId !== 999
  const [data, setData] = useState<BoardInfoTypes | null>(null)
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  const router = useRouter()

  const path =
    data?.boardType === 'GROUP'
      ? '/board/update/group'
      : '/board/update/employment'

  const deletePost = async (id: number) => {
    deletePostAlert()
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/detail/delete?postId=${selectedId}`,
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
        <div className="w-full h-full relative ">
          <div>
            <div className="absolute left-6 top-12 text-2xl font-semibold ">
              {data?.title}
            </div>
            <div className="absolute right-10 top-[84px] text-sm font-normal">
              {data?.registrationDate}
            </div>
            <Link
              href={
                nickname === data?.memberName
                  ? `/mypage`
                  : `/userpage/${data?.memberName}`
              }
            >
              <div className="absolute left-7 top-[144px] flex text-[18px] font-semibold gap-x-3 items-center">
                <div className="w-6 h-6">
                  <Image
                    width={24}
                    height={24}
                    src={`/Images/Emoji/${PROFILE_EMOJI[PROFILE_EMOJI.indexOf(data?.profile || '')]}.png`}
                    alt="logoIcon"
                  />
                </div>
                <div className="">{data?.memberName}</div>
              </div>
            </Link>
            {data?.memberName === nickname && (
              <div className="absolute gap-x-3 right-6 top-[144px] flex text-[15px] font-semibold">
                <Button
                  buttonText={'수정'}
                  type={'editPost'}
                  isDisabled={false}
                  onClickHandler={() => router.push(`${path}?id=${selectedId}`)}
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
                      text="해당 게시물을 삭제하시겠습니까?"
                    />
                  )}
                </div>
              </div>
            )}

            {data?.peopleNumber && (
              <div className="absolute top-[205px] left-[26px] flex gap-x-4 items-center">
                <div className="text-white w-[76px] flex items-center justify-center text-base font-semibold bg-[#7AA9E7] rounded-2xl py-[2px]">
                  {data?.peopleNumber}명
                </div>
                <div className="text-[15px] font-medium text-[#486283]">
                  {data?.recruitment}
                </div>
              </div>
            )}
            <div
              className={`flex absolute pr-8 left-7 ${data?.peopleNumber ? 'top-[260px] ' : 'top-[230px]'} break-all h-[70%] overflow-y-auto`}
            >
              {data?.content}
            </div>
          </div>
          <CommentContainer
            postId={selectedId}
            isLiked={data?.likeStatus === 'ACTIVE'}
          />
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
