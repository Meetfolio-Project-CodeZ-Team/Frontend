'use client'

import { selectedPostId } from '@/app/recoil/board'
import CommentUp from '@/app/ui/svg/main/CommentUp'
import Like from '@/app/ui/svg/main/Like'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
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
  const [selectedId, setSelectedId] = useRecoilState(selectedPostId)
  const [content, setContent] = useState('')
  const [comment, setComment] = useState<CommentDataTypes[]>([])
  console.log(selectedId, '선택된 id')

  const like = async (id: number) => {
    const res = await fetch(`/api/board/like?id=${id}`, {
      method: 'POST',
    })
    const resData = await res.json()
    setLikeStatus(resData.result.status === 'ACTIVE')
    setLikeCnt(resData.result.likeCount)
  }

  const LeaveComment = async () => {
    const reqBody = {
      content: content,
      parentId: null,
    }

    const res = await fetch(`/api/board/comment/leave?id=${postId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
    const resData = await res.json()
    console.log(resData, '댓글응답')
    const response = await fetch(`/api/board/comment?id=${postId}`)
    const getRes = await response.json()
    setComment(getRes.result.commentItems)
    setContent('')
  }

  useEffect(() => {
    setLikeStatus(isLiked)
  }, [isLiked, postId])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/board/comment?id=${postId}`)
      const resData = await response.json()
      setComment(resData.result.commentItems)
      setIsClicked(false)
      console.log('가져온 댓글 데이터', resData.result)
    }
    fetchData()
  }, [postId])

  return (
    <div className="flex w-full h-full">
      {isClicked ? (
        <div className="w-full h-full relative bg-white">
          <div
            className="bg-[#486283] w-full h-16 flex items-center justify-center absolute top-0 cursor-pointer"
            onClick={() => setIsClicked(false)}
          >
            <div className="text-white text-2xl font-bold">게시물 보기</div>
            <div className="rotate-180 absolute top-2.5 left-10">
              <CommentUp />
            </div>
          </div>
          <div className="absolute top-16 w-full h-[170px] pl-6 pt-[21px] bg-[#EDEDED]">
            <div className="absolute">
              <textarea
                className="text-lg font-medium w-[380px] h-[120px] bg-[#EDEDED] focus:outline-none"
                placeholder="댓글을 입력하세요..."
                onChange={(e) => setContent(e.target.value)}
                value={content}
              ></textarea>
            </div>
            <div className="absolute top-[97px] right-[18px] cursor-pointer">
              <Button
                buttonText={'작성'}
                type={'addBoardBtn'}
                isDisabled={false}
                onClickHandler={() => LeaveComment()}
              />
            </div>
          </div>
          <div className="absolute top-[280px] left-10 flex flex-col gap-y-12 w-[90%] h-[70%] overflow-y-auto scrollbar-hide z-50">
            {comment.map((data, i) => (
              <Comment data={data} key={i} />
            ))}
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
