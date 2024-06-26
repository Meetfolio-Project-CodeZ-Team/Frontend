'use client'

import { ADD_TRAIN_H } from '@/app/constants/admin'
import { JOB_ENUM, JOBKEYWORD } from '@/app/constants/auth'
import { useState } from 'react'
import Button from '../../common/Button'
import Input from '../../common/Input'
import DropDownModel from './DropDownModel'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
interface AddTrainDataProps {
  addComplete: () => void
}

const AddTrainData = ({ addComplete }: AddTrainDataProps) => {
  const [domain, setDomain] = useState('')
  const [url, setUrl] = useState('')
  const [job, setJob] = useState<JobType>('전체')
  const [data, setData] = useState('')

  const postTrainData = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        domain: domain,
        url: url,
        data: data,
        job: JOB_ENUM[job],
      }),
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/model/train`,
      requestOptions,
    )
    addComplete()
  }

  return (
    <div className="flex flex-col w-[1010px] h-[780px] gap-y-8">
      <ToastContainer />
      <div className="flex gap-x-5">
        <div className="flex flex-col gap-y-1.5">
          <div className="text-xl font-bold pl-2">{ADD_TRAIN_H[0]}</div>
          <Input
            type={'train'}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Ex) 잡코리아"
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <div className="text-xl font-bold pl-2">{ADD_TRAIN_H[1]}</div>
          <Input
            type={'train'}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Ex) www.jobKorea.com"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-1.5">
        <div className="text-xl font-bold pl-2">{ADD_TRAIN_H[2]}</div>
        <DropDownModel
          options={JOBKEYWORD}
          title={'직무를 선택'}
          onSelect={(selectedTag) => setJob(selectedTag)}
        />
      </div>
      <div className="flex flex-col gap-y-1.5">
        <div className="text-xl font-bold pl-2">{ADD_TRAIN_H[3]}</div>
        <textarea
          className="w-[820px] h-[380px] p-[20px] rounded-[10px] border-2 border-[#C4C4C4] text-lg font-medium"
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
