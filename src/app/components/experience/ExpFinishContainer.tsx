'use client'

import Button from '../common/Button'
import Input from '../common/Input'
import { useRecoilState } from 'recoil'
import { expNum, expData } from '../../recoil/experience'
import { useRouter } from 'next/navigation';

const ExpFinishContainer = () => {
  const [experienceNumber, setExperienceNumber] = useRecoilState(expNum)
  const [experienceData, setExperienceData] = useRecoilState(expData)
  const router = useRouter();

  const goToPreviousPage = () => {
    setExperienceNumber(experienceNumber - 1)
  }

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setExperienceData({
      ...experienceData,
      [event.target.name]: event.target.value,
    })
  }
  const handleButtonClick = () => {
    router.push('/main');// '/main'으로 경로 이동
  };

  const saveExpData = async () => {
    const { expStacks, ...dataToSend } = experienceData
    console.log(experienceData.stack);
    

    const response = await fetch('/api/experiences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...dataToSend,
        stack: expStacks.join(' / '),
        jobKeyword: 'AI',
      }),
    })
    console.log(experienceData.stack);
    if (!response.ok) {
      console.error('데이터 저장에 실패했습니다.')
    }
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
        <div className="w-[400px] h-[0px] left-[911px] top-[1.42px] absolute border-4 border-gray-800 "></div>
      </div>
      <form>
        <div className="w-[1200px] h-[438px] relative mt-[72px] justify-center items-center mx-auto">
          <div className="w-[1200px] h-[400px] left-0 top-0 absolute">
            <div className="w-[1200px] h-[385px] left-0 top-0 absolute bg-white rounded-[30px]" />
            <div className="w-[863px] h-[97px] left-[160px] top-[35px] absolute text-center text-black text-4xl font-semibold leading-[54px]">
              나의 활동과 경험 내용을 작성해주세요.
            </div>
          </div>
          <div className="w-[1029px] h-[272px] left-[53px] top-[128px] absolute">
            <div className="w-[195px] h-[29px] left-[26px] top-[3px] absolute bg-zinc-300 rounded-[20px]" />
            <div className="w-[190px] h-8 left-[29px] top-[4px] absolute text-center text-black text-base font-semibold leading-normal">
              나의 활동 & 경험 내용
            </div>
            <div className="w-[133px] h-[23px] left-[896px] top-[190px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
              100자 이내
            </div>
            <div className="w-[988px] h-[210px] left-[26px] top-[39px] absolute">
              <textarea
                value={experienceData.detail}
                onChange={handleTextareaChange}
                id="detail"
                name="detail"
                placeholder="ex) 개발 기간이 짧아서 최대한 빠르게 수행해야 했음"
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
              이 경험을 통해 어떤 결과와 성과를 얻었나요?
            </div>
          </div>
          <div className="w-[1029px] h-[272px] left-[53px] top-[128px] absolute">
            <div className="w-[120px] h-[29px] left-[26px] top-[3px] absolute bg-zinc-300 rounded-[20px]" />
            <div className="w-[115px] h-8 left-[29px] top-[4px] absolute text-center text-black text-base font-semibold leading-normal">
              결과 및 성과
            </div>
            <div className="w-[133px] h-[23px] left-[896px] top-[190px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
              100자 이내
            </div>
            <div className="w-[988px] h-[210px] left-[26px] top-[39px] absolute">
              <textarea
                value={experienceData.advance}
                onChange={handleTextareaChange}
                id="advance"
                name="advance"
                placeholder="ex) 팀 프로젝트를 통해 개발 및 협업 역량 향상되었음"
                maxLength={100}
                className="w-full h-[150px] text-xl bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200  resize-none outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="w-[1440px] h-20 pb-[110px] relative  mt-[50px] justify-center items-center inline-flex gap-[50px] mx-auto">
        <button
          className="text-white  bg-stone-300 border-0 py-[20px] px-[120px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold"
          onClick={goToPreviousPage}
        >
          이전으로
        </button>
        <button
          className="text-white  bg-stone-300 border-0 py-[20px] px-[120px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold"
          onClick={saveExpData}
        >
          저장하기
        </button>
      </div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="absolute w-full h-full justify-center items-center bg-black bg-opacity-50" />
        <div className="w-[550px] h-[700px] flex flex-col justify-center items-center absolute">
          <div className="w-[550px] h-[650px] relative  bg-white rounded-[20px]" />
          <div className="w-[500px] h-[500px] left-[30px] top-[55px] overflow-y-auto scrollbar-hide absolute bg-slate-200 rounded-[20px] shadow">
            <div className="w-[350px] h-9 left-[35.77px] top-[121.55px] absolute">
              <div className="w-24 h-9 px-5 left-0 top-0 absolute bg-white rounded justify-center items-center gap-2 inline-flex">
                <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold leading-normal">
                  {experienceData.jobKeyword}
                </div>
              </div>
              <div className="w-[300px] h-9 px-5 left-[117px] top-0 absolute bg-white rounded justify-center items-center gap-2 inline-flex">
                <div className="w-[240px] h-6 text-center text-gray-900 text-base font-semibold leading-normal">
                  {experienceData.expStacks.join(' / ')}
                </div>
              </div>
            </div>
            <div className="w-[110px] h-[30px] px-5 left-[359px] top-[34px] absolute bg-blue-400 rounded-[30px] justify-center items-center gap-2 inline-flex">
              <div className="w-[90px] h-6 text-center text-gray-900 text-base font-semibold leading-normal">
                {experienceData.experienceType}
              </div>
            </div>
            <div className="w-[400px] h-6 left-[30px] top-[68px] absolute text-start text-gray-900 text-2xl font-semibold leading-[45px]">
              {experienceData.title}
            </div>
            <div className="w-[300px] h-6 left-[31px] top-[34px] absolute text-gray-900 text-lg font-bold font-['Plus Jakarta Sans']">
              {experienceData.startDate}~{experienceData.endDate}
            </div>
            <div className="w-[416px] h-[172px] left-[28.77px] top-[189.55px] absolute">
              <div className="w-[118px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
                업무 사항
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
                {experienceData.task}
              </div>
            </div>
            <div className="w-[416px] h-[172px] left-[28.77px] top-[384.55px] absolute">
              <div className="w-[118px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
                경험 동기
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
                {experienceData.motivation}
              </div>
            </div>
            <div className="w-[416px] h-[172px] left-[28.77px] top-[584.55px] absolute">
              <div className="w-[250px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
              나의 활동 & 경험 내용
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
              {experienceData.detail}
              </div>
            </div>
            
            <div className="w-[416px] h-[172px] left-[28.77px] top-[784.55px] absolute">
              <div className="w-[140px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
                결과 및 성과
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
                {experienceData.advance}
              </div>
            </div>
            
          </div>
          <div className="w-[150.05px] h-[61.46px] left-[200px] top-[585px] absolute bg-black justify-center items-center rounded-[10px]">
            {/* <div className="w-[60.02px] h-[25.43px] left-[44.95px] top-[18.02px] absolute text-center text-white text-[25px] font-semibold leading-[37.50px]">
              확인
            </div> */}
            <button
              className={`w-[60.02px] h-[25.43px] left-[44.95px] top-[8px] absolute text-white  border-0 py-2 px-0 focus:outline-none rounded-[10px] text-2xl font-semibold `}
              onClick={ handleButtonClick}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpFinishContainer
