import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Infocard from "../components/Infocard";
import Map from "./../components/Map";

const Search = ({ searchResults }) => {
  const router = useRouter();

  const { location, startDate, endDate, numberGuests } = router?.query;
  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className='w-full h-screen'>
      <Header placeholder={`${location} | ${range} | ${numberGuests} Guests`} />

      <main className='flex'>
        <section className='flex-grow px-6 mt-14'>
          <p className='text-xs'>
            300+ Stays - {range} - for {numberGuests} guests
          </p>

          <h1 className='mt-2 mb-6 text-3xl font-semibold'>
            Stays in {location}
          </h1>

          <div className='hidden mb-5 space-x-3 text-gray-800 sm:inline-flex '>
            <p className='button'>Cancellation Flexibility </p>
            <p className='button'>Types of Place </p>
            <p className='button'>Price </p>
            <p className='button'>More filters </p>
          </div>
          <div className='flex flex-col'>
            {searchResults?.map((item) => (
              <Infocard item={item} key={item.img} />
            ))}
          </div>
        </section>

        <section className='hidden xl:inline-flex xl:min-w-[600px]'>
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
