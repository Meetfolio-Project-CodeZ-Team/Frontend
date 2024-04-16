'use client'

import { BUTTON_TEXT } from '@/app/constants/main'
import Button from '../../common/Button'
import MainImage from '../MainImage'

const MainContainer = () => {
  return (
    <div className="flex flex-col items-center mt-10 mx-auto">
      <MainImage />
      <Button
        buttonText={BUTTON_TEXT.Solution}
        type={'mainBtn'}
        isDisabled={false}
        onClickHandler={() => console.log('클릭')}
      />
    </div>
  )
}

export default MainContainer
