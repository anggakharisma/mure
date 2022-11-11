const Triangle = ({
  color,
  width,
  position,
}: {
  color: string;
  width: number;
  position: string;
}) => {
  return (
    <div className={`absolute ${position}`}>
      <svg
        width={width}
        height="104"
        viewBox="0 0 90 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.02851 97.7448L4.02851 6.81218L82.7785 52.2785L4.02851 97.7448Z"
          stroke={color}
          stroke-width="7"
        />
      </svg>
    </div>
  );
};

export default Triangle;
