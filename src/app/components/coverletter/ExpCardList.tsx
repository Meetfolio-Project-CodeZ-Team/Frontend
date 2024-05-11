import { useEffect, useState } from 'react'
import ExpCard from './ExpCard'
import Link from 'next/link'
import ExpCardDetail from './ExpCardDetail'

interface ExperienceCard {
  experienceId: number
  title: string
  startDate: string
  endDate: string
  experienceType: string
  jobKeyword: onlyJobType
  stack: string
}

const ExpCardList = () => {
  const [expCards, setExpCards] = useState<ExperienceCard[]>([])
  const [selectedCard, setSelectedCard] = useState<ExperienceCard | null>(null)

  const handleCardClick = async (card: ExperienceCard) => {
    try {
      const response = await fetch(
        `/api/mypage/myExpDetail?experienceId=${card.experienceId}`,
      )
      if (!response.ok) {
        throw new Error('상세 정보를 가져오는데 실패했습니다.')
      }
      const detailData = await response.json()
      setSelectedCard(detailData.result.experienceInfo) // Ensure this matches the data structure
    } catch (error) {
      console.error(error)
    }
  }

  const handleClose = () => {
    setSelectedCard(null)
  }

  useEffect(() => {
    console.log('카드 데이터 가져옴')

    const fetchExpCards = async () => {
      try {
        const response = await fetch('/api/mypage/myExp')
        if (!response.ok) {
          throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
        }
        const data = await response.json()
        setExpCards(data.result.experienceCardInfo.experienceCardItems)
      } catch (error) {
        console.error(error)
      }
    }
    fetchExpCards()
  }, [])
  return (
    <div className="w-[463px] h-[1000px] left-[977px] top-[18px] absolute items-center justify-center">
      <div className="w-[463px] h-[1000px] left-0 top-0 absolute bg-white rounded-tl-[30px] rounded-bl-[30px] shadow ">
        <div className="w-[361px] h-[37.12px] left-[51px] top-[23.08px] absolute text-center">
          <span className="text-black text-[25px] font-medium  leading-[37.50px]"> </span>
          <span className="text-black text-[22px] font-bold  leading-[33px]">
            경험카드 조회
          </span>
          <span className="text-black text-[25px] font-medium  leading-[37.50px]"> </span>
          <span className="text-black text-sm font-medium  leading-[21px]">
            경험카드를 참고해 자소서를 작성해보세요
          </span>
        </div>
      </div>
      {selectedCard ? (
        <ExpCardDetail task={''} motivation={''} detail={''} advance={''} {...selectedCard} closeModal={handleClose} />
      ) : (
        <div className="w-[450px] h-[900px] mt-[80px] flex flex-col flex-wrap absolute overflow-y-auto scrollbar-hide">
          <div className="w-[350px] h-full ml-[80px] ">
            {expCards.length > 0 ? (
              expCards.map((card) => (
                <ExpCard
                  key={card.experienceId}
                  {...card}
                  onClick={() => handleCardClick(card)}
                />
              ))
            ) : (
              <div className="text-center mt-[450px]">
                <p className="text-gray-500 font-semibold">
                  작성한 경험카드가 없습니다.
                </p>
                <button className="mt-[35px] px-8 py-2 bg-black text-white rounded-[30px] font-semibold">
                  <Link href="/experience">경험카드 생성하기</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
export default ExpCardList
