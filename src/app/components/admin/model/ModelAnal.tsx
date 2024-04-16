import React from 'react'
import Icons from '../../common/Icons'
import { model, point } from '@/app/ui/IconsPath'
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface ModelAnalProps {
  modelEvaluation: ModelValue[]
}

const ModelAnal = ({ modelEvaluation }: ModelAnalProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        display: true,
        labels: {
          font: {
            weight: 'bold' as const,
            family: "'Pretendard', sans-serif",
            size: 20,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (item: any) => {
            const count = item.dataset.data[item.dataIndex]
            const label = item.label
            const info = ` ${label} : ${count}`
            return info
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
  const labels = [
    modelEvaluation[0].modelName,
    modelEvaluation[1].modelName,
    modelEvaluation[2].modelName,
  ]
  const value = [
    [
      modelEvaluation[0].accuracy,
      modelEvaluation[1].accuracy,
      modelEvaluation[2].accuracy,
    ],
    [modelEvaluation[0].loss, modelEvaluation[1].loss, modelEvaluation[2].loss],
  ]
  const data = {
    labels,
    datasets: [
      {
        label: 'accuracy',
        data: value[0],
        backgroundColor: ['#F5CF87'],
      },
      {
        label: 'loss',
        data: value[1],
        backgroundColor: ['#7AAAE8'],
      },
    ],
  }

  return (
    <div className="flex flex-col w-[1018px] h-[auto] rounded-[10px] shadow border-2 border-stone-300 p-[17px] mt-[23px] mb-[20px]">
      <div className="flex items-center gap-x-2.5">
        <div className="text-[26px] font-bold ">AI 모델 성능 지표</div>
        <Icons name={model} />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[850px] h-[auto] mt-8">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default ModelAnal
