interface NameBoxProps {
  stack: string
}

const NameBox = ({ stack }: NameBoxProps) => {
  return (
    <div className=" flex w-[500px] h-[40px] justify-center items-center bg-slate-300  rounded-[10px]">
      <div className="font-medium text-[16px] ">{stack}</div>
    </div>
  )
}

export default NameBox
