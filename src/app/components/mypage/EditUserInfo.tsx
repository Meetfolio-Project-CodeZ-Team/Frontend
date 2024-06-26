'use client'

import { useEffect, useState } from 'react'

import {
  CLASS_ENUM,
  COLLEGE,
  GRADE,
  GRADE_ENUM,
  JOBKEYWORD,
  JOB_ENUM,
  SIGNUP,
} from '@/app/constants/auth'
import {
  PROFILE_EMOJI,
  PROFILE_EMOJI_PT1,
  PROFILE_EMOJI_PT2,
} from '@/app/constants/signup'
import {
  failVerifyPw,
  pwAlert,
  successVerifyPw,
  updateUserInfo,
} from '@/app/utils/toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Input from '../common/Input'
import Emoji from '../signup/onboard/Emoji'
import Keyword from '../signup/onboard/Keyword'
import DropDownMajor from '../signup/onboard/dropdown/DropDownMajor'
import DropDownOB from '../signup/onboard/dropdown/DropDownOB'

interface UserInfo {
  email: string
  grade: string
  major: string
  jobKeyword: string
  memberId?: number
}

interface UpdateUserInfoRequest {
  grade: string
  jobKeyword: string
  major: string
  password?: string | null
  profile: string
}

const EditUserInfo = () => {
  const router = useRouter()
  const [passwordVerified, setPasswordVerified] = useState(false)
  const [verifyPw, setVerifyPw] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  })

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
      
    }
  }

  const [password, setPassWord] = useState('')
  const [checkPW, setCheckPW] = useState('')
  const [clickedKeyword, setClickedKeyword] = useState<onlyJobType>('백엔드')
  const [grade, setGrade] = useState<GradeEnum>('1학년')
  const [profile, setProfile] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [major, setMajor] = useState('')
  const isSame = checkPW === password
  const [userInfos, setUserInfos] = useState<UserInfo>()

  const updateUser = async () => {
    const requestBody: UpdateUserInfoRequest = {
      grade: GRADE_ENUM[grade],
      jobKeyword: JOB_ENUM[clickedKeyword],
      major: major,
      profile: PROFILE_EMOJI[profile],
    }

    if (password.length > 0) {
      if (
        !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}$/.test(
          password,
        )
      ) {
        pwAlert()
        return
      } else if (password !== checkPW) {
        pwAlert()
        return
      }
      requestBody.password = password
    } else {
      requestBody.password = null
    }

    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/user/update`,
        requestOptions,
      )
      const responseData = await response.json()
      if (!response.ok) {
        throw new Error(
          responseData.message || '서버 오류로 정보 수정에 실패했습니다.',
        )
      }

      updateUserInfo()

      setTimeout(() => {
        router.push('/mypage')
      }, 2000)
    } catch (error) {
      
    }
  }

  const handleClick = (keyword: onlyJobType) => {
    setClickedKeyword(keyword)
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
        setMajor(data.result.major)
        setGrade(data.result.grade)
        setClickedKeyword(data.result.jobKeyword)
        const profileIndex = [
          ...PROFILE_EMOJI_PT1,
          ...PROFILE_EMOJI_PT2,
        ].findIndex((emoji) => emoji === data.result.profile)
        setProfile(profileIndex >= 0 ? profileIndex : 0)
      } catch (error) {
        
      }
    }
    fetchUserInfos()
  }, [])

  const [college, setCollege] = useState<collegeType>(findCollegeByMajor(major))
  function findCollegeByMajor(major: string): collegeType {
    for (const [college, majors] of Object.entries(CLASS_ENUM)) {
      if (majors.includes(major)) {
        return college as collegeType
      }
    }
    return 'IT융합대학'
  }

  useEffect(() => {
    setCollege(findCollegeByMajor(major))
  }, [major])

  if (!passwordVerified) {
    return (
      <div className="w-full h-[1090px] relative">
        <div className="w-full h-full left-0 top-0 absolute bg-gray-50" />
        <div className="w-full h-[0px] left-[69px] top-[172px] absolute">
          <div className="w-[950px] h-[0px] left-0 top-0 absolute border border-zinc-600" />
          <div className="w-[160px] h-[0px] left-0 top-[-1px] absolute border-2 border-gray-800" />
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
              strokeWidth="1"
            />
            <path
              d="M10 15L11.5 16.5L14.5 13.5"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 9V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7L8 9"
              stroke="black"
              strokeWidth="1"
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
      <div className="w-full h-[0px] left-[69px] top-[172px] absolute">
        <div className="w-[950px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
        <div className="w-[160px] h-[0px] left-0 top-[-1px] absolute border-2 border-gray-800" />
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
      <div className="w-[680px] h-[501.88px] left-[81px] top-[196px] absolute flex-col justify-start items-start gap-5 inline-flex">
        <div className="w-[241px] h-[62.88px] relative">
          <div className="w-[218px] h-[19.88px] left-[23px] top-[40px] absolute text-zinc-600 text-xl font-medium leading-[30px]">
            {userInfos?.email}
          </div>
          <div className="w-[138px] left-0 top-0 absolute text-gray-900 text-xl font-semibold leading-[30px]">
            아이디
          </div>
        </div>
        <div className="w-[700px] h-[90px] mt-[10px] relative">
          <div className="flex gap-x-[175px]">
            <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
              변경할 비밀번호
            </div>
            <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
              변경할 비밀번호 확인
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <Input
              inputType="password"
              type={'password'}
              onChange={(e) => setPassWord(e.target.value)}
              placeholder={SIGNUP.Password}
              textValue={password}
            />
            <Input
              inputType="password"
              type={'password'}
              onChange={(e) => setCheckPW(e.target.value)}
              placeholder={SIGNUP.Password}
              textValue={checkPW}
            />
            <div
              className={`flex items-center justify-center w-[72px] p-2 text-lg font-semibold rounded-[10px]  ${isSame ? 'bg-[#486283] text-white' : 'bg-white text-[#6D727C]'}`}
            >
              {isSame ? '일치' : '불일치'}
            </div>
          </div>
        </div>
        <div className="w-[700px] h-[90px] relative  z-20">
          <div className="w-[700px] h-[90px] relative  z-20">
            <div className="w-[138px] left-[6px] top-0 absolute text-gray-900 text-xl font-semibold leading-[30px]">
              학과
            </div>
            <div className="w-[700px] h-[60px] left-0 top-[30px] absolute">
              <div className="flex gap-x-5 ">
                <DropDownMajor
                  options={COLLEGE}
                  title={college}
                  onSelect={(option) => setCollege(option)}
                />
                <DropDownMajor
                  options={CLASS_ENUM[college]}
                  title={major}
                  onSelect={(option) => setMajor(option)}
                />
              </div>
            </div>
          </div>
          <div className="w-[700px] h-[90px] mt-[20px] relative z-10">
            <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
              학년 및 학적
            </div>
            <DropDownOB
              options={GRADE}
              title={grade}
              onSelect={(option) => setGrade(option)}
            />
          </div>
          <div className="w-[700px] h-[89px] mt-[20px] relative z-0">
            <div className="w-auto  text-xl font-semibold leading-[30px] pl-1.5 pb-[10px]">
              희망직무
            </div>
            <div className="flex gap-x-[35px]">
              {JOBKEYWORD.map((str, index) => (
                <div key={index} onClick={() => handleClick(str)}>
                  <Keyword keyword={str} clickKeyword={clickedKeyword} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[700px] h-[80px] left-[88px] top-[750px] absolute">
        <div className="flex flex-col gap-y-4 ">
          <div className="flex items-center gap-x-1">
            <div className="w-auto text-xl font-semibold pl-1.5">
              프로필 아이콘
            </div>
            <div
              className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-white font-semibold"
              onMouseEnter={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
            >
              ?
            </div>
            {isHovered && (
              <div className="invisi hover:visible  flex text-sm">
                나를 표현할 수 있는 아이콘을 선택해 보세요
              </div>
            )}
          </div>

          <div className="flex gap-x-10 ml-[69px]">
            {PROFILE_EMOJI_PT1.map((emoji, index) => (
              <div key={index} onClick={() => setProfile(index)}>
                <Emoji emojiIndex={index} clickedEmoji={profile} />
              </div>
            ))}
          </div>
          <div className="flex gap-x-[30px] ml-[94px]">
            {PROFILE_EMOJI_PT2.map((emoji, index) => (
              <div key={index} onClick={() => setProfile(index + 6)}>
                <Emoji emojiIndex={index + 6} clickedEmoji={profile} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[700px] h-[80px] left-[88px] top-[950px] absolute">
        <button
          className="w-[680px] text-white bg-black py-3 rounded-[20px] text-lg"
          onClick={updateUser}
        >
          수정하기
        </button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default EditUserInfo
