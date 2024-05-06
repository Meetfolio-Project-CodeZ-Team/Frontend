import Button from '../common/Button'
import Input from '../common/Input'
import { useRecoilState } from 'recoil'
import { expNum, expData } from '../../recoil/experience'
import { covletData } from '@/app/recoil/coverletter'
import ExpCard from '@/app/components/coverletter/ExpCard'
import AiFeedContainer from './AiFeedContainer'

const CovletAiFeed = () => {
  const [experienceNumber, setExperienceNumber] = useRecoilState(expNum)
  const [experienceData, setExperienceData] = useRecoilState(expData)
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)

  const goToPreviousPage = () => {
    setExperienceNumber(experienceNumber - 1)
  }

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setCoverLetterData({
      ...coverletterData,
      [event.target.name]: event.target.value,
    })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoverLetterData({
      ...coverletterData,
      [event.target.name]: event.target.value,
    })
  }

  const handleButtonClick = (type: string, event: React.MouseEvent) => {
    event.preventDefault()
    setCoverLetterData({ ...coverletterData, shareType: type })
  }

  const saveData = async () => {
    // 서버로 데이터를 보내는 코드를 여기에 작성해주세요.
    // 예를 들어, fetch API를 사용할 수 있습니다.
    const response = await fetch('/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(experienceData),
    })

    if (!response.ok) {
      // 에러 처리를 여기에 작성해주세요.
      console.error('데이터 저장에 실패했습니다.')
    }
  }
  return (
    <div className="w-[1440px] h-[1319px] relative">
      <div className="w-[1440px] h-[1187px] left-0 top-0 absolute">
        <div className="w-[941px] h-[488px] left-[10px] top-[900px] relative">
          <div className="w-[941px] h-[488px] left-0 top-0 absolute bg-white rounded-[30px] shadow" />
          <div className="left-[257px] top-[23px] absolute text-center text-black text-2xl font-bold leading-9">
            강조하고 싶은 키워드와 지원 직무를 입력하고 ,<br />
            자기소개서 AI 솔루션을 받아보세요!
          </div>
          <div className="w-[845px] h-[118.08px] left-[53px] top-[144.67px] absolute inline-flex gap-[20px]">
            <div className="w-[255px] h-[118.08px] left-0 top-0 absolute">
              {' '}
              // 키워드1
              <div className="w-[255px] h-[86.65px] left-0 top-0 absolute">
                <div className="w-[91.33px] h-[31.50px] left-0 top-0 absolute">
                  <div className="w-[91.33px] h-[28.55px] left-0 top-[2.95px] absolute bg-zinc-300 rounded-[20px]" />
                  <div className="w-[79.30px] h-[31.50px] left-[5.37px] top-[5px] absolute text-center text-black text-base font-bold leading-normal">
                    키워드1
                  </div>
                </div>
                <input
                  type="text"
                  value={coverletterData.keyword1}
                  onChange={handleInputChange}
                  id="keyword1"
                  name="keyword1"
                  placeholder="ex) 문제 해결 능력"
                  maxLength={12}
                  className="w-[245px] h-[45px] left-0 top-[40px] absolute  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
                />
              </div>
              <div className="w-[85.71px] h-[22.64px] left-[165px] top-[85px] absolute text-center text-black text-opacity-20 text-base font-bold leading-normal">
                12자 이내
              </div>
            </div>
            <div className="w-[258px] h-[117.68px] left-[292px] top-0 absolute">
              {' '}
              // 키워드2
              <div className="w-[91.33px] h-[31.50px] left-0 top-0 absolute">
                <div className="w-[91.33px] h-[28.55px] left-0 top-[2.95px] absolute bg-zinc-300 rounded-[20px]" />
                <div className="w-[79.30px] h-[31.50px] left-[5.37px] top-[5px] absolute text-center text-black text-base font-bold leading-normal">
                  키워드2
                </div>
              </div>
              <input
                type="text"
                value={coverletterData.keyword2}
                onChange={handleInputChange}
                id="keyword2"
                name="keyword2"
                placeholder="ex) 도전 정신"
                maxLength={12}
                className="w-[245px] h-[45px] left-0 top-[40px] absolute  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
              <div className="w-[85.71px] h-[22.64px] left-[165px] top-[85px] absolute text-center text-black text-opacity-20 text-base font-bold leading-normal">
                12자 이내
              </div>
            </div>
            <div className="w-[258px] h-[117.68px] left-[587px] top-0 absolute">
              {' '}
              // 지원직무
              <div className="w-[91.33px] h-[31.50px] left-0 top-0 absolute">
                <div className="w-[91.33px] h-[28.55px] left-0 top-[2.95px] absolute bg-zinc-300 rounded-[20px]" />
                <div className="w-[79.30px] h-[31.50px] left-[5.37px] top-[5px] absolute text-center text-black text-base font-bold leading-normal">
                  지원직무
                </div>
              </div>
              <input
                type="text"
                value={''}
                onChange={handleInputChange}
                id="job"
                name="job"
                placeholder="ex) 웹퍼블리셔"
                maxLength={12}
                className="w-[245px] h-[45px] left-0 top-[40px] absolute  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
              <div className="w-[85.71px] h-[22.64px] left-[165px] top-[85px] absolute text-center text-black text-opacity-20 text-base font-bold leading-normal">
                12자 이내
              </div>
            </div>
          </div>
          <div className="w-[315px] h-[64.07px] left-[120px] top-[314.01px] absolute">
            <button
              className={`w-[280px] h-[60px] relative text-slate-600 bg-gray-200 border-0 py-2 px-0 focus:outline-none rounded-[30px] text-2xl font-semibold`}
              // onClick={(event) => handleButtonClick('공개', event)}
            >
              AI 피드백
            </button>
          </div>
          <div className="w-[315px] h-[64.07px] left-[560px] top-[315.01px] absolute">
            <button
              className={`w-[280px] h-[60px] relative text-slate-600 bg-gray-200 border-0 py-2 px-0 focus:outline-none rounded-[30px] text-2xl font-semibold`}
              // onClick={(event) => handleButtonClick('공개', event)}
            >
              AI 직무 역량 분석
            </button>
          </div>
          <div className="w-[785px] h-[54px] left-[80px] top-[395.17px] absolute justify-start items-start gap-[95px] inline-flex">
            <div className="text-center">
              <span className="text-black text-opacity-70 text-lg font-semibold leading-[27px]">
                첨삭 및 맞춤법 검사
              </span>
              <span className="text-black text-opacity-45 text-lg font-medium leading-[27px]">
                {' '}
                결과를 제공하고
                <br />
                AI가 사용자에 맞는
              </span>
              <span className="text-black text-opacity-70 text-lg font-semibold leading-[27px]">
                {' '}
                자기소개서 문항
              </span>
              <span className="text-black text-opacity-45 text-lg font-medium leading-[27px]">
                을 추천합니다.
              </span>
            </div>
            <div className="text-center">
              <span className="text-black text-opacity-45 text-lg font-medium leading-[27px]">
                Meetfolio만의 AI 분석 기능으로
                <br />
              </span>
              <span className="text-black text-opacity-70 text-lg font-semibold leading-[27px]">
                내 직무 역량 및 적합도{' '}
              </span>
              <span className="text-black text-opacity-45 text-lg font-medium leading-[27px]">
                분석 결과를 제공합니다.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[941px] h-[857px] left-[10px] top-[18px] absolute">
        <div className="w-[941px] h-[857px] left-0 top-0 absolute">
          <div className="w-[941px] h-[857px] left-0 top-0 absolute bg-white rounded-[30px]" />
          <div className="w-[856.53px] h-[682.16px] left-[37.64px] top-[155.84px] absolute">
            <div className="w-[113.41px] h-[35.32px] left-[743.12px] top-[646.84px] absolute text-center text-black text-opacity-20 text-base font-bold  leading-normal">
              1000자 이내
            </div>
            <div className="w-[842.50px] h-[647.41px] left-0 top-0 absolute">
              <textarea
                value={coverletterData.answer}
                onChange={handleTextareaChange}
                id="answer"
                name="answer"
                placeholder="질문에 대한 답변을 적어보세요."
                maxLength={1000}
                className="w-full h-[640px] text-lg bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200  resize-none outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
          </div>
        </div>
        <div className="w-[856.48px] h-[131.21px] left-[26.89px] top-[3.74px] absolute">
          <div className="w-[842.50px] h-[75.90px] left-[13.98px] top-[55.31px] absolute">
            <div className="w-[87.11px] h-[6.58px] left-[754.95px] top-[69.32px] absolute text-center text-black text-opacity-20 text-base font-bold  leading-normal">
              100자 이내
            </div>
            <div className="w-[842.50px] h-[60.48px] left-0 top-0 absolute">
              <input
                type="text"
                value={coverletterData.question}
                onChange={handleInputChange}
                id="question"
                name="question"
                placeholder="문항 질문을 적어보세요"
                maxLength={100}
                className="w-full h-[60px]  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200  text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-[194.65px] h-[48.86px] left-0 top-[7px] absolute text-center text-black text-2xl font-bold  leading-9">
            새 자기소개서
          </div>
        </div>
      </div>
      <div className="w-[941px] h-[943px] left-[10px] top-[1420px] absolute bg-white rounded-[20px]">
        <AiFeedContainer />
      </div>
      <div className="w-[1000px] h-[60px] left-[42px] top-[2390px] absolute pb-[150px]">
        {/* <div className="w-[556.33px] left-[161.34px] top-[12px] absolute text-center text-slate-600 text-2xl font-semibold  leading-9">
          저장하기
        </div> */}
        <button
          className="text-white bg-stone-300 border-0 py-[18px] px-[360px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold"
          onClick={saveData}
        >
          솔루션 결과 저장하기
        </button>
      </div>
      <div className="w-[463px] h-[2330px] left-[977px] top-[18px] absolute items-center justify-center">
        <div className="w-[463px] h-[2330px] left-0 top-0 absolute bg-white rounded-tl-[30px] rounded-bl-[30px] shadow" />
        <div className="w-[361px] h-[37.12px] left-[51px] top-[23.08px] absolute text-center">
          <span className="text-black text-[25px] font-medium  leading-[37.50px]">
            {' '}
          </span>
          <span className="text-black text-[22px] font-bold  leading-[33px]">
            경험카드 조회
          </span>
          <span className="text-black text-[25px] font-medium  leading-[37.50px]">
            {' '}
          </span>
          <span className="text-black text-sm font-medium  leading-[21px]">
            경험카드를 참고해 자소서를 작성해보세요
          </span>
        </div>
        <div className="w-[450px] h-[2250px] mt-[80px] flex flex-col absolute overflow-y-auto scrollbar-hide">
          <div className="w-[350px] h-full ml-[80px] gap-[20px]">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CovletAiFeed
