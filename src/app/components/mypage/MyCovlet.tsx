import { useNavigate } from 'react-router-dom';

const MyCovlet = () => {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate('/detail'); // 여기도 마찬가지로 세부 정보 페이지의 경로를 넣어줘야 해
  };
  return (
    <div className="w-[963px] h-[223px] relative mt-[20px] onClick={goToDetailPage}">
      <div className="w-[963px] h-[223px] left-0 top-0 absolute">
        <div className="w-[963px] h-[223px] left-0 top-0 absolute bg-slate-200 rounded-[10px]" />
        <div className="left-[25px] top-[15px] absolute text-gray-900 text-[26px] font-semibold font-['Plus Jakarta Sans'] leading-[39px]">
          내가 졸업 인증을 졸업프로젝트로 한 이유
        </div>
        <div className="left-[883.60px] top-[51px] absolute text-gray-900 text-sm font-normal font-['Rubik'] leading-[30px]">
          24/01/01
        </div>
      </div>
      <div className="w-[921px] h-[72px] left-[23px] top-[85px] absolute text-gray-900 text-[15px] font-medium font-['Plus Jakarta Sans'] leading-snug">
        내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용
        내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용
        내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용
        내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용
        내용 내용 내용 내용 내용 내용 내용내용 내용 내용 내용 내용 내용 내용
        내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용
        내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용
        <br />
        <br />{' '}
      </div>
    </div>
  )
}
export default MyCovlet
