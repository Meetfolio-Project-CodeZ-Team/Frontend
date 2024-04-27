'use client'

import { useEffect, useState } from 'react'

interface CardDetailProps {
  closeModal: () => void
  experienceId: number
}

const CardDetail = ({ closeModal, experienceId }: CardDetailProps) => {
  const [cardData, setCardData] = useState<ExperienceDataTypes | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `/api/mypage/myExpDetail?experienceId=${experienceId}`,
      )
      if (!response.ok) {
        throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
      }
      const data = await response.json()
      console.log(data.result.experienceInfo, '상세 조회') // 타입 에러가 발생하지 않아야 함
      setCardData(data.result.experienceInfo)
    }
    fetchData()
  }, [experienceId])

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="w-[548px] h-[234px] rounded-[15px] bg-[#D3DCE7] relative">
        {' '}
        방가왕
      </div>
    </div>
  )
}

export default CardDetail
