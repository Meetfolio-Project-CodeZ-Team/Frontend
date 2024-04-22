'use client'

import MyCovlet from './MyCovlet'
import MyExpCard from './MyExpCard'

const MyExpCardDetail = () => {
  return (
    <div className="w-full h-[1090px] relative">
      <div className="w-full h-[979px] left-0 top-0 absolute bg-gray-50 " />
      <div className="w-[963px] h-[970px] left-[75px] top-[42px] absolute ">
        <div className="w-[248px] h-[30px] left-[14px] top-0 absolute justify-start items-center gap-[60px] inline-flex">
          <div className="text-gray-900 text-xl font-bold leading-[30px]">
            내 자기소개서
          </div>
          <div className="text-gray-900 text-xl font-bold leading-[30px]">
            경험 카드
          </div>
        </div>
        <div className="w-[1100px] h-[1.42px] relative mt-[35px] justify-center items-center mx-auto ">
          <div className="w-[950px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
          <div className="w-[140px] h-[0px] left-[150px] top-[1.42px] absolute border-4 border-gray-800" />
        </div>
        </div>
        <div className="w-[963px] h-[830px] left-[72px] top-[120px] absolute flex flex-row flex-wrap gap-[20px] overflow-y-auto scrollbar-hide">
          <MyExpCard/>
          <MyExpCard/>
          <MyExpCard/>
          <MyExpCard/>
          <MyExpCard/>
          <MyExpCard/>
          <MyExpCard/>
          <MyExpCard/>
          <MyExpCard/>
        </div>
        
    </div>
  )
}

export default MyExpCardDetail