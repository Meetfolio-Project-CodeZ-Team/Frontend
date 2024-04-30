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
  console.log(modelEvaluation, '배열')
  if (modelEvaluation.length > 2) {
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
              size: 16,
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
              size: 14,
              family: " 'Pretendard', sans-serif",
            },
          },
        },
        y: {
          ticks: {
            color: 'black',
            font: {
              weight: 'bold' as const,
              size: 14,
              family: " 'Pretendard', sans-serif",
            },
          },
        },
      },
    }
    const labels = [
      modelEvaluation[0].modelName || '',
      modelEvaluation[1].modelName || '',
      modelEvaluation[2].modelName || '',
    ]
    const value = [
      [
        modelEvaluation[0].accuracy || 0,
        modelEvaluation[1].accuracy || 0,
        modelEvaluation[2].accuracy || 0,
      ],
      [
        modelEvaluation[0].loss || 0,
        modelEvaluation[1].loss || 0,
        modelEvaluation[2].loss || 0,
      ],
    ]
    const acc = {
      labels,
      datasets: [
        {
          label: 'accuracy',
          data: value[0],
          backgroundColor: ['#F5CF87'],
        },
      ],
    }
    const loss = {
      labels,
      datasets: [
        {
          label: 'loss',
          data: value[1],
          backgroundColor: ['#7AAAE8'],
        },
      ],
    }

    return (
      <div className="flex flex-col w-[1018px] h-[auto] rounded-[10px] shadow border-2 border-stone-300 py-8 px-4 my-7 gap-y-4">
        <div className="flex items-center gap-x-3">
          <div className="text-2xl font-bold ">AI 모델 성능 지표</div>
          <Icons name={model} />
        </div>
        <div className="flex w-auto  gap-x-5">
          <div className="flex w-[500px] h-full">
            <Bar options={options} data={acc} />
          </div>
          <div className="flex w-[500px] h-full">
            <Bar options={options} data={loss} />
          </div>
        </div>
      </div>
    )
  }
}

export default ModelAnal
