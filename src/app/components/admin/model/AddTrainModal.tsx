'use client'
import { MODEL_MODAL } from '@/app/constants/admin'
import Button from '../../common/Button'

interface AddTrainModalProps {
  closeModal: () => void
}

const AddTrainModal = ({ closeModal }: AddTrainModalProps) => {
  const additionalTrain = async () => {
    const requestBody = {
      model_id: 0,
      created_at: '2024',
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/model/additional`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      },
    )
    const resData = await response.json()
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[542px] h-[480px] rounded-[20px] bg-[#FFFFFF] relative flex flex-col items-center gap-y-[48px]">
        <div className="flex w-[400px] text-center text-gray-900 text-3xl font-bold mt-[50px]">
          {MODEL_MODAL[0]}
          10
          {MODEL_MODAL[1]}
        </div>
        <div className="absolute left-[128px] top-[178px] flex flex-col text-xl font-bold gap-y-3">
          <div className="flex gap-x-3 items-center">
            <div>{MODEL_MODAL[2]}</div>
            <div className="font-medium">meetfolio_model</div>
            <div className="w-[50px] h-6 text-lg text-center text-white font-medium bg-black rounded-2xl">
              1.0
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <div>{MODEL_MODAL[3]}</div>
            <div className="font-medium">2024-04-18</div>
          </div>
          <div className="flex gap-x-3 items-center">
            <div>{MODEL_MODAL[4]}</div>
            <div className="font-medium">2024-04-23</div>
          </div>
          <div className="flex gap-x-3 items-center">
            <div>{MODEL_MODAL[5]}</div>
            <div className="font-medium">80%</div>
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
