import { useState } from 'react'

export const useModal2 = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const openmodal = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
    setIsOpen(true);
  }

  const closemodal = () => {
    setIsOpen(false)
  }

  const handlemodalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation()
  }

  return {
    isOpen,
    openmodal,
    closemodal,
    handlemodalClick,
  }
}
