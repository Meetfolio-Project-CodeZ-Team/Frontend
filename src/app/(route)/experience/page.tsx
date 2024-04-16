'use client'

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import { expNum } from '../../recoil/experience'; 
import Header from '@/app/components/layout/Header'
// import LoginContainer from '@/app/components/login/LoginContainer'
import ExpInfoContainer from '@/app/components/experience/ExpInfoContainer'
import ExpKeywordContainer from '@/app/components/experience/ExpKeywordContainer'
import ExpContentContainer from '@/app/components/experience/ExpContentContainer'

export default function ExperiencePage() {
    const [experienceNumber, setExperienceNumber] = useRecoilState(expNum);
  const router = useRouter();

  // 페이지가 로드될 때마다 expNum 상태를 확인하고 해당 페이지로 이동합니다.
  useEffect(() => {
    switch (experienceNumber) {
      case 1:
        router.push('../../experience');
        break;
      case 2:
        router.push('../../experience');
        break;
      case 3:
        router.push('../../experience');
        break;
      default:
        break;
    }
  }, [experienceNumber, router]);
  return (
    <section className="flex flex-col items-center w-[1440px] mx-auto min-h-screen ">
      <div className="w-[1440px] mx-auto">
        <Header />
        {experienceNumber === 0 && <ExpInfoContainer />}
        {experienceNumber === 1 && <ExpKeywordContainer />}
        {experienceNumber === 2 && <ExpContentContainer />}
      </div>
    </section>
  )
}