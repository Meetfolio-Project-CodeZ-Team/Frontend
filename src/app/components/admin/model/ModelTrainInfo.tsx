import { useModal } from '@/app/hooks/useModal'
import DeleteModal from '../common/DeleteModal'

interface ModelTrainInfoProps {
  createdAt: string
  job: string
  domain: string
  url: string
}

const ModelTrainInfo = ({
  createdAt,
  job,
  domain,
  url,
}: ModelTrainInfoProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  return (
    <div className="flex flex-col w-[1034px] h-auto">
      <div className="flex w-[1034px] h-[75px] pl-2 border-b border-[#BDBDBD] items-center text-black text-lg">
        <div className="w-[105px] text-center">{'2024-01-01'}</div>
        <div className="w-[176px] text-center">{'백엔드'}</div>
        <div className="w-[245px] text-center">{'링커리어'}</div>
        <div className="w-[350px] h-[auto] text-sm whitespace-normal">
          {`https://linkareer.com/cover-letter/32580?page=1&role=%EA%B0%9C%EB%B0%9C%EC%9E%90&sort=RELEVANCE&tab=all`}
        </div>
        <div onClick={handleModalClick}>
          {isOpen && <DeleteModal closeModal={closeModal} />}
        </div>
        <div onClick={handleModalClick}>
          {isOpen && <DeleteModal closeModal={closeModal} />}
        </div>
      </div>
    </div>
  )
}

export default ModelTrainInfo
