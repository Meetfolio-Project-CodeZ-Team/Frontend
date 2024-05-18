'use client'
import { JOBKEYWORD_USER } from '@/app/constants/auth'
import { userState } from '@/app/recoil/admin'
import { useRecoilState } from 'recoil'
import SearchInput from '../board/SearchInput'
import DropDownU from '../common/DropDownU'
import UserBoard from '../user/UserBoard'

const UserContainer = () => {
  const [userData, setUserData] = useRecoilState(userState)

  const getKeywordUser = async (selectedJob: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/user?jobKeyword=${selectedJob}`,
      )
      if (!response.ok) {
        throw new Error('Failed to fetch user data')
      }
      const userData = await response.json()
      setUserData(userData.result)
    } catch (error) {}
  }
  return (
    <div className="flex flex-col gap-y-6 bg-white w-[full] pl-[54px] pt-[27px] pb-[44px]">
      <div className="text-[28px] font-bold">회원 관리</div>
      <div className="flex items-center w-[1013px] justify-between">
        <SearchInput searchUser={true} />
        <DropDownU
          options={JOBKEYWORD_USER}
          title={'전체'}
          onSelect={(selectedOption) => getKeywordUser(selectedOption)}
        />
      </div>
      <UserBoard />
    </div>
  )
}

export default UserContainer
