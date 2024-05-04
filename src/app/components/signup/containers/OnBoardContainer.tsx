'use client'

import { useState } from 'react'
import Button from '../../common/Button'
import Input from '../../common/Input'
import {
  CLASS_ENUM,
  COLLEGE,
  GRADE,
  GRADE_ENUM,
  JOB_ENUM,
  JOBKEYWORD,
  SIGNUP,
} from '@/app/constants/auth'
import Keyword from '../onboard/Keyword'
import DropDownOB from '../onboard/dropdown/DropDownOB'
import { useRecoilState } from 'recoil'
import { emailState } from '@/app/recoil/signUp'
import { useRouter } from 'next/navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { pwAlert } from '@/app/utils/toast'
import DropDownMajor from '../onboard/dropdown/DropDownMajor'

const OnBoardContainer = () => {
  const router = useRouter()
  const [password, setPassWord] = useState('')
  const [checkPW, setCheckPW] = useState('')
  const [clickedKeyword, setClickedKeyword] = useState<onlyJobType>('백엔드')
  const [grade, setGrade] = useState<GradeEnum>('1학년')
  const [college, setCollege] = useState<collegeType>('IT융합대학')
  const [major, setMajor] = useState('')
  const [email, setEmail] = useRecoilState(emailState)
  const isEntered = password !== '' && major !== ''
  const isSame = checkPW === password
  const handleClick = (keyword: onlyJobType) => {
    setClickedKeyword(keyword)
  }

  const signUp = async () => {
    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}$/.test(
        password,
      )
    ) {
      const requestBody = {
        email: email + SIGNUP.Email,
        password: password,
        grade: GRADE_ENUM[grade],
        jobKeyword: JOB_ENUM[clickedKeyword],
        major: major,
      }
      console.log(requestBody)
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
    } else {
      setPassWord((prev) => '')
      pwAlert()
    }
  }

  return (
    <div className="flex flex-col items-center mt-16 mb-4 min-h-screen">
      <ToastContainer style={{ width: 400, height: 180 }} />
      <div className="text-5xl font-semibold leading-[64px] mb-6">회원가입</div>
      <div className="text-2xl font-medium leading-[45px] mb-7">
        {SIGNUP.OnBoard}
      </div>
      <div className="flex flex-col gap-y-1.5 mb-8">
        <div className="flex flex-col">
          <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
            가천대학교 이메일
          </div>
          <div className="flex w-[700px] pl-10 h-[60px] items-center text-xl font-medium text-[#6D727C] bg-white rounded-[6px] border-[2px] border-[#C4C4C4]">
            {email + SIGNUP.Email}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-[232px]">
            <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
              비밀번호
            </div>
            <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
              비밀번호 확인
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
        <div className="flex flex-col">
          <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
            학과
          </div>
          <div className="flex gap-x-5">
            <DropDownMajor
              options={COLLEGE}
              title={'단과대를 선택'}
              onSelect={(option) => setCollege(option)}
            />
            <DropDownMajor
              options={CLASS_ENUM[college]}
              title={'학과를 선택'}
              onSelect={(option) => setMajor(option)}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-auto text-xl font-semibold leading-[30px] pl-1.5">
            학년 및 학적
          </div>
          <DropDownOB
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
              <div key={index} onClick={() => handleClick(str)}>
                <Keyword keyword={str} clickKeyword={clickedKeyword} />
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
          className={!isEntered ? 'text-[#767575] bg-white' : 'text-white'}
        />
      </div>
    </div>
  )
}

export default OnBoardContainer
