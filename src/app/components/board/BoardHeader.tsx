'use client'

import { JOB_ENUM, JOBKEYWORD } from '@/app/constants/auth'
import { BOARDTYPE, GROUP_ENUM, GROUP_TYPE } from '@/app/constants/board'
import { boardDataState } from '@/app/recoil/board'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import Keyword from '../signup/onboard/Keyword'
import SearchBoard from './SearchBoard'

interface BoardHeaderProps {
  isJob: boolean
  setIsJob: React.Dispatch<React.SetStateAction<boolean>>
}

const BoardHeader = ({ isJob, setIsJob }: BoardHeaderProps) => {
  const [clickedKeyword, setClickedKeyword] = useState<onlyJobType | null>(null)
  const [clickedType, setClickedType] = useState<GroupBoardTypes | null>(null)
  const [boardData, setBoardData] = useRecoilState(boardDataState)

  useEffect(() => {
    if (clickedKeyword !== null) {
      const fetchData = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/employment?category=${JOB_ENUM[clickedKeyword]}`,
        )
        const resData = await response.json()
        setBoardData(resData.result.boardListInfo)
      }
      fetchData()
    }
  }, [clickedKeyword])

  useEffect(() => {
    if (clickedType !== null) {
      const fetchData = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/group?category=${GROUP_ENUM[clickedType]}`,
        )
        const resData = await response.json()
        setBoardData(resData.result.boardListInfo)
      }
      fetchData()
    }
  }, [clickedType])

  useEffect(() => {
    setClickedType(null)
    setClickedKeyword(null)
    const path = isJob ? 'employment' : 'group'
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/${path}`,
      )
      const resData = await response.json()
      console.log(resData, '헤더에 의해 가져온 값');
      
      setBoardData(resData.result)
    }
    fetchData()
  }, [isJob])

  const handleClick = (keyword: onlyJobType) => {
    setClickedKeyword(keyword)
  }

  const handleClickG = (keyword: GroupBoardTypes) => {
    setClickedType(keyword)
  }

  return (
    <div className="flex flex-col w-[full] relative">
      <div className="flex w-[773px] justify-between items-center h-auto">
        <div className="flex w-[auto] items-center gap-x-[60px] text-xl pl-5 mr-auto">
          <div
            className={`${isJob ? 'font-semibold' : ''} cursor-pointer`}
            onClick={() => setIsJob(true)}
          >
            {BOARDTYPE[0]}
          </div>
          <div
            className={`${!isJob ? 'font-semibold' : ''} cursor-pointer`}
            onClick={() => setIsJob(false)}
          >
            {BOARDTYPE[1]}
          </div>
        </div>
        <div className="flex gap-x-3 pb-2 items-center">
          <SearchBoard isJob={isJob} />
        </div>
      </div>
      <div className="w-[93%] h-[0px] border border-[#616161]" />
      <div
        className={`w-[120px] ${!isJob && `ml-[140px]`} h-[0px] border-2 border-black absolute top-[38.5px] z-50`}
      />
      <div className={`${isJob ? 'gap-x-[54px]' : 'gap-x-[33px]'} flex  my-6`}>
        {isJob
          ? JOBKEYWORD.map((str, index) => (
              <div key={index} onClick={() => handleClick(str)}>
                <Keyword keyword={str} clickKeyword={clickedKeyword || ''} />
              </div>
            ))
          : GROUP_TYPE.map((str, index) => (
              <div key={index} onClick={() => handleClickG(str)}>
                <Keyword keyword={str} clickKeyword={clickedType || ''} />
              </div>
            ))}
      </div>
    </div>
  )
}

export default BoardHeader
