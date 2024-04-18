import MainCard from '../MainCard'
import MainSolution from '../MainSolution'
interface IntroduceContainerProps {
  nickname?: string
  cardData: CardDataTypes[]
}
const IntroduceContainer = ({
  nickname,
  cardData,
}: IntroduceContainerProps) => {
  return (
    <div className="w-full mx-auto min-h-screen bg-white">
      <MainSolution />
      <MainCard nickname={nickname} cardData={cardData} />
    </div>
  )
}

export default IntroduceContainer
