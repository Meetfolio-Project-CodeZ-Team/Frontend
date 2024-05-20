'use client'
import { useModal } from '@/app/hooks/useModal'
import NavBar from '@/app/ui/svg/common/NavBar'
import { timeCalculate } from '@/app/utils/date'
import { useEffect, useState } from 'react'
import DeleteModal from '../admin/common/DeleteModal'
import Button from '../common/Button'
import Input from '../common/Input'

interface CommentProps {
  data: CommentDataTypes
}

const Comment = ({ data }: CommentProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [isAuthor, setIsAuthor] = useState(false)
  const [isReply, setIsReply] = useState(false)
  const [content, setContent] = useState(data.content)
  const [reComment, setReComment] = useState('')
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)

  const cancelEdit = () => {
    setIsEdit(false)
    setContent('')
  }

  const updateComment = async () => {
    const res = await fetch(`/api/board/comment/update?id=${data.commentId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: content,
      }),
    })
    const resData = await res.json()
    cancelEdit()
  }

  const deleteComment = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/comment/delete?id=${data.commentId}`,
      {
        method: 'DELETE',
      },
    )
  }

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/user`,
      )
      const resData = await response.json()
      setIsAuthor(resData.result.memberName === data.memberName)
    }
    getUser()
    setContent(data.content)
  }, [data, isEdit])

  return (
    <div className="w-[90%] h-[127px] border-[1.5px] border-[#486284] pl-4 py-2 rounded-[8px]">
      {isOpen && (
        <DeleteModal
          closeModal={closeModal}
          text={'댓글을 삭제하시겠습니까?'}
          deleteUser={deleteComment}
        />
      )}
      {isEdit ? (
        <div className="w-[100%] flex h-full relative font-semibold">
          <textarea
            className="w-[75%] h-[100%] p-3 text focus:outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <div className="absolute flex gap-x-2 top-[72px] right-[18px] cursor-pointer">
            <Button
              buttonText={'취소'}
              type={'cancelEditBtn'}
              isDisabled={false}
              onClickHandler={cancelEdit}
            />
            <Button
              buttonText={'수정'}
              type={'editCommentBtn'}
              isDisabled={false}
              onClickHandler={() => updateComment()}
            />
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="flex h-[42px] text-sm font-bold gap-x-3 items-center relative">
            <div className="w-6 h-6 bg-[#486284] rounded-[100px]"></div>
            <div>{data.memberName}</div>
            <div>{timeCalculate(data.sinceCreation)}</div>
            {isAuthor &&
              (isClicked ? (
                <div className="absolute top-5 right-6 cursor-pointer flex flex-col items-center font-bold text-base gap-y-2.5">
                  <div onClick={() => setIsEdit(true)}>수정</div>
                  <div className="h-[1px] border border-[#CCC] w-[35px]"></div>
                  <div onClick={openModal}>삭제</div>
                </div>
              ) : (
                <div
                  className="absolute right-6 cursor-pointer"
                  onClick={() => setIsClicked(true)}
                >
                  <NavBar />
                </div>
              ))}
          </div>
          <div
            className="flex w-[80%] h-[75px] mt-2"
            onClick={() => setIsClicked(false)}
          >
            {data.content}
          </div>
          {isReply && (
            <div className="flex gap-x-2">
              <Input
                type={'reply'}
                onChange={(e) => setReComment(e.target.value)}
              />
              <Button
                buttonText={'작성'}
                type={'cancelEditBtn'}
                isDisabled={false}
                onClickHandler={() => setIsReply(true)}
              />
              <Button
                buttonText={'취소'}
                type={'editCommentBtn'}
                isDisabled={false}
                onClickHandler={() => setIsReply(false)}
              />
            </div>
          )}
          <div
            className="absolute top-[84px] right-[-68px] font-medium cursor-pointer"
            onClick={() => setIsReply(true)}
          >
            답글달기
          </div>
        </div>
      )}
    </div>
  )
}

export default Comment
