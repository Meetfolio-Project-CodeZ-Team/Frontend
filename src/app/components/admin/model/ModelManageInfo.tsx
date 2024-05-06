import { useModal } from '@/app/hooks/useModal'
import { boardDelete } from '@/app/ui/IconsPath'
import Icons from '../../common/Icons'
import DeleteModal from '../common/DeleteModal'

interface ModelManageInfoProps {
  modelId: number
  version: number
  modelName: string
  fileName: string
  filePath: string
  status: string
  createdDate: string
  learnedDate: string
  activatedDate: string
}

const ModelManageInfo = (trainInfo: ModelManageInfoProps) => {
  const {
    modelId,
    version,
    modelName,
    fileName,
    filePath,
    status,
    createdDate,
    learnedDate,
    activatedDate,
  } = trainInfo

  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)

  return (
    <div className="flex flex-col w-[1034px] h-[50px]">
      <div className="flex w-[1034px] h-[50px] pl-2 border-b border-[#BDBDBD] items-center text-black text-lg">
        <div className="w-[121px] text-center">{createdDate}</div>
        <div className="w-[228px] text-center">{modelName}</div>
        <div className="w-[278px] text-center">{version}</div>
        <div className="w-[145px] text-center">{status}</div>
        <div className="w-[145px] text-center">{learnedDate}</div>
        <div className="w-[145px] text-center">{status}</div>
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
              text="해당 데이터를 삭제하시겠습니까?"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ModelManageInfo
