'use client'

import { INPUT_STYLE } from '@/app/constants/styles'

interface InputProps {
  type:
    | 'login'
    | 'default'
    | 'auth'
    | 'onboard'
    | 'search'
    | 'train'
    | 'password'
    | 'board'
    | 'member'
    | 'charge'
    | 'reply'
  textValue?: string
  inputType?: string
  name?: string
  placeholder?: string
  className?: string
  accept?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: () => void
  onBlur?: () => void
  onEnterPress?: () => void
}

const Input = ({
  type,
  name,
  textValue,
  placeholder,
  className,
  inputType,
  accept,
  onFocus,
  onBlur,
  onEnterPress,
  onChange,
}: InputProps) => {
  const buttonStyles = INPUT_STYLE[type](className || '')

  return (
    <input
      type={inputType}
      value={textValue}
      placeholder={placeholder}
      name={name}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={(e) => e.key === 'Enter' && onEnterPress && onEnterPress()}
      onChange={onChange}
      className={buttonStyles}
      accept={accept}
    />
  )
}

export default Input
