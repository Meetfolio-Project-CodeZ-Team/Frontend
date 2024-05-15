import React from 'react'
import Icons from '../../common/Icons'
import { activeUser, star } from '@/app/ui/IconsPath'
import { DASHBOARD } from '@/app/constants/admin'
import Profit from '@/app/ui/svg/common/Profit'

interface UserUsageProps {
  totalCount: number
  satisfaction: number
  paymentInfo: number
}

const UserUsage = (userUsage: UserUsageProps) => {
  const { totalCount, satisfaction, paymentInfo } = userUsage
  return (
    <div className="w-[1018px] h-[120px] flex gap-x-[39px]">
      <div className=" relative w-[270px] h-[120px] rounded-[10px] border-2 border-stone-300 shadow">
        <div className="absolute left-4 top-[18px] text-[25px] font-bold">
          {DASHBOARD.User}
        </div>
        <div className="absolute left-[152px] top-[20px]">
          <Icons name={activeUser} />
        </div>
        <div className="absolute font-bold  right-[28px] top-[64px] text-[28px]">
          {totalCount} 명
        </div>
      </div>
      <div className=" relative w-[270px] h-[120px] rounded-[10px] border-2 border-stone-300 shadow">
        <div className="absolute left-4 top-[18px] text-[25px] font-bold">
          {DASHBOARD.SatisFaction}
        </div>
        <div className="absolute left-[168px] top-[21px]">
          <Icons name={star} />
        </div>
        <div className="absolute font-bold  right-[28px] top-[64px] text-[28px]">
          {satisfaction} 점
        </div>
      </div>
      <div className=" relative w-[400px] h-[120px] rounded-[10px] border-2 border-stone-300 shadow">
        <div className="absolute left-4 top-[18px] text-[25px] font-bold">
          {DASHBOARD.Profit}
        </div>
        <div className="absolute left-[116px] top-[22px]">
          <Profit />
        </div>
        <div className="absolute font-bold right-[28px] top-[64px] text-[28px]">
          {paymentInfo} KRW
        </div>
      </div>
    </div>
  )
}

export default UserUsage
