import { successCopy } from '@/app/utils/toast'

const AiAnalysis = () => {
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
    <div className="w-[1000px] h-[1100px] relative  mt-[30px] items-center justify-center mx-auto bg-gray-50 rounded-[15px]">
      <div className="w-[981px] h-[1100px] left-0 top-0 flex items-center justify-center mx-auto relative ">
        <div className="w-[773px] h-[52px] left-[160px] top-[101px] absolute text-black text-3xl font-bold  leading-[45px]">
          meetfolio님과 빅데이터의 직무 적합도는 60%입니다.
        </div>
        <div className="left-[280px] top-[603px] absolute text-black text-2xl font-bold  leading-9">
          meetfolio 님은 이런 역량이 두드러져요!
        </div>
        <div className="w-[547px] h-[29px] left-[200px] top-[150px] absolute text-black text-2xl font-medium  leading-9">
          👍 조금만 더 노력하면 분명 원하는 목표에 도달할 거예요!
        </div>
        <div className="w-[180px] h-[124px] left-[511px] top-[320px] absolute text-black text-7xl font-bold  leading-[108px]">
          60%
        </div>
        <div className="w-[360px] h-[360px] left-[135px] top-[198px] absolute bg-white justify-center items-center inline-flex">
          <div className="w-[360px] h-[360px] relative">
            <div className="w-[360px] h-[360px] left-0 top-0 absolute bg-white" />
            <div className="w-[300px] h-[300px] left-[40px] top-[40px] absolute bg-blue-400 rounded-full shadow" />
            <div className="w-[300px] h-[300px] left-[40px] top-[40px] absolute bg-zinc-200 rounded-full" />
            <div className="w-[85px] h-7 left-[229px] top-[190px] absolute text-black text-xl font-bold  leading-[30px]">
              빅데이터
            </div>
          </div>
        </div>
        <div className="w-[569px] h-[202px] left-[200px] top-[663px] absolute">
          <div className="w-[569px] h-[202px] left-0 top-0 absolute">
            <div className="w-[120px] h-[120px] left-0 top-[67px] absolute bg-slate-200 rounded-full" />
            <div className="w-[88px] h-[58px] left-[16px] top-[104px] absolute text-center text-black text-lg font-bold  leading-[27px]">
              프로젝트 계획 및 관리
            </div>
            <div className="w-[386px] h-[202px] left-[183px] top-0 absolute">
              <div className="w-[180px] h-[180px] left-0 top-0 absolute bg-slate-600 rounded-full" />
              <div className="w-[131px] h-[58px] left-[26px] top-[70px] absolute text-center text-white text-2xl font-bold  leading-9">
                커뮤니케이션 및 협업
              </div>
              <div className="w-[150px] h-[150px] left-[236px] top-[52px] absolute">
                <div className="w-[150px] h-[150px] left-0 top-0 absolute bg-blue-400 rounded-full" />
                <div className="w-[83px] h-[58px] left-[36px] top-[47px] absolute text-black text-[21px] font-bold  leading-loose">
                  문제 해결 및 결정력
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[265px] h-[117px] left-[350px] top-[954px] absolute">
          <div className="w-[265px] h-[49px] left-0 top-0 absolute text-center text-black text-xl font-bold  leading-[30px]">
            AI 직무역량분석에 대한 나의 만족도는?
          </div>
          <div className="w-[170px] h-[49px] left-[48px] top-[68px] absolute">
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
            <div className="w-[26.49px] h-[22px] left-0 top-[27px] absolute text-center text-black text-xs font-bold  leading-[18px]">
              1점
            </div>
            <div className="w-[26.49px] h-[22px] left-[35.32px] top-[27px] absolute text-center text-black text-xs font-bold  leading-[18px]">
              2점
            </div>
            <div className="w-[26.49px] h-[22px] left-[71.75px] top-[27px] absolute text-center text-black text-xs font-bold  leading-[18px]">
              3점
            </div>
            <div className="w-[26.49px] h-[22px] left-[107.08px] top-[27px] absolute text-center text-black text-xs font-bold  leading-[18px]">
              4점
            </div>
            <div className="w-[26.49px] h-[22px] left-[142.40px] top-[27px] absolute text-center text-black text-xs font-bold  leading-[18px]">
              5점
            </div>
          </div>
        </div>
        <div className="left-[320px] top-[12px] absolute text-center text-blue-400 text-[35px] font-bold  leading-[52.50px]">
          AI 직무 역량 분석 결과
        </div>
      </div>
    </div>
  )
}

export default AiAnalysis
