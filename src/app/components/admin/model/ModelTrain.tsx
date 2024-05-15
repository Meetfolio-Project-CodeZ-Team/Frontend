'use client'
import { MODEL_TRAIN_H } from '@/app/constants/admin'
import { useModal } from '@/app/hooks/useModal'
import { modelNum } from '@/app/recoil/admin'
import { leftAngle, rightAngle } from '@/app/ui/IconsPath'
import { addTrainData } from '@/app/utils/toast'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SetterOrUpdater, useRecoilState } from 'recoil'
import Button from '../../common/Button'
import Icons from '../../common/Icons'
import AddTrainData from './AddTrainData'
import AddTrainModal from './AddTrainModal'
import ModelTrainInfo from './ModelTrainInfo'
interface ModelTrainProps {
  trainData: ResponseTrainData
  goNext: SetterOrUpdater<number>
}
const ModelTrain = ({ trainData, goNext }: ModelTrainProps) => {
  const [isAdd, setIsAdd] = useState(false)
  const [titleNum, setTitleNum] = useRecoilState(modelNum)
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  const [page, setPage] = useState<number>(1)
  const [pageData, setPageData] = useState<datasetInfoTypes[]>([])

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(() => selected + 1)
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/model/train/data?page=${page}`,
      )
      const resData = await res.json()

      setPageData(resData.result.datasetInfo.datasetInfo)
    }
    fetchData()
  }, [page])

  const succeedAdd = () => {
    addTrainData()
    setIsAdd(false)
    setTitleNum(1)
  }
  console.log('현재 페이지, trainData', trainData)

  return isAdd ? (
    <AddTrainData addComplete={succeedAdd} />
  ) : (
    <div className="flex flex-col w-[1010px] h-[720px] items-center">
      <ToastContainer />
      <div className="flex w-full relative justify-center">
        <div className="text-2xl font-bold mb-6">{MODEL_TRAIN_H[0]}</div>
        <div className=" absolute right-3 bottom-2 text-base font-bold ml-10">
          {MODEL_TRAIN_H[5] + ' : ' + trainData.trainableNumber}
        </div>
      </div>
      <div className="flex w-[1010px] h-[50px] pl-[13px] border-y border-[#616161] items-center text-black text-lg">
        <div className="font-bold">{MODEL_TRAIN_H[1]}</div>
        <div className="ml-[140px] ">{MODEL_TRAIN_H[2]}</div>
        <div className="ml-[180px]">{MODEL_TRAIN_H[3]}</div>
        <div className="ml-[260px]">{MODEL_TRAIN_H[4]}</div>
      </div>
      <div className="h-[480px] overflow-y-auto scrollbar-hide">
        {pageData.map((data, i) => (
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
      {isOpen && (
        <AddTrainModal
          closeModal={closeModal}
          modalData={trainData.modelResult}
          trainableNumber={trainData.trainableNumber}
        />
      )}
      <ReactPaginate
        className="flex items-center justify-center h-[40px] w-full gap-[20px] text-[18px] pl-6 text-[#868686] font-bold"
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
        pageCount={trainData.datasetInfo.totalPage}
        onPageChange={handlePageChange}
        activeClassName={'active text-[#486284]'}
      />
      <div className=" w-[1010px] flex flex-row-reverse gap-x-5">
        <Button
          buttonText={'추가학습'}
          type={'modelBtn'}
          className="bg-white border-2 border-[#486283] text-[#486283]"
          isDisabled={false}
          onClickHandler={openModal}
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
