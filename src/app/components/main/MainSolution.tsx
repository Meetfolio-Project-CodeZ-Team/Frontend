import { SOLUTION } from '@/app/constants/main'
import Ability from '@/app/ui/svg/main/Ability'
import Experience from '@/app/ui/svg/main/Experience'
import Feedback from '@/app/ui/svg/main/Feedback'
import Line from '@/app/ui/svg/main/Line'

const MainSolution = () => {
  return (
    <div className="flex flex-col items-center mt-[97px]">
      <div className="text-[#486283] text-5xl font-medium leading-[72px]">
        {SOLUTION.Title}
      </div>
      <div className="flex text-center mt-10  text-lg font-normal leading-[27px] gap-x-3 mb-14">
        <p>{SOLUTION.Step[0]}</p>
        <p>{SOLUTION.Step[1]}</p>
        <p>{SOLUTION.Step[2]}</p>
        <p>{SOLUTION.Step[3]}</p>
        <p>{SOLUTION.Step[4]}</p>
      </div>
      <div className="flex gap-x-4 items-center justify-center">
        <Experience />
        <Line />
        <Feedback />
        <Line />
        <Ability />
      </div>
      <div className="flex justify-center mt-6 text-2xl font-bold leading-9">
        <p>{SOLUTION.Step[0]}</p>
        <p className=" ml-[336px] mr-[324px]">{SOLUTION.Step[2]}</p>
        <p>{SOLUTION.Step[4]}</p>
      </div>
      <div className="flex justify-center mt-5 text-lg font-semibold leading-9 gap-x-[164px]">
        <div className="w-[337px] h-[62px] text-center font-normal leading-[29.75px]">
          <span>{SOLUTION.Explanation1[0]}</span>
          <span className="font-bold">{SOLUTION.Explanation1[1]}</span>
          <span>
            {SOLUTION.Explanation1[2]}
            <br />
          </span>
          <span>{SOLUTION.Explanation1[3]}</span>
        </div>
        <div className="w-[360px] h-[62px] text-center font-normal leading-[29.75px]">
          <span className="font-bold">{SOLUTION.Explanation2[0]}</span>
          <span>
            {SOLUTION.Explanation2[1]} <br />
          </span>
          <span>{SOLUTION.Explanation2[2]}</span>
          <span className="font-bold">{SOLUTION.Explanation2[3]}</span>
          <span>{SOLUTION.Explanation2[4]}</span>
        </div>
        <div className="w-[360px] h-[62px] text-center font-normal leading-[29.75px]">
          <span>{SOLUTION.Explanation3[0]}</span>
          <span className="font-bold">{SOLUTION.Explanation3[1]}</span>
          <span>
            {SOLUTION.Explanation3[2]} <br />
          </span>
          <span className="font-bold">{SOLUTION.Explanation3[3]}</span>
          <span>{SOLUTION.Explanation3[4]}</span>
        </div>
      </div>
    </div>
  )
}

export default MainSolution
