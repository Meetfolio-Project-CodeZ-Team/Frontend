'use client'
import { CHECK_BUTTON, CHECK_POINT } from '@/app/constants/point'
import { useModal } from '@/app/hooks/useModal'
import { useEffect, useState } from 'react'
import Button from '../common/Button'
import ChargePoint from './ChargePoint'

interface CheckPointProps {
  closeCheck: () => void
  cost: number
  coverLetterId: number
  usingType: string
  setShowInputs: React.Dispatch<React.SetStateAction<boolean>>
  setAnalysisClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const CheckPoint = ({
  closeCheck,
  cost,
  coverLetterId,
  setShowInputs,
  setAnalysisClicked,
  usingType,
}: CheckPointProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  const [myPoint, setMyPoint] = useState(0)
  const isEnough = myPoint - cost >= 0
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

  const usingPoint = async (cost: number, coverLetterId: number) => {
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

    setShowInputs(true)
    setAnalysisClicked(true)
    closeCheck()
    if (usingType === 'USE_COVER_LETTER') window.location.reload()
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[542px] h-[574px] rounded-[20px] bg-white relative flex justify-center">
        <div className="w-[435px] h-[566px] flex flex-col items-center text-xl font-bold mt-[57px]">
          <div className="text-3xl">{CHECK_POINT[0]}</div>
          <div className="text-[#616161] text-[22px] font-medium mt-[26px]">
            {usingType === 'USE_COVER_LETTER' ? CHECK_POINT[5] : CHECK_POINT[4]}
          </div>
          <div className="absolute bottom-32 right-16 text-[#616161] text-[14px] font-medium mt-[12px]">
            {usingType === 'USE_COVER_LETTER' && CHECK_POINT[6]}
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
              <div className="text-[25px] font-medium">
                {myPoint - cost < 0
                  ? '포인트가 부족합니다'
                  : myPoint - cost + 'P'}
              </div>
            </div>
          </div>
          <div
            className="flex gap-x-4 absolute left-[48px] top-[460px]"
            onClick={handleModalClick}
          >
            <Button
              buttonText={CHECK_BUTTON[2]}
              type={'auth'}
              isDisabled={false}
              onClickHandler={closeCheck}
              className="bg-blue-400 text-white"
            />

            <Button
              buttonText={isEnough ? CHECK_BUTTON[1] : CHECK_BUTTON[0]}
              type={'auth'}
              isDisabled={false}
              onClickHandler={
                isEnough ? () => usingPoint(cost, coverLetterId) : openModal
              }
              className="bg-[black] text-white"
            />
            {isOpen && (
              <ChargePoint
                closeCharge={closeModal}
                coverLetterId={coverLetterId}
                isGuest={usingType === 'USE_COVER_LETTER'}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckPoint
