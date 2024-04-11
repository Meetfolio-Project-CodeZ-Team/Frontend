import Button from '../common/Button'
import Input from '../common/Input'

const ExperienceContainer = () => {
  return (
    <div>
      <div className="w-[1311px] h-[39px] justify-start items-end inline-flex mt-[84px]">
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
        <div className="w-[437px] opacity-60 text-center">
          <span className="text-gray-900 text-[26px] font-semibold leading-[39px]">
            ³
          </span>
          <span className="text-gray-900 text-[22px] font-semibold  leading-[33px]">
            {' '}
            경험 내용
          </span>
        </div>
      </div>
      <div className="w-[1311px] h-[1.42px] relative mt-[18px]">
        <div className="w-[1311px] h-[0px] left-0 top-0 absolute border border-zinc-200"></div>
        <div className="w-[437px] h-[0px] left-0 top-[1.42px] absolute border-4 border-gray-900"></div>
      </div>
    </div>
  )
}

export default ExperienceContainer
