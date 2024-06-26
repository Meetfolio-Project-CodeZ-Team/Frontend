'use client'

import { close } from '@/app/ui/IconsPath'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Icons from '../../common/Icons'

interface DeleteModalProps {
  closeModal: () => void
  deleteCov?: () => void
}
const CovletDeleteModal = ({ closeModal, deleteCov }: DeleteModalProps) => {
  const router = useRouter()
  const [isDeleted, setIsDeleted] = useState(false)

  useEffect(() => {
    if (isDeleted) {
      setTimeout(() => {
        router.push(`/mypage`)
      }, 8000)
    }
  }, [isDeleted, router])

  const handleDelete = () => {
    setIsDeleted(true)
    if (deleteCov) {
      deleteCov()
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="w-[548px] h-[234px] rounded-[15px] bg-[#D3DCE7] relative">
        <div
          className=" right-[18px] top-[16px] absolute cursor-pointer"
          onClick={closeModal}
        >
          <Icons name={close} />
        </div>

        <div className="w-[427px] h-[52px] left-[64px] top-[90px] absolute text-center text-gray-900 text-[28px] font-bold font-['Plus Jakarta Sans'] leading-[42px]">
          {!isDeleted ? '정말 삭제하시겠습니까?' : '삭제되었습니다. '}
        </div>
        <div
          className=" flex items-center justify-center w-[100px] h-[38px] left-[411px] top-[179px] absolute  cursor-pointer bg-slate-600 rounded-[15px]"
          onClick={!isDeleted ? handleDelete : closeModal}
        >
          <div className=" text-white text-lg font-bold">확인</div>
        </div>
      </div>
    </div>
  )
}

export default CovletDeleteModal
