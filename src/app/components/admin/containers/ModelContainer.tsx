'use client'
import { MODEL_NAV } from '@/app/constants/admin'
import { modelNum } from '@/app/recoil/admin'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import ModelUsage from '../model/ModelUsage'

const ModelContainer = () => {
  const [titleNum, setTitleNum] = useRecoilState(modelNum)
  const [modelData, setModelData] = useState<ResponseModelData | null>(null)
  const marginBorder =
    titleNum === 1 ? 'ml-[154px]' : titleNum === 2 ? 'ml-[290px]' : ''

  const ModelTrain = dynamic(() => import('../model/ModelTrain'))
  const ModelManage = dynamic(() => import('../model/ModelManage'))

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/model/service`,
      )
      const resData = await response.json()
      setModelData(resData.result)
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-col bg-white w-[full] pl-[54px] pt-[27px] pb-[44px]">
      <div className="text-[28px] font-bold mb-7">AI 관리</div>
      <div className="flex w-[1021px] justify-between relative">
        <div className=" flex w-[auto] gap-x-[60px] text-xl font-semibold pl-4 pb-2">
          {MODEL_NAV.map((title, index) => (
            <div
              className={`cursor-pointer ${index === titleNum && 'font-extrabold'}`}
              onClick={() => setTitleNum(index)}
              key={index}
            >
              {title}
            </div>
          ))}
        </div>
        <div
          className={`w-[144px] ${marginBorder} h-0 border-2 border-black absolute top-[35px]`}
        ></div>
      </div>
      <div className="w-[1021px] h-0 border border-[#616161] mb-7"></div>
      <div className="flex w-[1013px]">
        {titleNum === 0 && modelData && <ModelUsage modelData={modelData} />}
        {titleNum === 1 && <ModelTrain />}
        {titleNum === 2 && <ModelManage />}
      </div>
    </div>
  )
}

export default ModelContainer
