interface TrashBinProps {
  size: number
  color: string
}

const TrashBin = ({ size, color }: TrashBinProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
    >
      <path
        d="M6 5.14239L6 3.4709C6 2.30611 6 1.72371 6.34942 1.36186C6.69883 1 7.26121 1 8.38596 1L11.614 1C12.7388 1 13.3012 1 13.6506 1.36186C14 1.72371 14 2.30611 14 3.4709V5.14239"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M12 10.2153V15.2153"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 10.2153V15.2153"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3.88562 14.5237L2.88129 5.43042L17.1188 5.43042L16.1145 14.5237C15.9656 15.8716 15.861 16.8079 15.7072 17.525C15.5572 18.2237 15.3796 18.6123 15.1451 18.8991C14.9486 19.1395 14.7159 19.3478 14.4555 19.5168C14.1447 19.7184 13.7389 19.8523 13.0279 19.9246C12.2983 19.9988 11.3562 20 10.0001 20C8.64393 20 7.70181 19.9988 6.97221 19.9246C6.26123 19.8523 5.85545 19.7184 5.54464 19.5168C5.2842 19.3478 5.05155 19.1395 4.85503 18.8991C4.62049 18.6123 4.44288 18.2237 4.29297 17.525C4.13912 16.8079 4.0345 15.8716 3.88562 14.5237Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M1 5.12207H19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default TrashBin
