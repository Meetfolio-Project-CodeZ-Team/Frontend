import { useEffect, useState } from 'react'
import JobAnal from '../dashboard/JobAnal'
import PointAnal from '../dashboard/PointAnal'
import ServiceUsage from '../dashboard/ServiceUsage'
import UserUsage from '../dashboard/UserUsage'

const DashboardContainer = () => {
  const [data, setData] = useState<ResponseDashBoard | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/dashboard`,
      )
      const resData = await response.json()
      setData(resData.result)
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-col gap-y-7 bg-white w-[full] pl-[54px] pt-[20px] pb-[44px]">
      <div className="text-[28px] font-bold">대시보드</div>
      <ServiceUsage
        feedbackCount={data?.aiServiceInfo.feedbackCount || 0}
        analysisCount={data?.aiServiceInfo.analysisCount || 0}
        totalCount={data?.aiServiceInfo.totalCount || 0}
      />
      <UserUsage
        totalCount={data?.aiServiceInfo.totalCount||0}
        satisfaction={data?.aiServiceInfo.satisfaction || 0}
        paymentInfo={data?.paymentInfo || 0}
      />
      <div className="flex gap-x-[15px]">
        <JobAnal
          backend={data?.membersInfo.backend || 1}
          frontend={data?.membersInfo.web || 1}
          app={data?.membersInfo.app || 1}
          design={data?.membersInfo.design || 1}
          ai={data?.membersInfo.ai || 1}
        />
        <PointAnal
          feedBack={data?.pointInfo.coverLetterPoint || 0}
          analysis={data?.pointInfo.analysisPoint || 0}
          total={data?.pointInfo.totalPoint || 0}
          yearMonth={data?.pointInfo.yearMonth || '0'}
        />
      </div>
    </div>
  )
}

export default DashboardContainer
