import { USER_BOARD_H } from '@/app/constants/admin'
import { userState } from '@/app/recoil/admin'
import { leftAngle, rightAngle } from '@/app/ui/IconsPath'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useRecoilState } from 'recoil'
import Icons from '../../common/Icons'
import UserInfo from './UserInfo'

const UserBoard = () => {
  const [page, setPage] = useState<number>(1)
  const [userData, setUserData] = useRecoilState(userState)

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(() => selected + 1)
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/user?page=${page - 1}`,
      )
      const resData = await res.json()
      console.log(resData, '가져온 데이터')
      setUserData(resData.result)
    }
    fetchData()
  }, [page])

  return (
    <div className="flex flex-col w-[1034px] h-[760px] mt-[22px] items-center">
      <div className="flex w-[1034px] h-[50px] pl-[37px] border-y border-[#616161] items-center text-black text-lg">
        <div className="font-bold">가입일</div>
        <div className="ml-[134px] justify-center">{USER_BOARD_H[0]}</div>
        <div className="ml-[96px]">{USER_BOARD_H[1]}</div>
        <div className="ml-[85px]">{USER_BOARD_H[2]}</div>
        <div className="ml-[92px]">{USER_BOARD_H[3]}</div>
        <div className="ml-[56px]">{USER_BOARD_H[4]}</div>
        <div className="ml-[78px]">{USER_BOARD_H[5]}</div>
      </div>
      {userData.memberList.length === 0 ? (
        <div className="flex w-full h-full items-center justify-center font-bold text-3xl pb-10">
          ❌ 검색어와 일치하는 회원이 존재하지않습니다.
        </div>
      ) : (
        userData.memberList.map((userInfo, i) => (
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
        ))
      )}
      <div className="relative h-full">
        <ReactPaginate
          className="flex absolute bottom-[260px] items-center justify-center mt-8 h-[40px] w-full gap-[20px] text-[17px]  text-[#868686] font-semibold"
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
          pageCount={userData?.totalPage || 1}
          onPageChange={handlePageChange}
          activeClassName={'active text-[#486284]'}
        />
      </div>
    </div>
  )
}

export default UserBoard
