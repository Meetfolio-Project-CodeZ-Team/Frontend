import { useModal } from '@/app/hooks/useModal'
import { boardState } from '@/app/recoil/admin'
import TrashBin from '@/app/ui/svg/common/TrashBin'
import { deletePostAlert } from '@/app/utils/toast'
import { useRecoilState } from 'recoil'
import DeleteModal from '../common/DeleteModal'

interface ComunityInfoProps {
  createdAt: string
  memberName: string
  title: string
  boardId: number
  type: string
}

const ComunityInfo = (userInfo: ComunityInfoProps) => {
  const { createdAt, memberName, title, type, boardId } = userInfo
  const [boardData, setBoardData] = useRecoilState(boardState)

  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)

  const deletePost = async (boardId: number) => {
    deletePostAlert()
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/board/delete?postId=${boardId}`,
      {
        method: 'DELETE',
      },
    )
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/board?page=${0}`,
    )
    const resData = await response.json()
    setBoardData(resData.result)
  }

  return (
    <div className="flex flex-col w-[1034px] h-[50px]">
      <div className="flex w-[1034px] h-[50px] pl-2 border-b border-[#BDBDBD] items-center text-black text-[16px]">
        <div className="w-[121px] text-center">{createdAt}</div>
        <div className="w-[240px] text-center">{memberName}</div>
        <div className="w-[268px] text-center">
          {type === 'EMPLOYMENT' ? '취업정보' : '그룹원모집'}
        </div>
        <div className="w-[195px] text-center text-[14px]">{title}</div>
        <div
          className="ml-[116px] flex cursor-pointer w-8 h-8 items-center justify-center rounded-xl"
          onClick={openModal}
        >
          <TrashBin size={22} color={'black'} />
        </div>
        <div onClick={handleModalClick}>
          {isOpen && (
            <DeleteModal
              closeModal={closeModal}
              deleteUser={() => deletePost(boardId)}
              text={'정말 삭제하시겠습니까?'}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ComunityInfo
