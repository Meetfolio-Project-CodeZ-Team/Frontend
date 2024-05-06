import { COMPLETE } from '@/app/constants/auth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '../common/Button'

const Complete = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center mt-[120px]">
      <Image width={80} height={60} src="/Images/check.png" alt="checkImage" />
      <div className="text-4xl font-semibold m-8">'회원가입 완료'</div>
      <div className="text-center text-2xl font-medium">
        <span className="text-gray-900">
          {COMPLETE[0]}
          <br />
          {COMPLETE[1]}
        </span>
        <span className="text-slate-600 font-semibold">{COMPLETE[2]}</span>
        <span className="text-gray-900">{COMPLETE[3]}</span>
      </div>
      <div className="w-[692px] h-4 text-center text-zinc-600 text-xl font-medium my-9 ">
        {COMPLETE[4]}
      </div>
      <Button
        buttonText="로그인 하러가기"
        type={'complete'}
        isDisabled={false}
        onClickHandler={() => router.push('/login')}
      />
      
    </div>
  )
}

export default Complete
