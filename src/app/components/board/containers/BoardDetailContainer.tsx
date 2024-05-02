import { NULLPOST } from '@/app/constants/board'
import { selectedPostId } from '@/app/recoil/board'
import { useRecoilValue } from 'recoil'
import CommentContainer from './CommentContainer'
import Button from '../../common/Button'

interface BoardDetailContainer {
  data: GroupBoardInfoTypes
}

const mookData = {
  boardId: 0,
  boardType: 'EMPLOYMENT',
  memberName: 'yng1404',
  title: 'string',
  content:
    'stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstristringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstrinngstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstrin gstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringgstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringg',
  likeCount: 0,
  likeStatus: 'ACTIVE',
  commentCount: 0,
  jobCategory: '백엔드',
  groupCategory: 'string',
  recruitment: 'string',
  peopleNumber: 0,
  registrationDate: '2024-05-01',
}

const BoardDetailContainer = () => {
  const selectedId = useRecoilValue(selectedPostId)
  const isSelected = selectedId !== 999
  console.log('detail 페이지에서 받아오는 id', selectedId)

  return (
    <div className="w-full h-full relative border-white border-b-2">
      {isSelected ? (
        <div className="w-full h-full relative">
          <div className="">
            <div className="absolute left-6 top-6 text-3xl font-semibold">
              {mookData.title}
            </div>
            <div className="absolute right-8 top-[52px] text-sm font-normal">
              {mookData.registrationDate}
            </div>
            <div className="absolute left-9 top-[120px] flex text-[15px] font-semibold">
              {mookData.memberName}
            </div>
            <div className="absolute gap-x-3 right-8 top-[120px] flex text-[15px] font-semibold">
              <Button
                buttonText={'수정'}
                type={'eidtPost'}
                isDisabled={false}
                onClickHandler={function (): void {
                  throw new Error('Function not implemented.')
                }}
              />
              <Button
                buttonText={'삭제'}
                type={'eidtPost'}
                isDisabled={false}
                onClickHandler={function (): void {
                  throw new Error('Function not implemented.')
                }}
                className="bg-white border-black border-2 text-[#000000]"
              />
            </div>
            <div className="flex absolute pr-8 left-7 top-[190px] break-all h-[70%] overflow-y-auto">
              {mookData.content}
            </div>
          </div>
          <CommentContainer />
        </div>
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
