import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { POINT } from '@/app/constants/admin'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface PointAnalProps {
  feedBack: number
  analysis: number
  total: number
  year: string
  month: string
}

const PointAnal = (pointAnal: PointAnalProps) => {
  const { feedBack, analysis, total, year, month } = pointAnal

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
    <div className="flex flex-col items-center gap-y-8 mt-[62px]">
      <div className="text-[40px] font-bold">
        {year}년 {month}월
      </div>
      <div className="flex flex-col w-[949px] h-[auto] rounded-[10px] shadow border-2 border-stone-300 p-[17px] mb-[108px]">
        <div className="flex items-center justify-center">
          <div className="w-[949px] h-[auto] mt-8">
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PointAnal
