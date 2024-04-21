import { MODEL_TRAIN_H } from '@/app/constants/admin'
import ModelTrainInfo from './ModelTrainInfo'
import Button from '../../common/Button'

interface ModelTrainProps {
  trainData: datasetInfoTypes[]
}
const ModelTrain = ({ trainData }: ModelTrainProps) => {
  console.log(trainData)

  return (
    <div className="flex flex-col w-[1010px] h-[780px] mt-[12px] items-center">
      <div className="text-2xl font-bold mb-6">{MODEL_TRAIN_H[0]}</div>
      <div className="flex w-[1010px] h-[50px] pl-[13px] border-b border-[#616161] items-center text-black text-lg">
        <div className="font-bold">{MODEL_TRAIN_H[1]}</div>
        <div className="ml-[105px] ">{MODEL_TRAIN_H[2]}</div>
        <div className="ml-[125px]">{MODEL_TRAIN_H[3]}</div>
        <div className="ml-[300px]">{MODEL_TRAIN_H[4]}</div>
      </div>
      <div className="h-[620px] overflow-y-auto scrollbar-hide">
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
          buttonText={'데이터 추가'}
          type={'modelBtn'}
          className="bg-white border-2 border-[#486283] text-[#486283]"
          isDisabled={false}
          onClickHandler={() => console.log('hi')}
        />
        <Button
          buttonText={'추가학습'}
          type={'modelBtn'}
          isDisabled={false}
          onClickHandler={() => console.log('hi')}
        />
      </div>
    </div>
  )
}

export default ModelTrain
