'use client'

import { JOB_ENUM } from '@/app/constants/auth'
import { useModal2 } from '@/app/hooks/useModal2'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { expData, modalNum } from '../../../recoil/experience'
import DeleteModal from '../../admin/common/DeleteModal'
import ExpDeleteModal from './ExpDeleteModal'

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

const MyExpDetailModal1 = ({
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
  const [pageNumber, setPageNumber] = useRecoilState(modalNum)
  const [isHovered, setIsHovered] = useState(false)
  const { isOpen, openmodal, closemodal, handlemodalClick } = useModal2(false)
  const router = useRouter()
  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation()
    
  }


  const onEditClick = () => {
    setExperienceData({
      title,
      startDate,
      endDate,
      experienceType,
      task,
      motivation,
      detail,
      advance,
      stack,
      jobKeyword,
      expStacks: stack.split(' / '),
    })

    router.push(`/edit-experience/${experienceId}`)
  }

  const deleteExp = async (experienceId: number) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/myExp/delete?experienceId=${experienceId}`,
        {
          method: 'DELETE',
        },
      )

      if (res.ok) {
        window.location.reload()
      } else {
        const errorData = await res.json()
        console.error('Error details:', errorData)
      }
    } catch (error) {
      console.error('Network or other error:', error)
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-40">
      <div className="absolute w-full h-full justify-center items-center " />
      <div
        className="w-[500px] h-[650px] relative bg-slate-200 rounded-[10px] shadow"
        onClick={handleModalClick}
      >
        <div className="w-[436.91px] h-[73px] left-[30px] top-[120px] absolute flex-col justify-start items-start gap-3 inline-flex">
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="text-center text-gray-900 text-[16px] font-bold">
              기간 |{' '}
            </div>
            <div className="  px-5 bg-gray-900 rounded-[30px] justify-center items-center  flex">
              <div className="text-center text-white text-sm font-semibold leading-[23px]">
                {startDate}~{endDate}
              </div>
            </div>
          </div>
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
                  {JOB_ENUM[jobKeyword]}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-[30px] top-[214px] absolute text-black text-lg font-semibold leading-[27px]">
          업무 사항{' '}
        </div>
        <div className="w-[439px] h-[140px] left-[30px] top-[248px] absolute bg-slate-100 rounded-[10px]" />
        <div className="w-[415px] h-[120px] left-[40px] top-[259px] absolute text-black text-base font-medium leading-normal overflow-y-auto whitespace-pre-wrap">
          {task}
        </div>
        <div className="w-[400px] h-11 left-[45px] top-[45px] absolute text-center text-gray-900 text-2xl font-semibold leading-[45px]">
          {title}
        </div>

        <>
          <div
            className="px-8  left-[130px] top-[595px] absolute border-[2px] border-blue-400 bg-blue-400 rounded-[15px] cursor-pointer"
            onClick={onEditClick}
          >
            <button className="text-center text-white text-[20px] font-semibold leading-[37.50px]">
              수정
            </button>
          </div>
          <div
            className="px-8  left-[265px] top-[595px] absolute border-[2px] border-gray-600 rounded-[15px] cursor-pointer"
            onClick={openmodal}
          >
            <button className="text-center text-slate-600 text-[20px] font-semibold leading-[37.50px]">
              삭제
            </button>
          </div>
          <div onClick={handlemodalClick}>
            {isOpen && (
              <ExpDeleteModal
                closeModal={closemodal}
                deleteUser={() => deleteExp(experienceId)}
                text="정말 삭제하시겠습니까?"
              />
            )}
          </div>
        </>

        <div className="left-[30px] top-[400px] absolute text-black text-lg font-semibold leading-[27px]">
          경험 동기
        </div>
        <div className="w-[439px] h-[140px] left-[30px] top-[434px] absolute bg-slate-100 rounded-[10px]" />
        <div className="w-[415px] h-[120px] left-[40px] top-[445px] absolute text-black text-base font-medium leading-normal overflow-y-auto whitespace-pre-wrap">
          {motivation}
        </div>
        <div className="w-[95px] h-4 left-[390px] top-[20px] absolute justify-start items-start gap-[4px] inline-flex">
          <div className="w-[80px] h-4 relative">
            <div className="w-[28px] h-[14px] left-[12px] top-0 absolute bg-[#0A7AFF] rounded-[50px]" />
            <div className="w-[14px] h-[14px] left-[48px] top-0 absolute bg-[#7AAAE8] rounded-full" />
            <div className="w-[14px] h-[14px] left-[70px] top-0 absolute bg-[#7AAAE8] rounded-full" />
          </div>
        </div>
        <div
          className="absolute top-[18px] left-[18px] w-4 h-4 rounded-full flex items-center justify-center cursor-pointer bg-[#FF5252]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className={`w-4 h-4 transition-opacity ${isHovered ? 'opacity-100 ' : 'opacity-0'}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default MyExpDetailModal1