import { timeCalculate } from '@/app/utils/date'

interface CommentProps {
  data: CommentDataTypes
}

const Comment = ({ data }: CommentProps) => {
  return (
    <div className="w-[100%] h-[167px] bg-[#EDEDED] pl-5 pt-5 pb-4 rounded-[8px]">
      <div className="flex h-[42px] text-lg font-bold gap-x-5 items-center">
        <div className="w-9 h-9 bg-[#486284] rounded-[100px]"></div>
        <div>{data.memberName}</div>
        <div>{timeCalculate(data.sinceCreation)}</div>
      </div>
      <div className="flex w-[80%] h-[75px] mt-2">{data.content}</div>
    </div>
  )
}

export default Comment
