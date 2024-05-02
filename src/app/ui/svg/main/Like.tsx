interface LikeProps {
    color: string
    size: number
  }
  
  const Like = ({ color, size }: LikeProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d="M17.7598 20H6.39941C5.29484 20 4.39941 19.1046 4.39941 18V10H8.32905C8.99775 10 9.62222 9.6658 9.99315 9.1094L12.5088 5.3359C13.0652 4.5013 14.0019 4 15.005 4H15.219C15.8369 4 16.3069 4.55487 16.2053 5.1644L15.3994 10H18.9598C20.2219 10 21.1685 11.1547 20.921 12.3922L19.721 18.3922C19.534 19.3271 18.7132 20 17.7598 20Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.39941 10V20" stroke={color} strokeWidth="2" />
      </svg>
    )
  }
  
  export default Like