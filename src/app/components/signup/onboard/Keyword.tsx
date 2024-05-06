interface KeywordProps {
  keyword: string
  clickKeyword: string
  bg?: string
}

const Keyword = ({ keyword, clickKeyword, bg }: KeywordProps) => {
  const normal = bg || 'bg-white'

  const textStyle =
    keyword === clickKeyword
      ? 'text-white bg-[#7AAAE8]'
      : `${normal} text-black`
  return (
    <div
      className={` ${textStyle} flex w-28 h-11 items-center justify-center rounded-[10px] text-base font-bold leading-normal shadow-md cursor-pointer`}
    >
      {keyword}
    </div>
  )
}

export default Keyword
