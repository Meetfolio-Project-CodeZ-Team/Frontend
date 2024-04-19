'use client'
import { useEffect, useRef, useState } from 'react'
import Icons from '../../common/Icons'
import { dropdown } from '@/app/ui/IconsPath'
import { JOB_ENUM } from '@/app/constants/auth'

interface DropDownUProps {
  options: readonly JobType[]
  title: string
  onSelect: (selectedTag: string) => void
}

const DropDownU = ({ options, title, onSelect }: DropDownUProps) => {
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

  const handleOptionClick = (option: JobType) => {
    console.log('선택완료');
    
    setSelectedOption(option)
    onSelect(JOB_ENUM[option])
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col text-base font-bold">
      <div
        className="flex relative w-[200px] h-[45px] rounded-[10px] bg-white border-[1px] border-[#486284] cursor-pointer"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <p className="m-auto text-[#486284]">
          {selectedOption ? selectedOption : title}
        </p>
        <div className="absolute top-[16px] left-[164px]">
          <Icons name={dropdown} />
        </div>
      </div>
      <div className="relative">
        {isOpen && (
          <div
            className="absolute w-full h-auto top-full left-0 bg-white rounded-[6px] overflow-auto scrollbar-hide"
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

export default DropDownU
