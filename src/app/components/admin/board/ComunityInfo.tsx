import { useModal } from '@/app/hooks/useModal'
import { boardDelete } from '@/app/ui/IconsPath'
import Icons from '../../common/Icons'
import DeleteModal from '../common/DeleteModal'

interface ComunityInfoProps {
  createdAt: string
  memberName: string
  title: string
  boardId: number
  type: string
}

const ComunityInfo = (userInfo: ComunityInfoProps) => {
  const { createdAt, memberName, title, type } = userInfo

  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)

  return (
    <div className="flex flex-col w-[1034px] h-[50px]">
      <div className="flex w-[1034px] h-[50px] pl-2 border-b border-[#BDBDBD] items-center text-black text-lg">
        <div className="w-[121px] text-center">{createdAt}</div>
        <div className="w-[228px] text-center">{memberName}</div>
        <div className="w-[278px] text-center">{type}</div>
        <div className="w-[145px] text-center">{title}</div>
        <div
          className="ml-[168px] flex text-center cursor-pointer"
          onClick={openModal}
        >
          <Icons name={boardDelete} />
        </div>
        <div onClick={handleModalClick}>
          {isOpen && (
            <DeleteModal
              closeModal={closeModal}
              text={'정말 삭제하시겠습니까?'}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ComunityInfo
