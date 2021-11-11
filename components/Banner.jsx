import Image from "next/image";

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600] 2xl:h-[700px]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
      />

      <div className='absolute w-full text-center top-1/2'>
        <p className='text-sm font-semibold text-gray-800 sm:text-lg'>
          Not sure where to go? Perfect
        </p>

        <button className='py-4 my-3 text-lg font-bold text-purple-700 transition duration-200 bg-white rounded-full shadow-md px-14 hover:shadow-xl active:scale-90'>
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
