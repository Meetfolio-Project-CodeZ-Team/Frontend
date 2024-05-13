'use client'
import { JOBKEYWORD_USER } from '@/app/constants/auth'
import { useEffect, useState } from 'react'
import DropDownU from '../common/DropDownU'
import UserBoard from '../user/UserBoard'

interface UserContainerProps {
  userInfoData: ResponseUser
}

const UserContainer = ({ userInfoData }: UserContainerProps) => {
  const [data, setData] = useState<ResponseUser | null>(null)

  useEffect(() => {
    setData(userInfoData)
  }, [userInfoData])

  const getKeywordUser = async (selectedJob: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/user?jobKeyword=${selectedJob}`,
      )
      if (!response.ok) {
        throw new Error('Failed to fetch user data')
      }
      const userData = await response.json()
      setData(userData.result)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }
  return (
    <div className="flex flex-col gap-y-6 bg-white w-[full] pl-[54px] pt-[27px] pb-[44px]">
      <div className="text-[28px] font-bold">회원 관리</div>
      <div className="flex flex-row-reverse w-[1013px]">
        <DropDownU
          options={JOBKEYWORD_USER}
          title={'전체'}
          onSelect={(selectedOption) => getKeywordUser(selectedOption)}
        />
      </div>
      {<UserBoard userInfoData={data || userInfoData} />}
    </div>
  )
}

export default UserContainer
