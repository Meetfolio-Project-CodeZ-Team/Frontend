import { useRecoilState } from 'recoil'
import { expData, expNum } from '../../recoil/experience'

const ExpInfoContainer = () => {
  const [experienceNumber, setExperienceNumber] = useRecoilState(expNum)
  const [experienceData, setExperienceData] = useRecoilState(expData)

  const isEntered =
    experienceData.title !== '' &&
    experienceData.startDate !== '' &&
    experienceData.endDate !== '' &&
    experienceData.experienceType !== '' &&
    experienceData.task !== '' &&
    experienceData.motivation !== ''

  const goToNextPage = () => {
    setExperienceNumber(experienceNumber + 1)
    window.scrollTo(0, 0)
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExperienceData({
      ...experienceData,
      [event.target.name]: event.target.value,
    })
  }
  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setExperienceData({ ...experienceData, [name]: value })
  }

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setExperienceData({
      ...experienceData,
      [event.target.name]: event.target.value,
    })
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
            <div className="w-[133px] h-[23px] left-[885px] top-[94px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
              20자 이내
            </div>
            <div className="w-[988px] h-[55px] left-[5px] top-[39px] absolute">
              <input
                type="text"
                value={experienceData.title}
                onChange={handleInputChange}
                id="title"
                name="title"
                placeholder="ex) 가천대 해커톤 대회 참가"
                maxLength={20}
                className="w-full h-[50px]  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-[742px] h-[117px] left-[74px] top-[240px] absolute">
            <div className="w-[737px] h-[78px] left-[5px] top-[39px] absolute">
              <input
                type="date"
                value={experienceData.startDate}
                onChange={handleInputChange2}
                id="startDate"
                name="startDate"
                placeholder="YYYY-MM-DD"
                maxLength={10}
                max={new Date().toISOString().split('T')[0]}
                className="w-[275px] h-[45px]  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />

              <div className="w-[133px] h-[23px] left-[147px] top-[50px] absolute text-center text-black text-opacity-30 text-base font-medium leading-normal">
                ex) 2024-02-18
              </div>
              <div className="w-[66px] h-[33px] left-[333px] top-0 absolute text-center text-black text-opacity-40 text-[32px] font-semibold  leading-[48px]">
                ~
              </div>
              <div className="w-[133px] h-[23px] left-[594px] top-[50px] absolute text-center text-black text-opacity-30 text-base font-medium leading-normal">
                ex) 2024-02-18
              </div>
            </div>
            <div className="w-[290px] h-[55px] left-[452px] top-[39px] absolute">
              <input
                type="date"
                value={experienceData.endDate}
                onChange={handleInputChange2}
                id="endDate"
                name="endDate"
                placeholder="YYYY-MM-DD"
                maxLength={10}
                max={new Date().toISOString().split('T')[0]}
                min={experienceData.startDate}
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
            <div className="w-[133px] h-[23px] left-[880px] top-[94px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
              12자 이내
            </div>
            <div className="w-[988px] h-[55px] left-0 top-[39px] absolute">
              <input
                type="text"
                value={experienceData.experienceType}
                onChange={handleInputChange}
                id="experienceType"
                name="experienceType"
                placeholder="ex) 대외활동, 공모전, 인턴, 아르바이트"
                maxLength={12}
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
            <div className="w-[133px] h-[23px] left-[906px] top-[190px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
              250자 이내
            </div>
            <div className="w-[988px] h-[210px] left-[26px] top-[39px] absolute">
              <textarea
                value={experienceData.task}
                onChange={handleTextareaChange}
                id="task"
                name="task"
                placeholder="ex)  와이어 프레임 설계, AI 모델링, UI/UX 디자인 "
                maxLength={250}
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
            <div className="w-[133px] h-[23px] left-[906px] top-[190px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
              250자 이내
            </div>
            <div className="w-[988px] h-[210px] left-[26px] top-[39px] absolute">
              <textarea
                value={experienceData.motivation}
                onChange={handleTextareaChange}
                id="motivation"
                name="motivation"
                placeholder="ex)  팀 프로젝트를 통해 개발 및 협업 역량을 향상시키고 싶어서 참여함. "
                maxLength={250}
                className="w-full h-[150px] text-xl bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200  resize-none outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="w-[600px] h-20 pb-[200px] relative  mt-[10px] justify-center items-center mx-auto">
        <button
          className={`text-xl font-semibold border-0 py-[30px] px-[250px] focus:outline-none rounded-[30px] ${
            !isEntered
              ? 'bg-slate-200 text-slate-600 border-2 border-slate-600'
              : 'bg-black text-white'
          }`}
          onClick={goToNextPage}
          type="button"
          disabled={!isEntered}
        >
          다음으로
        </button>
      </div>
    </div>
  )
}

export default ExpInfoContainer
