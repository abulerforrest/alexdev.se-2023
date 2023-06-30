import Gradient from "assets/gradient2.png";

const Wave = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
      style={{
        position: "absolute",
        bottom: 80,
        zIndex: 1,
        width: "100vw",
      }}
    >
      <clipPath id='svg-draw1'>
        <path
          fill='#f3f4f5'
          fill-opacity='1'
          d='M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,96C672,96,768,160,864,192C960,224,1056,224,1152,234.7C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </clipPath>
      <image width='100%' clip-path='url(#svg-draw1)' href={Gradient.src} />
    </svg>
  );
};

export default Wave;
