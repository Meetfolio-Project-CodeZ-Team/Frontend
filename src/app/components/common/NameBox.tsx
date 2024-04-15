interface NameBoxProps {
  stack: string
}

const NameBox = ({ stack }: NameBoxProps) => {
  return (
    <div className=" flex w-[150px] h-[70px] justify-center items-center bg-white rounded-[10px]">
      <div className="font-bold text-[48px]">{stack}</div>
    </div>
  )
}

export default NameBox
