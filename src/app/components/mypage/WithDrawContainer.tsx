'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { logout } from '@/app/utils/cookies'
import { useModal } from '@/app/hooks/useModal'
import DeleteModal from './common/DeleteModal'
import { failVerifyPw, successVerifyPw } from '@/app/utils/toast'
import { ToastContainer } from 'react-toastify'

interface UserInfoProps {
  email: string
  grade: string
  major: string
  jobKeyword: onlyJobType
  memberId?: number
  point: number
  status: string
  registrationDate: string
}

const WithDrawContainer = () => {
  const router = useRouter()
  const [userInfos, setUserInfos] = useState<UserInfoProps>()
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  const [passwordVerified, setPasswordVerified] = useState(false)
  const [verifyPw, setVerifyPw] = useState('')

  const verifyPassword = async () => {
    try {
      const response = await fetch('/api/mypage/user/checkPw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: verifyPw }),
      })

      const result = await response.json()
      if (response.ok && result.isSuccess && result.code === 'COMMON200') {
        successVerifyPw()
        setPasswordVerified(true)
      } else {
        failVerifyPw()
      }
    } catch (error) {
      console.error('비밀번호 검증 중 오류 발생:', error)
    }
  }

  useEffect(() => {
    
    const fetchUserInfos = async () => {
      try {
        const response = await fetch('/api/mypage/user')
        if (!response.ok) {
          throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
        }
        const data = await response.json()
        setUserInfos(data.result)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUserInfos()
  }, [])

  const deleteUser = async () => {
  
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/user/delete`,
        {
          method: 'DELETE',
        },
      )

      if (res.ok) {
      } else {
        const errorData = await res.json()
        console.error('Error details:', errorData)
      }
    } catch (error) {
      console.error('Network or other error:', error)
    }
  }

  if (!passwordVerified) {
    return (
      <div className="w-full h-[1090px] relative">
        <div className="w-full h-full left-0 top-0 absolute bg-gray-50" />
        <div className="w-full h-[0px] left-[69px] top-[172px] absolute">
          <div className="w-[962px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
          <div className="w-[120px] h-[0px] left-[180px] top-[-1px] absolute border-2 border-gray-800 z-10" />
        </div>
        <div className="w-[280px] h-[30px] left-[90px] top-[131px] absolute justify-start items-center gap-[70px] inline-flex">
          <div className="text-gray-900 text-xl font-bold leading-[30px]">
            <Link href="/mypage/userinfo">개인 정보 수정</Link>
          </div>
          <div className="text-gray-900 text-xl font-bold leading-[30px]">
            <Link href="/mypage/withdraw">회원 탈퇴</Link>
          </div>
        </div>
        <div className="w-[214px] h-[18px] left-[66px] top-[64px] absolute text-gray-900 text-[28px] font-bold leading-[30px]">
          개인 정보 설정
        </div>
        <div className="text-xl font-semibold absolute left-[340px] top-[400px]">
          본인 확인을 위해 비밀번호를 입력해 주시기 바랍니다.
        </div>
        <div className="w-[400px] h-[50px] py-2 left-[350px] top-[480px] inline-flex items-center absolute p-2 ">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-[10px]"
          >
            <rect
              x="4"
              y="9"
              width="16"
              height="12"
              rx="4"
              stroke="black"
              stroke-width="1"
            />
            <path
              d="M10 15L11.5 16.5L14.5 13.5"
              stroke="black"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 9V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7L8 9"
              stroke="black"
              stroke-width="1"
            />
          </svg>
          <input
            type="password"
            value={verifyPw}
            onChange={(e) => setVerifyPw(e.target.value)}
            placeholder="현재 비밀번호 입력"
            className="py-3 px-3 border border-gray-300 rounded-lg"
          />
          <button
            type="button"
            className={`w-[70.02px] h-[49.6px] ml-[295px] absolute text-white bg-blue-300  border-0  focus:outline-none rounded-[10px] text-lg font-semibold `}
            onClick={verifyPassword}
          >
            확인
          </button>
        </div>
        <ToastContainer />
      </div>
    )
  }

  return (
    <div className="w-full h-[1090px] relative">
      <div className="w-full h-full left-0 top-0 absolute bg-gray-50" />
      <div className="w-[962px] h-[0px] left-[69px] top-[165px] absolute">
        <div className="w-[962px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
        <div className="w-[120px] h-[0px] left-[180px] top-[-1px] absolute border-2 border-gray-800 z-10" />
      </div>
      <div className="w-[280px] h-[30px] left-[90px] top-[131px] absolute justify-start items-center gap-[70px] inline-flex">
        <div className="text-gray-900 text-xl font-bold leading-[30px]">
          <Link href="/mypage/userinfo">개인 정보 수정</Link>
        </div>
        <div className="text-gray-900 text-xl font-bold leading-[30px]">
          <Link href="/mypage/withdraw">회원 탈퇴</Link>
        </div>
      </div>
      <div className="w-[214px] h-[18px] left-[66px] top-[64px] absolute text-gray-900 text-[28px] font-bold font-['Rubik'] leading-[30px]">
        개인 정보 설정
      </div>
      <div className="left-[84px] top-[231px] absolute">
        <span className="text-black text-xl font-bold leading-[30px]">
          졍말 탈퇴하시겠어요?
          <br />
        </span>
        <span className="text-black text-xl font-medium leading-[30px]">
          <br />
          탈퇴 시 모든 이용 내역 및 저장된 포트폴리오가 삭제되며,
          <br />
          <br />
          보유하신 포인트가 소멸됩니다.
        </span>
      </div>
      <div className="w-[150.05px] h-[50px] left-[895px] top-[504px] absolute bg-slate-300 rounded-[10px] flex items-center justify-center">
        <button
          className="text-slate-600 text-xl font-semibold border-0 focus:outline-none rounded-[10px]"
          onClick={openModal}
        >
          탈퇴하기
        </button>
      </div>
      <div onClick={handleModalClick}>
        {isOpen && (
          <DeleteModal
            closeModal={closeModal}
            deleteUser={() => deleteUser()}
          />
        )}
      </div>
    </div>
  )
}

export default WithDrawContainer
