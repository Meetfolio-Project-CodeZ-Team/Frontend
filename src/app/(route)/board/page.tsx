'use client'
import BoardContainer from '@/app/components/board/containers/BoardContainer'
import BoardDetailContainer from '@/app/components/board/containers/BoardDetailContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { boardDataState } from '@/app/recoil/board'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

export default function JobBoardPage() {
  const [data, setData] = useState<ResponseEmploymentAll | null>(null)
  const [boardData, setBoardData] = useRecoilState(boardDataState)
  console.log(boardData, '메인에서 가져온 데이터')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/employment`,
      )
      const resData = await response.json()
      setBoardData(resData.result.boardListInfo)
      setData(resData.result)
    }
    fetchData()
  }, [])

  if (data) {
    return (
      <section className="flex flex-col min-h-screen relative">
        <Header nickname={data?.memberInfo.memberName} />
        <div className="flex w-[full] h-[980px]">
          <BoardContainer />
          <div className="flex-grow bg-white shadow-2xl">
            <BoardDetailContainer />
          </div>
        </div>
        <div className="mt-[200px]">
          <Footer />
        </div>
      </section>
    )
  }
}
