import Link from 'next/link'

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
      <div className="flex w-[1010px] h-[54px] pl-2 border-b border-[#BDBDBD] items-center text-black text-base">
        <div className="w-[110px] text-center">{createdAt.substring(0, 8)}</div>
        <div className="w-[330px] text-center">{job}</div>
        <div className="w-[148px] text-center">{domain}</div>
        <div className="ml-[160px]">
          <Link href={url}>
            <div className="w-[180px] text-center text-sm break-all">
              {url.length > 20 ? `${url.slice(0, 25)}...` : url}
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ModelTrainInfo
