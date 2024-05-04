'use client'

import { JOB_ENUM, JOBKEYWORD } from '@/app/constants/auth'
import { useState } from 'react'
import Keyword from '../../signup/onboard/Keyword'
import Input from '../../common/Input'
import Button from '../../common/Button'
import { useRouter } from 'next/navigation'
import {
  GROUP_ENUM,
  RECRUIT_CATEGORY,
  RECRUIT_KEYWORD,
} from '@/app/constants/board'

const PostGroupContainer = () => {
  const [clickedKeyword, setClickedKeyword] = useState<RecruitType | null>(null)
  const [clickedCategory, setClickedCategory] =
    useState<GroupBoardTypes | null>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [member, setMember] = useState('')
  const contentment =
    title !== '' &&
    content != '' &&
    clickedKeyword !== null &&
    member !== '' &&
    clickedCategory != null
  const router = useRouter()

  const handleClick = (keyword: RecruitType) => {
    setClickedKeyword(keyword)
  }

  const handleClickC = (keyword: GroupBoardTypes) => {
    setClickedCategory(keyword)
  }

  const postGroup = async () => {
    const requestBody = {
      title: title,
      content: content,
      groupCategory: GROUP_ENUM[clickedCategory || '스터디'],
      recruitment: clickedKeyword,
      peopleNumber: Number(member),
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/employment/post`,
      requestOptions,
    )
    router.push('/board')
  }

  return (
    <div className="flex flex-col w-full bg-white h-[786px] rounded-3xl px-[58px] py-9">
      <div className="flex gap-x-6 mb-4 items-center">
        <div className="flex flex-col">
          <div className="text-xl font-bold pl-4">{'모집 카테고리'}</div>
          <div className="w-[250px] h-[67px]  border-2 border-[#C4C4C4] flex items-center justify-center px-4 py-4 rounded-[10px]">
            <div className="flex gap-x-1">
              {RECRUIT_CATEGORY.map((str, index) => (
                <div key={index} onClick={() => handleClickC(str)}>
                  <Keyword
                    keyword={str}
                    clickKeyword={clickedCategory || ''}
                    bg={'bg-[#DEE1E4]'}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-bold pl-4">{'모집분야'}</div>
          <div className="w-[800px] h-[67px] border-2 border-[#C4C4C4] flex items-center justify-center px-4 py-4 rounded-[10px]">
            <div className="flex gap-x-[22px]">
              {RECRUIT_KEYWORD.map((str, index) => (
                <div key={index} onClick={() => handleClick(str)}>
                  <Keyword
                    keyword={str}
                    clickKeyword={clickedKeyword || ''}
                    bg={'bg-[#DEE1E4]'}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-bold pl-2">{'모집인원'}</div>
          <Input
            type={'member'}
            placeholder="0"
            onChange={(e) => setMember(e.target.value)}
            textValue={member}
            inputType="number"
          />
        </div>
      </div>
      <Input
        type={'board'}
        placeholder="게시물의 제목을 입력해주세요"
        onChange={(e) => setTitle(e.target.value)}
        textValue={title}
      />
      <div className="w-full flex flex-row-reverse text-gray-500 mt-1 mb-2 pr-3">
        25자 이내
      </div>
      <textarea
        placeholder="게시물의 내용을 입력해주세요"
        className="w-full h-[440px] px-7 py-2 text-xl font-medium rounded-[6px] border-[2px] border-[#C4C4C4]"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="w-full flex flex-row-reverse text-gray-500 mt-1 mb-3 pr-3">
        1000자 이내
      </div>
      <div className="w-full flex justify-center">
        <Button
          buttonText={'저장하기'}
          type={'boardPost'}
          isDisabled={false}
          onClickHandler={postGroup}
          className={contentment ? 'bg-[#4b6689] text-white' : ''}
        />
      </div>
    </div>
  )
}

export default PostGroupContainer
