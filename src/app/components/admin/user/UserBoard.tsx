import { USER_BOARD_H } from '@/app/constants/admin'
import { leftAngle, rightAngle } from '@/app/ui/IconsPath'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Icons from '../../common/Icons'
import UserInfo from './UserInfo'

interface UserBoardProps {
  userInfoData: ResponseUser
}
const UserBoard = (userInfoData: UserBoardProps) => {
  const [page, setPage] = useState<number>(1)

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(() => selected + 1)
    window.scrollTo(0, 320)
  }
  console.log(userInfoData)

  return (
    <div className="flex flex-col w-[1034px] h-[720px] mt-[22px] items-center">
      <div className="flex w-[1034px] h-[50px] pl-[37px] border-y border-[#616161] items-center text-black text-lg">
        <div className="font-bold">가입일</div>
        <div className="ml-[134px] justify-center">{USER_BOARD_H[0]}</div>
        <div className="ml-[96px]">{USER_BOARD_H[1]}</div>
        <div className="ml-[85px]">{USER_BOARD_H[2]}</div>
        <div className="ml-[92px]">{USER_BOARD_H[3]}</div>
        <div className="ml-[56px]">{USER_BOARD_H[4]}</div>
        <div className="ml-[78px]">{USER_BOARD_H[5]}</div>
      </div>
      {userInfoData.userInfoData.memberList.map((userInfo, i) => (
        <div key={i}>
          <UserInfo
            registrationDate={'20' + userInfo.registrationDate}
            email={userInfo.email}
            grade={userInfo.grade}
            major={userInfo.major}
            jobKeyword={userInfo.jobKeyword}
            point={userInfo.point}
            userId={userInfo.memberId}
            status={userInfo.status}
          />
        </div>
      ))}
      <ReactPaginate
        className="flex items-center justify-center mt-8 h-[40px] w-full gap-[20px] text-[17px]  text-[#868686] font-semibold"
        previousLabel={
          <div className="pt-0.5">
            <Icons name={leftAngle} />
          </div>
        }
        nextLabel={
          <div className="pt-0.5">
            <Icons name={rightAngle} />
          </div>
        }
        pageCount={userInfoData.userInfoData.totalPage}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        pageLinkClassName={'pagination__link'}
        activeLinkClassName={'pagination__link__active'}
      />
    </div>
  )
}

export default UserBoard
