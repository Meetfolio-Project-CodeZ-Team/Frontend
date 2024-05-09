import { MODEL_MANAGE_H } from '@/app/constants/admin'
import ModelManageInfo from './ModelManageInfo'

interface ModelManageProps {
  modelData: ModelData[]
}

const ModelManage = ({ modelData }: ModelManageProps) => {
  console.log(modelData)

  return (
    <div className="flex flex-col w-[1010px] h-[720px] items-center">
      <div className="text-2xl font-bold mb-6">{MODEL_MANAGE_H[6]}</div>
      <div className="flex w-[1010px] h-[50px] pl-[13px] border-y border-[#616161] items-center text-black text-lg">
        <div className="font-bold">{MODEL_MANAGE_H[0]}</div>
        <div className="ml-[107px] ">{MODEL_MANAGE_H[1]}</div>
        <div className="ml-[116px]">{MODEL_MANAGE_H[2]}</div>
        <div className="ml-[100px]">{MODEL_MANAGE_H[3]}</div>
        <div className="ml-[110px]">{MODEL_MANAGE_H[4]}</div>
        <div className="ml-[107px]">{MODEL_MANAGE_H[5]}</div>
      </div>
      {modelData.map((modelInfo, i) => (
        <ModelManageInfo
          key={modelInfo.modelId}
          modelId={modelInfo.modelId}
          version={modelInfo.version}
          modelName={modelInfo.modelName}
          fileName={modelInfo.fileName}
          filePath={modelInfo.filePath}
          status={modelInfo.status}
          createdDate={modelInfo.createdDate}
          activatedDate={modelInfo.activatedDate}
        />
      ))}
    </div>
  )
}

export default ModelManage
