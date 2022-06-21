import type { NextPage } from 'next';
import Hero from '../components/hero';

const Home: NextPage = () => {
  return (
    <div className="container grid place-content-center">
      <Hero />
    </div>
  );
};

export default Home;
