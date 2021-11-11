import Image from "next/image";

const SmallCard = ({ item }) => {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:scale-[1.01] rounded-xl hover:bg-gray-100 transition transform duration-200 ease-out'>
      <div className='relative w-[4.5rem] h-[4.5rem]'>
        <Image
          src={item.img}
          layout='fill'
          className='rounded-xl'
          objectFit='cover'
        />
      </div>
      <div>
        <h2 className='text-lg font-semibold text-gray-800'>
          {item.location}{" "}
        </h2>
        <h3 className='text-gray-600 text-[1.03rem]'>{item.distance} </h3>
      </div>
    </div>
  );
};

export default SmallCard;
