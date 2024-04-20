import { MODEL_NAV } from '@/app/constants/admin'
import { useState } from 'react'
import ModelUsage from '../model/ModelUsage'
import ModelManage from '../model/ModelManage'
import ModelTrain from '../model/ModelTrain'

const ModelContainer = () => {
  const [titleNum, setTitleNum] = useState(0)

  return (
    <div className="flex flex-col bg-white w-[full] pl-[54px] pt-[27px] pb-[44px]">
      <div className="text-[32px] font-bold  mb-9">AI 관리</div>
      <div className="flex w-[1021px] justify-between relative">
        <div className=" flex w-[auto] gap-x-[60px] text-xl font-bold pl-4 pb-2">
          {MODEL_NAV.map((title, index) => (
            <div
              className=" cursor-pointer"
              onClick={() => setTitleNum(index)}
              key={index}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`w-[150px] ml-${titleNum * 145} h-0 border-2 border-black`}
      ></div>
      <div className="w-[1021px] h-0 border border-[#616161] mb-7"></div>
      <div className="flex w-[1013px]">
        {titleNum === 0 && (
          <ModelUsage
            feedbackCount={110}
            analysisCount={320}
            totalCount={430}
          />
        )}
        {titleNum === 1 && <ModelTrain />}
        {titleNum === 2 && <ModelManage />}
      </div>
    </div>
  )
}

export default ModelContainer
