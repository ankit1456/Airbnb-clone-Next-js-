import Image from "next/image";

const MediumCard = ({ item: { img, title } }) => {
  return (
    <div className='transition duration-300 ease-in-out transform cursor-pointer hover:scale-[1.02]'>
      <div className='relative w-48 h-48 sm:h-60 sm:w-60 md:h-72 md:w-72'>
        <Image
          layout='fill'
          objectFit='cover'
          src={img}
          className='rounded-xl'
        />
      </div>

      <h4 className='mt-2 text-lg font-semibold text-gray-900 xl:text-2xl md:text-xl'>
        {title}
      </h4>
    </div>
  );
};

export default MediumCard;
