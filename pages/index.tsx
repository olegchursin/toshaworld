import type { NextPage } from 'next';
import Link from 'next/link';
import Hero from '../components/hero';

const Home: NextPage = () => {
  return (
    <div className="container grid place-content-center">
      <Hero />
      <div className="mb-6 flex justify-center">
        <Link href="/map">
          <button className="h-32 w-32 rounded-full bg-yellow-500 p-6 text-3xl font-bold uppercase hover:scale-105 hover:bg-yellow-400">
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
