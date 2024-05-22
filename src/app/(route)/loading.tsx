export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} className="items-center justify-center w-full h-full">
      <div className="text-3xl text-black font-bold">로딩중</div>
      <svg height="100%" viewBox="0 0 40 40" width={40}>
        <circle
          cx="40"
          cy="40"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{ stroke: 'rgb(29, 155, 240)', opacity: 0.2 }}
        ></circle>
        <circle
          cx="40"
          cy="40"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{
            stroke: 'rgb(29, 155, 240)',
            strokeDasharray: 80,
            strokeDashoffset: 60,
          }}
        ></circle>
      </svg>
    </div>
  )
}
