import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const Infocard = ({ item }) => {
  return (
    <div className='flex px-2 pr-4 transition duration-200 ease-out transform border-b cursor-pointer py-7 hover:opacity-80 hover:shadow-lg'>
      <div className='relative flex-shrink-0 w-40 h-24 overflow-hidden rounded-2xl md:h-52 md:w-80 first:border-t'>
        <Image layout='fill' src={item.img} objectFit='cover' />
      </div>

      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between'>
          <p>{item.location}</p>
          <HeartIcon className='cursor-pointer h-7' />
        </div>
        <h4 className='text-xl'>{item.title}</h4>
        <div className='w-10 pt-2 border-b border-gray-300' />

        <p className='flex-grow pt-2 text-sm text-gray-500'>
          {item.description}
        </p>

        <div className='flex items-end justify-between pt-5'>
          <p className='flex items-center'>
            <StarIcon className='h-5 text-red-400' />{" "}
            <span className='text-sm'>{item.star}</span>
          </p>

          <div>
            <p className='pb-2 text-lg font-semibold lg:text-2xl'>
              {item.price}
            </p>
            <p className='text-right font-extralight'>{item.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
