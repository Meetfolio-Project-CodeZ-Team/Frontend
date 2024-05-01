'use client'

import { BOARDTYPE } from '@/app/constants/board'
import { useState } from 'react'
import SearchBoard from './SearchBoard'
import Button from '../common/Button'
import { JOBKEYWORD } from '@/app/constants/auth'
import Keyword from '../signup/onboard/Keyword'

interface BoardHeaderProps {
  isJob: boolean
  setIsJob: React.Dispatch<React.SetStateAction<boolean>>
}

const BoardHeader = ({ isJob, setIsJob }: BoardHeaderProps) => {
  const [clickedKeyword, setClickedKeyword] = useState<onlyJobType>('백엔드')

  const handleClick = (keyword: onlyJobType) => {
    setClickedKeyword(keyword)
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
          <SearchBoard />
          <Button
            buttonText={'글 작성하기'}
            type={'addBoardBtn'}
            isDisabled={false}
            onClickHandler={() => console.log('hi')}
          />
        </div>
      </div>
      <div className="w-full h-[0px] border border-[#616161]" />
      <div
        className={`w-[120px] ${!isJob && `ml-[140px]`} h-[0px] border-2 border-black absolute top-[47px] z-50`}
      />
      <div className="flex flex-col items-center my-6">
        <div className="flex gap-x-[54px]">
          {JOBKEYWORD.map((str, index) => (
            <div key={index} onClick={() => handleClick(str)}>
              <Keyword keyword={str} clickKeyword={clickedKeyword} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BoardHeader
