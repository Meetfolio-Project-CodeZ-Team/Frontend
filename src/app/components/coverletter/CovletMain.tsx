import Button from '../common/Button'
import Input from '../common/Input'
import { useRecoilState } from 'recoil'
import { expNum, expData } from '../../recoil/experience'
import { covletData } from '@/app/recoil/coverletter'

const CovletMain = () => {
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
        <div className="w-[936px] h-[179px] left-[18px] top-[900px] absolute">
          <div className="w-[936px] h-[179px] left-0 top-0 absolute bg-white rounded-[30px] shadow" />
          <div className="left-[223px] top-[24px] absolute text-center text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
            작성한 자기소개서를 다른 사용자에게 공개하시겠어요?
          </div>
          <div className="w-[428px] h-[60px] left-[256px] top-[89px] absolute justify-start items-start gap-[68px] inline-flex">
            <div className="w-[180px] h-[60px] relative">
              <div className="left-[66px] top-[10px] absolute text-slate-600 text-[26px] font-semibold font-['Plus Jakarta Sans'] leading-[39px]">
                공개
              </div>
            </div>
            <div className="w-[180px] h-[60px] relative">
              <div className="left-[58px] top-[10px] absolute text-slate-600 text-[26px] font-semibold font-['Plus Jakarta Sans'] leading-[39px]">
                비공개
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[941px] h-[857px] left-[10px] top-[18px] absolute">
        <div className="w-[941px] h-[857px] left-0 top-0 absolute">
          <div className="w-[941px] h-[857px] left-0 top-0 absolute bg-white rounded-[30px]" />
          <div className="w-[856.53px] h-[682.16px] left-[37.64px] top-[155.84px] absolute">
            <div className="w-[113.41px] h-[35.32px] left-[743.12px] top-[646.84px] absolute text-center text-black text-opacity-20 text-base font-bold font-['Plus Jakarta Sans'] leading-normal">
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
            <div className="w-[87.11px] h-[6.58px] left-[754.95px] top-[69.32px] absolute text-center text-black text-opacity-20 text-base font-bold font-['Plus Jakarta Sans'] leading-normal">
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
          <div className="w-[194.65px] h-[48.86px] left-0 top-[7px] absolute text-center text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
            새 자기소개서
          </div>
        </div>
      </div>
      <div className="w-[870px] h-[60px] left-[59px] top-[1105px] absolute">
        {/* <div className="w-[556.33px] left-[161.34px] top-[12px] absolute text-center text-slate-600 text-2xl font-semibold font-['Plus Jakarta Sans'] leading-9">
          저장하기
        </div> */}
        <button
          className="text-white  bg-stone-300 border-0 py-[18px] px-[380px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold"
          onClick={saveData}
        >
          저장하기
        </button>
      </div>
      <div className="w-[304px] h-[382.34px] left-[1050px] top-[1043px] absolute bg-slate-200 rounded-[10px]">
        <div className="w-24 h-9 px-5 left-[17.52px] top-[328.91px] absolute bg-white rounded justify-center items-center gap-2 inline-flex">
          <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
            직무
          </div>
        </div>
        <div className="w-24 h-9 px-5 left-[135.52px] top-[328.91px] absolute bg-white rounded justify-center items-center gap-2 inline-flex">
          <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
            스택
          </div>
        </div>
        <div className="w-24 h-[30px] px-5 left-[118.52px] top-[281.91px] absolute bg-blue-400 rounded-[30px] justify-center items-center gap-2 inline-flex">
          <div className="w-[76px] h-6 text-center text-gray-900 text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">
            카테고리
          </div>
        </div>
        <div className="w-[118px] h-6 left-[3.52px] top-[282.91px] absolute text-center text-gray-900 text-2xl font-semibold font-['Plus Jakarta Sans'] leading-9">
          경험 제목
        </div>
        <div className="w-56 h-[100px] left-[40px] top-[122px] absolute" />
        <div className="w-[187px] h-6 left-[17.52px] top-[251.91px] absolute text-gray-900 text-[15px] font-bold font-['Plus Jakarta Sans']">
          2024.01-2024.03
        </div>
        <div className="left-0 top-0 absolute justify-start items-start gap-[30px] inline-flex">
          <div className="flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-[304px] h-[388px] relative bg-slate-200 rounded-[10px]">
              <div className="w-24 h-9 px-5 left-[17.52px] top-[328.91px] absolute bg-white rounded justify-center items-center gap-2 inline-flex">
                <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                  직무
                </div>
              </div>
              <div className="w-24 h-9 px-5 left-[135.52px] top-[328.91px] absolute bg-white rounded justify-center items-center gap-2 inline-flex">
                <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                  스택
                </div>
              </div>
              <div className="w-24 h-[30px] px-5 left-[194px] top-[13px] absolute bg-blue-400 rounded-[30px] justify-center items-center gap-2 inline-flex">
                <div className="w-[76px] h-6 text-center text-gray-900 text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">
                  카테고리
                </div>
              </div>
              <div className="left-[17.52px] top-[282.91px] absolute text-center text-gray-900 text-2xl font-semibold font-['Plus Jakarta Sans'] leading-9">
                경험 제목
              </div>
              <div className="w-56 h-[100px] left-[40px] top-[122px] absolute" />
              <div className="w-[187px] h-6 left-[17.52px] top-[257.91px] absolute text-gray-900 text-[15px] font-bold font-['Plus Jakarta Sans']">
                2024.01-2024.03
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[463px] h-[1233px] left-[977px] top-[18px] absolute">
        <div className="w-[463px] h-[1233px] left-0 top-0 absolute bg-white rounded-tl-[30px] rounded-bl-[30px] shadow" />
        <div className="w-[361px] h-[37.12px] left-[51px] top-[23.08px] absolute text-center">
          <span className="text-black text-[25px] font-medium font-['Plus Jakarta Sans'] leading-[37.50px]">
            {' '}
          </span>
          <span className="text-black text-[22px] font-bold font-['Plus Jakarta Sans'] leading-[33px]">
            경험카드 조회
          </span>
          <span className="text-black text-[25px] font-medium font-['Plus Jakarta Sans'] leading-[37.50px]">
            {' '}
          </span>
          <span className="text-black text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">
            경험카드를 참고해 자소서를 작성해보세요
          </span>
        </div>
        <div className="w-[304px] h-[806.67px] left-[76px] top-[83.27px] absolute">
          <div className="w-[304px] h-[389.29px] left-0 top-0 absolute bg-slate-200 rounded-[10px] flex-col justify-start items-start inline-flex">
            <div className="justify-start items-start gap-[30px] inline-flex">
              <div className="flex-col justify-start items-start gap-8 inline-flex">
                <div className="w-[304px] h-[388px] relative bg-slate-200 rounded-[10px]">
                  <div className="w-24 h-9 px-5 left-[17.52px] top-[328.91px] absolute bg-white rounded justify-center items-center gap-2 inline-flex">
                    <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                      직무
                    </div>
                  </div>
                  <div className="w-24 h-9 px-5 left-[135.52px] top-[328.91px] absolute bg-white rounded justify-center items-center gap-2 inline-flex">
                    <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                      스택
                    </div>
                  </div>
                  <div className="w-24 h-[30px] px-5 left-[194px] top-[13px] absolute bg-blue-400 rounded-[30px] justify-center items-center gap-2 inline-flex">
                    <div className="w-[76px] h-6 text-center text-gray-900 text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">
                      카테고리
                    </div>
                  </div>
                  <div className="left-[17.52px] top-[282.91px] absolute text-center text-gray-900 text-2xl font-semibold font-['Plus Jakarta Sans'] leading-9">
                    경험 제목
                  </div>
                  <div className="w-56 h-[100px] left-[40px] top-[122px] absolute" />
                  <div className="w-[187px] h-6 left-[17.52px] top-[257.91px] absolute text-gray-900 text-[15px] font-bold font-['Plus Jakarta Sans']">
                    2024.01-2024.03
                  </div>
                </div>
              </div>
            </div>
            <div className="w-56 h-[100px]" />
            <div className="w-[187px] h-6 text-gray-900 text-[15px] font-bold font-['Plus Jakarta Sans']">
              2024.01-2024.03
            </div>
            <div className="w-24 h-[30px] px-5 bg-blue-400 rounded-[30px] justify-center items-center gap-2 inline-flex">
              <div className="w-[76px] h-6 text-center text-gray-900 text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">
                카테고리
              </div>
            </div>
            <div className="w-[118px] h-6 text-center text-gray-900 text-2xl font-semibold font-['Plus Jakarta Sans'] leading-9">
              경험 제목
            </div>
            <div className="w-24 h-9 px-5 bg-white rounded justify-center items-center gap-2 inline-flex">
              <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                직무
              </div>
            </div>
            <div className="w-24 h-9 px-5 bg-white rounded justify-center items-center gap-2 inline-flex">
              <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                스택
              </div>
            </div>
          </div>
          <div className="w-[304px] h-[389.29px] left-0 top-[417.38px] absolute bg-slate-200 rounded-[10px] flex-col justify-start items-start inline-flex">
            <div className="justify-start items-start gap-[30px] inline-flex">
              <div className="flex-col justify-start items-start gap-8 inline-flex">
                <div className="w-[304px] h-[388px] relative bg-slate-200 rounded-[10px]">
                  <div className="w-24 h-9 px-5 left-[17.52px] top-[328.91px] absolute bg-white rounded justify-center items-center gap-2 inline-flex">
                    <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                      직무
                    </div>
                  </div>
                  <div className="w-24 h-9 px-5 left-[135.52px] top-[328.91px] absolute bg-white rounded justify-center items-center gap-2 inline-flex">
                    <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                      스택
                    </div>
                  </div>
                  <div className="w-24 h-[30px] px-5 left-[194px] top-[13px] absolute bg-blue-400 rounded-[30px] justify-center items-center gap-2 inline-flex">
                    <div className="w-[76px] h-6 text-center text-gray-900 text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">
                      카테고리
                    </div>
                  </div>
                  <div className="left-[17.52px] top-[282.91px] absolute text-center text-gray-900 text-2xl font-semibold font-['Plus Jakarta Sans'] leading-9">
                    경험 제목
                  </div>
                  <div className="w-56 h-[100px] left-[40px] top-[122px] absolute" />
                  <div className="w-[187px] h-6 left-[17.52px] top-[257.91px] absolute text-gray-900 text-[15px] font-bold font-['Plus Jakarta Sans']">
                    2024.01-2024.03
                  </div>
                </div>
              </div>
            </div>
            <div className="w-56 h-[100px]" />
            <div className="w-[187px] h-6 text-gray-900 text-[15px] font-bold font-['Plus Jakarta Sans']">
              2024.01-2024.03
            </div>
            <div className="w-24 h-[30px] px-5 bg-blue-400 rounded-[30px] justify-center items-center gap-2 inline-flex">
              <div className="w-[76px] h-6 text-center text-gray-900 text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">
                카테고리
              </div>
            </div>
            <div className="w-[118px] h-6 text-center text-gray-900 text-2xl font-semibold font-['Plus Jakarta Sans'] leading-9">
              경험 제목
            </div>
            <div className="w-24 h-9 px-5 bg-white rounded justify-center items-center gap-2 inline-flex">
              <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                직무
              </div>
            </div>
            <div className="w-24 h-9 px-5 bg-white rounded justify-center items-center gap-2 inline-flex">
              <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                스택
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CovletMain
