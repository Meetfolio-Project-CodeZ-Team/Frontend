'use client'

import { useState } from 'react'
import Button from '../../common/Button'
import Input from '../../common/Input'
import { GRADE, JOBKEYWORD, SIGNUP } from '@/app/constants/auth'
import Keyword from './Keyword'
import DropDown from './dropdown/DropDownOB'

const OnBoardContainer = () => {
  const [password, setPassWord] = useState('')

  return (
    <div className="flex flex-col items-center mt-[95px]">
      <div className="text-5xl font-semibold leading-[75px] mb-6">회원가입</div>
      <div className="text-3xl font-medium leading-[45px] mb-7">
        {SIGNUP.OnBoard}
      </div>
      <div className="flex flex-col gap-y-1.5 mb-8">
        <div className="flex flex-col">
          <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
            가천대 이메일
          </div>
          <div className="flex w-[700px] pl-10 h-[60px] items-center text-xl font-medium text-[#6D727C] bg-white rounded-[6px] border-[2px] border-[#C4C4C4]">
            {SIGNUP.Email}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
            비밀번호
          </div>
          <Input
            type={'onboard'}
            onChange={(e) => setPassWord(e.target.value)}
            placeholder={SIGNUP.Password}
          />
        </div>
        <div className="flex flex-col">
          <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
            학과
          </div>
          <Input
            type={'onboard'}
            onChange={(e) => setPassWord(e.target.value)}
            placeholder="본인 학과 입력"
          />
        </div>
        <div className="flex flex-col">
          <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
            학년 및 학적
          </div>
          <DropDown
            options={GRADE}
            title="본인 학년 선택"
            onSelect={(option) => console.log(option, '선택완료')}
          />
        </div>
        <div className="flex flex-col">
          <div className="w-auto  text-xl font-semibold leading-[30px] pl-1.5">
            희망직무
          </div>
          <div className="flex gap-x-8">
            {JOBKEYWORD.map((str, index) => (
              <Keyword keyword={str} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <Button
          buttonText="가입하기"
          type={'loginB'}
          isDisabled={false}
          onClickHandler={() => console.log('로그인 로직')}
        />
      </div>
    </div>
  )
}

export default OnBoardContainer
