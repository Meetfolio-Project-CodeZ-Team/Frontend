'use client'

import { useRecoilState } from 'recoil'
import { expNum, expData, modalNum } from '../../../recoil/experience'
import { useRouter } from 'next/navigation'
import PrevArrow from '@/app/ui/svg/arrow/PrevArrow'
import NextArrow from '@/app/ui/svg/arrow/NextArrow'
import { useState } from 'react'
import { useModal } from '@/app/hooks/useModal'
import DeleteModal from '../../admin/common/DeleteModal'
import { useModal2 } from '@/app/hooks/useModal2'
import DeleteModal2 from '../../admin/common/DeleteModal2'

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

const MyExpDetailModal2 = ({
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
}: ExperienceCardDetail & { isGuest?: boolean }) => {
  const [experienceNumber, setExperienceNumber] = useRecoilState(expNum)
  const [experienceData, setExperienceData] = useRecoilState(expData)
  const [pageNumber, setPageNumber] = useRecoilState(modalNum)
  const [isHovered, setIsHovered] = useState(false)
  const { isOpen, openmodal, closemodal, handlemodalClick } = useModal2(false)
  const router = useRouter()
  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation()
    setPageNumber(0)
  }

  const totalPages = 3

  const handleNextClick = () => {
    if (pageNumber < totalPages - 1) {
      setPageNumber(pageNumber + 1)
    } else {
      // 마지막 페이지에서 'Next' 클릭 시 첫 페이지로 이동
      setPageNumber(0)
    }
  }

  const handlePrevClick = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1)
    } else {
      // 첫 페이지에서 'Prev' 클릭 시 마지막 페이지로 이동
      setPageNumber(totalPages - 1)
    }
  }

  const displayKeyword = (keyword: any) => {
    switch (keyword) {
      case 'BACKEND':
        return '백엔드'
      case 'AI':
        return 'AI'
      case 'WEB':
        return '웹개발'
      case 'APP':
        return '앱개발'
      case 'DESIGN':
        return '디자인'
      default:
        return keyword
    }
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
    console.log('경험카드 삭제 요청이에요', experienceId)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/myExp/delete?experienceId=${experienceId}`,
        {
          method: 'DELETE',
        },
      )

      if (res.ok) {
        console.log('경험카드가 성공적으로 삭제되었습니다.')
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
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute w-full h-full justify-center items-center bg-black bg-opacity-50" />
      <div
        className="w-[500px] h-[650px] relative bg-slate-200 rounded-[10px]"
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
                  {displayKeyword(jobKeyword)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[640px] h-[52px] mt-[280px] ml-[-75px] justify-start items-start gap-[580px] inline-flex absolute">
          <div
            className="w-[26px] h-[52px] relative cursor-pointer "
            onClick={(event) => {
              event.stopPropagation() // 다른 이벤트와 충돌을 방지하기 위해 이벤트 전파를 멈추는 코드를 추가
              handlePrevClick()
            }}
          >
            <PrevArrow />
          </div>
          <div
            className="w-[26px] h-[52px] relative cursor-pointer"
            onClick={(event) => {
              event.stopPropagation() // 다른 이벤트와 충돌을 방지하기 위해 이벤트 전파를 멈추는 코드를 추가
              handleNextClick()
            }}
          >
            <NextArrow />
          </div>
        </div>
        <div className="w-[400px] h-11 left-[45px] top-[45px] absolute text-center text-gray-900 text-2xl font-semibold leading-[45px]">
          {title}
        </div>
        <div className="left-[30px] top-[230px] absolute text-black text-lg font-semibold leading-[27px]">
          나의 활동 & 경험 내용{' '}
        </div>
        <div className="w-[439px] h-[260px] left-[30px] top-[265px] absolute bg-slate-100 rounded-[10px]" />
        <div className="w-[415px] h-[240px] left-[40px] top-[275px] absolute text-black text-base font-medium leading-normal">
          {detail}
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
              <DeleteModal
                closeModal={closemodal}
                deleteUser={() => deleteExp(experienceId)}
                text="정말 삭제하시겠습니까?"
              />
            )}
          </div>
        </>

        <div className="w-[95px] h-4 left-[390px] top-[20px] absolute justify-start items-start gap-[4px] inline-flex">
          <div className="w-[80px] h-4 relative">
            <div className="w-[14px] h-[14px] left-[16px] top-0 absolute bg-[#7AAAE8] rounded-full" />
            <div className="w-[28px] h-[14px] left-[36px] top-0 absolute bg-[#0A7AFF] rounded-[50px]" />
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

export default MyExpDetailModal2

const transKeyword = (keyword: string) => {
  switch (keyword) {
    case '백엔드':
      return 'BACKEND'
    case 'AI':
      return 'AI'
    case '웹개발':
      return 'WEB'
    case '앱개발':
      return 'APP'
    case '디자인':
      return 'DESIGN'
  }
}
