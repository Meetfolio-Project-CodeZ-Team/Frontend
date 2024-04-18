import MainCard from '../MainCard'
import MainSolution from '../MainSolution'
interface IntroduceContainerProps {
  nickname?: string
}
const IntroduceContainer = ({ nickname }: IntroduceContainerProps) => {
  return (
    <div className="w-full mx-auto min-h-screen bg-white">
      <MainSolution />
      <MainCard nickname={nickname} />
    </div>
  )
}

export default IntroduceContainer
