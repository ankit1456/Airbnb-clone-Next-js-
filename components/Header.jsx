import { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { FiGlobe } from "react-icons/fi";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberGuests, setNumberGuests] = useState(1);

  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: startDate.toISOString(),
        numberGuests,
      },
    });
  };
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10'>
      <div
        onClick={() => router.push("/")}
        className='relative flex items-center h-10 my-auto cursor-pointer'
      >
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      <div className='flex items-center py-2 rounded-full shadow-sm md:border-2 md:shadow-sm'>
        <input
          type='text'
          placeholder={props.placeholder || "Start your search"}
          className='flex-grow pl-5 text-sm text-gray-600 placeholder-transparent bg-transparent md:placeholder-gray-400 focus:outline-none'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className='hidden h-8 p-2 text-white bg-red-400 rounded-full md:inline-flex md:mx-2' />
      </div>
      <div className='flex items-center justify-end space-x-4 text-gray-600 cursor-pointer'>
        <p className='hidden font-semibold lg:inline'>Become a host</p>
        <FiGlobe size={20} className='hidden sm:inline-block' />

        <div className='flex items-center p-1.5 shadow-sm space-x-2 border-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>

      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto mt-3'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className='flex items-center mb-4 border-b'>
            <h2 className='flex-grow text-2xl font-semibold '>
              Number of Guests
            </h2>

            <UsersIcon className='h-5' />
            <input
              type='number'
              min={1}
              value={numberGuests}
              className='w-12 pl-2 text-lg text-red-400 outline-none'
              onChange={(e) => setNumberGuests(e.target.value)}
            />
          </div>

          <div className='flex '>
            <button
              className='flex-grow text-gray-600'
              onClick={(e) => setSearchInput("")}
            >
              Cancel
            </button>
            <button className='flex-grow text-red-500' onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
