'use client'

import { MODEL_INFO } from '@/app/constants/admin'
import Button from '../../common/Button'

interface ModelInfoModalProps {
  closeModal: () => void
  deleteUser?: () => void
  text: string
}
const ModelInfoModal = ({
  closeModal,
  deleteUser,
  text,
}: ModelInfoModalProps) => {
  const handleDelete = () => {
    if (deleteUser) {
      deleteUser()
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[540px] h-[700px] rounded-[20px] bg-white relative flex items-center flex-col">
        <div className="text-3xl font-bold mt-10">모델 정보</div>
        <div className="text-xl font-bold flex flex-col w-full pl-7 gap-y-8 mt-12">
          <div className="flex flex-col gap-y-1">
            <div className="">{MODEL_INFO[1]}</div>
            <div className="font-normal flex">
              2024-04-18
              <div className="text-white font-medium bg-black rounded-xl w-[50px] h-6 flex items-center justify-center">1.0</div>
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="">{MODEL_INFO[2]}</div>
            <div className="font-normal">2024-04-18</div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="">{MODEL_INFO[3]}</div>
            <div className="font-normal">2024-04-18</div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="">{MODEL_INFO[4]}</div>
            <div className="font-normal">2024-04-18</div>
          </div>
          <div className="flex gap-x-[70px]">
            <div className="flex flex-col gap-y-1">
              <div className="">{MODEL_INFO[0]}</div>
              <div className="font-normal">2024-04-18</div>
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="">{MODEL_INFO[5]}</div>
              <div className="font-normal">2024-04-18</div>
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="">{MODEL_INFO[6]}</div>
              <div className="font-normal">2024-04-18</div>
            </div>
          </div>
        </div>
        <div className="w-[420px] flex gap-x-[42px] mt-9">
          <Button
            buttonText={'삭제하기'}
            type={'modelInfo'}
            isDisabled={false}
            onClickHandler={function (): void {
              throw new Error('Function not implemented.')
            }}
            className="text-white bg-[#7AAAE8]"
          />
          <Button
            buttonText={'배포하기'}
            type={'modelInfo'}
            isDisabled={false}
            onClickHandler={function (): void {
              throw new Error('Function not implemented.')
            }}
            className="text-black bg-[#DEE5ED]"
          />
        </div>
      </div>
    </div>
  )
}

export default ModelInfoModal
