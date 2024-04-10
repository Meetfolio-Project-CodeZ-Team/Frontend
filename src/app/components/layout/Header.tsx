import Link from 'next/link'
interface HeaderProps {
  nickname: string
  userId: number
  isPreview?: boolean
}

const Header = () => {
  return (
    <div className=" w-full border-b-2 border-[#486284]">
      <header className="w-full h-[80px] flex items-center content-between min-w-[800px] gap-x-[470px] px-[100px]">
        <Link
          className="flex items-center justify-center gap-x-2.5 h-9"
          href={'/main'}
        >
          <div className="w-9 h-9 bg-[#486284] rounded-[100px]"></div>
          <div className="w-[150x] h-11 text-[32px] font-semibold leading-[48px]">
            Meetfolio
          </div>
        </Link>
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
          <button className="w-[82px] h-[38px] bg-[#486284] text-white text-sm rounded font-medium">
            <Link href="login">로그인</Link>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
