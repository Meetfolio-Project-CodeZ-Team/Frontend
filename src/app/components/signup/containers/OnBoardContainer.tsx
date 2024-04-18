'use client'

import { useState } from 'react'
import Button from '../../common/Button'
import Input from '../../common/Input'
import { GRADE, GRADE_ENUM, JOBKEYWORD, SIGNUP } from '@/app/constants/auth'
import Keyword from '../onboard/Keyword'
import DropDown from '../onboard/dropdown/DropDownOB'
import { useRecoilState } from 'recoil'
import { emailState } from '@/app/recoil/signUp'
import { useRouter } from 'next/navigation'

const OnBoardContainer = () => {
  const router = useRouter()
  const [password, setPassWord] = useState('')
  const [clickedKeyword, setClickedKeyword] = useState('')
  const [grade, setGrade] = useState('')
  const [major, setMajor] = useState('')
  const [email, setEmail] = useRecoilState(emailState)
  const isEntered =
    clickedKeyword !== '' && password !== '' && grade !== '' && major !== ''
  const handleClick = (keyword: string) => {
    setClickedKeyword(keyword)
  }
  const signUp = async () => {
    const requestBody = {
      email: email + SIGNUP.Email,
      password: password,
      grade: getGradeValue(grade),
      jobKeyword: getJOBValue(clickedKeyword),
      major: 'COMPUTER_ENGINEERING',
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/signup`,
      requestOptions,
    )
    router.push('/signup/complete')
  }

  return (
    <div className="flex flex-col items-center mt-[95px]">
      <div className="text-5xl font-semibold leading-[75px] mb-6">회원가입</div>
      <div className="text-3xl font-medium leading-[45px] mb-7">
        {SIGNUP.OnBoard}
      </div>
      <div className="flex flex-col gap-y-1.5 mb-8">
        <div className="flex flex-col">
          <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
            가천대 이메일
          </div>
          <div className="flex w-[700px] pl-10 h-[60px] items-center text-xl font-medium text-[#6D727C] bg-white rounded-[6px] border-[2px] border-[#C4C4C4]">
            {email + SIGNUP.Email}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
            비밀번호
          </div>
          <Input
            type={'onboard'}
            onChange={(e) => setPassWord(e.target.value)}
            placeholder={SIGNUP.Password}
          />
        </div>
        <div className="flex flex-col">
          <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
            학과
          </div>
          <Input
            type={'onboard'}
            onChange={(e) => setMajor(e.target.value)}
            placeholder="본인 학과 입력"
          />
        </div>
        <div className="flex flex-col">
          <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
            학년 및 학적
          </div>
          <DropDown
            options={GRADE}
            title="본인 학년 선택"
            onSelect={(option) => setGrade(option)}
          />
        </div>
        <div className="flex flex-col">
          <div className="w-auto  text-xl font-semibold leading-[30px] pl-1.5">
            희망직무
          </div>
          <div className="flex gap-x-8">
            {JOBKEYWORD.map((str, index) => (
              <div onClick={() => handleClick(str)}>
                <Keyword
                  keyword={str}
                  key={index}
                  clickKeyword={clickedKeyword}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <Button
          buttonText="가입하기"
          type={'loginB'}
          isDisabled={!isEntered}
          onClickHandler={() => signUp()}
          className={!isEntered ? 'text-[#b5b5b5] bg-white' : ''}
        />
      </div>
    </div>
  )
}

export default OnBoardContainer
const getGradeValue = (grade: string): string => {
  switch (grade) {
    case '1학년':
      return 'FRESHMAN'
    case '2학년':
      return 'SOPHOMORE'
    case '3학년':
      return 'JUNIOR'
    case '4학년':
      return 'SENIOR'
    case '졸업생':
      return 'GRADUATE'
    default:
      return ''
  }
}
const getJOBValue = (job: string): string => {
  switch (job) {
    case '백엔드':
      return 'BACKEND'
    case '웹 개발':
      return 'WEB'
    case '앱 개발':
      return 'APP'
    case '디자인':
      return 'DESIGN'
    case 'AI':
      return 'AI'
    default:
      return ''
  }
}
