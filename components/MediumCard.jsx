import Image from "next/image";

const MediumCard = ({ item: { img, title } }) => {
  return (
    <div className='transition duration-300 ease-in-out transform cursor-pointer hover:scale-[1.02]'>
      <div className='relative h-72 w-72'>
        <Image
          layout='fill'
          objectFit='cover'
          src={img}
          className='rounded-xl'
        />
      </div>

      <h4 className='mt-2 text-[1.23rem] font-semibold text-gray-900'>
        {title}
      </h4>
    </div>
  );
};

export default MediumCard;
