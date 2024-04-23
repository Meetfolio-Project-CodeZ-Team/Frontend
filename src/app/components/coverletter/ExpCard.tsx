const ExpCard = () => {
  //자소서 메인화면 키워드1,키워드2,지원직무 입력창 컴포넌트
  return (
    <div className="w-[304px] h-[388px] mt-[20px] relative bg-slate-200 rounded-[10px]">
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
  )
}

export default ExpCard
