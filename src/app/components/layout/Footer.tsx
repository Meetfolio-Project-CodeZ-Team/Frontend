import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full h-[auto] bg-[#486284] text-white mt-6">
      <footer className="flex w-full h-[200px] justify-center min-w-[800px] p-[72px] gap-x-7">
        <div className="flex flex-col">
          <div className="flex w-[auto] h-[auto] pb-2 border-b-2 border-white text-base font-light ">
            <div className="border-r-2 pr-2">이용약관</div>
            <div className="border-r-2 px-2">개인정보처리방침</div>
            <div className="border-r-2 px-2">책임의 한계와 법적고지</div>
            <div className="px-2">회원정보 고객센터</div>
          </div>
          <Link href={'https://github.com/Meetfolio-Project-CodeZ-Team'}>
            <div className="flex items-center gap-x-1.5 mb-2">
              <Image
                width={24}
                height={22.5}
                src="/Images/mfLogo.webp"
                alt="logoIcon"
                style={{ width: 24, height: 22.5 }}
              />
              <div className="font-bold text-[20px]">MeetFolio</div>
              <div className="font-light text-[16px]">Copyright</div>
              <div className="font-bold text-[16px]">©MeetFolio Corp.</div>
              <div className="font-light text-[16px]">All Rights Reserved</div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex w-auto h-[20px] pb-2">
          <div className="flex items-center gap-x-2 mb-1">
            <div className="font-bold text-xl">Contributors</div>
            <Image
              width={24}
              height={24}
              src="/Images/githubIcon.webp"
              alt="github icon"
            />
          </div>
          <div className="flex items-center gap-x-1 font-medium text-base mb-2 underline">
            <Link href={'https://github.com/joowojr'} target="_blank">
              <div className="border-r-2 pr-2">Dana</div>
            </Link>
            <Link href={'https://github.com/NAKDO'} target="_blank">
              <div className="border-r-2 px-2">Nakdo</div>
            </Link>
            <Link href={'https://github.com/kylo-dev'} target="_blank">
              <div className="border-r-2 px-2">Kylo</div>
            </Link>
            <Link href={'https://github.com/Minkyu0424'} target="_blank">
              <div className="pl-2">Minkyu</div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
