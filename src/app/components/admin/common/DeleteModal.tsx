'use client'
interface DeleteModalProps {
  closeModal: () => void
  deleteUser?: () => void
  text: string
}
const DeleteModal = ({ closeModal, deleteUser, text }: DeleteModalProps) => {
  const handleDelete = () => {
    if (deleteUser) {
      deleteUser()
      closeModal()
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[548px] h-[234px] rounded-[15px] bg-[#D3DCE7] relative">
        <div className="w-[427px] h-[52px] left-[64px] top-[80px] absolute text-center text-gray-900 text-[28px] font-bold font-['Plus Jakarta Sans'] leading-[42px]">
          {text}
        </div>
        <div
          className=" flex items-center justify-center w-[100px] h-[38px] left-[300px] top-[179px] absolute cursor-pointer bg-white rounded-[15px]"
          onClick={handleDelete}
        >
          <div className=" text-black text-lg font-bold">예</div>
        </div>
        <div
          className=" flex items-center justify-center w-[100px] h-[38px] left-[411px] top-[179px] absolute cursor-pointer bg-white rounded-[15px]"
          onClick={closeModal}
        >
          <div className=" text-black text-lg font-bold">아니오</div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
