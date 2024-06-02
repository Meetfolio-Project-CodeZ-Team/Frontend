'use client'
import { dropdown } from '@/app/ui/IconsPath'
import { useEffect, useRef, useState } from 'react'
import Icons from '../../../common/Icons'

interface DropDownOBProps {
  options: readonly GradeEnum[]
  title: string
  onSelect: (selectedTag: GradeEnum) => void
}

const DropDownOB = ({ options, title, onSelect }: DropDownOBProps) => {
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

  const handleOptionClick = (option: GradeEnum) => {
    setSelectedOption(option)
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col text-xl font-medium">
      <div
        className="flex w-auto h-[60px] pl-10 pr-6 rounded-[6px] bg-white border-[2px] border-[#C4C4C4] items-center place-content-between cursor-pointer"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <p className={`${selectedOption ? 'text-black' : 'text-[#a1a6ae]'} `}>
          {selectedOption ? selectedOption : title}
        </p>
        <Icons name={dropdown} />
      </div>
      <div className="relative">
        {isOpen && (
          <div
            className="absolute w-full h-[180px] top-full left-0 bg-white rounded-[6px] overflow-auto scrollbar-hide"
            ref={dropdownRef}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center justify-center w-full h-[37px] py-1 cursor-pointer hover:bg-gray-100 border-t-2 border-[#D3DCE7] ${
                  index == 0 ? 'border-none' : ''
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

export default DropDownOB
