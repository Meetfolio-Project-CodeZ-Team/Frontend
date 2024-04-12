import ServiceUsage from '../dashboard/ServiceUsage'
import UserUsage from '../dashboard/UserUsage'

const DashboardContainer = () => {
  return (
    <div className="flex flex-col gap-y-9 bg-white w-[full] h-[full] pl-[54px] pt-[27px]">
      <div className="text-[32px] font-bold leading-[48px]">대시보드</div>
      <ServiceUsage feedbackCount={50} analysisCount={50} totalCount={100} />
      <UserUsage totalCount={1000} satisfaction={4.8} paymentInfo={1000000} />
    </div>
  )
}

export default DashboardContainer
