import { PROFILE_EMOJI } from '@/app/constants/signup'
import Image from 'next/image'

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
      <Image
        width={20}
        height={20}
        src={`/Images/Emoji/${PROFILE_EMOJI[emojiIndex]}.png`}
        alt="logoIcon"
      />
    </div>
  )
}

export default Emoji
