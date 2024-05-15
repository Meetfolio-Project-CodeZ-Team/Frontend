import { MODEL_MANAGE_H } from '@/app/constants/admin'
import { leftAngle, rightAngle } from '@/app/ui/IconsPath'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Icons from '../../common/Icons'
import ModelManageInfo from './ModelManageInfo'

interface ModelManageProps {
  modelData: ResponseModelList
}

const ModelManage = ({ modelData }: ModelManageProps) => {
  const [page, setPage] = useState<number>(1)
  const [pageData, setPageData] = useState<ModelData[]>([])
  console.log(pageData, '가져온 페이지 데이터')

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(() => selected + 1)
    window.scrollTo(0, 320)
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/model/version?page=${page - 1}`,
        { method: 'POST' },
      )
      const resData = await res.json()

      setPageData(resData.result.modelInfo)
    }
    fetchData()
  }, [page])

  return (
    <div className="flex flex-col w-[1010px] h-[720px] items-center">
      <div className="text-2xl font-bold mb-6">{MODEL_MANAGE_H[5]}</div>
      <div className="flex w-[1010px] h-[50px] pl-[16px] border-y border-[#616161] items-center text-black text-lg">
        <div className="font-bold">{MODEL_MANAGE_H[0]}</div>
        <div className="ml-[128px] ">{MODEL_MANAGE_H[1]}</div>
        <div className="ml-[120px]">{MODEL_MANAGE_H[2]}</div>
        <div className="ml-[118px]">{MODEL_MANAGE_H[3]}</div>
        <div className="ml-[118px]">{MODEL_MANAGE_H[4]}</div>
        <div className="ml-[88px]">{MODEL_MANAGE_H[8]}</div>
      </div>
      {modelData.modelInfo.map((modelInfo, i) => (
        <ModelManageInfo
          key={modelInfo.modelId}
          modelId={modelInfo.modelId}
          version={modelInfo.version}
          modelName={modelInfo.modelName}
          status={modelInfo.status}
          learnedDate={modelInfo.learnedDate}
          accuracy={modelInfo.accuracy}
        />
      ))}
      <ReactPaginate
        className="flex items-center justify-center mt-8 h-[40px] w-full gap-[20px] text-[17px]  text-[#868686] font-semibold"
        previousLabel={
          <div className="pt-0.5">
            <Icons name={leftAngle} />
          </div>
        }
        nextLabel={
          <div className="pt-0.5">
            <Icons name={rightAngle} />
          </div>
        }
        pageCount={modelData.totalPage}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        pageLinkClassName={'pagination__link'}
        activeLinkClassName={'pagination__link__active'}
      />
    </div>
  )
}

export default ModelManage
