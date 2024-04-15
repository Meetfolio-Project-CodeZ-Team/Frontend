import React from 'react'
import Icons from '../../common/Icons'
import { boardDelete } from '@/app/ui/IconsPath'
import { useModal } from '@/app/hooks/useModal'
import DeleteModal from '../common/DeleteModal'

interface UserInfoProps {
  registrationDate: string
  email: string
  grade: string
  major: string
  jobKeyword: string
  point: number
}

const UserInfo = (userInfo: UserInfoProps) => {
  const { registrationDate, email, grade, major, jobKeyword, point } = userInfo
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)

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
          className="ml-[26px] flex text-center cursor-pointer"
          onClick={openModal}
        >
          <Icons name={boardDelete} />
        </div>
        <div onClick={handleModalClick}>
          {isOpen && <DeleteModal closeModal={closeModal} />}
        </div>
      </div>
    </div>
  )
}

export default UserInfo
