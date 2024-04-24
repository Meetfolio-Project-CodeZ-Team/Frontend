'use client'

import { logout } from '@/app/utils/cookies'
import Link from 'next/link'
interface HeaderProps {
  nickname?: string
  profile?: string
  isAdmin?: boolean
}

const Header = ({ isAdmin, nickname, profile }: HeaderProps) => {
  return (
    <div className="relative w-full border-b-2 border-[#486284]">
      <header className=" relative w-full h-[80px] flex items-center content-between min-w-[800px] gap-x-[470px] px-[60px]">
        <Link
          href={isAdmin ? '/Admin' : '/main'}
          className="absolute flex items-center justify-center gap-x-2.5 h-9"
        >
          <div className="w-9 h-9 bg-[#486284] rounded-[100px]"></div>
          <div className="flex w-[150x] h-[auto] text-[32px] font-semibold leading-[48px]">
            Meetfolio
            {isAdmin && (
              <div className="flex flex-col-reverse w-[150px] h-[auto] mb-[6px] ml-1 text-lg font-semibold leading-[27px]">
                forAdmin
              </div>
            )}
          </div>
        </Link>
        {!isAdmin ? (
          <div className="absolute right-[10px] flex w-[650px] gap-[30px] h-9 text-[#486284] text-lg cursor-pointer items-center ">
            <Link href="/experience">경험분해하기</Link>
            <Link href="/coverletter">AI자기소개서솔루션</Link>
            <Link href="login">커뮤니티</Link>
            <div className="flex gap">
              <div className="w-[22px] h-[2px] origin-top-left rotate-90 opacity-80 border border-[#486284]"></div>
              {!nickname ? (
                <Link
                  href="signup"
                  className="underline underline-offset-1 text-base"
                >
                  회원가입
                </Link>
              ) : (
                <div className="flex items-center gap-x-2">
                  <div className="w-6 h-6 bg-[#486284] rounded-[100px]"></div>
                  <Link href="/Mypage/myexperience" className="text-base">
                    {nickname}
                  </Link>
                </div>
              )}
            </div>
            {!nickname ? (
              <Link href="login">
                <button className="w-[82px] h-[38px] bg-[#486284] text-white text-sm rounded font-medium">
                  로그인
                </button>
              </Link>
            ) : (
              <Link href="/main">
                <button
                  className="w-[82px] h-[38px] bg-[#486284] text-white text-sm rounded font-medium"
                  onClick={() => logout()}
                >
                  로그아웃
                </button>
              </Link>
            )}
          </div>
        ) : (
          <div className="absolute right-[40px] flex-row-reverse w-[600px] gap-[30px] h-9 flex gap items-center">
            <Link href="/main">
              <button
                className="w-[82px] h-[38px] bg-[#486284] text-white text-sm rounded font-medium"
                onClick={() => logout()}
              >
                로그아웃
              </button>
            </Link>
            <div className=" text-[#486284] text-lg cursor-pointer items-center ">
              관리자
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default Header
