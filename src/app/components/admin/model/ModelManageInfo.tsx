import { useModal } from '@/app/hooks/useModal'
import { deleteUserAlert } from '@/app/utils/toast'
import DeleteModal from '../common/DeleteModal'

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
        <div className="w-[121px] text-center">{learnedDate}</div>
        <div className="w-[348px] text-center">{modelName}</div>
        <div className="w-[50px] text-center">{version}</div>
        <div className="w-[302px] text-center">{accuracy}%</div>
        <div className="w-[118px] flex items-center justify-center">
          <div
            className={`w-20 h-9 ${status === 'ACTIVE' ? 'bg-[#486283]' : 'bg-[#C4C4C4]'} rounded-[15px] text-white text-medium font-bold flex items-center justify-center shadow-md cursor-pointer`}
          >
            {'배포'}
          </div>
        </div>
        <div onClick={handleModalClick}>
          {isOpen && (
            <DeleteModal
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
