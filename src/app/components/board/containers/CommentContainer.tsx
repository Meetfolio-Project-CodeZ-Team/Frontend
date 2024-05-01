'use client'

import CommentUp from '@/app/ui/svg/main/CommentUp'
import Like from '@/app/ui/svg/main/Like'
import { useState } from 'react'
import Button from '../../common/Button'

const CommentContainer = () => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className="flex w-full h-full">
      {isClicked ? (
        <div className="w-full h-full relative bg-white">
          <div
            className="bg-[#486283] w-full h-20 flex items-center justify-center absolute top-0 cursor-pointer"
            onClick={() => setIsClicked(false)}
          >
            <div className="text-white text-3xl font-bold">
              게시물보기
            </div>
            <div className="rotate-180 absolute top-5 left-10">
              <CommentUp />
            </div>
          </div>
          <div className="absolute top-20 w-full h-[170px] pl-6 pt-[21px] bg-[#EDEDED]">
            <div className="absolute">
              <textarea
                className="text-lg font-medium w-[380px] h-[120px] bg-[#EDEDED] focus:outline-none"
                placeholder="댓글을 입력해보세요..."
              ></textarea>
            </div>
            <div className="absolute top-[97px] right-[18px] cursor-pointer">
              <Button
                buttonText={'입력'}
                type={'addBoardBtn'}
                isDisabled={false}
                onClickHandler={function (): void {
                  throw new Error('Function not implemented.')
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#486283] w-full flex h-20 absolute bottom-0">
          <div className="absolute top-[25px] left-[27px] cursor-pointer">
            <Like color={'white'} size={36} />
          </div>
          <div
            className="absolute top-[22px] right-[54px] flex items-center gap-x-2 cursor-pointer"
            onClick={() => setIsClicked(true)}
          >
            <div>
              <CommentUp />
            </div>
            <div className="text-white text-2xl font-bold">댓글</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CommentContainer
