'use client'

import { portNum } from '@/app/recoil/mypage'
import { leftAngle, rightAngle } from '@/app/ui/IconsPath'
import ExpIcon from '@/app/ui/svg/common/ExpIcon'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useRecoilState } from 'recoil'
import Icons from '../common/Icons'
import MyExpCard from './MyExpCard'

interface ExperienceCard {
  experienceId: number
  title: string
  startDate: string
  endDate: string
  experienceType: string
  jobKeyword: onlyJobType
  stack: string
}

interface pageInfo {
  isFirst: boolean
  isLast: boolean
  totalPage: number
  listSize: number
  totalElements: number
}

const MyExpList = () => {
  const [expCards, setExpCards] = useState<ExperienceCard[]>([])
  const [portfolioNumber, setPortfolioNumber] = useRecoilState(portNum)
  const [page, setPage] = useState<number>(1)
  const [pageinfo, setPageInfo] = useState<pageInfo>({
    isFirst: true,
    isLast: false,
    totalPage: 0,
    listSize: 0,
    totalElements: 0,
  })

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(() => selected + 1)
  }

  const goToPreviousPage = () => {
    setPortfolioNumber(0)
    window.scrollTo(0, 0)
  }

  const goToNextPage = () => {
    setPortfolioNumber(1)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const fetchExpCards = async () => {
      try {
        const response = await fetch(`/api/mypage/myExp?page=${page - 1}`)
        if (!response.ok) {
          throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
        }
        const data = await response.json()
        setExpCards(data.result.experienceCardInfo.experienceCardItems)
        setPageInfo(data.result.experienceCardInfo)
      } catch (error) {
        
      }
    }

    fetchExpCards()
  }, [page])

  return (
    <div className="w-full h-[1150px] relative">
      <div className="w-full h-full left-0 top-0 absolute bg-gray-50 " />
      <div className="w-full h-[0px] left-[65px] top-[170px] absolute">
        <div className="w-[1080px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
        <div className="w-[130px] h-[0px] left-[165px] top-[-0.5px] absolute border-2 border-gray-800" />
      </div>
      <div className="w-[1060px] h-[30px] left-[82px] top-[129px] absolute flex justify-between items-center">
        <div className="flex gap-[60px]">
          <div
            className="text-gray-900 text-xl font-bold leading-[30px] cursor-pointer"
            onClick={goToPreviousPage}
          >
            <div>내 자기소개서</div>
          </div>
          <div
            className="text-gray-900 text-xl font-bold leading-[30px] cursor-pointer"
            onClick={goToNextPage}
          >
            <div>내 경험카드</div>
          </div>
        </div>
        {expCards.length > 0 && (
          <div className="flex items-center justify-start gap-2 bg-blue-100 p-2 rounded-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>

            <span className="text-black text-sm font-semibold">
              <Link href="/experience">경험카드 만들러 가기</Link>
            </span>
          </div>
        )}
      </div>
      <div className="w-[1150px] h-[850px] flex flex-col mt-[200px] absolute overflow-y-auto scrollbar-hide">
        <div className="w-[1080px] h-full left-[72px]  absolute flex flex-row flex-wrap gap-[55px] overflow-y-auto scrollbar-hide">
          {expCards.length > 0 ? (
            expCards.map((a) => <MyExpCard key={a.experienceId} {...a} />)
          ) : (
            <div className="w-[1060px] h-[500px] flex items-center justify-center mt-[80px] ">
              <div className="text-center ">
                <p className="text-xl font-semibold">
                  아직 작성한 경험카드가 없네요.
                  <br />내 경험을 분해해서 경험카드를 만들어봐요!
                </p>
                <div className="flex justify-center mt-[35px]">
                  <ExpIcon />
                </div>
                <button className="mt-[35px] px-8 py-2 bg-black text-white rounded-[30px] font-semibold">
                  <Link href="/experience">경험카드 생성하기</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-[200px] h-[18px] left-[68px] top-[65px] absolute text-gray-900 text-[28px] font-bold font-['Rubik'] leading-[30px]">
        포트폴리오
      </div>
      <div className="flex w-full items-center justify-center pl-20 pt-6 pr-12 absolute top-[1060px] right-6">
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
          pageCount={pageinfo.totalPage}
          onPageChange={handlePageChange}
          activeClassName={'active text-[#486284]'}
        />
      </div>
    </div>
  )
}

export default MyExpList
