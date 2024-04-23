'use client'

import Image from 'next/image'

const Footer = () => {
  return (
    <div className="relative w-full h-[auto] bg-[#486284] text-white">
      <footer className="flex w-full h-[200px] justify-center min-w-[800px] p-[72px] gap-x-7">
        <div className="flex flex-col">
          <div className="flex w-[auto] h-[auto] pb-2 border-b-2 border-white text-[14px] font-light ">
            <div className="border-r-2 pr-2">이용약관</div>
            <div className="border-r-2 px-2">개인정보처리방침</div>
            <div className="border-r-2 px-2">책임의 한계와 법적고지</div>
            <div className="px-2">회원정보 고객센터</div>
          </div>
          <div className="flex items-center gap-x-1  mb-2">
            <div className="w-3 h-3 bg-white rounded-[100px]"></div>
            <div className="font-bold text-[24px]">MeetFolio</div>
            <div className="font-light text-[14px]">Copyright</div>
            <div className="font-bold text-[14px]">©MeetFolio Corp.</div>
            <div className="font-light text-[14px]">All Rights Reserved</div>
          </div>
        </div>
        <div className="flex-col flex w-auto h-[20px]">
          <div className="flex items-center gap-x-1  mb-2">
            <div className="font-bold text-[20px]">Contributors</div>
            <Image
              width={20}
              height={20}
              src="/Images/githubIcon.png"
              alt="github icon"
            />
          </div>
          <div className="flex items-center gap-x-1 font-light text-[14px] mb-2 underline">
            <div className="border-r-2 pr-2">Dana</div>
            <div className="border-r-2 px-2">Kylo</div>
            <div className="border-r-2 px-2">Nakdo</div>
            <div className="pl-2">Minkyu</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
