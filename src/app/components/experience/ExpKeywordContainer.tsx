import Button from '../common/Button'
import Input from '../common/Input'

const ExpKeywordContainer = () => {
  return (
    <div className="justify-center items-center">
      <div className="w-[1440px] h-[39px] justify-center items-center mx-auto inline-flex mt-[85px] gap-[20px]">
        <div className="w-[437px] opacity-60 text-center">
          <span className="text-gray-900 text-[26px] font-semibold  leading-[39px]">
            ¹
          </span>
          <span className="text-gray-900 text-[22px] font-semibold  leading-[33px]">
            {' '}
            경험 정보
          </span>
        </div>
        <div className="w-[437px] opacity-60 text-center">
          <span className="text-gray-900 text-[26px] font-semibold  leading-[39px]">
            ²{' '}
          </span>
          <span className="text-gray-900 text-[22px] font-semibold  leading-[33px]">
            경험 키워드
          </span>
        </div>
        <div className="w-[437px] opacity-60 text-center ">
          <span className="text-gray-900 text-[26px] font-semibold leading-[39px]">
            ³
          </span>
          <span className="text-gray-900 text-[22px] font-semibold  leading-[33px]">
            {' '}
            경험 내용
          </span>
        </div>
      </div>
      <div className="w-[1311px] h-[0px] relative mt-[18px]">
        <div className="w-[1311px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
        <div className="w-[430px] h-[0px] left-[468px] top-0 absolute border-4 border-gray-800"></div>
      </div>
      <form>
        <div className="w-[1200px] h-[241px] relative mt-[82px] justify-center items-center mx-auto">
          <div className="w-[1200px] h-[241px] left-0 top-0 absolute">
            <div className="w-[1200px] h-[241px] left-0 top-0 absolute bg-white rounded-[30px] shadow" />
            <div className="w-[105px] h-11 left-[248px] top-[146px] absolute bg-gray-200 rounded-[10px]" />
            <div className="w-28 h-11 left-[245px] top-[146px] absolute text-center text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
              백엔드
            </div>
          </div>
          <div className="w-28 h-11 left-[387px] top-[146px] absolute">
            <div className="w-[105px] h-11 left-[3px] top-0 absolute bg-gray-200 rounded-[10px]" />
            <div className="w-28 h-11 left-0 top-0 absolute text-center text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
              웹 개발
            </div>
          </div>
          <div className="w-28 h-11 left-[529px] top-[146px] absolute">
            <div className="w-[105px] h-11 left-[3px] top-0 absolute bg-gray-200 rounded-[10px]" />
            <div className="w-28 h-11 left-0 top-0 absolute text-center text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
              앱 개발
            </div>
          </div>
          <div className="w-28 h-11 left-[671px] top-[146px] absolute">
            <div className="w-[105px] h-11 left-[3px] top-0 absolute bg-gray-200 rounded-[10px]" />
            <div className="w-28 h-11 left-0 top-0 absolute text-center text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
              디자인
            </div>
          </div>
          <div className="w-28 h-11 left-[813px] top-[146px] absolute">
            <div className="w-[105px] h-11 left-[3px] top-0 absolute bg-gray-200 rounded-[10px]" />
            <div className="w-28 h-11 left-0 top-0 absolute text-center text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
              AI
            </div>
          </div>
          <div className="w-[863px] h-[97px] left-[160px] top-[30px] absolute text-center">
            <span className="text-black text-4xl font-semibold font-['Plus Jakarta Sans'] leading-[54px]">
              본인이 맡았던 직무를 선택하세요.
              <br />
            </span>
            <span className="text-neutral-500 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
              * 1개만 선택
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ExpKeywordContainer
