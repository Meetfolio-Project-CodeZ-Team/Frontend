'use client'
import { useEffect, useRef, useState } from 'react'
import Icons from '../../common/Icons'
import { dropdown } from '@/app/ui/IconsPath'

interface CalendarDropDownProps {
  options: readonly string[]
  title: string
  onSelect: (selectedTag: string) => void
}

const CalendarDropDown = ({
  options,
  title,
  onSelect,
}: CalendarDropDownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col text-base font-bold">
      <div
        className="flex relative w-[74px] h-[24px] gap-x-1 rounded-[10px] bg-white border border-[#486284] cursor-pointer"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <div
          className={` text-[#486284] ${selectedOption ? 'w-[74px] justify-center-center text-center' : 'absolute left-[17px]'}`}
        >
          {selectedOption ? selectedOption : title}
        </div>
        {!selectedOption && (
          <div className="absolute top-[6px] left-[33px]">
            <Icons name={dropdown} />
          </div>
        )}
      </div>
      <div className="relative">
        {isOpen && (
          <div
            className="absolute w-full h-[136px] top-full left-0 bg-white rounded-[10px] border-[#486284] border-2 overflow-auto scrollbar-hide"
            ref={dropdownRef}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center justify-center w-[74px] h-[24px] py-1 cursor-pointer hover:bg-gray-100 border-b-2 border-[#D3DCE7 ] ${
                  index == 0 ? 'border-b' : ''
                }
                `}
                onClick={() => {
                  handleOptionClick(option)
                }}
              >
                <span className="text-sm font-semibold text-[#486283] leading-[21px]">
                  {option}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CalendarDropDown
