'use client'
import { MODEL_NAV, MODEL_PATH } from '@/app/constants/admin'
import { modelNum } from '@/app/recoil/admin'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import ModelManage from '../model/ModelManage'
import ModelTrain from '../model/ModelTrain'
import ModelUsage from '../model/ModelUsage'
import { headers } from 'next/headers'

const ModelContainer = () => {
  const [titleNum, setTitleNum] = useRecoilState(modelNum)
  const [trainData, setTrainData] = useState<ResponseTrainData | null>(null)
  const [modelData, setModelData] = useState<ResponseModelData | null>(null)
  const [versionData, setVersionData] = useState<ResponseModelList | null>(null)
  console.log(versionData, '가져온 버전 데이터')

  const marginBorder =
    titleNum === 1 ? 'ml-[160px]' : titleNum === 2 ? 'ml-[300px]' : ''

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: 'GET',
        headers: {},
      }

      if (titleNum === 2) {
        requestOptions.method = 'POST'
        requestOptions.headers = {
          'Content-Type': 'application/json',
        }
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/model/${MODEL_PATH[titleNum]}`,
        requestOptions,
      )
      const resData = await response.json()
      if (titleNum === 0) setModelData(resData.result)
      else if (titleNum === 1) setTrainData(resData.result)
      else setVersionData(resData.result)
    }
    fetchData()
  }, [titleNum])

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
        <div
          className={`w-[128px] ${marginBorder} h-0 border-2 border-black absolute top-[35px]`}
        ></div>
      </div>
      <div className="w-[1021px] h-0 border border-[#616161] mb-7"></div>
      <div className="flex w-[1013px]">
        {titleNum === 0 && modelData && <ModelUsage modelData={modelData} />}
        {titleNum === 1 && trainData && (
          <ModelTrain trainData={trainData.datasetInfo} goNext={setTitleNum} />
        )}
        {titleNum === 2 && versionData && (
          <ModelManage modelData={versionData.modelInfo} />
        )}
      </div>
    </div>
  )
}

export default ModelContainer
