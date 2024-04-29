'use client'

import { close } from '@/app/ui/IconsPath'
import Icons from '../common/Icons'
import { CHARGE_BUTTON, CHARGE_POINT } from '@/app/constants/point'
import Input from '../common/Input'
import { useState } from 'react'
import Button from '../common/Button'

interface ChargePointProps {
  closeCharge: () => void
  cost: number
}

const ChargePoint = ({ closeCharge, cost }: ChargePointProps) => {
  const [chargeP, setChargeP] = useState('')

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
              type={'train'}
              onChange={(e) => setChargeP(e.target.value)}
              textValue={chargeP}
            />
            <div className="text-zinc-600 text-base font-medium mt-2">
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
            isDisabled={false}
            onClickHandler={() => chargeKakao(chargeP)}
            className="bg-[#7AAAE8] text-white w-[440px] h-[70px] text-2xl font-semibold rounded-[20px]"
          />
        </div>
      </div>
    </div>
  )
}

export default ChargePoint

const chargeKakao = async (chargeP: string) => {
  const point = Number(chargeP)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/point/charge`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ point: point, payment: point }),
    },
  )
  if (!response.ok) {
    console.error('데이터 저장에 실패했습니다.')
  }
  const responseData = await response.json()
  console.log(responseData)
}
