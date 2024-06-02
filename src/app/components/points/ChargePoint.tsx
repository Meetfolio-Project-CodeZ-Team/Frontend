'use client'

import { CHARGE_BUTTON, CHARGE_POINT, KAKAO_VALUE } from '@/app/constants/point'
import { tidState } from '@/app/recoil/coverletter'
import { close } from '@/app/ui/IconsPath'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Button from '../common/Button'
import Icons from '../common/Icons'
import Input from '../common/Input'

interface ChargePointProps {
  closeCharge: () => void
  coverLetterId: number
  isGuest?: boolean
}

const ChargePoint = ({
  closeCharge,
  coverLetterId,
  isGuest,
}: ChargePointProps) => {
  const router = useRouter()
  const [chargeP, setChargeP] = useState('')
  const [tid, setTid] = useRecoilState(tidState)
  const isHundred = Number(chargeP) % 100 === 0 && Number(chargeP) >= 100

  const connectPay = async () => {
    const SECRET_KEY = 'DEV0B0F086576B04B715B7404AA618D4C0B985A'
    const requestData = {
      ...KAKAO_VALUE,
      total_amount: Number(chargeP),
      approval_url:
        coverLetterId === 0
          ? `http://www.meetfolio.kro.kr:60005/mypage/mypoint`
          : isGuest === true
            ? `http://www.meetfolio.kro.kr:60005/mypage/myCovletDetail/${coverLetterId}?isGuest=true`
            : `http://www.meetfolio.kro.kr:60005/coverletter?id=${coverLetterId}`,
    }
    const requestConfig = {
      method: 'POST',
      headers: {
        Authorization: `SECRET_KEY ${SECRET_KEY}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(requestData),
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/kakaopay`,
      requestConfig,
    )

    const data = await response.json()
    setTid(data.tid)

    const requestTid = {
      point: Number(chargeP),
      payment: Number(chargeP),
      tid: data?.tid || '',
    }
    const saveTid = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(requestTid),
    }

    const resTid = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/kakaopay/tid`,
      saveTid,
    )
    const resData = await resTid.json()

    setTimeout(() => {
      router.push(data.next_redirect_pc_url)
    }, 2000)
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[542px] h-[648px] rounded-[20px] bg-white relative flex justify-center">
        <div
          className="right-[20px] top-[20px] absolute cursor-pointer"
          onClick={closeCharge}
        >
          <Icons name={close} />
        </div>
        <div className="w-[435px] h-[566px] flex flex-col items-center text-xl font-bold mt-[60px]">
          <div className="text-3xl mb-[60px]">{CHARGE_POINT[0]}</div>
          <div className="w-full flex flex-col gap-y-1">
            {CHARGE_POINT[1]}
            <Input
              inputType="number"
              type={'charge'}
              onChange={(e) => setChargeP(e.target.value)}
              textValue={chargeP}
            />
            <div
              className={`${!isHundred ? 'text-red-600' : 'text-zinc-600'} text-base font-medium mt-2 `}
            >
              {CHARGE_POINT[2]}
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-[15px] mt-6">
            {CHARGE_POINT[3]}
            <div className="text-3xl text-[#0A7AFF]">
              {chargeP.split('000').join(',000')}원
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-5 mt-6 mb-[60px]">
            {CHARGE_POINT[4]}
            <div className="flex gap-x-3.5 pl-3">
              <Input
                type={'default'}
                onChange={() => console.log('선택')}
                inputType="radio"
                className="w-[20px]"
              />
              <label className="text-xl font-medium">{CHARGE_POINT[5]}</label>
            </div>
          </div>
          <Button
            buttonText={CHARGE_BUTTON[0]}
            type={'default'}
            isDisabled={!isHundred}
            onClickHandler={() => connectPay()}
            className="bg-[#7AAAE8] text-white w-[440px] h-[70px] text-2xl font-semibold rounded-[20px]"
          />
        </div>
      </div>
    </div>
  )
}

export default ChargePoint
