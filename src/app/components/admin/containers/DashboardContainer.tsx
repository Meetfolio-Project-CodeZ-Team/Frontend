import JobAnal from '../dashboard/JobAnal'
import PointAnal from '../dashboard/PointAnal'
import ServiceUsage from '../dashboard/ServiceUsage'
import UserUsage from '../dashboard/UserUsage'
interface DashboardContainerProps {
  DashboardInfo: ResponseDashBoard
}

const DashboardContainer = ({ DashboardInfo }: DashboardContainerProps) => {
  const { aiServiceInfo, membersInfo, pointInfo, paymentInfo } = DashboardInfo
  const { feedbackCount, analysisCount, totalCount, satisfaction } =
    aiServiceInfo
  const { analysisPoint, solutionPoint, totalPoint } = pointInfo
  return (
    <div className="flex flex-col gap-y-9 bg-white w-[full] pl-[54px] pt-[27px] pb-[44px]">
      <div className="text-[32px] font-bold leading-[48px]">대시보드</div>
      <ServiceUsage
        feedbackCount={feedbackCount}
        analysisCount={analysisCount}
        totalCount={totalCount}
      />
      <UserUsage
        totalCount={membersInfo.totalCount}
        satisfaction={satisfaction}
        paymentInfo={paymentInfo}
      />
      <div className="flex gap-x-[15px]">
        <JobAnal
          backend={membersInfo.backend}
          frontend={membersInfo.web}
          app={membersInfo.app}
          design={membersInfo.design}
          ai={membersInfo.ai}
        />
        <PointAnal
          feedBack={solutionPoint}
          analysis={analysisPoint}
          total={totalPoint}
        />
      </div>
    </div>
  )
}

export default DashboardContainer
