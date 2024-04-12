import { DASHBOARD, SERVICE } from '@/app/constants/admin'
import ServiceIcon from '@/app/ui/svg/ServiceIcon'
interface ServiceUsageProps {
  feedbackCount: number
  analysisCount: number
  totalCount: number
}
const ServiceUsage = (ServiceUsage: ServiceUsageProps) => {
  const { feedbackCount, analysisCount, totalCount } = ServiceUsage
  return (
    <div className="w-[1018px] h-[180px] relative rounded-[10px] shadow border-2 border-stone-300">
      <div className="absolute flex items-center gap-x-[15px] left-[20px] top-[24px] text-[25px] font-bold leading-[37.50px]">
        {DASHBOARD.Service} <ServiceIcon />
      </div>
      <div className="absolute flex items-center gap-x-[60px] left-[86px] top-[92px]">
        <div className="flex justify-center items-end gap-x-12 font-bold">
          <div className="text-zinc-600 pb-2 text-[22px]">{SERVICE[0]}</div>
          <div className="text-black text-[35px]">{feedbackCount}건</div>
        </div>
        <div className="flex justify-center items-end gap-x-12 font-bold">
          <div className="text-zinc-600 pb-2 text-[22px]">{SERVICE[1]}</div>
          <div className="text-black text-[35px]">{analysisCount}건</div>
        </div>
        <div className="flex justify-center items-end gap-x-12 font-bold">
          <div className="text-zinc-600 pb-2 text-[22px]">{SERVICE[2]}</div>
          <div className="text-black text-[35px]">{totalCount}건</div>
        </div>
      </div>
    </div>
  )
}

export default ServiceUsage
