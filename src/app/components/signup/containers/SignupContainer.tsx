'use client'

import { useState } from 'react'
import Button from '../../common/Button'
import Input from '../../common/Input'
import { SIGNUP } from '@/app/constants/auth'
import { useRouter } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { emailState } from '@/app/recoil/signUp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { authCodeAlert, mismatchAlert } from '@/app/utils/toast'

const SignupContainer = () => {
  const [email, setEmail] = useRecoilState(emailState)
  const [authCode, setAuthCode] = useState('')
  const router = useRouter()

  const getAuthCode = async (email: string) => {
    authCodeAlert()
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email + SIGNUP.Email }),
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/signup/email`,
      requestOptions,
    )
  }

  const authorizeCode = async (email: string, authCode: string) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email + SIGNUP.Email,
          authCode: authCode,
        }),
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/signup/auth`,
        requestOptions,
      )
      if (!res.ok) {
        throw new Error('Authorization failed')
      }
      router.push('/signup/onboard')
    } catch (error) {
      console.error('Error:', error)
      mismatchAlert()
      setAuthCode('')
    }
  }

  return (
    <div className="flex flex-col items-center mt-[80px] mb-12">
      <ToastContainer style={{ width: 400, height: 180 }} />
      <div className="text-4xl font-semibold leading-[75px] mb-7">회원가입</div>
      <div className="text-2xl font-semibold leading-[75px] mb-12">
        {SIGNUP.Description}
      </div>
      <div className="flex flex-col gap-y-5 mb-12">
        <div className="flex items-center gap-x-6">
          <div className="flex w-[360px] h-16 bg-white rounded-[10px] border border-[#C4C4C4]">
            <Input
              type={'auth'}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="아이디"
              className="h-16px"
            />
            <div className="flex items-center w-[187px] text-[#667BA6] text-[20px] font-semibold">
              {SIGNUP.Email}
            </div>
          </div>
          <Button
            buttonText={'인증코드 전송'}
            type={'auth'}
            isDisabled={email === ''}
            onClickHandler={() => getAuthCode(email)}
            className={`${email === '' ? 'bg-white text-[#828282] ' : ''} w-[112px] h-14 text-base`}
          />
        </div>
        <Input
          type={'login'}
          onChange={(e) => setAuthCode(e.target.value)}
          placeholder="인증코드 입력하기"
          textValue={authCode}
        />
      </div>
      <div className="flex flex-col gap-y-5">
        <Button
          buttonText={SIGNUP.Auth}
          type={'loginW'}
          isDisabled={authCode === ''}
          onClickHandler={() => authorizeCode(email, authCode)}
          className={`${authCode === '' ? 'bg-white text-[#b5b5b5]' : ''} `}
        />
      </div>
    </div>
  )
}

export default SignupContainer
