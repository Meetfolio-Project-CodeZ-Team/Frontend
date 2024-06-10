'use client'

import ExpContentContainer from '@/app/components/experience/ExpContentContainer'
import ExpFinishContainer from '@/app/components/experience/ExpFinishContainer'
import ExpInfoContainer from '@/app/components/experience/ExpInfoContainer'
import ExpKeywordContainer from '@/app/components/experience/ExpKeywordContainer'
import Header from '@/app/components/layout/Header'
import { transKeyword } from '@/app/utils/transKeyword'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { expData, expNum } from '../../../recoil/experience'

const EditExperiencePage = ({ params }: { params: { id: string } }) => {
  const [experienceNumber, setExperienceNumber] = useRecoilState(expNum)
  const [userInfo, setUser] = useState<memberInfo | null>(null)

  const [experienceData, setExperienceData] = useRecoilState(expData)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/user`,
      )
      const resData = await response.json()
      setUser(resData.result)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setExperienceNumber(0)
  }, [])

  useEffect(() => {
    if (params.id && typeof params.id === 'string') {
      fetch(`/api/mypage/myExpDetail?experienceId=${params.id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.result && data.result.experienceInfo) {
            setExperienceData({
              ...data.result.experienceInfo,
              expStacks: data.result.experienceInfo.stack.split('/'),
              jobKeyword: transKeyword(data.result.experienceInfo.jobKeyword),
            })
          }
        })
        
    }
  }, [params.id])

  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Header nickname={userInfo?.memberName} profile={userInfo?.profile} />
      <div className="w-[1440px] mb-[250px]">
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
