'use client'
import { JOBKEYWORD_USER } from '@/app/constants/auth'
import DropDownU from '../user/DropDownU'
import UserBoard from '../user/UserBoard'

const UserContainer = () => {
  return (
    <div className="flex flex-col gap-y-9 bg-white w-[full] pl-[54px] pt-[27px] pb-[44px]">
      <div className="text-[32px] font-bold leading-[48px]">회원관리</div>
      <div className="flex flex-row-reverse w-[1013px]">
        <DropDownU
          options={JOBKEYWORD_USER}
          title={'전체'}
          onSelect={() => console.log('클릭')}
        />
      </div>
      <UserBoard />
    </div>
  )
}

export default UserContainer
