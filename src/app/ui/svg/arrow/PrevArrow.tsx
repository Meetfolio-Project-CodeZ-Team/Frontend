const PrevArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="78"
      viewBox="0 0 50 78"
      fill="none"
    >
      <g id="Vector" filter="url(#filter0_d_1696_247)">
        <path
          d="M37 9L14.5355 31.4645C12.5829 33.4171 12.5829 36.5829 14.5355 38.5355L37 61"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1696_247"
          x="0.571045"
          y="0.5"
          width="48.929"
          height="77"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1696_247"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1696_247"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
export default PrevArrow
