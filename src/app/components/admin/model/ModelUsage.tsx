import { MODEL_EVALUATION } from '@/app/constants/admin'
import ServiceUsage from '../dashboard/ServiceUsage'
import ModelAnal from './ModelAnal'

interface ModelUsageProps {
  feedbackCount: number
  analysisCount: number
  totalCount: number
}

const ModelUsage = (modelAnal: ModelUsageProps) => {
  const { feedbackCount, analysisCount, totalCount } = modelAnal
  return (
    <div className="flex flex-col">
      <ServiceUsage
        feedbackCount={feedbackCount}
        analysisCount={analysisCount}
        totalCount={totalCount}
      />
      <ModelAnal modelEvaluation={MODEL_EVALUATION} />
    </div>
  )
}

export default ModelUsage
