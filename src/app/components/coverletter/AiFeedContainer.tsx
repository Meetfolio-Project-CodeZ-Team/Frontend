import { successCopy } from "@/app/utils/toast"
import { useEffect, useState } from "react";

interface FeedbackData {
  feedback: string;
  recommend: string[];
}

const AiFeedContainer = () => {

  const [feedbackData, setFeedbackData] = useState<FeedbackData | null>(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await fetch('/api/coverletters/feedback');  // 가정된 API 경로
      if (!response.ok) {
        console.error('Failed to fetch feedback');
        return;
      }
      const data = await response.json();
      setFeedbackData(data);
    };

    fetchFeedback();
  }, []);
  
  const handleCopyText = () => {
    const textArea = document.getElementById('answer') as HTMLTextAreaElement
    if (textArea) {
      // 텍스트 영역을 선택합니다.
      textArea.select()
      textArea.setSelectionRange(0, 99999) // 모바일 기기를 위해

      // 복사 명령을 실행합니다.
      try {
        const successful = document.execCommand('copy')
        const msg = successful ? 'successful' : 'unsuccessful'
        console.log('Copy text command was ' + msg)
        successCopy()
      } catch (err) {
        console.error('Unable to copy text: ', err)
        alert('Failed to copy text.')
      }
    }
  }

  return (
    <div className="w-[931px] h-[958px] relative mt-[30px] items-center justify-center mx-auto bg-gray-50 rounded-[15px]">
      <div className="w-[931px] h-[958px] left-0 top-0 flex">
        <div className="w-[854px] h-[420px] left-[42px] top-[81px] absolute text-black text-xl font-medium font-['Plus Jakarta Sans'] leading-[30px]">
          {feedbackData?.feedback}
        </div>
      </div>
      <div className="w-[183px] h-[49px] left-[373px] top-[18px] absolute text-center text-blue-400 text-3xl font-bold font-['Plus Jakarta Sans'] leading-[45px]">
        AI 피드백
      </div>
      <div className="w-[817px] h-[158px] left-[64px] top-[636px] absolute">
        <div className="w-3.5 h-3.5 left-0 top-[15px] absolute bg-slate-600 rounded-full" />
        <div className="w-3.5 h-3.5 left-0 top-[72px] absolute bg-slate-600 rounded-full" />
        <div className="w-3.5 h-3.5 left-0 top-[129px] absolute bg-slate-600 rounded-full" />
        <div className="w-[792px] h-[158px] left-[25px] top-0 absolute">
          <div className="w-[684px] h-11 left-0 top-0 absolute bg-blue-300 rounded-[10px]" />
          <div className="w-[789px] h-11 left-0 top-[114px] absolute bg-blue-300 rounded-[10px]" />
          <div className="w-[737px] h-11 left-0 top-[57px] absolute bg-blue-300 rounded-[10px]" />
          <ul>
          {feedbackData?.recommend.map((item, index) => (
            <li key={index} className="text-base">{item}</li>
          ))}
        </ul>
        </div>
      </div>
      <div className="w-[228px] h-[49px] left-[366px] top-[579px] absolute text-center text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
        추천 자기소개서 문항
      </div>
      <div className="w-[265px] h-[104px] left-[347px] top-[821px] absolute">
        <div className="w-[265px] h-[49px] left-0 top-0 absolute text-center text-black text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">
          AI 피드백에 대한 나의 만족도는?
        </div>
        <div className="w-[170px] h-[49px] left-[37px] top-[55px] absolute">
          <div className="w-[27.60px] h-6 pl-0.5 pr-[5.60px] py-0.5 left-0 top-0 absolute rounded-xl justify-center items-center inline-flex">
            <div className="w-5 h-5 relative rounded-[10px] border-2 border-blue-600 flex-col justify-start items-start flex">
              <div className="w-2.5 h-2.5 bg-blue-600 rounded-[5px]" />
            </div>
          </div>
          <div className="w-[27.60px] h-6 pl-0.5 pr-[5.60px] py-0.5 left-[35.32px] top-0 absolute rounded-xl justify-center items-center inline-flex">
            <div className="w-5 h-5 relative rounded-[10px] border-2 border-slate-400 flex-col justify-start items-start flex">
              <div className="w-2.5 h-2.5 bg-slate-400 rounded-[5px]" />
            </div>
          </div>
          <div className="w-[26.49px] h-6 pl-0.5 pr-[4.49px] py-0.5 left-[71.75px] top-0 absolute rounded-xl justify-center items-center inline-flex">
            <div className="w-5 h-5 relative rounded-[10px] border-2 border-slate-400 flex-col justify-start items-start flex">
              <div className="w-2.5 h-2.5 bg-slate-400 rounded-[5px]" />
            </div>
          </div>
          <div className="w-[27.60px] h-6 pl-0.5 pr-[5.60px] py-0.5 left-[107.08px] top-0 absolute rounded-xl justify-center items-center inline-flex">
            <div className="w-5 h-5 relative rounded-[10px] border-2 border-slate-400 flex-col justify-start items-start flex">
              <div className="w-2.5 h-2.5 bg-slate-400 rounded-[5px]" />
            </div>
          </div>
          <div className="w-[27.60px] h-6 pl-0.5 pr-[5.60px] py-0.5 left-[142.40px] top-0 absolute rounded-xl justify-center items-center inline-flex">
            <div className="w-5 h-5 relative rounded-[10px] border-2 border-slate-400 flex-col justify-start items-start flex">
              <div className="w-2.5 h-2.5 bg-slate-400 rounded-[5px]" />
            </div>
          </div>
          <div className="w-[26.49px] h-[22px] left-0 top-[27px] absolute text-center text-black text-xs font-bold font-['Plus Jakarta Sans'] leading-[18px]">
            1점
          </div>
          <div className="w-[26.49px] h-[22px] left-[35.32px] top-[27px] absolute text-center text-black text-xs font-bold font-['Plus Jakarta Sans'] leading-[18px]">
            2점
          </div>
          <div className="w-[26.49px] h-[22px] left-[71.75px] top-[27px] absolute text-center text-black text-xs font-bold font-['Plus Jakarta Sans'] leading-[18px]">
            3점
          </div>
          <div className="w-[26.49px] h-[22px] left-[107.08px] top-[27px] absolute text-center text-black text-xs font-bold font-['Plus Jakarta Sans'] leading-[18px]">
            4점
          </div>
          <div className="w-[26.49px] h-[22px] left-[142.40px] top-[27px] absolute text-center text-black text-xs font-bold font-['Plus Jakarta Sans'] leading-[18px]">
            5점
          </div>
        </div>
      </div>
      <button
              onClick={handleCopyText}
              className="absolute  top-[518px] left-[838px] right-0 mt-1 ml-0 p-2 bg-gray-50 text-black rounded-[10px] text-sm inline-flex gap-[4px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.8"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                />
              </svg>
            </button>
      <div className="w-[845.03px] h-[0px] left-[50.99px] top-[515.50px] absolute border-2 border-black"></div>
    </div>
  )
}

export default AiFeedContainer
