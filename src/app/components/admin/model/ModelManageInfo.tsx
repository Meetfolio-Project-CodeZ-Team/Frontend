import { useModal } from '@/app/hooks/useModal'
import TrashBin from '@/app/ui/svg/common/TrashBin'
import { deleteUserAlert } from '@/app/utils/toast'
import { useState } from 'react'

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
  const [detailData, setDetailData] = useState<modelResultTypes | null>(null)

  const getModelDetail = async () => {
    openModal()
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/model/detail?id=${modelId}`,
    )
    const resData = await res.json()
    setDetailData(resData.result)
  }

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
        <div className="w-[268px] text-center">{modelName}</div>
        <div className="w-[80px] text-center">{version}</div>
        <div className="w-[320px] text-center">
          {accuracy.toFixed(2).toString().slice(0, 4)} %
        </div>
        <div className="w-[72px] flex items-center justify-center">
          <div
            onClick={getModelDetail}
            className={`w-16 h-9 ${status === 'ACTIVE' ? 'bg-[#486283]' : 'bg-[#C4C4C4]'} rounded-[15px] text-white text-[16px] font-semibold flex items-center justify-center shadow-md cursor-pointer`}
          >
            {'배포'}
          </div>
        </div>
        <div className="w-[130px] flex items-center justify-end">
          {status === 'INACTIVE' && (
            <div
              className=" cursor-pointer flex w-8 h-8 items-center justify-center pt-1 font-semibold pr-1 pb-1 hover:border-red-600"
              onClick={() => deleteModel(modelId)}
            >
              <TrashBin size={23} color={'black'} />
            </div>
          )}
        </div>
        <div onClick={handleModalClick}>
          {isOpen && detailData && (
            <ModelInfoModal
              data={detailData}
              closeModal={closeModal}
              status={status}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ModelManageInfo
