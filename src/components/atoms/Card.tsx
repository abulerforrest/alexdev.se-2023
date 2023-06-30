import Code from "../../../assets/code.png";

const Card = () => {
  return (
    <div className='max-w-sm rounded-xl overflow-hidden shadow-lg'>
      <img className='w-full' src={Code.src} alt='Sunset in the mountains' />
      <div className='px-6 py-4'>
        <div className='font-bold text-2xl mb-2 font-kabel'>
          Javascript Tetris
        </div>
        <p className='text-gray-700 text-base font-eurostile tracking-wide'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='font-eurostile tracking-wide inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #amazing
        </span>
        <span className='font-eurostile tracking-wide inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #travel
        </span>
        <span className='font-eurostile tracking-wide inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #winter
        </span>
      </div>
    </div>
  );
};

export default Card;
