import { BUTTON_TEXT, CARD } from '@/app/constants/main'
import CardContainer from './containers/CardContainer'
import Button from '../common/Button'
import { useRouter } from 'next/navigation'
interface MainCardProps {
  nickname?: string
}
const MainCard = ({ nickname }: MainCardProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center bg-[#FAFBFD] pt-[100px]">
      <div className="text-center text-[#486284] text-5xl font-medium leading-[72px]">
        {CARD[0]}
      </div>
      <div className="flex text-lg font-normal leading-[27px] mt-7 mb-[50px]">
        {CARD[1]}
      </div>
      <CardContainer />
      <div className="mt-12 mb-[72px]">
        {nickname ? (
          <div></div>
        ) : (
          <Button
            buttonText={BUTTON_TEXT.Card}
            type={'mainBtn'}
            isDisabled={false}
            onClickHandler={() => router.push('/login')}
            className="bg-[#486283]"
          />
        )}
      </div>
    </div>
  )
}

export default MainCard
