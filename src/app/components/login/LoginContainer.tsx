'use client'

import { useState } from 'react'

import Button from '../common/Button'
import Input from '../common/Input'
import { useRouter } from 'next/navigation'
import { SIGNUP } from '@/app/constants/auth'

const LoginContainer = () => {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const router = useRouter()
  const isInserted = id === '' || pw === ''
  const postLogin = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: id + SIGNUP.Email, password: pw }),
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/login`,
      requestOptions,
    )
    const resData = await res.json()
    const token = resData?.token
    const tokenValue = token.substring(7)
    document.cookie = `accessToken=${tokenValue}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`
    router.push('/main')
  }

  return (
    <div className="flex flex-col items-center mt-[170px] gap-y-12">
      <div className="text-6xl font-semibold leading-[90px]">로그인</div>
      <div className="flex flex-col gap-y-5">
        <Input
          type={'login'}
          onChange={(e) => setId(e.target.value)}
          placeholder={`아이디(${SIGNUP.Email}을 제외하고 입력)`}
        />
        <Input
          type={'login'}
          onChange={(e) => setPw(e.target.value)}
          placeholder="비밀번호"
        />
      </div>
      <div className="flex flex-col gap-y-5">
        <Button
          buttonText={'로그인'}
          type={'loginB'}
          isDisabled={isInserted}
          onClickHandler={() => postLogin()}
          className={isInserted ? 'text-[#b5b5b5] bg-white' : ''}
        />
        <Button
          buttonText={'회원가입'}
          type={'loginW'}
          isDisabled={false}
          onClickHandler={() => router.push('/signup')}
        />
      </div>
    </div>
  )
}

export default LoginContainer
