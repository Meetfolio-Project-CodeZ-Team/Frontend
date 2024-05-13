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

const MyExpCardDetail = ({
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
  console.log(experienceId, 'id 수정 삭제에서 가져오기')

  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation()
  }

  const router = useRouter()
  const [experienceData, setExperienceData] = useRecoilState(expData)

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
      <div className="w-[550px] h-[700px] flex flex-col justify-center items-center absolute ">
        <div className="w-[550px] h-[650px] relative  bg-white rounded-[20px]" />
        <div
          className="w-[500px] h-[500px] left-[30px] top-[55px] overflow-y-auto scrollbar-hide absolute bg-slate-200 rounded-[20px] shadow"
          onClick={handleModalClick}
        >
          <div className="w-[350px] h-9 left-[35.77px] top-[121.55px] absolute">
            <div className="w-24 h-9 px-5 left-0 top-0 absolute bg-white rounded justify-center items-center gap-2 inline-flex">
              <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold leading-normal">
                {jobKeyword}
              </div>
            </div>
            <div className="w-[300px] h-9 px-5 left-[117px] top-0 absolute bg-white rounded justify-center items-center gap-2 inline-flex">
              <div className="w-[240px] h-6 text-center text-gray-900 text-base font-semibold leading-normal overflow-x-auto whitespace-nowrap scrollbar-hide">
                {stack}
              </div>
            </div>
          </div>
          <div className="w-[110px] h-[30px] px-5 left-[359px] top-[34px] absolute bg-blue-400 rounded-[30px] justify-center items-center gap-2 inline-flex">
            <div className="w-[90px] h-6 text-center text-gray-900 text-base font-semibold leading-normal overflow-x-auto whitespace-nowrap scrollbar-hide">
              {experienceType}
            </div>
          </div>
          <div className="w-[300px] h-10 left-[30px] top-[68px] absolute  text-gray-900 text-2xl font-semibold leading-[45px] overflow-x-auto whitespace-nowrap scrollbar-hide">
            {title}
          </div>
          <div className="w-[300px] h-6 left-[31px] top-[34px] absolute text-gray-900 text-lg font-bold font-['Plus Jakarta Sans']">
            {startDate}~{endDate}
          </div>
          <div
            className="w-[20px] h-6 right-[16px] top-[10px] absolute text-gray-900 text-lg font-bold font-['Plus Jakarta Sans'] cursor-pointer"
            onClick={closeModal}
          >
            X
          </div>
          <div className="w-[416px] h-[172px] left-[28.77px] top-[189.55px] absolute">
            <div className="w-[118px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
              업무 사항
            </div>
            <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
            <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
              {task}
            </div>
          </div>
          <div className="w-[416px] h-[172px] left-[28.77px] top-[384.55px] absolute">
            <div className="w-[118px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
              경험 동기
            </div>
            <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
            <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
              {motivation}
            </div>
          </div>
          <div className="w-[416px] h-[172px] left-[28.77px] top-[584.55px] absolute">
            <div className="w-[250px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
              나의 활동 & 경험 내용
            </div>
            <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
            <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
              {detail}
            </div>
          </div>

          <div className="w-[416px] h-[172px] left-[28.77px] top-[784.55px] absolute">
            <div className="w-[140px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
              결과 및 성과
            </div>
            <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
            <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
              {advance}
            </div>
          </div>
        </div>
        <div className="w-[150.05px] h-[61.46px] left-[100px] top-[585px] absolute bg-blue-400 justify-center items-center rounded-[10px]">
          <button
            className={`w-[60.02px] h-[25.43px] left-[44.95px] top-[8px] absolute text-white  border-0 py-2 px-0 focus:outline-none rounded-[10px] text-2xl font-semibold `}
            onClick={onEditClick}
          >
            수정
          </button>
        </div>
        <div className="w-[150.05px] h-[61.46px] left-[300px] top-[585px] absolute border-[2px] border-gray-600 bg-white justify-center items-center rounded-[10px]">
          <button
            className={`w-[60.02px] h-[25.43px] left-[44.95px] top-[8px] absolute text-slate-600  border-0 py-2 px-0 focus:outline-none rounded-[10px] text-2xl font-semibold `}
            onClick={() => deleteExp(experienceId)}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyExpCardDetail