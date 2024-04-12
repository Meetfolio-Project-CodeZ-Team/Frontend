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
      <div className="w-[1311px] h-[1.42px] relative mt-[18px] justify-center items-center mx-auto ">
        <div className="w-[1311px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
        <div className="w-[450px] h-[0px] left-[430px] top-[1.42px] absolute border-4 border-gray-800 "></div>
      </div>
      <form>
        <div className="w-[1200px] h-[241px] relative mt-[82px] justify-center items-center mx-auto">
          <div className="w-[1200px] h-[241px] left-0 top-0 absolute">
            <div className="w-[1200px] h-[241px] left-0 top-0 absolute bg-white rounded-[30px] shadow">
              <button className="w-[105px] h-11 left-[248px] top-[146px] absolute text-black bg-gray-200 border-0 py-2 px-0 focus:outline-none hover:bg-blue-300 rounded-[10px] text-lg">
                백엔드
              </button>
            </div>

            <div className="w-28 h-11 left-[387px] top-[146px] absolute">
              <button className="w-[105px] h-11 left-[3px] top-0 absolute text-black bg-gray-200 border-0 py-2 px-0 focus:outline-none hover:bg-blue-300 rounded-[10px] text-lg">
                웹 개발
              </button>
            </div>
            <div className="w-28 h-11 left-[529px] top-[146px] absolute">
              <button className="w-[105px] h-11 left-[3px] top-0 absolute text-black bg-gray-200 border-0 py-2 px-0 focus:outline-none hover:bg-blue-300 rounded-[10px] text-lg">
                앱 개발
              </button>
            </div>
            <div className="w-28 h-11 left-[671px] top-[146px] absolute">
              <button className="w-[105px] h-11 left-[3px] top-0 absolute text-black bg-gray-200 border-0 py-2 px-0 focus:outline-none hover:bg-blue-300 rounded-[10px] text-lg">
                디자인
              </button>
            </div>
            <div className="w-28 h-11 left-[813px] top-[146px] absolute">
              <button className="w-[105px] h-11 left-[3px] top-0 absolute text-black bg-gray-200 border-0 py-2 px-0 focus:outline-none hover:bg-blue-300 rounded-[10px] text-lg">
                AI
              </button>
            </div>
          </div>
          <div className="w-[863px] h-[97px] left-[160px] top-[25px] absolute text-center">
            <span className="text-black text-4xl font-semibold leading-[54px]">
              본인이 맡았던 직무를 선택하세요.
              <br />
            </span>
            <span className="text-neutral-500 text-base font-semibold leading-normal">
              * 1개만 선택
            </span>
          </div>
        </div>
      </form>
      <form>
        <div className="w-[1200px] h-[327px] relative mt-[62px] justify-center items-center mx-auto">
          <div className="w-[1200px] h-[327px] left-0 top-0 absolute bg-white rounded-[30px] shadow" />
          <div className="w-[773px] h-[117px] left-[194px] top-[177px] absolute">
            <div className="w-[658px] h-[55px] left-[5px] top-[39px] absolute">
              <div className="w-[608.72px] h-[38.37px] left-[23.31px] top-[8.95px] absolute text-black text-opacity-20 text-xl font-medium leading-[30px]">
                ex) 리액트 네이티브, 플러터, Spring Boot, Node.js
              </div>
            </div>
            <div className="w-[210px] h-[23px] left-[457px] top-[94px] absolute text-center text-black text-opacity-40 text-base font-medium leading-normal">
              20자 이내 (한/영 모두 가능)
            </div>
            <div className="w-[91px] h-8 left-0 top-0 absolute">
              <div className="w-[81px] h-[29px] left-[5px] top-[3px] absolute bg-zinc-300 rounded-[20px]" />
              <div className="w-[91px] h-8 left-0 top-[4px] absolute text-center text-black text-base font-semibold leading-normal">
                기술 스택
              </div>
            </div>
            <div className="w-[660px] h-[55px] left-[5px] top-[39px] absolute">
              <input
                type="text"
                id="stack"
                name="stack"
                placeholder="ex) 리액트 네이티브, 플러터, Spring Boot, Node.js"
                maxLength={50}
                className="w-full h-[50px]  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
            <div className="w-[104px] h-[55px] left-[669px] top-[39px] absolute">
              <button className="w-[104px] h-[53px] left-0 top-0 absolute text-black bg-gray-200 border-0 py-2 px-0 focus:outline-none hover:bg-blue-300 rounded-[10px] text-lg">
                추가하기
              </button>
            </div>
          </div>
          <div className="w-[863px] h-[97px] left-[168px] top-[14px] absolute text-center">
            <span className="text-black text-4xl font-semibold leading-[54px]">
              본인이 사용한 기술 스택을 입력하세요.
              <br />
            </span>
            <span className="text-neutral-500 text-base font-semibold leading-normal">
              * 최대 3개까지 추가 가능
            </span>
          </div>
        </div>
      </form>
      <div className="w-[1440px] h-20 pb-[200px] relative  mt-[80px] justify-center items-center inline-flex gap-[50px] mx-auto">
        <button className="text-white  bg-stone-300 border-0 py-[20px] px-[120px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold">
          이전으로
        </button>
        <button className="text-white  bg-stone-300 border-0 py-[20px] px-[120px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold">
          다음으로
        </button>
      </div>
    </div>
  )
}

export default ExpKeywordContainer
