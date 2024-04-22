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
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="absolute w-full h-full justify-center items-center bg-black bg-opacity-50" />
        <div className="w-[550px] h-[700px] flex flex-col justify-center items-center absolute">
          <div className="w-[550px] h-[650px] relative  bg-white rounded-[20px]" />
          <div className="w-[500px] h-[500px] left-[30px] top-[55px] overflow-y-auto scrollbar-hide absolute bg-slate-200 rounded-[20px] shadow">
            <div className="w-[350px] h-9 left-[35.77px] top-[121.55px] absolute">
              <div className="w-24 h-9 px-5 left-0 top-0 absolute bg-white rounded justify-center items-center gap-2 inline-flex">
                <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold leading-normal">
                  백엔드
                </div>
              </div>
              <div className="w-[300px] h-9 px-5 left-[117px] top-0 absolute bg-white rounded justify-center items-center gap-2 inline-flex">
                <div className="w-[240px] h-6 text-center text-gray-900 text-base font-semibold leading-normal">
                  Spring Boot / JAVA / Kotlin
                </div>
              </div>
            </div>
            <div className="w-[110px] h-[30px] px-5 left-[359px] top-[34px] absolute bg-blue-400 rounded-[30px] justify-center items-center gap-2 inline-flex">
              <div className="w-[90px] h-6 text-center text-gray-900 text-base font-semibold leading-normal">
                대외활동
              </div>
            </div>
            <div className="w-[138px] h-6 left-[31px] top-[68px] absolute text-center text-gray-900 text-3xl font-semibold leading-[45px]">
              경험 제목
            </div>
            <div className="w-[187px] h-6 left-[31px] top-[34px] absolute text-gray-900 text-xl font-bold font-['Plus Jakarta Sans']">
              2024.01-2024.03
            </div>
            <div className="w-[416px] h-[172px] left-[28.77px] top-[189.55px] absolute">
              <div className="w-[118px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
                업무 사항
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
                피그마 디자인을 도맡아서 하였구요. 경험 분해 페이지 구현 및
                설계, 설계서 작성 등
              </div>
            </div>
            <div className="w-[416px] h-[172px] left-[28.77px] top-[384.55px] absolute">
              <div className="w-[118px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
                경험 동기
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
                해커톤 대회에 참가할 생각이 없었는데 협업 경험을 해보고 싶었고
                개발능력도 향상시키고 싶어서 이 경험을 하게 되었습니다.
              </div>
            </div>
            <div className="w-[416px] h-[172px] left-[28.77px] top-[584.55px] absolute">
              <div className="w-[118px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
                경험 동기
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
                해커톤 대회에 참가할 생각이 없었는데 협업 경험을 해보고 싶었고
                개발능력도 향상시키고 싶어서 이 경험을 하게 되었습니다.
              </div>
            </div>
            <div className="w-[416px] h-[172px] left-[28.77px] top-[784.55px] absolute">
              <div className="w-[118px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
                경험 동기
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
                해커톤 대회에 참가할 생각이 없었는데 협업 경험을 해보고 싶었고
                개발능력도 향상시키고 싶어서 이 경험을 하게 되었습니다.
              </div>
            </div>
            <div className="w-[416px] h-[172px] left-[28.77px] top-[984.55px] absolute">
              <div className="w-[118px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
                경험 동기
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
                해커톤 대회에 참가할 생각이 없었는데 협업 경험을 해보고 싶었고
                개발능력도 향상시키고 싶어서 이 경험을 하게 되었습니다.
              </div>
            </div>
            <div className="w-[416px] h-[172px] left-[28.77px] top-[1184.55px] absolute">
              <div className="w-[118px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
                경험 동기
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
                해커톤 대회에 참가할 생각이 없었는데 협업 경험을 해보고 싶었고
                개발능력도 향상시키고 싶어서 이 경험을 하게 되었습니다.
              </div>
            </div>
          </div>
          <div className="w-[150.05px] h-[61.46px] left-[100px] top-[585px] absolute bg-blue-400 justify-center items-center rounded-[10px]">
            {/* <div className="w-[60.02px] h-[25.43px] left-[44.95px] top-[18.02px] absolute text-center text-white text-[25px] font-semibold leading-[37.50px]">
              확인
            </div> */}
            <button
              className={`w-[60.02px] h-[25.43px] left-[44.95px] top-[8px] absolute text-white  border-0 py-2 px-0 focus:outline-none rounded-[10px] text-2xl font-semibold `}
              // onClick={(event) => handleButtonClick('백엔드', event)}
            >
              수정
            </button> 
            
          </div>
          <div className="w-[150.05px] h-[61.46px] left-[300px] top-[585px] absolute bg-blue-400 justify-center items-center rounded-[10px]">
            {/* <div className="w-[60.02px] h-[25.43px] left-[44.95px] top-[18.02px] absolute text-center text-white text-[25px] font-semibold leading-[37.50px]">
              확인
            </div> */}
            <button
              className={`w-[60.02px] h-[25.43px] left-[44.95px] top-[8px] absolute text-white  border-0 py-2 px-0 focus:outline-none rounded-[10px] text-2xl font-semibold `}
              // onClick={(event) => handleButtonClick('백엔드', event)}
            >
              삭제
            </button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyExpCardDetail
