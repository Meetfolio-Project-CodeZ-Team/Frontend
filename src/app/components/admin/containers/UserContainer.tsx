'use client'
import { JOBKEYWORD_USER } from '@/app/constants/auth'
import DropDownU from '../common/DropDownU'
import UserBoard from '../user/UserBoard'
import { useState } from 'react'

interface UserContainerProps {
  userInfoData: ResponseUser
}

const UserContainer = ({ userInfoData }: UserContainerProps) => {
  const [data, setData] = useState<ResponseUser | null>(null)
  setData(userInfoData)
  return (
    <div className="flex flex-col gap-y-9 bg-white w-[full] pl-[54px] pt-[27px] pb-[44px]">
      <div className="text-[32px] font-bold leading-[48px]">회원 관리</div>
      <div className="flex flex-row-reverse w-[1013px]">
        <DropDownU
          options={JOBKEYWORD_USER}
          title={'전체'}
          onSelect={() => console.log('클릭')}
        />
      </div>
      <UserBoard userInfoData={userInfoData} />
    </div>
  )
}

export default UserContainer
