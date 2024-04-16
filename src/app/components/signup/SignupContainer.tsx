'use client'

import { useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'
import { SIGNUP } from '@/app/constants/auth'

const SignupContainer = () => {
  const [email, setEmail] = useState('')
  const [authCode, setAuthCode] = useState('')

  const getAuthCode = async (email: string) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email + SIGNUP.Email }),
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/signup`,
      requestOptions,
    )
    console.log(res)
  }

  const authorizeCode = async (email: string, authCode: string) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email + SIGNUP.Email, authCode: authCode }),
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/signup/auth`,
      requestOptions,
    )
    console.log(res)
  }

  return (
    <div className="flex flex-col items-center mt-[170px]">
      <div className="text-5xl font-semibold leading-[75px] mb-7">회원가입</div>
      <div className="text-3xl font-semibold leading-[75px] mb-20">
        {SIGNUP.Description}
      </div>
      <div className="flex flex-col gap-y-5 mb-12">
        <div className="flex items-center gap-x-6">
          <div className="flex w-[450px] h-20 bg-white rounded-[10px] border border-[#C4C4C4]">
            <Input
              type={'auth'}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="아이디"
            />
            <div className="flex items-center w-[187px] text-[#667BA6] text-[26px] font-semibold leading-[39px]">
              {SIGNUP.Email}
            </div>
          </div>
          <Button
            buttonText={'인증 코드 전송'}
            type={'auth'}
            isDisabled={false}
            onClickHandler={() => getAuthCode(email)}
          />
        </div>
        <Input
          type={'login'}
          onChange={(e) => setAuthCode(e.target.value)}
          placeholder="인증번호 입력하기"
        />
      </div>
      <div className="flex flex-col gap-y-5">
        <Button
          buttonText={SIGNUP.Auth}
          type={'loginW'}
          isDisabled={false}
          onClickHandler={() => authorizeCode(email, authCode)}
        />
      </div>
    </div>
  )
}

export default SignupContainer
