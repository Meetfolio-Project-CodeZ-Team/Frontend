import { successCopy } from "@/app/utils/toast"

const AiFeedContainer = () => {
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
          저의 졸업 인증을 졸업 프로젝트를 통해 받게 된 이유는 실무에서의 경험과
          협업에 가까운 환경에서 다양한 경험을 쌓고, 문제를 해결해보고자
          했습니다. 주요한 이유 중 하나는 실무에서의 경험을 쌓기
          위해서였습니다. 이러한 프로젝트를 통해 실제 업무에서 직면할 수 있는
          문제들을 직접 경험하고, 이를 해결하는 과정에서 필요한 기술과 노하우를
          습득할 수 있었습니다. 또한, 프로젝트를 통해 새로운 기술이나 도구들을
          사용해보며, 이를 익히고 적용해볼 기회가 있었습니다. 또한, 협업에
          중점을 두고 프로젝트를 진행하고 싶었습니다. 현업에서는 혼자서 일을
          하는 경우보다 팀으로 일을 진행하는 경우가 많기 때문에, 팀원들과의 협업
          능력은 매우 중요합니다. 프로젝트를 통해 팀원들과의 의사소통과 협업
          능력을 키워가며, 함께 문제를 해결해나가는 과정에서 더 많은 것을 배울
          수 있었습니다. 또한, 프로젝트를 통해 다양한 경험을 쌓고 싶었습니다.
          졸업 프로젝트를 통해 다양한 도메인에서의 문제들을 다루며, 이를
          해결하는 방법에 대해 고민하고 실험할 수 있는 기회를 가졌습니다. 이를
          통해 제가 어떤 분야에서 능력을 발휘할 수 있는지에 대한 통찰력을 얻을
          수 있었습니다. 종합하면, 졸업 프로젝트를 선택한 이유는 실무에서의
          경험과 협업을 통해 다양한 경험을 쌓고 문제를 해결하고자 했기
          때문입니다. 이를 통해 제가 실제 업무에서 어떻게 활용될 수 있는지에
          대한 경험을 쌓을 수 있었고, 팀원들과의 협업 능력을 향상시킬 수
          있었습니다.
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
          <div className="w-[778px] h-11 left-[14px] top-0 absolute text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
            졸업 프로젝트를 통해 실무 경험과 협업 능력을 함양한 지원자입니다.
          </div>
          <div className="w-[778px] h-11 left-[14px] top-[57px] absolute text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
            새로운 기술 및 도구를 습득하고 적용하는 능력을 보여준 지원자입니다.
          </div>
          <div className="w-[778px] h-11 left-[14px] top-[114px] absolute text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
            문제 해결에 대한 창의적이고 유연한 접근 방식을 갖춘 지원자입니다.
          </div>
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
