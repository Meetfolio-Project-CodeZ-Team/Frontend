'use client'
import BoardContainer from '@/app/components/board/containers/BoardContainer'
import BoardDetailContainer from '@/app/components/board/containers/BoardDetailContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { boardDataState, selectedPostId } from '@/app/recoil/board'
import { useEffect, useState } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

export default function JobBoardPage() {
  const [data, setData] = useState<ResponseEmploymentAll | null>(null)
  const [boardData, setBoardData] = useRecoilState(boardDataState)
  const resetId = useResetRecoilState(selectedPostId)

  useEffect(() => {
    resetId()
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/employment?page=0`,
      )
      const resData = await response.json()

      setBoardData(resData.result)
      setData(resData.result)
    }
    fetchData()
  }, [])

  if (data) {
    return (
      <section className="flex flex-col min-h-screen relative">
        <Header nickname={data?.memberInfo.memberName} />
        <div className="flex w-[full] h-[980px]">
          <BoardContainer nickname={data?.memberInfo.memberName} />
          <div className="flex-grow bg-white shadow-2xl">
            <BoardDetailContainer nickname={data?.memberInfo.memberName} />
          </div>
        </div>
        <div className="mt-[200px]">
          <Footer />
        </div>
      </section>
    )
  }
}
