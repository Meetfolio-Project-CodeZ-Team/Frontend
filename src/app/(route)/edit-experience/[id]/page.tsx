'use client'

import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/navigation'
import { expNum, expData } from '../../../recoil/experience'
import Header from '@/app/components/layout/Header'
import ExpInfoContainer from '@/app/components/experience/ExpInfoContainer'
import ExpKeywordContainer from '@/app/components/experience/ExpKeywordContainer'
import ExpContentContainer from '@/app/components/experience/ExpContentContainer'
import ExpFinishContainer from '@/app/components/experience/ExpFinishContainer'
import { JOB_ENUM } from '@/app/constants/auth'
import { userState } from '@/app/recoil/signUp'

const EditExperiencePage = ({ params }: { params: { id: string } }) => {
  const [experienceNumber, setExperienceNumber] = useRecoilState(expNum)
  const [userInfo, setUser] = useRecoilState(userState)

  const [experienceData, setExperienceData] = useRecoilState(expData)
  console.log(experienceData)
  const router = useRouter()

  useEffect(() => {
    // ID가 정의되어 있고 유효한 경우에만 데이터를 가져옵니다.
    if (params.id && typeof params.id === 'string') {
      // id의 존재성과 문자열 타입 확인
      fetch(`/api/mypage/myExpDetail?experienceId=${params.id}`) // 쿼리 파라미터로 id 사용
        .then((response) => response.json())
        .then((data) => {
          if (data && data.result && data.result.experienceInfo) {
            setExperienceData({
              ...data.result.experienceInfo,
              expStacks: data.result.experienceInfo.stack.split('/'),
              jobKeyword: transKeyword(data.result.experienceInfo.jobKeyword),
            })
            // experienceNumber는 서버 응답에 따라 조정되어야 합니다. 현재 API 응답에 이 값이 포함되어 있지 않다면 다른 로직이 필요합니다.
          }
        })
        .catch((error) => {
          console.error('Failed to fetch experience details:', error)
        })
    }
  }, [params.id])

  return (
    <section className="flex flex-col items-center min-h-screen">
      <Header profile={userInfo.memberName} />
      <div className="w-[1440px] mb-10">
        {experienceNumber === 0 && <ExpInfoContainer />}
        {experienceNumber === 1 && <ExpKeywordContainer />}
        {experienceNumber === 2 && (
          <ExpContentContainer isEdit={true} id={params.id} />
        )}
        {experienceNumber === 3 && <ExpFinishContainer />}
      </div>
    </section>
  )
}

export default EditExperiencePage
const transKeyword = (keyword: string) => {
  switch (keyword) {
    case '백엔드':
      return 'BACKEND'
    case 'AI':
      return 'AI'
    case '웹개발':
      return 'WEB'
    case '앱개발':
      return 'APP'
    case '디자인':
      return 'DESIGN'
  }
}
