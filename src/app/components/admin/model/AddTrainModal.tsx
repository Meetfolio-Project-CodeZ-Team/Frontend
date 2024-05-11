'use client'
import { MODEL_MODAL } from '@/app/constants/admin'
import Button from '../../common/Button'

interface AddTrainModalProps {
  closeModal: () => void
  modalData: modelResultTypes
  trainableNumber: number
}

const AddTrainModal = ({
  closeModal,
  modalData,
  trainableNumber,
}: AddTrainModalProps) => {
  const additionalTrain = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/model/additional`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const resData = await response.json()
    console.log(resData, '추가 학습 요청 후 응답')
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[542px] h-[480px] rounded-[20px] bg-[#FFFFFF] relative flex flex-col items-center gap-y-[48px]">
        <div className="flex w-[400px] text-center text-gray-900 text-3xl font-bold mt-[50px]">
          {MODEL_MODAL[0]}
          {''}
          {trainableNumber}
          {MODEL_MODAL[1]}
        </div>
        <div className="absolute left-[128px] top-[178px] flex flex-col text-xl font-bold gap-y-3">
          <div className="flex gap-x-3 items-center">
            <div>{MODEL_MODAL[2]}</div>
            <div className="font-medium">{modalData.modelName}</div>
            <div className="w-[44px] flex items-center justify-center h-6 p2 text-base text-center text-white font-light bg-black rounded-2xl">
              {modalData.version}
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <div>{MODEL_MODAL[3]}</div>
            <div className="font-medium">{modalData.createdDate}</div>
          </div>
          <div className="flex gap-x-3 items-center">
            <div>{MODEL_MODAL[4]}</div>
            <div className="font-medium">{modalData.activatedDate}</div>
          </div>
          <div className="flex gap-x-3 items-center">
            <div>{MODEL_MODAL[5]}</div>
            <div className="font-medium">{modalData.status}</div>
          </div>
        </div>
        <div className="flex w-[360px] gap-x-[60px] mt-[200px]">
          <Button
            buttonText={'예'}
            type={'modelYes'}
            isDisabled={false}
            onClickHandler={additionalTrain}
          ></Button>
          <Button
            buttonText={'아니오'}
            type={'modelNo'}
            isDisabled={false}
            onClickHandler={closeModal}
          ></Button>
        </div>
      </div>
    </div>
  )
}

export default AddTrainModal
