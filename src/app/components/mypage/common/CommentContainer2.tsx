'use client'

import CommentUp from '@/app/ui/svg/main/CommentUp'
import Like from '@/app/ui/svg/main/Like'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Comment from '../../board/Comment'
import Button from '../../common/Button'

interface CommentContainerProps {
  postId: number
  isLiked: boolean
}

const CommentContainer2 = ({ postId, isLiked }: CommentContainerProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const [likeStatus, setLikeStatus] = useState(isLiked)
  const [likeCnt, setLikeCnt] = useState(0)

  const [content, setContent] = useState('')
  const [commentId, setCommentId] = useState(0)
  const [comment, setComment] = useState<CommentDataTypes[]>([])
  const [isReply, setIsReply] = useState(false)

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
      parentId: isReply ? commentId : null,
    }
    const res = await fetch(`/api/board/comment/leave?id=${postId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
    const resData = await res.json()
    const response = await fetch(`/api/board/comment?id=${postId}`)
    const getRes = await response.json()
    setComment(getRes.result.commentItems)
    setContent('')
  }

  useEffect(() => {
    setLikeStatus(isLiked)
    setIsReply(false)
  }, [isLiked, postId])

  useEffect(() => {
    if (!isReply) setContent('')
  }, [isReply])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/board/comment?id=${postId}`)
      const resData = await response.json()
      setComment(resData.result.commentItems)
      setIsClicked(false)
    }
    fetchData()
  }, [postId])

  return (
    <div className="flex w-full h-full">
      <ToastContainer />
      {isClicked ? (
        <div className="w-full h-[720px] absolute top-[-500px] bg-slate-200 z-100">
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
                className={`text-lg font-medium w-[380px] h-[120px] bg-[#EDEDED] focus:outline-none ${isReply && 'placeholder:text-[#486283] placeholder:font-bold'}`}
                placeholder={
                  isReply ? '대댓글을 입력하세요...' : '댓글을 입력하세요...'
                }
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
          <div className="absolute top-[280px] left-10 flex flex-col gap-y-9 w-[90%] h-[57%] overflow-y-auto scrollbar-hide z-50">
            {comment.map((data, i) => (
              <Comment
                data={data}
                key={i}
                setReply={setIsReply}
                setCommentId={setCommentId}
              />
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

export default CommentContainer2
