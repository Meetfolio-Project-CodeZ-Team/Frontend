'use client'
import { close } from '@/app/ui/IconsPath'
import Icons from '../common/Icons'
import { CHECK_BUTTON, CHECK_POINT } from '@/app/constants/point'
import Button from '../common/Button'
import { useEffect, useState } from 'react'
import { useModal } from '@/app/hooks/useModal'
import ChargePoint from './ChargePoint'

interface CheckPointProps {
  closeCheck: () => void
  cost: number
  coverLetterId: number
}

const CheckPoint = ({ closeCheck, cost, coverLetterId }: CheckPointProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  const [myPoint, setMyPoint] = useState(0)
  console.log(coverLetterId, '자소서 번호')

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
      <div className="w-[542px] h-[648px] rounded-[20px] bg-white relative flex justify-center">
        <div
          className="right-[20px] top-[20px] absolute cursor-pointer"
          onClick={closeCheck}
        >
          <Icons name={close} />
        </div>
        <div className="w-[435px] h-[566px] flex flex-col items-center text-xl font-bold gap-y-12 mt-[65px]">
          <div className="text-3xl">{CHECK_POINT[0]}</div>
          <div className="w-full flex flex-col gap-y-4">
            {CHECK_POINT[1]}
            <div className="text-3xl">{myPoint}P</div>
          </div>
          <div className="w-full flex flex-col gap-y-4">
            {CHECK_POINT[2]}
            <div className="text-3xl text-[#0A7AFF]">{cost}P</div>
          </div>
          <div className="w-full flex flex-col gap-y-4">
            {CHECK_POINT[3]}
            <div className="text-3xl">{myPoint - cost}P</div>
          </div>
          <div className="flex gap-x-4">
            <Button
              buttonText={CHECK_BUTTON[0]}
              type={'auth'}
              isDisabled={false}
              onClickHandler={openModal}
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
