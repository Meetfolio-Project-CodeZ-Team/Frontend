import { model } from '@/app/ui/IconsPath'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import Icons from '../../common/Icons'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface ModelAnalProps {
  modelEvaluation: ModelValue[]
}

const ModelAnal = ({ modelEvaluation }: ModelAnalProps) => {
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
      modelEvaluation[0].modelName || 'example1',
      modelEvaluation[1].modelName || 'example2',
      modelEvaluation[2].modelName || 'example3',
    ]
    const value = [
      [
        modelEvaluation[0].accuracy || 91,
        modelEvaluation[1].accuracy || 80,
        modelEvaluation[2].accuracy || 76,
      ],
      [
        modelEvaluation[0].loss || 2,
        modelEvaluation[1].loss || 3,
        modelEvaluation[2].loss || 0.7,
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
  } else {
    return (
      <div className="flex flex-col w-[1018px] h-[auto] rounded-[10px] shadow border-2 border-stone-300 py-8 px-4 my-7 gap-y-4">
        <div className="flex items-center gap-x-3">
          <div className="text-2xl font-bold ">AI 모델 성능 지표</div>
          <Icons name={model} />
        </div>
        <div className="flex w-full flex-col h-[300px] items-center justify-center text-3xl text-[#486284] font-bold">
          <div className="flex w-[500px] items-center justify-center">
            {'😵현재는 모델 데이터가 존재하지 않아요'}
          </div>
          <div className="flex w-[500px] items-center justify-center">
            {'재접속 혹은 잠시 기다려주세요'}
          </div>
        </div>
      </div>
    )
  }
}

export default ModelAnal
