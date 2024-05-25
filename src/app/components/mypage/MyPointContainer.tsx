'use client'

import { useModal } from '@/app/hooks/useModal'
import { pointNum } from '@/app/recoil/mypage'
import { leftAngle, pointW, rightAngle } from '@/app/ui/IconsPath'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useRecoilState } from 'recoil'
import Icons from '../common/Icons'
import ChargePoint from '../points/ChargePoint'
import PointCard from './PointCard'
import { tidState } from '@/app/recoil/coverletter'

interface UserInfoProps {
  email: string
  grade: string
  major: string
  jobKeyword: onlyJobType
  memberId?: number
  point: number
  status: string
  registrationDate: string
}
interface UserPoint {
  myPoint: number
  isFirst: boolean
  isLast: boolean
  totalPage: number
  listSize: number
  totalElements: number
}
interface PointCardProps {
  createdAt: string
  type: string
  point: number
  totalPoint: number
}

const MyPointContainer = () => {
  const [userInfos, setUserInfos] = useState<UserPoint>()
  const [pointCards, setPointCards] = useState<PointCardProps[]>([])
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  const [pointNumber, setPointNumber] = useRecoilState(pointNum)
  const [page, setPage] = useState<number>(1)

  const goToPointPage = () => {
    setPointNumber(0)
    window.scrollTo(0, 0)
  }

  const goToChargePage = () => {
    setPointNumber(1)
    window.scrollTo(0, 0)
  }

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(() => selected + 1)
  }

  useEffect(() => {
    const fetchUserInfos = async () => {
      try {
        const response = await fetch(`/api/mypage/mypoint?page=${page - 1}`)
        if (!response.ok) {
          throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
        }
        const data = await response.json()
        setPointCards(data.result.pointInfo.pointList)
        setUserInfos(data.result.pointInfo)
      } catch (error) {}
    }
    fetchUserInfos()
  }, [page])

  return (
    <div className="w-full h-[1090px] relative">
      <div className="w-full h-full left-0 top-0 absolute bg-gray-50" />
      <div className="w-[1070px] h-32 left-[70px] top-[130px] absolute">
        <div className="w-[1070px] h-32 left-0 top-0 absolute bg-slate-600 rounded-[5px]" />
        <div className="w-[300px] h-[75px] left-[42px] top-[26px] absolute">
          <div className="w-[280px] left-0 top-0 absolute text-white text-xl font-medium leading-[30px]">
            내 포인트
          </div>
          <div className="w-[93.53px] left-[0.32px] top-[30px] absolute text-white text-3xl font-bold leading-[45px]">
            {userInfos?.myPoint}P
          </div>
        </div>
      </div>

      <div className="w-[1070px] h-[510px] left-[76px] top-[342px] absolute flex-col justify-start items-start gap-3 inline-flex">
        <div className="w-[1070px] h-[0px] relative">
          <div className="w-[1065px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
          <div className="w-[100px] h-[0px] left-0 top-[-0.5px] absolute border-2 border-gray-800" />
        </div>
        <div className="h-[39px] relative">
          <div className="w-full h-[27px]  top-0 absolute gap-[218px] items-center inline-flex">
            <div className="text-black text-lg font-semibold leading-[27px] absolute left-[6px] w-[170px] text-center">
              사용 일시
            </div>
            <div className="text-black text-lg font-normal leading-[27px] absolute left-[300px] w-[150px] text-center">
              사용 포인트
            </div>
            <div className="text-black text-lg font-normal leading-[27px]  text-center absolute left-[618px] w-[100px]">
              사용 유형
            </div>
            <div className="text-black text-lg font-normal leading-[27px] text-center absolute left-[914px] w-[100px]">
              보유 포인트
            </div>
          </div>
          <div className="w-[1065px] h-[0px] left-0 top-[39px] absolute border border-zinc-600"></div>
        </div>
      </div>
      <div className="w-[1065px] h-[600px] left-[76px] mt-[394px] flex flex-col absolute ">
        <div className="w-full h-full ml-[0px] gap-[0px] flex flex-col">
          {pointCards.map((a, index) => (
            <PointCard key={index} {...a} />
          ))}
        </div>
      </div>
      <div
        className="w-[91px] h-[5px] left-[87px] top-[295px] absolute text-black text-xl font-bold leading-[30px] cursor-pointer"
        onClick={goToPointPage}
      >
        <div> 사용 내역</div>
      </div>
      <div
        className="left-[201px] top-[295px] absolute text-black text-xl font-bold leading-[30px] cursor-pointer"
        onClick={goToChargePage}
      >
        <div>충전 내역</div>
      </div>
      <div
        className="w-52 h-[54.45px] left-[900px] top-[160px] absolute items-center justify-center"
        onClick={handleModalClick}
      >
        <div
          className="w-[200px] left-0 top-[10.93px] absolute h-[50px] items-center justify-center text-white border-2 border-white text-xl font-semibold leading-[30px] rounded-[30px] inline-flex cursor-pointer"
          onClick={openModal}
        >
          <Icons className="mt-2" name={pointW} />
          충전하기
        </div>
        {isOpen && (
          <ChargePoint closeCharge={closeModal} cost={0} coverLetterId={0} />
        )}
      </div>
      <div className="w-[105.75px] h-[18px] left-[75px] top-[82.68px] absolute text-gray-900 text-[28px] font-bold font-['Rubik'] leading-[30px]">
        포인트
      </div>
      <div className="flex w-full items-center justify-center pl-20 pt-6 pr-12 absolute top-[950px] right-6">
        <ReactPaginate
          className="flex items-center justify-center h-[40px] gap-[20px] text-[17px]  text-[#868686] font-semibold cursor-pointer"
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
          pageCount={Number(userInfos?.totalPage)}
          onPageChange={handlePageChange}
          activeClassName={'active text-[#486284]'}
        />
      </div>
    </div>
  )
}

export default MyPointContainer
