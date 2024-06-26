'use client'

import { portNum } from '@/app/recoil/mypage'
import NextArrow from '@/app/ui/svg/arrow/NextArrow'
import PrevArrow from '@/app/ui/svg/arrow/PrevArrow'
import { transKeyword } from '@/app/utils/transKeyword'
import { useRouter } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { expData, modalNum } from '../../recoil/experience'

const ExpFinishModal3 = () => {
  const [experienceData, setExperienceData] = useRecoilState(expData)
  const [pageNumber, setPageNumber] = useRecoilState(modalNum)
  const [portfolioNumber, setPortfolioNumber] = useRecoilState(portNum)
  const router = useRouter()

  const handleButtonClick = () => {
    setExperienceData({
      title: '',
      startDate: '',
      endDate: '',
      experienceType: '',
      task: '',
      motivation: '',
      jobKeyword: '',
      stack: '',
      detail: '',
      advance: '',
      expStacks: [],
    })
    setPortfolioNumber(1)
    router.push('/mypage')
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ">
      <div className="absolute w-full h-full justify-center items-center " />
      <div className="w-[500px] h-[650px] relative bg-slate-200 rounded-[10px]">
        <div className="w-[436.91px] h-[73px] left-[30px] top-[120px] absolute flex-col justify-start items-start gap-3 inline-flex">
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="text-center text-gray-900 text-[16px] font-bold">
              기간 |{' '}
            </div>
            <div className="  px-5 bg-gray-900 rounded-[30px] justify-center items-center  flex">
              <div className="text-center text-white text-sm font-semibold leading-[23px]">
                {experienceData.startDate}~{experienceData.endDate}
              </div>
            </div>
          </div>
          <div className="w-[373px] flex flex-inline gap-3 relative">
            <div className="flex items-center gap-3">
              <div className="text-center text-gray-900 text-[16px] font-bold leading-[27px]">
                직무 |{' '}
              </div>
              <div className="px-5 bg-gray-900 rounded-[30px] justify-center items-center gap-[5px] flex">
                <div className="text-center text-white text-sm font-semibold leading-[23px]">
                  {transKeyword(experienceData.jobKeyword)}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-5 bg-gray-900 rounded-[30px] justify-center items-center gap-[5px] flex">
                <div className="text-center text-white text-sm font-bold leading-[23px]">
                  {experienceData.expStacks.join(' / ')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-11 left-[45px] top-[45px] absolute text-center text-gray-900 text-2xl font-semibold leading-[45px]">
          {experienceData.title}
        </div>
        <div className="left-[30px] top-[230px] absolute text-black text-lg font-semibold leading-[27px]">
          결과 및 성과
        </div>
        <div className="w-[439px] h-[260px] left-[30px] top-[265px] absolute bg-slate-100 rounded-[10px]" />
        <div className="w-[415px] h-[240px] left-[40px] top-[275px] absolute text-black text-base font-medium leading-normal overflow-y-auto whitespace-pre-wrap">
          {experienceData.advance}
        </div>
        <div
          className="px-10  left-[195px] top-[595px] absolute bg-black rounded-[30px] cursor-pointer"
          onClick={handleButtonClick}
        >
          <div className=" text-center text-white text-[20px] font-semibold leading-[37.50px]">
            확인
          </div>
        </div>

        <div className="w-[95px] h-4 left-[390px] top-[20px] absolute justify-start items-start gap-[4px] inline-flex">
          <div className="w-[80px] h-4 relative">
            <div className="w-[14px] h-[14px] left-[20px] top-0 absolute bg-[#7AAAE8] rounded-full" />
            <div className="w-[14px] h-[14px] left-[40px] top-0 absolute bg-[#7AAAE8] rounded-full" />
            <div className="w-[28px] h-[14px] left-[62px] top-0 absolute bg-[#0A7AFF] rounded-[50px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpFinishModal3
