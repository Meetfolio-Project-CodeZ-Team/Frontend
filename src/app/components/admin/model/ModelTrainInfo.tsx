import React from 'react'

interface ModelTrainInfoProps {
  createdAt: string
  job: string
  domain: string
  url: string
}

const ModelTrainInfo = ({
  createdAt,
  job,
  domain,
  url,
}: ModelTrainInfoProps) => {
  return (
    <div className="flex flex-col w-[1010px] h-auto">
      <div className="flex w-[1010px] h-[64px] pl-2 border-b border-[#BDBDBD] items-center text-black text-base">
        <div className="w-[110px] text-center">{createdAt.substring(0, 8)}</div>
        <div className="w-[260px] text-center">{job}</div>
        <div className="w-[110px] text-center">{domain}</div>
        <div className="ml-[150px]">
          <div className="w-[320px] text-center text-xs break-all">{url}</div>
        </div>
      </div>
    </div>
  )
}

export default ModelTrainInfo
