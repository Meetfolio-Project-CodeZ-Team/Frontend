'use client'

import { useState } from 'react'

import Button from '../common/Button'
import Input from '../common/Input'
import { useRouter } from 'next/navigation'

const LoginContainer = () => {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const router = useRouter()

  return (
    <div className="flex flex-col items-center mt-[170px] gap-y-12">
      <div className="text-6xl font-semibold leading-[90px]">로그인</div>
      <div className="flex flex-col gap-y-5">
        <Input
          type={'login'}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
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
          isDisabled={false}
          onClickHandler={() => router.push('/Admin')}
        />
        <Button
          buttonText={'회원가입'}
          type={'loginW'}
          isDisabled={false}
          onClickHandler={() => console.log('로그인 로직')}
        />
      </div>
    </div>
  )
}

export default LoginContainer
