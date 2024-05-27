'use client'
import JobAnal2 from '@/app/components/mypage/common/JobAnal2'
import { useModal } from '@/app/hooks/useModal'

const page = () => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)

  return (
    <div className="w-[1000px] h-[1000px] mb-[100px] relative  mt-[30px] items-center justify-center mx-auto bg-gray-50 rounded-[15px]">
      <div className="w-[981px] h-[1000px] left-0 top-0 flex items-center justify-center mx-auto relative ">
        <div className="w-[910px] h-[0px] top-[70px] absolute border  border-zinc-300"></div>
        <div className="w-[773px] h-[52px] top-[101px] absolute text-center">
          <span className="text-[#0A7AFF] text-3xl font-bold leading-[45px]">
            {'yng1404'}{' '}
          </span>
          <span className="text-black text-3xl font-bold leading-[45px]">
            님과 {'BACKEND'}의 직무 적합도는
          </span>
          <span className="bg-[#D8E9FF] text-black px-2 py-1 rounded-md text-3xl font-bold">
            {87}%
          </span>
          <span className="text-black text-3xl font-bold leading-[45px]">
            입니다.
          </span>
        </div>

        <div className=" top-[643px] absolute text-black text-2xl font-bold  leading-9">
          <span className="text-[#0A7AFF]">yng1404 </span>
          <span>님은 이런 역량이 두드러져요!</span>
        </div>
        <div className="w-[547px] h-[29px]  top-[150px] absolute text-black text-2xl font-medium  leading-9">
          👍 조금만 더 노력하면 분명 원하는 목표에 도달할 거예요!
        </div>

        <div className="w-[360px] h-[360px] left-[285px] top-[198px] absolute  justify-center items-center inline-flex">
          <div className="w-[360px] h-[360px] relative">
            <JobAnal2 jKeyword={'백엔드'} accuracy={87} all={87} />
            <div className="bg-[#0A7AFF] w-5 h-5 rounded-[100px] absolute bottom-[-24px] left-[132px]"></div>
          </div>
        </div>
        <div className="w-[618px] h-[241px] top-[713px] absolute">
          <div className="w-[618px] h-[200px] left-0 top-0 absolute justify-center items-center gap-[59px] inline-flex">
            <div className="justify-start items-start gap-2.5 flex">
              <div className="w-[150px] h-[150px] relative items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="134"
                  height="134"
                  viewBox="0 0 134 134"
                  fill="none"
                  className="absolute z-10 left-[8px] top-[8px]"
                >
                  <path
                    id="Ellipse 2524"
                    d="M67 130.5C102.07 130.5 130.5 102.07 130.5 67C130.5 31.9299 102.07 3.5 67 3.5C31.9299 3.5 3.5 31.9299 3.5 67C3.5 102.07 31.9299 130.5 67 130.5Z"
                    fill="white"
                    stroke="#CFE8FF"
                    stroke-width="7"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  viewBox="0 0 150 150"
                  fill="none"
                  className="absolute top-0"
                >
                  <path
                    id="Ellipse 2525"
                    d="M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z"
                    fill="url(#paint0_linear_1900_258)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1900_258"
                      x1="75"
                      y1="0"
                      x2="75"
                      y2="150"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#7AAAE8" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="w-[100px] h-[58px] left-[25px] top-[45px] absolute text-center text-black text-lg font-bold leading-[30px] z-20">
                  {'키워드1'}
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-2.5 flex">
              <div className="w-[200px] h-[200px] relative flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  className="absolute z-10 left-[10px] top-[10px]"
                >
                  <circle
                    id="Ellipse 2525"
                    cx="90"
                    cy="90"
                    r="85"
                    fill="white"
                    stroke="#529EFF"
                    stroke-width="10"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  className="absolute top-0"
                >
                  <path
                    id="Ellipse 2526"
                    d="M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100Z"
                    fill="url(#paint0_linear_1900_259)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1900_259"
                      x1="100"
                      y1="0"
                      x2="100"
                      y2="200"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#0A7AFF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="w-[150px] h-[60px]  left-[25px] top-[75px] absolute text-center text-black text-2xl font-bold leading-[30px] z-20">
                  {'키워드2'}
                </div>
              </div>
            </div>
            <div className="w-[150px] h-[150px] relative items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="134"
                height="134"
                viewBox="0 0 134 134"
                fill="none"
                className="absolute z-10 left-[8px] top-[8px]"
              >
                <circle
                  id="Ellipse 2526"
                  cx="67"
                  cy="67"
                  r="63.5"
                  fill="white"
                  stroke="#7AAAE8"
                  stroke-width="7"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                className="absolute top-0"
              >
                <path
                  id="Ellipse 2527"
                  d="M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z"
                  fill="url(#paint0_linear_1900_260)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1900_260"
                    x1="75"
                    y1="0"
                    x2="75"
                    y2="150"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#558BCF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="w-[100px] h-[58px] left-[25px] top-[45px] absolute text-center text-black text-lg font-bold leading-[30px] z-20">
                {'키워드3'}
              </div>
            </div>
          </div>
          <div className="w-[606px] h-[22px] left-[8px] top-[197px] absolute justify-start items-start gap-[330px] inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="138"
              height="22"
              viewBox="0 0 138 22"
              fill="none"
            >
              <ellipse
                id="Ellipse 2541"
                cx="69"
                cy="11"
                rx="69"
                ry="11"
                fill="url(#paint0_angular_1923_252)"
              />
              <defs>
                <radialGradient
                  id="paint0_angular_1923_252"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(69 11) scale(69 11)"
                >
                  <stop stop-color="#CCCCCC" />
                  <stop offset="0.235" stop-color="#B4B4B4" />
                  <stop offset="1" stop-color="#666666" />
                </radialGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="138"
              height="22"
              viewBox="0 0 138 22"
              fill="none"
            >
              <ellipse
                id="Ellipse 2541"
                cx="69"
                cy="11"
                rx="69"
                ry="11"
                fill="url(#paint0_angular_1923_252)"
              />
              <defs>
                <radialGradient
                  id="paint0_angular_1923_252"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(69 11) scale(69 11)"
                >
                  <stop stop-color="#CCCCCC" />
                  <stop offset="0.235" stop-color="#B4B4B4" />
                  <stop offset="1" stop-color="#666666" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="22"
            viewBox="0 0 180 22"
            fill="none"
            className="left-[222px] top-[219px] absolute"
          >
            <ellipse
              id="Ellipse 2542"
              cx="90"
              cy="11"
              rx="90"
              ry="11"
              fill="url(#paint0_angular_1923_253)"
            />
            <defs>
              <radialGradient
                id="paint0_angular_1923_253"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(90 11) scale(90 11)"
              >
                <stop stop-color="#D9D9D9" />
                <stop offset="1" stop-color="#737373" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="top-[12px] absolute text-center text-[#7AA9E7] text-[35px] font-bold  leading-[52.50px]">
          AI 자기소개서 직무 역량 분석
        </div>
        <div className="w-[870px] h-[40px] ml-[98px] top-[1020px] absolute ">
          <button
            className="text-white  bg-stone-300 border-0 py-[15px] px-[300px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold"
            onClick={openModal}
            type="button"
          >
            솔루션 결과 저장하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default page
