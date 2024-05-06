import { POINT } from '@/app/constants/admin'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Dispatch, SetStateAction } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface PointAnalProps {
  feedBack: number
  analysis: number
  total: number
  year: string
  month: string
  setYear: Dispatch<SetStateAction<string>>
  setMonth: Dispatch<SetStateAction<string>>
}

const PointAnal = (pointAnal: PointAnalProps) => {
  const { feedBack, analysis, total, year, month, setMonth, setYear } =
    pointAnal

  const handleMonthChange = (increment: number) => {
    if (month === '12' && increment === +1) {
      let newMonth = 1
      let newYear = parseInt(year) + increment
      setMonth(newMonth.toString())
      setYear(newYear.toString())
    } else if (month === '1' && increment === -1) {
      let newMonth = 12
      let newYear = parseInt(year) + increment
      setMonth(newMonth.toString())
      setYear(newYear.toString())
    } else {
      let newMonth = parseInt(month) + increment
      setMonth(newMonth.toString())
    }
  }

  const options = {
    layout: {
      padding: {
        bottom: 20,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'black',
          font: {
            weight: 'bold' as const,
            size: 18,
            family: " 'Pretendard', sans-serif",
          },
        },
      },
      y: {
        ticks: {
          color: 'black',
          font: {
            weight: 'bold' as const,
            size: 18,
            family: " 'Pretendard', sans-serif",
          },
        },
      },
    },
  }
  const labels = [POINT[0], POINT[1], POINT[2]]
  const value = [feedBack, analysis, total]
  const data = {
    labels,
    datasets: [
      {
        data: value,
        backgroundColor: ['#F5CF87', '#7AAAE8', '#C68989'],
      },
    ],
  }

  return (
    <div className="flex flex-col items-center gap-y-8 mt-[36px]">
      <div className=" flex text-[32px] font-bold gap-x-8">
        <div onClick={() => handleMonthChange(-1)} className="cursor-pointer">
          {'<'}
        </div>
        <div>
          {year}년 {month}월
        </div>
        <div onClick={() => handleMonthChange(+1)} className="cursor-pointer">
          {'>'}
        </div>
      </div>
      <div className="flex flex-col w-[949px] h-[auto] rounded-[10px] shadow border-2 border-stone-300 p-[17px] mb-[108px]">
        <div className="flex items-center justify-center">
          <div className="w-[949px] h-[auto] mt-4 px-6">
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PointAnal
