import { NULLPOST } from '@/app/constants/board'
import { selectedPostId } from '@/app/recoil/board'
import { useRecoilValue } from 'recoil'
import CommentContainer from './CommentContainer'

const BoardDetailContainer = () => {
  const selectedId = useRecoilValue(selectedPostId)
  const isSelected = selectedId !== 999
  console.log('detail 페이지에서 받아오는 id', selectedId)

  return (
    <div className="w-full h-full relative">
      {isSelected ? (
            <CommentContainer />
      ) : (
        <div className="flex flex-col w-full h-full items-center justify-center text-black text-2xl gap-y-2 font-medium">
          <span>{NULLPOST[0]}</span>
          <span>{NULLPOST[1]}</span>
        </div>
      )}
    </div>
  )
}

export default BoardDetailContainer
