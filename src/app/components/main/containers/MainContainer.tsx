'use client'

import { BUTTON_TEXT } from '@/app/constants/main'
import Button from '../../common/Button'
import MainImage from '../MainImage'
import { useRouter } from 'next/navigation'
interface MainContainerProps {
  nickname?: string
}

const MainContainer = ({ nickname }: MainContainerProps) => {
  const router = useRouter()
  const pathName = nickname ? 'experience' : 'login'
  return (
    <div className="flex flex-col items-center mt-10 mx-auto">
      <MainImage />
      <Button
        buttonText={BUTTON_TEXT.Solution}
        type={'mainBtn'}
        isDisabled={false}
        onClickHandler={() => router.push(`/${pathName}`)}
      />
    </div>
  )
}

export default MainContainer
