'use client'

import { JOBKEYWORD } from '@/app/constants/auth'
import { useState } from 'react'
import Keyword from '../../signup/onboard/Keyword'
import Input from '../../common/Input'
import Button from '../../common/Button'

const PostContainer = () => {
  const [clickedKeyword, setClickedKeyword] = useState<onlyJobType | null>(null)

  const handleClick = (keyword: onlyJobType) => {
    setClickedKeyword(keyword)
  }
  return (
    <div className="flex flex-col w-full bg-white h-[786px] rounded-3xl px-[58px] py-9">
      <div className="text-xl font-bold">{'직무 카테고리  '}</div>
      <div className="flex gap-x-[33px] mt-[18px] mb-7">
        {JOBKEYWORD.map((str, index) => (
          <div key={index} onClick={() => handleClick(str)}>
            <Keyword
              keyword={str}
              clickKeyword={clickedKeyword || ''}
              bg={'bg-[#DEE1E4]'}
            />
          </div>
        ))}
      </div>
      <Input
        type={'board'}
        placeholder="게시물의 제목을 입력해주세요"
        onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.')
        }}
      />
      <div className="w-full flex flex-row-reverse text-gray-500 mt-1 mb-3 pr-3">
        25자 이내
      </div>
      <textarea
        placeholder="게시물의 내용을 입력해주세요"
        className="w-full h-[440px] px-7 py-2 text-xl font-bold rounded-[6px] border-[2px] border-[#C4C4C4]"
      />
      <div className="w-full flex flex-row-reverse text-gray-500 mt-1 mb-3 pr-3">
        1000자 이내
      </div>
      <div className="w-full flex justify-center">
        <Button
          buttonText={'저장하기'}
          type={'boardPost'}
          isDisabled={false}
          onClickHandler={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      </div>
    </div>
  )
}

export default PostContainer
