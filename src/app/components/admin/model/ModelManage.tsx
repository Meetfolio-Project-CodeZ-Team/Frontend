import { MODEL_MANAGE_H } from '@/app/constants/admin'
import React from 'react'
import ModelManageInfo from './ModelManageInfo'
import { mookBoard } from '../common/mookData'

const ModelManage = () => {
  return (
    <div className="flex flex-col w-[1010px] h-[720px] mt-[12px]">
      <div className="flex w-[1010px] h-[50px] pl-[13px] border-b border-[#616161] items-center text-black text-lg">
        <div className="font-bold">{MODEL_MANAGE_H[0]}</div>
        <div className="ml-[107px] ">{MODEL_MANAGE_H[1]}</div>
        <div className="ml-[116px]">{MODEL_MANAGE_H[2]}</div>
        <div className="ml-[100px]">{MODEL_MANAGE_H[3]}</div>
        <div className="ml-[110px]">{MODEL_MANAGE_H[4]}</div>
        <div className="ml-[107px]">{MODEL_MANAGE_H[5]}</div>
      </div>
      {/* {mookBoard.map((Board, i) => (
        // <ModelManageInfo
        //   createdAt={Board.createdAt}
        //   memberName={Board.memberName}
        //   title={Board.title}
        //   boardId={Board.boardId}
        //   type={Board.type}
        // />
      ))} */}
    </div>
  )
}

export default ModelManage
