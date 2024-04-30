'use client'

import { ADD_TRAIN_H } from '@/app/constants/admin'
import Input from '../../common/Input'
import { useState } from 'react'
import Button from '../../common/Button'
import DropDownModel from './DropDownModel'
import { JOBKEYWORD } from '@/app/constants/auth'

interface AddTrainDataProps {
  addComplete: () => void
}

const AddTrainData = ({ addComplete }: AddTrainDataProps) => {
  const [domain, setDomain] = useState('')
  const [url, setUrl] = useState('')
  const [job, setJob] = useState('')
  const [data, setData] = useState('')
  console.log(data.length)

  const postTrainData = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ domain: domain, url: url, data: data, job: job }),
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/model/train`,
      requestOptions,
    )
    window.location.reload()
    addComplete()
  }

  console.log(job)

  return (
    <div className="flex flex-col w-[1010px] h-[780px] gap-y-10 mb-12">
      <div className="flex gap-x-5">
        <div className="flex flex-col gap-y-1.5">
          <div className="text-2xl font-bold">{ADD_TRAIN_H[0]}</div>
          <Input
            type={'train'}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Ex) 잡코리아"
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <div className="text-2xl font-bold">{ADD_TRAIN_H[1]}</div>
          <Input
            type={'train'}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Ex) www.jobKorea.com"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-1.5">
        <div className="text-2xl font-bold">{ADD_TRAIN_H[2]}</div>
        <DropDownModel
          options={JOBKEYWORD}
          title={'직무를 선택'}
          onSelect={(selectedTag) => setJob(selectedTag)}
        />
      </div>
      <div className="flex flex-col gap-y-1.5">
        <div className="text-2xl font-bold">{ADD_TRAIN_H[3]}</div>
        <textarea
          className="w-[820px] h-[430px] p-[30px] rounded-[10px] border-2 border-[#C4C4C4] text-xl font-medium"
          onChange={(e) => setData(e.target.value)}
          placeholder="합격 자기소개서 내용을 입력해주세요"
        />
      </div>
      <Button
        buttonText={'추가하기'}
        type={'addDataBtn'}
        isDisabled={false}
        onClickHandler={postTrainData}
      />
    </div>
  )
}

export default AddTrainData
