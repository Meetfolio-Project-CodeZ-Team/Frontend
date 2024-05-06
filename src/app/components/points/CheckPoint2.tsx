'use client'
import { CHECK_BUTTON, CHECK_BUTTON2, CHECK_POINT } from '@/app/constants/point'
import { useModal } from '@/app/hooks/useModal'
import { pointW } from '@/app/ui/IconsPath'
import { useEffect, useState } from 'react'
import Button from '../common/Button'
import Icons from '../common/Icons'
import ChargePoint from './ChargePoint'

interface CheckPointProps {
  closeCheck: () => void
  cost: number
  coverLetterId: number
}

const CheckPoint = ({ closeCheck, cost, coverLetterId }: CheckPointProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  const [myPoint, setMyPoint] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/point/check`,
      )
      const data = await response.json()
      setMyPoint(data.result.point)
    }
    fetchData()
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[542px] h-[574px] rounded-[20px] bg-white relative flex justify-center">
        <div className="w-[435px] h-[566px] flex flex-col items-center text-xl font-bold mt-[57px]">
          <div className="text-3xl">{CHECK_POINT[0]}</div>
          <div className="text-[#616161] text-[22px] font-medium mt-[26px]">
            {CHECK_POINT[4]}
          </div>
          <div className="flex absolute left-[61px] top-[194px] gap-x-[175px]">
            <div className="flex flex-col gap-y-2">
              {CHECK_POINT[1]}
              <div className="text-3xl">{myPoint}P</div>
            </div>
            <div className="flex flex-col gap-y-2">
              {CHECK_POINT[2]}
              <div className="text-3xl text-[#0A7AFF]">{cost}P</div>
            </div>
          </div>
          <div className="w-[435.01px] h-[0px] absolute left-[50px] top-[309px] border border-zinc-600"></div>
          <div className="absolute left-[61px] top-[336px] flex gap-x-[120px]">
            <div className="flex flex-col gap-y-2 font-bold text-[20px]">
              {CHECK_POINT[3]}
              <div className="text-[25px] font-medium">{myPoint - cost}P</div>
            </div>
            <div
              className="w-[104px] h-[58px] bg-[#7AAAE8] text-white flex gap-x-2 items-center justify-center rounded-[30px] cursor-pointer"
              onClick={openModal}
            >
              <div>
                <Icons className="mt-2" name={pointW} />
              </div>
              <div className="text-[22px] font-bold">충전</div>
            </div>
          </div>
          <div className="flex gap-x-4 absolute left-[48px] top-[460px]">
            <Button
              buttonText={CHECK_BUTTON2[0]}
              type={'auth'}
              isDisabled={false}
              onClickHandler={closeCheck}
              className="bg-blue-400 text-white"
            />
            <Button
              buttonText={CHECK_BUTTON[1]}
              type={'auth'}
              isDisabled={false}
              onClickHandler={() =>
                usingPoint(cost, 'USE_COVER_LETTER  ', coverLetterId)
              }
              className="bg-[black] text-white"
            />
            <Button
              buttonText={'카카오페이'}
              type={'addBoardBtn'}
              isDisabled={false}
              onClickHandler={() => connectPay()}
              className="bg-[black] text-white"
            />
            {isOpen && <ChargePoint closeCharge={closeModal} cost={cost} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckPoint

const usingPoint = async (
  cost: number,
  usingType: string,
  coverLetterId: number,
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/point?id=${coverLetterId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: usingType,
        point: cost,
      }),
    },
  )
  if (!response.ok) {
    console.error('데이터 저장에 실패했습니다.')
  }
  const responseData = await response.json()
}

const connectPay = async () => {
  const SECRET_KEY = '11bda90090848727d27f3975448c2036'

  const requestData = {
    cid: 'TC0ONETIME',
    partner_order_id: 'meetfolio',
    partner_user_id: 'meetfolio',
    item_name: 'Meetfolio 포인트 충전',
    quantity: 1,
    total_amount: 600,
    tax_free_amount: 0,
    approval_url: 'http://localhost:3000/main',
    cancel_url: 'http://localhost:3000/login',
    fail_url: 'http://localhost:3000/signup',
  }

  const requestConfig = {
    method: 'POST',
    headers: {
      Authorization: `SECRET_KEY ${SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/kakaopay`,
    requestConfig,
  )
  const responseData = await response.json()
  console.log(responseData, '카카오 페이 요청 응답')
}
