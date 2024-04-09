import Link from 'next/link'
interface HeaderProps {
  nickname: string
  userId: number
  isPreview?: boolean
}

const Header = () => {
  return (
    <header className="w-full h-[80px] flex items-center min-w-[800px] mx-[60px] gap-x-[450px] border border-slate-600">
      <Link
        className="flex items-center justify-center gap-x-2.5"
        href={'/main'}
      >
        <div className="w-[35px] h-[35px] bg-slate-600 rounded-[100px]"></div>
        <div className="w-[150x] h-11 text-gray-900 text-[32px] font-semibold leading-[48px]">
          Meetfolio
        </div>
      </Link>
      <div className="flex gap-[40px] cursor-pointer items-center justify-center">
        <Link href="login">경험분해하기</Link>
        <Link href="login">AI자기소개서솔루션</Link>
        <Link href="login">커뮤니티</Link>
        <Link href="login">회원가입</Link>
        <button className='w-[82px] h-[38px] bg-slate-600 rounded"'>
          로그인
        </button>
      </div>
    </header>
  )
}

export default Header
