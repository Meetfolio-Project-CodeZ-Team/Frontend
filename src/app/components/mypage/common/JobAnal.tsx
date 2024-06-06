import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  CircularProgress,
} from '@nextui-org/react'

interface JobAnalProps {
  accuracy: number
  all: number
  jKeyword?: string
}
const JobAnal = (jobAnal: JobAnalProps) => {
  const { accuracy, all, jKeyword } = jobAnal
  return (
    <div>
      <Card className="w-[400px] h-[400px] bg-transparent shadow-none">
        <CardBody className="justify-center items-center pb-0">
          <CircularProgress
            classNames={{
              svg: 'w-80 h-80',
              indicator: 'stroke-[#0A7AFF]',
              track: 'stroke-[#D8E9FF]/90',
              value: 'text-5xl font-semibold text-[#486284]',
            }}
            value={accuracy > 95 ? accuracy - 5 : accuracy}
            strokeWidth={4}
            showValueLabel={true}
          />
        </CardBody>
        <CardFooter className="justify-center items-center pt-0">
          <Chip
            classNames={{
              base: 'border-1 border-white/30',
              content: 'text-black/90 text-3xl font-semibold',
            }}
            variant="bordered"
          >
            {jKeyword}
          </Chip>
        </CardFooter>
      </Card>
    </div>
  )
}

export default JobAnal
