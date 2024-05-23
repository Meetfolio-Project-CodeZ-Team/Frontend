'use client'

import { expData } from '@/app/recoil/experience'
import { useRecoilState } from 'recoil'

interface ExperienceCardDetail {
  experienceId: number
  title: string
  startDate: string
  endDate: string
  experienceType: string
  jobKeyword: onlyJobType
  stack: string
  task: string
  motivation: string
  detail: string
  advance: string
  closeModal: () => void
}

const ExpCardDetail = ({
  experienceId,
  title,
  startDate,
  endDate,
  experienceType,
  jobKeyword,
  stack,
  task,
  motivation,
  detail,
  advance,
  closeModal,
}: ExperienceCardDetail) => {
  const [experienceData, setExperienceData] = useRecoilState(expData)
  return (
    <div className="w-[385px] h-[820px] relative mt-[80px] ml-[40px] bg-[#DEE5ED] rounded-[20px]">
      <div className="w-[90px]  px-5 py-2 left-[275px] top-[760px] absolute bg-gray-900 rounded-[15px] justify-center items-center gap-2 inline-flex">
        <div
          className="w-[91px] h-6 text-center text-white text-lg font-semibold leading-[27px] cursor-pointer"
          onClick={closeModal}
        >
          닫기
        </div>
      </div>
      <div className="w-[340px] h-[718.33px] left-[25px] top-[31px] flex flex-col absolute overflow-y-auto scrollbar-hide">
        <div className="w-[340px] h-[38.21px] top-[100px] absolute justify-center items-center mt-[5px]">
          <div className="w-[373px]  relative">
            <div className="px-5 left-[140.62px] top-0 absolute bg-gray-900 rounded-[30px] justify-center items-center gap-[5px] inline-flex">
              <div className="text-center text-white text-sm font-bold leading-[23px]">
                {stack}
              </div>
            </div>
            <div className="w-[142.74px]  left-0 top-0 absolute justify-start items-start gap-3 inline-flex">
              <div className="text-center text-gray-900 text-[16px] font-bold leading-[27px]">
                직무 |{' '}
              </div>
              <div className=" px-5 bg-gray-900 top-[1px] rounded-[30px] justify-center items-center gap-[5px] flex">
                <div className="text-center text-white text-sm font-semibold leading-[23px]">
                  {jobKeyword}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[340px] h-11  top-[0px] absolute text-center text-gray-900 text-2xl font-semibold leading-[45px]">
          {title}
        </div>
        <div className="justify-start items-start gap-3 inline-flex mt-[70px]">
          <div className="text-center text-gray-900 text-[16px] font-bold">
            기간 |{' '}
          </div>
          <div className="  px-5 bg-gray-900 rounded-[30px] justify-center items-center  flex">
            <div className="text-center text-white text-sm font-semibold leading-[23px]">
              {startDate}~{endDate}
            </div>
          </div>
        </div>
        <div className="w-[340px] h-[538.95px] left-[0px] top-[179.38px] absolute">
          <div className="w-[340px] h-[260px] left-0 top-0 absolute">
            <div className="w-[104.38px] h-[29.73px] left-[3px] top-0 absolute text-gray-900 text-lg font-semibold leading-[27px]">
              업무 사항
            </div>
            <div className="w-[340px] h-[180px] left-[0px] top-[30px] absolute bg-slate-100 rounded-[10px]" />
            <div className="w-[319.35px] h-[150px] left-[10px] top-[42px] absolute text-black text-base font-medium leading-normal">
              {task}
            </div>
          </div>
          <div className="w-[340px] h-[260px] left-0 top-[230px] absolute">
            <div className="w-[104.38px] h-[29.73px] left-[3px] top-0 absolute text-gray-900 text-lg font-semibold leading-[27px]">
              경험 동기
            </div>
            <div className="w-[340px] h-[180px] left-[0px] top-[30px] absolute bg-slate-100 rounded-[10px]" />
            <div className="w-[319.35px] h-[150px] left-[10px] top-[42px] absolute text-black text-base font-medium leading-normal">
              {motivation}
            </div>
          </div>
          <div className="w-[340px] h-[260px] left-0 top-[460px] absolute">
            <div className=" h-[29.73px] left-[3px] top-0 absolute text-gray-900 text-lg font-semibold leading-[27px]">
              나의 활동 & 경험 내용
            </div>
            <div className="w-[340px] h-[180px] left-[0px] top-[30px] absolute bg-slate-100 rounded-[10px]" />
            <div className="w-[319.35px] h-[150px] left-[10px] top-[42px] absolute text-black text-base font-medium leading-normal">
              {detail}
            </div>
          </div>
          <div className="w-[340px] h-[240px] left-0 top-[690px] absolute">
            <div className="w-[104.38px] h-[29.73px] left-[3px] top-0 absolute text-gray-900 text-lg font-semibold leading-[27px]">
              결과 및 성과
            </div>
            <div className="w-[340px] h-[180px] left-[0px] top-[30px] absolute bg-slate-100 rounded-[10px]" />
            <div className="w-[319.35px] h-[150px] left-[10px] top-[42px] absolute text-black text-base font-medium leading-normal">
              {advance}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpCardDetail
