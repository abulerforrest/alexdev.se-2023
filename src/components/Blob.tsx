import Pattern from "assets/pattern.png";

const Blob = ({ color }: { color: string }) => {
  return (
    <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
      <clipPath id='svg-draw'>
        <path
          fill={color}
          d='M33.5,-57.9C44.1,-52,53.7,-44.3,59.4,-34.3C65.1,-24.4,66.8,-12.2,65.6,-0.7C64.3,10.7,60.1,21.5,56.4,34.9C52.7,48.4,49.6,64.5,40.3,72.4C31,80.4,15.5,80.2,0.9,78.7C-13.7,77.1,-27.4,74.1,-38.7,67.3C-50.1,60.5,-59.1,49.9,-65,38.1C-70.9,26.2,-73.8,13.1,-75.8,-1.2C-77.9,-15.5,-79.3,-31,-72.3,-41.1C-65.4,-51.2,-50.2,-55.9,-36.8,-60.2C-23.3,-64.5,-11.7,-68.3,-0.1,-68.2C11.5,-68,23,-63.9,33.5,-57.9Z'
          transform='translate(100 100)'
        />
      </clipPath>
      <image
        height='80%'
        width='100%'
        clip-path='url(#svg-draw)'
        style={{ objectFit: "cover", opacity: 1 }}
        href={Pattern.src}
      />
    </svg>
  );
};

export default Blob;
