import { useModal } from '@/app/hooks/useModal'
import { deleteUserAlert } from '@/app/utils/toast'
import DeleteModal from '../common/DeleteModal'
import ModelInfoModal from './ModelInfoModal'

interface ModelManageInfoProps {
  modelId: number
  version: number
  modelName: string
  status: string
  learnedDate: string
  accuracy: number
}

const ModelManageInfo = (trainInfo: ModelManageInfoProps) => {
  const { modelId, version, modelName, status, learnedDate, accuracy } =
    trainInfo

  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)

  const deleteModel = async (modelId: number) => {
    deleteUserAlert()
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/model/delete?modelId=${modelId}`,
      {
        method: 'DELETE',
      },
    )
    if (res.ok) {
      window.location.reload()
    }
  }

  return (
    <div className="flex flex-col w-[1034px] h-[50px]" key={modelId}>
      <div className="flex w-[1034px] h-[50px] pl-2 border-b border-[#BDBDBD] items-center text-black text-lg">
        <div className="w-[120px] text-center">{learnedDate}</div>
        <div className="w-[268px] text-center" onClick={openModal}>{modelName}</div>
        <div className="w-[80px] text-center">{version}</div>
        <div className="w-[260px] text-center">{accuracy}%</div>
        <div className="w-[72px] flex items-center justify-center">
          <div
            className={`w-20 h-9 ${status === 'ACTIVE' ? 'bg-[#486283]' : 'bg-[#C4C4C4]'} rounded-[15px] text-white text-medium font-bold flex items-center justify-center shadow-md cursor-pointer`}
          >
            {'배포'}
          </div>
        </div>
        <div className="w-[200px] flex items-center justify-center">
          X
        </div>
        <div onClick={handleModalClick}>
          {isOpen && (
            <ModelInfoModal
              closeModal={closeModal}
              deleteUser={() => deleteModel(modelId)}
              text="해당 데이터를 삭제하시겠습니까?"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ModelManageInfo
