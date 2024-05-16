'use client'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import MyPointContainer from '@/app/components/mypage/MyPointContainer'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import { tidState } from '@/app/recoil/coverletter'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

export default function MyPointPage() {
  const [userInfo, setUser] = useState<memberInfo | null>(null)
  const [tid, setTid] = useRecoilState(tidState)
  const router = useRouter()
  const params = useSearchParams()
  const pg_token = params.get('pg_token')

  useEffect(() => {
    if (pg_token) {
      const getTid = async () => {
        try {
          const response = await fetch('/api/kakaopay/tid/approve')
          const data = await response.json()
          setTid(data.result.tid)

          const SECRET_KEY = 'DEV0B0F086576B04B715B7404AA618D4C0B985A'
          const requestData = {
            cid: 'TC0ONETIME',
            tid: data.result.tid,
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

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/kakaopay/approve`,
            requestConfig,
          )
          const resdata = await res.json()
          console.log(resdata, '카카오 서버로 요청한 승인정보 응답')

          const req = {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({ tid: data.result.tid }),
          }

          const sendApprove = await fetch(
            `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/kakaopay/payments/approve`,
            req,
          )
          const approveRes = await sendApprove.json()
          router.push('/mypage/mypoint')
        } catch (error) {
          console.error(error)
        }
      }
      getTid()
    }
  }, [pg_token])

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
  return (
    <section className="flex flex-col min-h-screen relative">
      <Header nickname={userInfo?.memberName} />
      <div className="flex w-full h-full mb-[200px]">
        <UserNavContainer selected={'points'} nickname={userInfo?.memberName} />
        <div className="flex-grow">
          <MyPointContainer />
        </div>
      </div>
      <Footer />
    </section>
  )
}
