'use client'

import { SIGNUP } from '@/app/constants/auth'
import { eye } from '@/app/ui/svg/common/eye'
import { failLogin } from '@/app/utils/toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Button from '../common/Button'
import Icons from '../common/Icons'
import Input from '../common/Input'

const LoginContainer = () => {
  const router = useRouter()
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const isInserted = id === '' || pw === ''

  const postLogin = async () => {
    const isAdmin = id === 'admin' ? 'admin' : id + SIGNUP.Email
    const path = id === 'admin' ? '/admin' : '/main'
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: isAdmin, password: pw }),
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/login`,
      requestOptions,
    )
    if (!res.ok) {
      failLogin()
    }

    const resData = await res.json()
    const access = resData?.access
    const refresh = resData?.refresh
    const accessToken = access.substring(7)
    const refreshToken = refresh.substring(7)
    document.cookie = `accessToken=${accessToken}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`
    document.cookie = `refreshToken=${refreshToken}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`
    router.push(path)
  }

  return (
    <div className="flex flex-col items-center justify-center mt-[50px] mb-[16%] gap-y-12">
      <ToastContainer />
      <div className="text-5xl font-semibold">로그인</div>
      <div className="flex flex-col gap-y-5">
        <Input
          type={'login'}
          onChange={(e) => setId(e.target.value)}
          placeholder={`아이디(${SIGNUP.Email}을 제외하고 입력)`}
        />
        <div className="flex gap-x-4 items-center relative">
          <Input
            inputType={isOpen ? '' : 'password'}
            type={'login'}
            onChange={(e) => setPw(e.target.value)}
            placeholder="비밀번호"
            onEnterPress={postLogin}
          />
          <div
            className="cursor-pointer absolute right-4"
            onMouseDown={() => setIsOpen(true)}
            onMouseUp={() => setIsOpen(false)}
          >
            <Icons name={eye} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-x-10">
        <Button
          buttonText={'로그인'}
          type={'loginB'}
          isDisabled={isInserted}
          onClickHandler={() => postLogin()}
          className={isInserted ? ' bg-white' : 'text-white'}
        />
        <div className="flex gap-x-2 pt-4 pr-6 w-full flex-row-reverse text-[18px] item">
          <Link href={'/signup'}>
            <div className="font-semibold underline">회원가입</div>
          </Link>
          <div className="text-gray-700 text-[16px]">
            아직 회원이 아니신가요?
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginContainer
