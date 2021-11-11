import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "./../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "./../components/Footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />

      <main className='px-8 mx-auto max-w-7xl sm:px-16'>
        <section className='mt-6'>
          <h2
            className='mb-5 text-[1.8rem] text-gray-700'
            style={{ fontWeight: "700" }}
          >
            Explore nearby
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item) => (
              <SmallCard key={item.img} item={item} />
            ))}
          </div>
        </section>

        <section>
          <h2
            className='my-8 text-[1.8rem] text-gray-800'
            style={{ fontWeight: "700" }}
          >
            Live anywhere
          </h2>
          <div className='flex p-3 space-x-3 overflow-scroll scrollbar-hide'>
            {cardsData.map((item) => (
              <MediumCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb'
          buttonText='Get Inspired'
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await (
    await fetch("https://links.papareact.com/pyp")
  ).json();

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
