import JobAnal from '../dashboard/JobAnal'
import ServiceUsage from '../dashboard/ServiceUsage'
import UserUsage from '../dashboard/UserUsage'

const DashboardContainer = () => {
  return (
    <div className="flex flex-col gap-y-9 bg-white w-[full] h-[full] pl-[54px] pt-[27px] pb-[48px]">
      <div className="text-[32px] font-bold leading-[48px]">대시보드</div>
      <ServiceUsage feedbackCount={50} analysisCount={50} totalCount={100} />
      <UserUsage totalCount={1000} satisfaction={4.8} paymentInfo={1000000} />
      <div className="flex gap-x-[15px]">
        <JobAnal backend={20} frontend={15} app={10} design={20} ai={35} />
      </div>
    </div>
  )
}

export default DashboardContainer
