'use client'

import { useRecoilState, useRecoilValue } from 'recoil'
import { expData } from '../../recoil/experience'
import { useRouter } from 'next/navigation'

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
  return (
    <div className="w-[360px] h-[830px] relative bg-slate-200 rounded-[20px]">
      <div className="w-[120px] h-[50px] px-5 left-[288px] top-[760px] absolute bg-blue-400 rounded-[15px] justify-center items-center gap-2 inline-flex">
        <div
          className="w-[91px] h-6 text-center text-gray-900 text-lg font-semibold leading-[27px]"
          onClick={closeModal}
        >
          돌아가기
        </div>
      </div>
      <div className="w-[380px] h-[700px] left-[27.89px] top-[31px] flex flex-col absolute overflow-y-auto scrollbar-hide">
        <div className="w-24 h-[30px] px-5 left-[280px] top-0 absolute bg-blue-400 rounded-[30px] justify-center items-center gap-2 inline-flex">
          <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold leading-normal">
            {experienceType}
          </div>
        </div>
        <div className="w-[340.53px] h-[38.21px] left-[18.11px] top-[100px] absolute">
          <div className="w-[93.40px] h-[38.21px] px-5 left-0 top-0 absolute bg-white rounded justify-center items-center gap-2 inline-flex">
            <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold leading-normal">
              {jobKeyword}
            </div>
          </div>
          <div className="w-[240px] h-[38.21px] px-5 left-[110px] top-0 absolute bg-white rounded justify-center items-center gap-2 inline-flex">
            <div className="w-[238px] h-6 text-center text-gray-900 text-base font-semibold leading-normal">
              {stack}
            </div>
          </div>
        </div>
        <div className="w-[114.81px] h-[25.47px] left-0 top-[49.89px] absolute text-center text-gray-900 text-3xl font-semibold leading-[45px]">
          {title}
        </div>
        <div className="w-[181.94px] h-[25.47px] left-[1.95px] top-0 absolute text-gray-900 text-xl font-bold">
          {startDate}-{endDate}
        </div>
        <div className="w-[364px] h-[538.95px] left-[0.11px] top-[179.38px] absolute">
          <div className="w-[364px] h-[260px] left-0 top-0 absolute">
            <div className="w-[104.38px] h-[29.73px] left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
              업무 사항
            </div>
            <div className="w-[362px] h-[212.93px] left-[2px] top-[47.07px] absolute bg-white rounded-[15px]" />
            <div className="w-[319.35px] h-[113.96px] left-[22.54px] top-[60.70px] absolute text-black text-base font-medium leading-normal">
              {task}
            </div>
          </div>
          <div className="w-[362px] h-[255.33px] left-0 top-[283.62px] absolute">
            <div className="w-[104.38px] h-[26px] left-[2.81px] top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
              경험 동기
            </div>
            <div className="w-[362px] h-[212px] left-0 top-[43.33px] absolute bg-white rounded-[15px]" />
            <div className="w-[319.35px] h-[99.67px] left-[20.35px] top-[50.92px] absolute text-black text-base font-medium leading-normal">
              {motivation}
            </div>
          </div>
          <div className="w-[362px] h-[255.33px] left-0 top-[565px] absolute">
            <div className="w-[220px] h-[26px] left-[2.81px] top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
              나의 활동 & 경험 내용
            </div>
            <div className="w-[362px] h-[212px] left-0 top-[43.33px] absolute bg-white rounded-[15px]" />
            <div className="w-[319.35px] h-[99.67px] left-[20.35px] top-[50.92px] absolute text-black text-base font-medium leading-normal">
              {detail}
            </div>
          </div>
          <div className="w-[362px] h-[255.33px] left-0 top-[843.62px] absolute">
            <div className="w-[120px] h-[26px] left-[2.81px] top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
              결과 및 성과
            </div>
            <div className="w-[362px] h-[212px] left-0 top-[43.33px] absolute bg-white rounded-[15px]" />
            <div className="w-[319.35px] h-[99.67px] left-[20.35px] top-[50.92px] absolute text-black text-base font-medium leading-normal">
              {advance}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpCardDetail
