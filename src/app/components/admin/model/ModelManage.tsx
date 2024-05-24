import { MODEL_MANAGE_H } from '@/app/constants/admin'
import { versionState } from '@/app/recoil/admin'
import { leftAngle, rightAngle } from '@/app/ui/IconsPath'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRecoilState } from 'recoil'
import Icons from '../../common/Icons'
import ModelManageInfo from './ModelManageInfo'

const ModelManage = () => {
  const [page, setPage] = useState(1)
  const [pageData, setPageData] = useRecoilState(versionState)
  console.log(pageData, '가져온 페이지 데이터')

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(() => selected + 1)
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/model/version?page=${page - 1}`,
        { method: 'POST' },
      )
      const resData = await res.json()

      setPageData(resData.result)
    }
    fetchData()
  }, [page])

  return (
    <div className="flex flex-col w-[1010px] h-[720px] items-center">
      <ToastContainer />
      <div className="text-2xl font-bold mb-6">{MODEL_MANAGE_H[5]}</div>
      <div className="flex font-bold w-[1010px] h-[50px] pl-[16px] border-y border-[#616161] items-center text-black text-lg">
        <div className="">{MODEL_MANAGE_H[0]}</div>
        <div className="ml-[128px] ">{MODEL_MANAGE_H[1]}</div>
        <div className="ml-[120px]">{MODEL_MANAGE_H[2]}</div>
        <div className="ml-[146px]">{MODEL_MANAGE_H[3]}</div>
        <div className="ml-[150px]">{MODEL_MANAGE_H[4]}</div>
        <div className="ml-[28px]">{}</div>
      </div>
      {pageData.modelInfo.map((modelInfo, i) => (
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
        pageCount={pageData.totalPage}
        onPageChange={handlePageChange}
        activeClassName={'active text-[#486284]'}
      />
    </div>
  )
}

export default ModelManage
