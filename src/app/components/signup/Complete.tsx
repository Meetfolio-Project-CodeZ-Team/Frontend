import Image from 'next/image'
import Button from '../common/Button'
import { COMPLETE } from '@/app/constants/auth'
import { useRouter } from 'next/navigation'

const Complete = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center mt-[193px]">
      <Image
        width={120}
        height={100}
        src="/Images/check.png"
        alt="checkImage"
      />
      <div className="text-5xl font-semibold leading-[75px] mt-10">
        '회원가입 완료'
      </div>
      <div className="text-center  text-3xl font-medium leading-[45px]">
        <span className="text-gray-900">
          {COMPLETE[0]}
          <br />
          {COMPLETE[1]}
        </span>
        <span className="text-slate-600">{COMPLETE[2]}</span>
        <span className="text-gray-900">{COMPLETE[3]}</span>
      </div>
      <div className="w-[692px] h-5 text-center text-zinc-600 text-xl font-medium leading-[30px] my-9">
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
