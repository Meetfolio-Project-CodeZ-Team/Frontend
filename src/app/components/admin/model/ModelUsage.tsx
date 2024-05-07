import ServiceUsage from '../dashboard/ServiceUsage'
import ModelAnal from './ModelAnal'

interface ModelUsageProps {
  modelData: ResponseModelData
}

const ModelUsage = ({ modelData }: ModelUsageProps) => {
  const aiInfo = modelData.aiserviceInfo
  const evInfo = modelData.modelEvaluation

  return (
    <div className="flex flex-col">
      <ServiceUsage
        feedbackCount={aiInfo.feedbackCount}
        analysisCount={aiInfo.analysisCount}
        totalCount={aiInfo.totalCount}
      />
      <ModelAnal modelEvaluation={evInfo} />
    </div>
  )
}

export default ModelUsage
