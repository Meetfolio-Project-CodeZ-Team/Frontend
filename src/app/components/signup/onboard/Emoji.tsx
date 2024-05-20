import { EMOJI_VALUE } from '@/app/constants/signup'

interface EmojiProps {
  emojiIndex: number
  clickedEmoji: number
}

const Emoji = ({ emojiIndex, clickedEmoji }: EmojiProps) => {
  const borderStyle =
    emojiIndex == clickedEmoji
      ? 'border-4 border-[#0A7AFF]'
      : `border border-[#CCCCCC]`
  return (
    <div
      className={` ${borderStyle} flex w-[64px] border h-[36px] items-center justify-center rounded-[40px] text-[15px] shadow-md cursor-pointer bg-white`}
    >
      {EMOJI_VALUE[emojiIndex]}
    </div>
  )
}

export default Emoji
