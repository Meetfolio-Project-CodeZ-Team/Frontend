import { MODEL_TRAIN_H } from '@/app/constants/admin'
import ModelTrainInfo from './ModelTrainInfo'
import { Board } from '@/app/constants/auth'

const ModelTrain = () => {
  return (
    <div className="flex flex-col w-[1010px] h-[720px] mt-[12px] items-center">
      <div className="text-2xl font-bold mb-6">{MODEL_TRAIN_H[0]}</div>
      <div className="flex w-[1010px] h-[50px] pl-[13px] border-b border-[#616161] items-center text-black text-lg">
        <div className="font-bold">{MODEL_TRAIN_H[1]}</div>
        <div className="ml-[105px] ">{MODEL_TRAIN_H[2]}</div>
        <div className="ml-[125px]">{MODEL_TRAIN_H[3]}</div>
        <div className="ml-[300px]">{MODEL_TRAIN_H[4]}</div>
      </div>
      <ModelTrainInfo
        createdAt={'Board.createdAt'}
        job={'Board.memberName'}
        domain={'Board.title'}
        url={'Board.boardId'}
      />
      {/* {mookBoard.map((Board, i) => (
        ))} */}
    </div>
  )
}

export default ModelTrain
