'use client'

import CommentUp from '@/app/ui/svg/main/CommentUp'
import Like from '@/app/ui/svg/main/Like'
import { useEffect, useState } from 'react'
import Button from '../../common/Button'
import Comment from '../Comment'

interface CommentContainerProps {
  postId: number
  isLiked: boolean
}

const CommentContainer = ({ postId, isLiked }: CommentContainerProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const [likeStatus, setLikeStatus] = useState(isLiked)
  const [likeCnt, setLikeCnt] = useState(0)

  useEffect(() => {
    setLikeStatus(isLiked);
  }, [isLiked, postId]);

  console.log(isLiked, '조아요 상태');
  console.log(likeStatus, '조아요 상태, state');
  
  const mookComment = {
    commentId: 1,
    content: '우와 정말 대단한걸요? 장난 없네용 히히',
    memberName: 'yng1404',
    profile: 'string',
    sinceCreation: 2022,
  }

  const like = async (id: number) => {
    const res = await fetch(`/api/board/like?id=${id}`, {
      method: 'POST',
    })
    const resData = await res.json()
    setLikeStatus(resData.result.status === 'ACTIVE')
    setLikeCnt(resData.result.likeCount)
    console.log(resData, '조아요 응답')
  }

  return (
    <div className="flex w-full h-full">
      {isClicked ? (
        <div className="w-full h-full relative bg-white">
          <div
            className="bg-[#486283] w-full h-16 flex items-center justify-center absolute top-0 cursor-pointer"
            onClick={() => setIsClicked(false)}
          >
            <div className="text-white text-2xl font-bold">게시물보기</div>
            <div className="rotate-180 absolute top-2.5 left-10">
              <CommentUp />
            </div>
          </div>
          <div className="absolute top-16 w-full h-[170px] pl-6 pt-[21px] bg-[#EDEDED]">
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
          <div className="absolute top-[280px] left-8 flex flex-col gap-y-8 w-[90%] h-[70%] overflow-y-auto scrollbar-hide z-50">
            <Comment data={mookComment} />
            <Comment data={mookComment} />
            <Comment data={mookComment} />
            <Comment data={mookComment} />
            <Comment data={mookComment} />
            <Comment data={mookComment} />
            <Comment data={mookComment} />
            <Comment data={mookComment} />
            <Comment data={mookComment} />
            <Comment data={mookComment} />
          </div>
        </div>
      ) : (
        <div className="bg-[#486283] w-full flex h-16 absolute bottom-0">
          <div
            className="absolute top-5 left-[27px] cursor-pointer"
            onClick={() => like(postId)}
          >
            <Like color={'white'} size={32} isLiked={likeStatus} />
          </div>
          <div
            className="absolute top-3 right-[54px] flex items-center gap-x-2 cursor-pointer"
            onClick={() => setIsClicked(true)}
          >
            <div>
              <CommentUp />
            </div>
            <div className="text-white text-xl font-bold">댓글</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CommentContainer
