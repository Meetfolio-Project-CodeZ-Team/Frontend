'use client'

import { MODEL_INFO } from '@/app/constants/admin'
import Button from '../../common/Button'

interface ModelInfoModalProps {
  closeModal: () => void
  deleteUser?: () => void
  data: modelResultTypes
}

const ModelInfoModal = ({ closeModal, data }: ModelInfoModalProps) => {
  console.log(data, '모달 데이터');
  
  const activateModel = async () => {
    const requestOpt = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/model/active?id=${data.modelId}`,
      requestOpt,
    )
    const resData = await res.json()
    console.log(resData, '활성화 후 응답')
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[540px] h-[700px] rounded-[20px] bg-white relative flex items-center flex-col">
        <div className="text-3xl font-bold mt-10">모델 정보</div>
        <div className="text-xl font-bold flex flex-col w-full pl-[51px] gap-y-8 mt-12">
          <div className="flex flex-col gap-y-1">
            <div className="">{MODEL_INFO[1]}</div>
            <div className="font-normal flex items-center gap-x-2.5">
              {data.modelName}
              <div className="text-white text-base font-medium bg-black rounded-xl w-[50px] h-6 flex items-center justify-center">
                {data.version}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="">{MODEL_INFO[2]}</div>
            <div className="font-normal">{data.fileName}</div>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <div className="">{MODEL_INFO[3]}</div>
            <div className="font-normal text-[16px]">{data.filePath}</div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="">{MODEL_INFO[4]}</div>
            <div className="font-normal">{data.accuracy}%</div>
          </div>
          <div className="flex gap-x-[70px]">
            <div className="flex flex-col gap-y-1">
              <div className="">{MODEL_INFO[5]}</div>
              <div className="font-normal">{data.activatedDate}</div>
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="">{MODEL_INFO[6]}</div>
              <div className="font-normal">{data.learnedDate}</div>
            </div>
          </div>
        </div>
        <div className="w-[420px] flex gap-x-[42px] mt-12">
          <Button
            buttonText={'닫기'}
            type={'modelInfo'}
            isDisabled={false}
            onClickHandler={closeModal}
            className="text-white bg-[#7AAAE8]"
          />
          <Button
            buttonText={data.status === 'ACTIVE' ? '배포 됨' : '배포하기'}
            type={'modelInfo'}
            isDisabled={data.status === 'ACTIVE'}
            onClickHandler={activateModel}
            className="text-black bg-[#DEE5ED]"
          />
        </div>
      </div>
    </div>
  )
}

export default ModelInfoModal
