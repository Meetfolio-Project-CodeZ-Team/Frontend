import { JOBKEYWORD } from '@/app/constants/auth'
import { expData } from '@/app/recoil/experience'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useRecoilState } from 'recoil'
import Icons from '../../common/Icons'
import { doughnut } from '@/app/ui/IconsPath'
ChartJS.register(ArcElement, Tooltip, Legend)

interface JobAnalProps {
  backend: number
  frontend: number
  app: number
  design: number
  ai: number
}

const JobAnal = (jobAnal: JobAnalProps) => {
  const { backend, frontend, app, design, ai } = jobAnal
  const data = {
    labels: [
      JOBKEYWORD[0],
      JOBKEYWORD[1],
      JOBKEYWORD[2],
      JOBKEYWORD[3],
      JOBKEYWORD[4],
    ],
    datasets: [
      {
        label: 'test',
        data: [backend, frontend, app, design, ai],
        backgroundColor: [
          '#F5CF87',
          '#C68989',
          '#7AAAE8',
          '#CFE8FF',
          '#93DAD2',
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
    <div className="flex flex-col w-[447px] h-[423px] rounded-[10px] shadow border-2 border-stone-300 p-[17px]">
      <div className="flex items-center gap-x-2.5 mb-1">
        <div className="text-[26px] font-bold ">희망 직무 회원 통계 </div>
        <Icons name={doughnut} />
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
