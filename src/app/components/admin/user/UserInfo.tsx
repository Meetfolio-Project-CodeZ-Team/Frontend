'use client'
import React from 'react'
import Icons from '../../common/Icons'
import { boardDelete } from '@/app/ui/IconsPath'
import { useModal } from '@/app/hooks/useModal'
import DeleteModal from '../common/DeleteModal'
import { deleteUserAlert } from '@/app/utils/toast'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface UserInfoProps {
  registrationDate: string
  email: string
  grade: string
  major: string
  jobKeyword: string
  point: number
  userId: number
  status: string
}

const UserInfo = (userInfo: UserInfoProps) => {
  const {
    registrationDate,
    email,
    grade,
    major,
    jobKeyword,
    point,
    userId,
    status,
  } = userInfo
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  const isActive = status === 'ACTIVE'

  const deleteUser = async (userId: number) => {
    deleteUserAlert()
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/user/delete?userId=${userId}`,
      {
        method: 'DELETE',
      },
    )
    if (res.ok) {
      window.location.reload()
    } else {
      console.error('Failed to delete user')
    }
  }
  return (
    <div className="flex flex-col w-[1034px] h-[50px]">
      <div className="flex w-[1034px] h-[50px] border-b border-[#BDBDBD] items-center text-black text-lg">
        <div className="w-[136px] text-center">{registrationDate}</div>
        <div className="w-[231px] text-center">{email}</div>
        <div className="w-[94px] text-center">{grade}</div>
        <div className="w-[176px] text-center">{major}</div>
        <div className="w-[107px] text-center">{jobKeyword}</div>
        <div className="w-[152px] text-center">{point}</div>
        <div
          className={`ml-[26px] flex items-center justify-center cursor-pointer w-[68px] h-10 ${isActive ? 'bg-[#7AAAE8] text-white' : 'bg-slate-400 text-black'}  text-base p-2 font-semibold rounded-[10px]`}
          onClick={openModal}
        >
          {isActive ? '활성' : '비활성'}
        </div>
        <ToastContainer />
        <div onClick={handleModalClick}>
          {isOpen && (
            <DeleteModal
              closeModal={closeModal}
              deleteUser={() => deleteUser(userId)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default UserInfo
