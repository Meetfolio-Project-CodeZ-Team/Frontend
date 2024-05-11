'use client'

import { SetStateAction, useEffect, useState } from 'react'

import Link from 'next/link'
import { userData } from '@/app/recoil/mypage'
import Input from '../common/Input'
import {
  COLLEGE,
  CLASS_ENUM,
  GRADE,
  SIGNUP,
  JOBKEYWORD,
  GRADE_ENUM,
  JOB_ENUM,
} from '@/app/constants/auth'
import DropDownMajor from '../signup/onboard/dropdown/DropDownMajor'
import DropDownOB from '../signup/onboard/dropdown/DropDownOB'
import Keyword from '../signup/onboard/Keyword'
import Button from '../common/Button'
import { useRouter } from 'next/navigation'
import { pwAlert, updateUserInfo } from '@/app/utils/toast'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Icons from '../common/Icons'
import { eye } from '@/app/ui/eye'

interface UserInfoProps {
  memberId?: number
}

interface UserInfo {
  email: string
  grade: string
  major: string
  jobKeyword: string
  memberId?: number
}

const EditUserInfo = () => {
  const [userInfoData, setUserInfoData] = useState(userData)
  const router = useRouter()

  const [password, setPassWord] = useState('')
  const [checkPW, setCheckPW] = useState('')
  const [pw, setPw] = useState('')
  const [clickedKeyword, setClickedKeyword] = useState<onlyJobType>('백엔드')
  const [grade, setGrade] = useState<GradeEnum>('1학년')

  const [major, setMajor] = useState('')
  const isEntered = pw !== '' && major !== ''
  const isSame = checkPW === password
  const [userInfos, setUserInfos] = useState<UserInfo>()
  const [isOpen, setIsOpen] = useState(false)

  const updateUser = async () => {
    // 비밀번호 패턴 검사
    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}$/.test(
        password,
      )
    ) {
      const requestBody = {
        password: password,
        grade: GRADE_ENUM[grade],
        jobKeyword: JOB_ENUM[clickedKeyword],
        major: major,
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

        if (!response.ok) {
          throw new Error('서버 오류로 정보 수정에 실패했습니다.')
        }

        console.log('정보가 성공적으로 수정되었습니다.')
        console.log(requestBody, '수정한 회원정보 데이터')
        updateUserInfo()
      } catch (error) {
        console.error('정보 수정 중 오류가 발생했습니다:', error)
        // 사용자에게 오류 메시지 표시
        // 예: toast.error('정보 수정 중 오류가 발생했습니다.');
      }
    } else {
      // 비밀번호가 유효하지 않은 경우
      setPassWord('')
      pwAlert()
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
        console.log('유저 정보 데이터', data.result) // 타입 에러가 발생하지 않아야 함
        setUserInfos(data.result)
        setMajor(data.result.major)
        setGrade(data.result.grade)
        setClickedKeyword(data.result.jobKeyword)
      } catch (error) {
        console.error(error)
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
    return 'IT융합대학' // 찾지 못했을 경우 기본값으로 설정
  }

  useEffect(() => {
    // 전공이 변경되었을 때 단과대학도 업데이트
    setCollege(findCollegeByMajor(major))
  }, [major])

  return (
    <div className="w-full h-[1090px] relative">
      <div className="w-full h-full left-0 top-0 absolute bg-gray-50" />
      <div className="w-full h-[0px] left-[79px] top-[172px] absolute">
        <div className="w-[950px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
        <div className="w-[160px] h-[0px] left-0 top-[-1px] absolute border-2 border-gray-800" />
      </div>
      <div className="w-[280px] h-[30px] left-[100px] top-[131px] absolute justify-start items-center gap-[70px] inline-flex">
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
      <div className="w-[680px] h-[501.88px] left-[81px] top-[196px] absolute flex-col justify-start items-start gap-5 inline-flex">
        <div className="w-[241px] h-[62.88px] relative">
          <div className="w-[218px] h-[19.88px] left-[23px] top-[40px] absolute text-zinc-600 text-xl font-medium leading-[30px]">
            {userInfos?.email}
          </div>
          <div className="w-[138px] left-0 top-0 absolute text-gray-900 text-xl font-semibold leading-[30px]">
            아이디
          </div>
        </div>
        <div className="w-[700px] h-[90px] relative">
          <div className="flex ">
            <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
              현재 비밀번호
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
          <Input
            inputType={isOpen ? '' : 'password'}
            type={'login'}
            onChange={(e) => setPw(e.target.value)}
            placeholder="현재 비밀번호"
          />
          <div
            className="cursor-pointer absolute right-2"
            onMouseDown={() => setIsOpen(true)}
            onMouseUp={() => setIsOpen(false)}
          >
            <Icons name={eye} />
          </div>
        </div>
        <div className="w-[700px] h-[90px] mt-[20px] relative">
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
        <div className="w-[700px] h-[90px] relative mt-[20px] z-20">
          <div className="w-[138px] left-[6px] top-0 absolute text-gray-900 text-xl font-semibold leading-[30px]">
            학과
          </div>
          <div className="w-[700px] h-[60px] left-0 top-[30px] absolute">
            {/* <div className="w-[513.17px] h-[22.50px] left-[39.63px] top-[18.75px] absolute text-gray-900 text-xl font-medium leading-[30px]">
              {userInfos.major}
            </div> */}
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
      <div className="w-[700px] h-[80px] left-[0px] top-[668px] absolute">
        <Button
          buttonText="수정하기"
          type={'loginC'}
          isDisabled={!isEntered}
          onClickHandler={() => updateUser()}
          className={
            !isEntered
              ? 'text-slate-600 bg-gray-50 border-2 border-slate-600 '
              : 'text-white bg-black'
          }
        />
        <ToastContainer />
      </div>
    </div>
    </div>
  )
}

export default EditUserInfo
