'use client'

import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { covletNum, tidState } from '../../recoil/coverletter'
// import LoginContainer from '@/app/components/login/LoginContainer'
import CovletMain from '@/app/components/coverletter/CovletMain'
import CovletSave from '@/app/components/coverletter/CovletSave'

import Footer from '@/app/components/layout/Footer'

import { useSearchParams } from 'next/navigation'


export default function CovletMainPage() {
  const [covletNumber, setCovletNumber] = useRecoilState(covletNum)
  const params = useSearchParams()
  const pg_token = params.get('pg_token')
  console.log('가져온 피지토큰', pg_token)
  const [tid, setTid] = useRecoilState(tidState)
  setTid(tid)
  console.log('가져온 tid', tid)

  const [userInfo, setUser] = useState<memberInfo | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/user`,
      )
      const resData = await response.json()
      setUser(resData.result)
      console.log(resData)
    }

    fetchData()
  }, [covletNumber])

  useEffect(() => {
    if (pg_token !== null) {
      const fetchData = async () => {
        const SECRET_KEY = 'DEV0B0F086576B04B715B7404AA618D4C0B985A'

        const requestData = {
          cid: 'TC0ONETIME',
          tid: tid,
          partner_order_id: 'meetfolio',
          partner_user_id: 'meetfolio',
          pg_token: pg_token,
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

        const responseData = await response.json()
        console.log(responseData, '카카오 페이 요청 응답')
      }
    }
  }, [pg_token])

  console.log(userInfo?.memberName)

  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Header nickname={userInfo?.memberName} />
      <div className="w-[1440px] mb-[250px]">
        {covletNumber === 0 && <CovletMain isEdit={false} />}
        {covletNumber === 1 && <CovletSave />}
        {/* {covletNumber === 2 && <ExpContentContainer />} */}
      </div>
      <Footer/>
    </section>
  )
}
