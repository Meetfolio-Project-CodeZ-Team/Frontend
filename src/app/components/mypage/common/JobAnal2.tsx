import { JOBKEYWORD } from '@/app/constants/auth'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend)

interface JobAnalProps {
  backend: number
  all: number
}

const JobAnal = (jobAnal: JobAnalProps) => {
  const { backend, all } = jobAnal
  const data = {
    labels: [
      JOBKEYWORD[0],
      
    ],
    datasets: [
      {
        label: 'test',
        data: [backend, all],
        backgroundColor: [
          '#F5CF87',
          '#DEE5ED',
        ],
        borderWidth: 1,
      },
    ],
  }
  const options = {
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          boxWidth: 12,
          font: {
            weight: 'bold' as const,
            size: 16,
            family: " 'Pretendard', sans-serif",
          },
          color: 'black',
          borderRadius: 10,
          position: 'bottom',
        },
      },
      tooltip: {
        titleFont: {
          size: 12,
        },
        bodyFont: {
          size: 12,
        },
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
  }

  return (
    <div className="flex flex-col w-[447px] h-[423px] rounded-[10px]  p-[17px]">
      <div className="flex items-center gap-x-2.5 mb-1">
        <div className="text-[24px] ml-[230px] font-bold ">나의 직무 적합도 </div>
        
      </div>
      <div className="flex items-center justify-center ">
        <div className="w-[360px] h[300px]">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default JobAnal
