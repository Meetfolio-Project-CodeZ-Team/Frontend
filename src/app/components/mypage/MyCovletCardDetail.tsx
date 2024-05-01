'use client'

import { useRouter } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { covletData } from '@/app/recoil/coverletter'

interface CovletCardDetail {
  coverLetterId: number
  question: string
  answer: string
  keyword1: string
  keyword2: string
  jobKeyword: string
  shareType: string
}

const MyCovletCardDetail = ({
  coverLetterId,
  question,
  answer,
  keyword1,
  keyword2,
  jobKeyword,
  shareType,
}: CovletCardDetail) => {
  console.log(coverLetterId, 'id 수정 삭제에서 가져오기')

  const router = useRouter()
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)

  const handleCopyAnswer = () => {
    // 동적으로 textarea를 생성
    const textArea = document.createElement('textarea')
    // 복사할 텍스트 설정
    textArea.value = answer
    // 스타일을 설정하여 뷰포트 밖으로 임시 textarea를 숨김
    textArea.style.position = 'fixed'
    textArea.style.left = '-9999px'
    textArea.style.top = '-9999px'
    document.body.appendChild(textArea)
    // 텍스트 선택
    textArea.focus()
    textArea.select()

    try {
      // 텍스트를 클립보드에 복사
      const successful = document.execCommand('copy')
      const msg = successful ? 'successful' : 'unsuccessful'
      console.log('Copying text command was ' + msg)
      alert('Text copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy text: ', err)
      alert('Failed to copy text.')
    }

    // 생성된 textarea 요소를 제거
    document.body.removeChild(textArea)
  }

  const onEditClick = () => {
    setCoverLetterData({
      coverLetterId,
      question,
      answer,
      keyword1,
      keyword2,
      jobKeyword,
      shareType,
    })

    router.push(`/edit-coverletter/${coverLetterId}`)
  }

  const deleteCov = async (coverLetterId: number) => {
    console.log('자소서 삭제 요청이에요', coverLetterId)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/myCovlet/delete?coverLetterId=${coverLetterId}`,
        {
          method: 'DELETE',
        },
      )

      if (res.ok) {
        console.log('자기소개서가 성공적으로 삭제되었습니다.')
        router.push(`/mypage`)
      } else {
        const errorData = await res.json()
        console.error('Error details:', errorData)
      }
    } catch (error) {
      console.error('Network or other error:', error)
    }
  }

  return (
    <div className="w-full h-[1725px] relative">
      <div className="w-full h-[1725px] left-0 top-0 absolute">
        <div className="w-[1124px] h-[1725px] left-0 top-0 absolute bg-white" />
        <div className="w-[1029px] h-[603.47px] left-[49px] top-[222px] absolute">
          <div className="w-[936.64px] h-[440px] left-[34px] top-[29px] absolute text-black text-xl font-medium leading-[30px]">
            {answer}
          </div>
        </div>
        <button
          onClick={handleCopyAnswer}
          className="p-2 bg-blue-400 text-white rounded absolute right-[550px] top-[690px] mt-2 mr-2"
        >
          복사하기
        </button>
      </div>
      <div className="w-[1029px] h-[808px] left-[49px] top-[765px] absolute">
        <div className="w-[1029px] h-[808px] left-0 top-0 absolute">
          <div className="w-[943.89px] h-[450px] left-[46.42px] top-[81px] absolute text-black text-xl font-medium leading-[30px]">
            저의 졸업 인증을 졸업 프로젝트를 통해 받게 된 이유는 실무에서의
            경험과 협업에 가까운 환경에서 다양한 경험을 쌓고, 문제를
            해결해보고자 했습니다.  주요한 이유 중 하나는 실무에서의 경험을 쌓기
            위해서였습니다. 이러한 프로젝트를 통해 실제 업무에서 직면할 수 있는
            문제들을 직접 경험하고, 이를 해결하는 과정에서 필요한 기술과
            노하우를 습득할 수 있었습니다. 또한, 프로젝트를 통해 새로운 기술이나
            도구들을 사용해보며, 이를 익히고 적용해볼 기회가 있었습니다.  또한,
            협업에 중점을 두고 프로젝트를 진행하고 싶었습니다. 현업에서는 혼자서
            일을 하는 경우보다 팀으로 일을 진행하는 경우가 많기 때문에,
            팀원들과의 협업 능력은 매우 중요합니다. 프로젝트를 통해 팀원들과의
            의사소통과 협업 능력을 키워가며, 함께 문제를 해결해나가는 과정에서
            더 많은 것을 배울 수 있었습니다.  또한, 프로젝트를 통해 다양한
            경험을 쌓고 싶었습니다. 졸업 프로젝트를 통해 다양한 도메인에서의
            문제들을 다루며, 이를 해결하는 방법에 대해 고민하고 실험할 수 있는
            기회를 가졌습니다. 이를 통해 제가 어떤 분야에서 능력을 발휘할 수
            있는지에 대한 통찰력을 얻을 수 있었습니다.  종합하면, 졸업
            프로젝트를 선택한 이유는 실무에서의 경험과 협업을 통해 다양한 경험을
            쌓고 문제를 해결하고자 했기 때문입니다. 이를 통해 제가 실제 업무에서
            어떻게 활용될 수 있는지에 대한 경험을 쌓을 수 있었고, 팀원들과의
            협업 능력을 향상시킬 수 있었습니다.
          </div>
        </div>
        <div className="w-[202.26px] h-[49px] left-[404.53px] top-[18px] absolute text-center text-blue-400 text-3xl font-bold leading-[45px]">
          AI 피드백
        </div>
        <div className="w-[903px] h-[158px] left-[29.84px] top-[612px] absolute">
          <div className="w-[15.47px] h-3.5 left-0 top-[15px] absolute bg-slate-600 rounded-full" />
          <div className="w-[15.47px] h-3.5 left-0 top-[72px] absolute bg-slate-600 rounded-full" />
          <div className="w-[15.47px] h-3.5 left-0 top-[129px] absolute bg-slate-600 rounded-full" />
          <div className="w-[875.37px] h-[158px] left-[27.63px] top-0 absolute">
            <div className="w-[756px] h-11 left-0 top-0 absolute bg-blue-300 rounded-[10px]" />
            <div className="w-[872.05px] h-11 left-0 top-[114px] absolute bg-blue-300 rounded-[10px]" />
            <div className="w-[814.58px] h-11 left-0 top-[57px] absolute bg-blue-300 rounded-[10px]" />
            <div className="w-[859.89px] h-11 left-[15.47px] top-0 absolute text-black text-base font-medium leading-normal">
              졸업 프로젝트를 통해 실무 경험과 협업 능력을 함양한 지원자입니다.
            </div>
            <div className="w-[859.89px] h-11 left-[15.47px] top-[57px] absolute text-black text-base font-medium leading-normal">
              새로운 기술 및 도구를 습득하고 적용하는 능력을 보여준
              지원자입니다.
            </div>
            <div className="w-[859.89px] h-11 left-[15.47px] top-[114px] absolute text-black text-base font-medium leading-normal">
              문제 해결에 대한 창의적이고 유연한 접근 방식을 갖춘 지원자입니다.
            </div>
          </div>
        </div>
        <div className="w-[252px] h-[49px] left-[376.89px] top-[555px] absolute text-center text-black text-2xl font-bold leading-9">
          추천 자기소개서 문항
        </div>
      </div>
      <div className="w-[334px] h-[58px] left-[731px] top-[1606px] absolute flex justify-between items-center">
        <div
          className="w-[140px] h-[58px] left-0 top-0 absolute bg-blue-400  rounded-[10px] cursor-pointer"
          onClick={onEditClick}
        >
          <div
            className={`w-[140px] h-[58px] left-0 top-0 flex justify-center items-center   text-white text-center border-0 py-0 px-0 focus:outline-none rounded-[10px] text-2xl font-semibold `}
          >
            수정
          </div>
        </div>
        <div
          className="w-[140px] h-[58px] left-[194px] top-0 absolute border-[2px] border-gray-600 justify-center items-center bg-white rounded-[10px] cursor-pointer"
          onClick={() => deleteCov(coverLetterId)}
        >
          <div
            className={`w-[140px] h-[58px] left-0 top-0 flex justify-center items-center text-slate-600  border-0 py-0 px-0 focus:outline-none rounded-[10px] text-2xl font-semibold `}
          >
            삭제
          </div>
        </div>
      </div>
      <div className="w-[672px] h-[53px] left-[216px] top-[62px] absolute justify-center items-center gap-5 inline-flex">
        <div className="w-24 h-[50px] px-5 bg-slate-600 rounded-[30px] justify-center items-center gap-2 flex">
          <div className="w-[76px] text-center text-white text-[25px] font-semibold leading-[37.50px]">
            문항
          </div>
        </div>
        <div className="text-black text-[35px] font-semibold leading-[52.50px]">
          {question}
        </div>
      </div>
      <div className="w-[670px] h-[50px] left-[226px] top-[150px] absolute justify-start items-start gap-[35px] inline-flex">
        <div className="w-[200px] h-[50px] px-5 bg-blue-50 rounded-[30px] justify-center items-center gap-2 flex">
          <div className="text-center text-blue-400 text-xl font-semibold leading-[30px]">
            {keyword1}
          </div>
        </div>
        <div className="w-[200px] h-[50px] px-5 bg-blue-50 rounded-[30px] justify-center items-center gap-2 flex">
          <div className="text-center text-blue-400 text-xl font-semibold leading-[30px]">
            {keyword2}
          </div>
        </div>
        <div className="w-[200px] h-[50px] px-5 bg-blue-50 rounded-[30px] justify-center items-center gap-2 flex">
          <div className="text-center text-blue-400 text-xl font-semibold leading-[30px]">
            {jobKeyword}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCovletCardDetail
