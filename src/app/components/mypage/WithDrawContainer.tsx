'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { logout } from '@/app/utils/cookies'
import { useModal } from '@/app/hooks/useModal'
import DeleteModal from './common/DeleteModal'

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

  useEffect(() => {
    // 서버에서 자소서카드 데이터를 가져오는 함수
    const fetchUserInfos = async () => {
      try {
        const response = await fetch('/api/mypage/user')
        if (!response.ok) {
          throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
        }
        const data = await response.json()
        console.log('유저 정보 데이터', data.result) // 타입 에러가 발생하지 않아야 함
        setUserInfos(data.result)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUserInfos()
  }, [])

  const deleteUser = async () => {
    console.log('회원탈퇴 요청이에요')
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/user/delete`,
        {
          method: 'DELETE',
        },
      )

      if (res.ok) {
        console.log('회원탈퇴 성공적으로 되었습니다.')
        
      } else {
        const errorData = await res.json()
        console.error('Error details:', errorData)
      }
    } catch (error) {
      console.error('Network or other error:', error)
    }
  }

  return (
    <div className="w-full h-[1090px] relative">
      <div className="w-full h-full left-0 top-0 absolute bg-gray-50" />
      <div className="w-[962px] h-[0px] left-[79px] top-[165px] absolute">
        <div className="w-[962px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
        <div className="w-[120px] h-[0px] left-[175px] top-[-1px] absolute border-2 border-gray-800 z-10" />
      </div>
      <div className="w-[280px] h-[30px] left-[96px] top-[131px] absolute justify-start items-center gap-[70px] inline-flex">
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

      {/* <div className="w-[95.85px] h-[20.69px] left-[22.58px] top-[11.66px] absolute text-center text-slate-600 text-lg font-semibold leading-[27px]">
          탈퇴하기
        </div> */}
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
