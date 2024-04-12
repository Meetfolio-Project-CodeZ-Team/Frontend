import { CARD } from '@/app/constants/main'
import Card from '../common/Card'
import CardContainer from './containers/CardContainer'

const MainCard = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFBFD] pt-[100px]">
      <div className="text-center text-[#486284] text-5xl font-medium leading-[72px]">
        {CARD[0]}
      </div>
      <div className="flex text-lg font-normal leading-[27px] mt-7 mb-[50px]">
        {CARD[1]}
      </div>
      <CardContainer />
      <div className="mb-12"></div>
    </div>
  )
}

export default MainCard
