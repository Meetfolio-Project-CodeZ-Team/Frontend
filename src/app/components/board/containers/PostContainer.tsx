'use client'

import { JOB_ENUM, JOBKEYWORD } from '@/app/constants/auth'
import { useEffect, useState } from 'react'
import Keyword from '../../signup/onboard/Keyword'
import Input from '../../common/Input'
import Button from '../../common/Button'
import { useRouter } from 'next/navigation'

interface PostEmploymentContainerProps {
  isEdit?: boolean
  data?: BoardInfoTypes
}

const PostEmploymentContainer = ({
  isEdit,
  data,
}: PostEmploymentContainerProps) => {
  const [clickedKeyword, setClickedKeyword] = useState<onlyJobType | null>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const contentment = title !== '' && content != '' && clickedKeyword !== null
  const router = useRouter()
  const handleClick = (keyword: onlyJobType) => {
    setClickedKeyword(keyword)
  }
  const method = isEdit ? 'PATCH' : 'POST'
  const path = isEdit ? `patch?id=${data?.boardId}` : 'post'

  useEffect(() => {
    const fillData = () => {
      setClickedKeyword(data?.jobCategory || '백엔드')
      setTitle(data?.title || '')
      setContent(data?.content || '')
    }
    if (isEdit) fillData()
  }, [])

  const postEmployment = async () => {
    console.log('수정시도');
    
    const requestBody = {
      title: title,
      content: content,
      jobKeyword: JOB_ENUM[clickedKeyword || '백엔드'],
    }
    const requestOptions = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/employment/${path}`,
      requestOptions,
    )
    router.push('/board')
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
        onChange={(e) => setTitle(e.target.value)}
        textValue={title}
      />
      <div className="w-full flex flex-row-reverse text-gray-500 mt-1 mb-3 pr-3">
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
          onClickHandler={postEmployment}
          className={contentment ? 'bg-[#4b6689] text-white' : ''}
        />
      </div>
    </div>
  )
}

export default PostEmploymentContainer
