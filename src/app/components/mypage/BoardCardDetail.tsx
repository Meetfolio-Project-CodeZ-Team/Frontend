import { useModal } from '@/app/hooks/useModal'
import { selectedPostId } from '@/app/recoil/board'
import { deletePostAlert } from '@/app/utils/toast'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import DeleteModal from '../admin/common/DeleteModal'
import Button from '../common/Button'
import CommentContainer2 from './common/CommentContainer2'
interface BoardCardDetailProps {
  title?: string
  content?: string
  boardId?: number
  groupCategory?: string
  recruitment?: string
  registrationDate?: string
  memberName?: string
  peopleNumber?: number
  // closeModal: () => void
}

interface BoardDetailContainer {
  nickname?: string
  profile?:string
}
const BoardCardDetail = ({ nickname, profile }: BoardDetailContainer) => {
  const [selectedId, setSelectedId] = useRecoilState(selectedPostId)
  const isSelected = selectedId !== 999
  const [data, setData] = useState<BoardInfoTypes | null>(null)
  const [isLiked, setIsliked] = useState(false)
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  const path =
    data?.boardType === 'GROUP'
      ? '/board/update/group'
      : '/board/update/employment'
  const router = useRouter()

  const deletePost = async (id: number) => {
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

  console.log('디테일 가져온 데이터', data)
  console.log('닉네임', nickname)

  const goBack = () => {
    router.push('/mypage/myboard')
  }

  return (
    <div className="w-full h-[982px] relative">
      {isSelected ? (
        <>
          <div className="w-full h-[982px] left-0 top-0 absolute bg-gray-50" />
          <div className="w-[1014.23px] h-[907px] left-[71.39px] top-[64px] absolute">
            
            <div className="w-[964px] h-[511px] left-[10px] top-[198px] absolute text-gray-900 text-xl font-medium leading-[30px]">
              {data?.content}
            </div>
            <div className="w-[1004.23px] h-[45px] left-[10px] top-0 absolute flex-col justify-start items-start gap-3 inline-flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-end gap-[350px] inline-flex">
                  <div className="w-[600px] text-gray-900 text-3xl font-semibold leading-[45px]">
                    {data?.title}
                  </div>
                  <div className="w-[110.90px] h-[18px] text-gray-900 text-sm font-normal  leading-[30px]">
                    {data?.registrationDate}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1002px] h-[119px] left-[0px] top-[703px] absolute">
          <CommentContainer2
            postId={selectedId}
            isLiked={data?.likeStatus === 'ACTIVE'}
          />
          </div>
          </div>
          
          <div className="w-[322px] h-[37px] left-[82px] top-[190px] absolute justify-start items-center gap-[19px] inline-flex">
            {data?.peopleNumber && (
              <div className="w-[70px] h-[25px] px-5 bg-blue-400 rounded-[15px] justify-center items-center gap-2 flex">
                <div className="w-[76px] h-6 text-center text-white text-base font-semibold leading-normal">
                  {data?.peopleNumber}명
                </div>
              </div>
            )}
            {data?.recruitment && (
              <div className="w-[233px] h-6 text-slate-600 text-[15px] font-medium leading-normal">
                {data?.recruitment}
              </div>
            )}
          </div>
          <div className="w-[946px] h-[29px] left-[84px] top-[141px] absolute">
            {data?.memberName === nickname && (
              <div>
                <div className="absolute gap-x-3 left-[825px] top-[5px] flex text-[15px] font-semibold">
                  <Button
                    buttonText={'수정'}
                    type={'editPost'}
                    isDisabled={false}
                    onClickHandler={() =>
                      router.push(`${path}?id=${selectedId}`)
                    }
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
              </div>
            )}
            <div className="w-[106.40px] h-5 left-0 top-[4px] absolute text-gray-900 text-[15px] font-semibold font-['Rubik'] leading-[30px]">
              {data?.memberName}
            </div>
          </div>
          
        </>
      ) : (
        <div className="flex flex-col w-full h-full items-center justify-center text-black text-2xl gap-y-2 font-medium"
        onClick={goBack}>
          돌아가기
        </div>
      )}
    </div>
  )
}

export default BoardCardDetail
