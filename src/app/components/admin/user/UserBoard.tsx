import { USER_BOARD_H } from '@/app/constants/admin'
import UserInfo from './UserInfo'

interface UserBoardProps {
  userInfoData: ResponseUser
}
const UserBoard = (userInfoData: UserBoardProps) => {
  return (
    <div className="flex flex-col w-[1034px] h-[720px] mt-[22px]">
      <div className="flex w-[1034px] h-[50px] pl-[37px] border-y border-[#616161] items-center text-black text-lg">
        <div className="font-bold">가입일</div>
        <div className="ml-[134px] justify-center">{USER_BOARD_H[0]}</div>
        <div className="ml-[96px]">{USER_BOARD_H[1]}</div>
        <div className="ml-[85px]">{USER_BOARD_H[2]}</div>
        <div className="ml-[92px]">{USER_BOARD_H[3]}</div>
        <div className="ml-[56px]">{USER_BOARD_H[4]}</div>
        <div className="ml-[62px]">{USER_BOARD_H[5]}</div>
      </div>
      {userInfoData.userInfoData.memberList.map((userInfo, i) => (
        <UserInfo
          registrationDate={'20' + userInfo.registrationDate}
          email={userInfo.email}
          grade={userInfo.grade}
          major={userInfo.major}
          jobKeyword={userInfo.jobKeyword}
          point={userInfo.point}
        />
      ))}
    </div>
  )
}

export default UserBoard
