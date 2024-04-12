import Link from 'next/link'
interface HeaderProps {
  // nickname: string
  // userId: number
  // isPreview?: boolean
  isAdmin?: boolean
}

const Header = ({ isAdmin }: HeaderProps) => {
  return (
    <div className=" w-full border-b-2 border-[#486284]">
      <header className="w-full h-[80px] flex items-center content-between min-w-[800px] gap-x-[470px] px-[100px]">
        <Link
          href={'/main'}
          className="flex items-center justify-center gap-x-2.5 h-9"
        >
          <div className="w-9 h-9 bg-[#486284] rounded-[100px]"></div>
          <div className="flex w-[150x] h-[auto] text-[32px] font-semibold leading-[48px]">
            Meetfolio
            {isAdmin && (
              <div className="flex flex-col-reverse w-[150px] h-[auto] mb-[6px] ml-1 text-lg font-semibold leading-[27px]">
                forAdmin
              </div>
            )}
          </div>
        </Link>
        {!isAdmin ? (
          <div className="flex w-[600px] gap-[30px] h-9 text-[#486284] text-lg cursor-pointer items-center ">
            <Link href="login">경험분해하기</Link>
            <Link href="login">AI자기소개서솔루션</Link>
            <Link href="login">커뮤니티</Link>
            <div className="flex">
              <div className="w-[22px] h-[2px] origin-top-left rotate-90 opacity-80 border border-[#486284]"></div>
              <Link
                href="signup"
                className="underline underline-offset-1 text-base"
              >
                회원가입
              </Link>
            </div>
            <Link href="login">
              <button className="w-[82px] h-[38px] bg-[#486284] text-white text-sm rounded font-medium">
                로그인
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-row-reverse w-[600px] gap-[30px] h-9 text-[#486284] text-lg cursor-pointer items-center ">
            프로필
          </div>
        )}
      </header>
    </div>
  )
}

export default Header
