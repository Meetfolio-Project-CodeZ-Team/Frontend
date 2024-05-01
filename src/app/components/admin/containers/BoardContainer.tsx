'use client'
import { Board, JOBKEYWORD } from '@/app/constants/auth'
import DropDownU from '../common/DropDownU'
import ComunityBoard from '@/app/components/admin/board/ComunityBoard'
import SearhBoard from '../board/SearhBoardInfo'

const BoardContainer = () => {
  return (
    <div className="flex flex-col gap-y-9 bg-white w-[full] pl-[54px] pt-[27px] pb-[44px]">
      <div className="text-[32px] font-bold leading-[48px]">커뮤니티 관리</div>
      <div className="flex items-center w-[1013px] justify-between">
        <SearhBoard />
        <DropDownU
          options={JOBKEYWORD}
          title={'전체'}
          onSelect={() => console.log('클릭')}
        />
      </div>
      <ComunityBoard />
    </div>
  )
}

export default BoardContainer
