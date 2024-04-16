import { INTRODUCE } from '@/app/constants/main'
import Image from 'next/image'

const MainImage = () => {
  return (
    <div className="relative w-[1200px] h-[650px] items-center mb-7">
      <div className="absolute top-0 left-0 w-[1263px] h-[650px] rounded-[30px] z-10 bg-gray-200 bg-opacity-40"></div>
      <Image
        className="absolute top-0 left-0 rounded-[30px] z-0"
        fill
        src="/Images/background.png"
        alt="backgroundImage"
        priority={true}
      />
      <div className="w-[620px] left-[325px] top-[131px] absolute text-center text-black text-[46px] font-extrabold leading-[55.75px] z-10">
        {INTRODUCE[0]} <br /> {INTRODUCE[1]}
      </div>
      <div className="w-[555px] left-[353px] top-[310px] opacity-60 absolute text-center text-base font-medium leading-relaxed z-10">
        {INTRODUCE[2]}
        <br /> {INTRODUCE[3]}
      </div>
    </div>
  )
}

export default MainImage
