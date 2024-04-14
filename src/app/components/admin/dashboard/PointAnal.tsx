import React from 'react'
import Icons from '../../common/Icons'
import { point } from '@/app/ui/IconsPath'
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
}

const PointAnal = (pointAnal: PointAnalProps) => {
  const { feedBack, analysis, total } = pointAnal

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            weight: 'bold' as const,
            family: "'Pretendard', sans-serif",
            size: 20,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'black',
          font: {
            weight: 'bold' as const,
            size: 16,
            family: " 'Pretendard', sans-serif",
          },
        },
      },
      y: {
        ticks: {
          color: 'black',
          font: {
            weight: 'bold' as const,
            size: 16,
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
    <div className="flex flex-col w-[569px] h-[auto] rounded-[10px] shadow border-2 border-stone-300 p-[17px]">
      <div className="flex items-center gap-x-2.5 mb-1">
        <div className="text-[26px] font-bold ">포인트 통계</div>
        <Icons className="mt-2" name={point} />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[540px] h-[auto] mt-8">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default PointAnal
