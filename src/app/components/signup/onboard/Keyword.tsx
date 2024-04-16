interface KeywordProps {
  keyword: string
}

const Keyword = ({ keyword }: KeywordProps) => {
  return (
    <div className="flex w-28 h-11 items-center justify-center bg-white rounded-[10px] text-base font-medium leading-normal shadow-md cursor-pointer">
      {keyword}
    </div>
  )
}

export default Keyword
