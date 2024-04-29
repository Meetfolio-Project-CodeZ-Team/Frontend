'use client'
import { MODEL_TRAIN_H } from '@/app/constants/admin'
import ModelTrainInfo from './ModelTrainInfo'
import Button from '../../common/Button'
import { useState } from 'react'
import AddTrainData from './AddTrainData'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { addTrainData } from '@/app/utils/toast'

interface ModelTrainProps {
  trainData: datasetInfoTypes[]
}
const ModelTrain = ({ trainData }: ModelTrainProps) => {
  const [isAdd, setIsAdd] = useState(false)

  const succeedAdd = () => {
    addTrainData()
    setIsAdd(false)
  }

  return isAdd ? (
    <AddTrainData addComplete={() => succeedAdd()} />
  ) : (
    <div className="flex flex-col w-[1010px] h-[780px] items-center">
      <ToastContainer />
      <div className="text-2xl font-bold mb-6">{MODEL_TRAIN_H[0]}</div>
      <div className="flex w-[1010px] h-[50px] pl-[13px] border-y border-[#616161] items-center text-black text-lg">
        <div className="font-bold">{MODEL_TRAIN_H[1]}</div>
        <div className="ml-[105px] ">{MODEL_TRAIN_H[2]}</div>
        <div className="ml-[125px]">{MODEL_TRAIN_H[3]}</div>
        <div className="ml-[300px]">{MODEL_TRAIN_H[4]}</div>
      </div>
      <div className="h-[580px] overflow-y-auto scrollbar-hide">
        {trainData.map((data, i) => (
          <div key={i}>
            <ModelTrainInfo
              createdAt={data.createdAt}
              job={data.job}
              domain={data.domain}
              url={data.url}
            />
          </div>
        ))}
      </div>
      <div className=" w-[1010px] flex flex-row-reverse gap-x-5">
        <Button
          buttonText={'추가학습'}
          type={'modelBtn'}
          className="bg-white border-2 border-[#486283] text-[#486283]"
          isDisabled={false}
          onClickHandler={() => setIsAdd(true)}
        />
        <Button
          buttonText={'데이터 추가'}
          type={'modelBtn'}
          isDisabled={false}
          onClickHandler={() => setIsAdd(true)}
        />
      </div>
    </div>
  )
}

export default ModelTrain
