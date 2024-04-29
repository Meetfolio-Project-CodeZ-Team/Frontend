import { close } from '@/app/ui/IconsPath'
import Icons from '../common/Icons'
import { CHECK_BUTTON, CHECK_POINT } from '@/app/constants/point'
import Button from '../common/Button'

interface CheckPointProps {
  closeModal: () => void
  cost: number
}

const CheckPoint = ({ closeModal, cost }: CheckPointProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[542px] h-[648px] rounded-[20px] bg-white relative flex justify-center">
        <div
          className="right-[20px] top-[20px] absolute cursor-pointer"
          onClick={closeModal}
        >
          <Icons name={close} />
        </div>
        <div className="w-[435px] h-[566px] flex flex-col items-center text-xl font-bold gap-y-12 mt-[65px]">
          <div className="text-3xl">{CHECK_POINT[0]}</div>
          <div className="w-full flex flex-col gap-y-4">
            {CHECK_POINT[1]}
            <div className="text-3xl">{800}P</div>
          </div>
          <div className="w-full flex flex-col gap-y-4">
            {CHECK_POINT[2]}
            <div className="text-3xl text-[#0A7AFF]">{cost}P</div>
          </div>
          <div className="w-full flex flex-col gap-y-4">
            {CHECK_POINT[3]}
            <div className="text-3xl">{800 - cost}P</div>
          </div>
          <div className="flex gap-x-4">
            <Button
              buttonText={CHECK_BUTTON[0]}
              type={'auth'}
              isDisabled={false}
              onClickHandler={() => console.log('i')}
              className="bg-blue-400 text-white"
            />
            <Button
              buttonText={CHECK_BUTTON[1]}
              type={'auth'}
              isDisabled={false}
              onClickHandler={() => console.log('i')}
              className="bg-[black] text-white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckPoint
