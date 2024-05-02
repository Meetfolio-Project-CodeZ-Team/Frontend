interface KeywordProps {
  keyword: string
  clickKeyword: string
}

const Keyword = ({ keyword, clickKeyword }: KeywordProps) => {
  const textStyle =
    keyword === clickKeyword ? 'text-white bg-blue-400' : 'bg-white text-black'
  return (
    <div
      className={`${textStyle} flex w-28 h-11 items-center justify-center rounded-[10px] text-base font-medium leading-normal shadow-md cursor-pointer`}
    >
      {keyword}
    </div>
  )
}

export default Keyword
