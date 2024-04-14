import { useState } from 'react'
import { useRecoilState } from 'recoil';
import { expNum } from '../../recoil/experience';
import Button from '../common/Button'
import Input from '../common/Input'

const ExpInfoContainer = () => {
  const [expTitle, setExpTitle] = useState('')
  const [expStartDate, setExpStartDate] = useState('')
  const [expEndDate, setExpEndDate] = useState('')
  const [expType, setExpType] = useState('')
  const [expTask, setExpTask] = useState('')
  const [expMotivation, setExpMotivation] = useState('')
  const [experienceNumber, setExperienceNumber] = useRecoilState(expNum)

  const goToNextPage = () => {
    setExperienceNumber(experienceNumber + 1)
  }

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
        <div className="w-[400px] h-[0px] left-0 top-[1.42px] absolute border-4 border-gray-800"></div>
      </div>
      <form>
        <div className="w-[1200px] h-[515px] relative mt-[82px] justify-center items-center mx-auto">
          <div className="w-[1200px] h-[515px] left-0 top-0 absolute bg-white rounded-[30px] " />
          <div className="w-[863px] h-[97px] left-[165px] top-[30px] absolute text-center text-black text-4xl font-semibold leading-[54px]">
            경험의 제목과 기간, 카테고리를 입력해주세요.
          </div>
          <div className="w-[1008px] h-[117px] left-[74px] top-[123px] absolute">
            <div className="w-[81px] h-[29px] left-[5px] top-[3px] absolute bg-zinc-300 rounded-[20px]" />
            <div className="w-[91px] h-8 left-0 top-[4px] absolute text-center text-black text-base font-semibold leading-normal">
              경험 제목
            </div>
            <div className="w-[133px] h-[23px] left-[875px] top-[94px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
              50자 이내
            </div>
            <div className="w-[988px] h-[55px] left-[5px] top-[39px] absolute">
              <input
                type="text"
                value={expTitle}
                onChange={(e) => setExpTitle(e.target.value)}
                id="title"
                name="title"
                placeholder="ex) 가천대 해커톤 대회 참가"
                maxLength={50}
                className="w-full h-[50px]  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-[742px] h-[117px] left-[74px] top-[240px] absolute">
            <div className="w-[737px] h-[78px] left-[5px] top-[39px] absolute">
              <input
                type="text"
                value={expStartDate}
                onChange={(e) => setExpStartDate(e.target.value)}
                id="startDate"
                name="startDate"
                placeholder="YYYY/MM/DD"
                maxLength={8}
                className="w-[275px] h-[45px]  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
              <div className="w-[133px] h-[23px] left-[157px] top-[50px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
                ex) 20240218
              </div>
              <div className="w-[66px] h-[33px] left-[333px] top-0 absolute text-center text-black text-opacity-40 text-[32px] font-semibold  leading-[48px]">
                ~
              </div>
              <div className="w-[133px] h-[23px] left-[604px] top-[50px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
                ex) 20240218
              </div>
            </div>
            <div className="w-[290px] h-[55px] left-[452px] top-[39px] absolute">
              <input
                type="text"
                value={expEndDate}
                onChange={(e) => setExpEndDate(e.target.value)}
                id="endDate"
                name="endDate"
                placeholder="YYYY/MM/DD"
                maxLength={8}
                className="w-[275px] h-[45px]  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
            <div className="w-[91px] h-8 left-0 top-0 absolute">
              <div className="w-[81px] h-[29px] left-[5px] top-[2px] absolute bg-zinc-300 rounded-[20px]" />
              <div className="w-[91px] h-8 left-0 top-[4px] absolute text-center text-black text-base font-semibold leading-normal">
                경험 기간
              </div>
            </div>
          </div>
          <div className="w-[1003px] h-[117px] left-[79px] top-[368px] absolute">
            <div className="w-[121px] h-[29px] left-0 top-[2px] absolute bg-zinc-300 rounded-[20px]" />
            <div className="w-[110px] h-8 left-[5px] top-[4px] absolute text-center text-black text-base font-semibold leading-normal">
              경험 카테고리
            </div>
            <div className="w-[133px] h-[23px] left-[870px] top-[94px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
              50자 이내
            </div>
            <div className="w-[988px] h-[55px] left-0 top-[39px] absolute">
              <input
                type="text"
                value={expType}
                onChange={(e) => setExpType(e.target.value)}
                id="experienceType"
                name="experienceType"
                placeholder="ex) 대외활동, 공모전, 인턴, 아르바이트"
                maxLength={50}
                className="w-full h-[50px]  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </form>
      <form>
        <div className="w-[1200px] h-[438px] relative mt-[72px] justify-center items-center mx-auto">
          <div className="w-[1200px] h-[400px] left-0 top-0 absolute">
            <div className="w-[1200px] h-[385px] left-0 top-0 absolute bg-white rounded-[30px]" />
            <div className="w-[863px] h-[97px] left-[160px] top-[35px] absolute text-center text-black text-4xl font-semibold leading-[54px]">
              본인이 맡았던 업무사항을 입력해주세요.
            </div>
          </div>
          <div className="w-[1029px] h-[272px] left-[53px] top-[128px] absolute">
            <div className="w-[86px] h-[29px] left-[26px] top-[3px] absolute bg-zinc-300 rounded-[20px]" />
            <div className="w-[139px] h-8 left-0 top-[4px] absolute text-center text-black text-base font-semibold leading-normal">
              업무사항
            </div>
            <div className="w-[133px] h-[23px] left-[896px] top-[190px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
              100자 이내
            </div>
            <div className="w-[988px] h-[210px] left-[26px] top-[39px] absolute">
              <textarea
                value={expTask}
                onChange={(e) => setExpTask(e.target.value)}
                id="task"
                name="task"
                placeholder="ex)  와이어 프레임 설계, AI 모델링, UI/UX 디자인 "
                maxLength={100}
                className="w-full h-[150px] text-xl bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200  resize-none outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </form>
      <form>
        <div className="w-[1200px] h-[438px] relative mt-[22px] justify-center items-center mx-auto">
          <div className="w-[1200px] h-[400px] left-0 top-0 absolute">
            <div className="w-[1200px] h-[385px] left-0 top-0 absolute bg-white rounded-[30px]" />
            <div className="w-[863px] h-[97px] left-[160px] top-[35px] absolute text-center text-black text-4xl font-semibold leading-[54px]">
              이 경험을 하게된 동기 및 이유를 입력해주세요.
            </div>
          </div>
          <div className="w-[1029px] h-[272px] left-[53px] top-[128px] absolute">
            <div className="w-[147px] h-[29px] left-[26px] top-[3px] absolute bg-zinc-300 rounded-[20px]" />
            <div className="w-[139px] h-8 left-[29px] top-[4px] absolute text-center text-black text-base font-semibold leading-normal">
              경험 동기 & 이유
            </div>
            <div className="w-[133px] h-[23px] left-[896px] top-[190px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
              100자 이내
            </div>
            <div className="w-[988px] h-[210px] left-[26px] top-[39px] absolute">
              <textarea
                value={expMotivation}
                onChange={(e) => setExpMotivation(e.target.value)}
                id="motivation"
                name="motivation"
                placeholder="ex)  팀 프로젝트를 통해 개발 및 협업 역량을 향상시키고 싶어서 참여함. "
                maxLength={100}
                className="w-full h-[150px] text-xl bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200  resize-none outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="w-[600px] h-20 pb-[200px] relative  mt-[10px] justify-center items-center mx-auto">
        <button className="text-white  bg-stone-300 border-0 py-[30px] px-[250px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold"
        onClick={goToNextPage}>
          다음으로
        </button>
      </div>
    </div>
  )
}

export default ExpInfoContainer
