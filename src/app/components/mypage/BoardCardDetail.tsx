import { selectedPostId } from '@/app/recoil/board'
import Like from '@/app/ui/svg/main/Like'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
interface BoardCardDetailProps {
  title?: string
  content?: string
  boardId?: number
  groupCategory?: string
  recruitment?: string
  registrationDate?: string
  memberName?: string
  peopleNumber?: number
  // closeModal: () => void
}


interface BoardDetailContainer {
  nickname: string
}
const BoardCardDetail = ({nickname}:BoardDetailContainer) => {

  const [selectedId, setSelectedId] = useRecoilState(selectedPostId)




  const isSelected = selectedId !== 999
  const [data, setData] = useState<BoardInfoTypes | null>(null)


  useEffect(() => {
    
      const fetchData = async () => {
        console.log('데이터',selectedId);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/boardDetail?id=${selectedId}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        const resData = await response.json()
        setData(resData.result.boardInfo)
      }
      fetchData()
    }
  , [selectedId])

  console.log('디테일 가져온 데이터', data)

  return (
    <div className="w-full h-[982px] relative">

      
      <div className="w-full h-[982px] left-0 top-0 absolute bg-gray-50" /><div className="w-[1014.23px] h-[747px] left-[71.39px] top-[64px] absolute">
          <div className="w-[962px] h-[0px] left-0 top-[747px] absolute border border-stone-300"></div>
          <div className="left-[10px] top-[702px] absolute text-gray-900 text-[22px] font-semibold leading-[33px]">
            댓글
          </div>
          <div className="w-[964px] h-[511px] left-[10px] top-[198px] absolute text-gray-900 text-xl font-medium leading-[30px]">
            {data?.content}
          </div>
          <div className="w-[1004.23px] h-[45px] left-[10px] top-0 absolute flex-col justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-end gap-[626px] inline-flex">
                <div className="w-[600px] text-gray-900 text-3xl font-semibold leading-[45px]">
                  {data?.title}
                </div>
                <div className="w-[110.90px] h-[18px] text-gray-900 text-sm font-normal font-['Rubik'] leading-[30px]">
                  {data?.registrationDate}
                </div>

              </div>
            </div>
          </div>
        </div><div className="w-[962px] h-[119px] left-[71px] top-[833px] absolute">
            <div className="w-6 h-6 left-[918px] top-[20px] absolute rounded-[10px]" />
            <div className="w-[204px] h-[42px] left-[16px] top-[20px] absolute">
              <div className="w-[42px] h-[42px] left-0 top-0 absolute bg-zinc-600 rounded-full" />
              <div className="w-[147px] h-[42px] left-[50px] top-0 absolute">
                <div className="w-[83.69px] h-[42px] left-0 top-0 absolute text-black text-[15px] font-bold leading-snug">
                  {data?.memberName}
                </div>
                <div className="w-[54.72px] h-[42px] left-[92.28px] top-0 absolute text-black text-[15px] font-bold leading-snug">
                  {' '}
                  3분전
                </div>
              </div>
            </div>
            <div className="w-[114px] h-[35.89px] left-[16px] top-[68px] absolute text-black text-lg font-medium leading-[27px]">
              훌륭합니다.
            </div>
          </div><div className="w-[322px] h-[37px] left-[82px] top-[190px] absolute justify-start items-center gap-[19px] inline-flex">
            <div className="w-[70px] h-[25px] px-5 bg-blue-400 rounded-[15px] justify-center items-center gap-2 flex">
              <div className="w-[76px] h-6 text-center text-white text-base font-semibold leading-normal">
                {data?.peopleNumber}명
              </div>
            </div>
            <div className="w-[233px] h-6 text-slate-600 text-[15px] font-medium leading-normal">
              {data?.recruitment}
            </div>
          </div><div className="w-[946px] h-[29px] left-[84px] top-[141px] absolute">
            <div className="w-20 h-[29px] left-[866px] top-0 absolute">
              <div className="w-20 h-[29px] left-0 top-0 absolute rounded-[25px] border border-gray-900" />
              <div className="left-[26.60px] top-[4px] absolute text-center text-black text-sm font-bold leading-[21px]">
                삭제
              </div>
            </div>
            <div className="w-20 h-[29px] left-[773px] top-0 absolute">
              <div className="w-20 h-[29px] left-0 top-0 absolute bg-gray-900 rounded-[25px]" />
              <div className="left-[26.60px] top-[4px] absolute text-center text-white text-sm font-bold leading-[21px]">
                수정
              </div>
            </div>
            <div className="w-[106.40px] h-5 left-0 top-[4px] absolute text-gray-900 text-[15px] font-semibold font-['Rubik'] leading-[30px]">
              {data?.memberName}
            </div>
          </div><div className="w-[97px] h-[33px] left-[84px] top-[713px] absolute">
            <div className="left-[37px] top-0 absolute text-gray-900 text-[22px] font-semibold leading-[33px]">
              좋아요
            </div>
            <div className="w-[30px] h-[28px] left-0 top-[4px] absolute">
              <Like color={'black'} size={28} />
            </div>
          </div>

    </div>
  )
}

export default BoardCardDetail
