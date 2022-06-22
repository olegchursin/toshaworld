import { NextPage } from 'next';
import Link from 'next/link';

const Map: NextPage = () => {
  return (
    <div className="relative h-screen bg-blue-200">
      <img
        src="img/ground.png"
        alt="Map"
        className="absolute bottom-0 h-132 w-full"
      />

      <Link href="/hospital">
        <img
          src="img/hospital.png"
          alt="Hospital"
          className="absolute left-[10%] top-[20%] h-64 cursor-pointer transition-all duration-500 ease-in-out hover:rotate-6 hover:scale-125 active:rotate-1 active:scale-95"
        />
      </Link>

      <Link href="/zoo">
        <img
          src="img/zoo.png"
          alt="Hospital"
          className="absolute inset-x-1/3 top-[20%] h-64 cursor-pointer transition-all duration-500 ease-in-out hover:rotate-6 hover:scale-125 active:rotate-1 active:scale-95"
        />
      </Link>

      <Link href="/candy-world">
        <img
          src="img/candy-store.png"
          alt="Hospital"
          className="absolute left-1/2 top-[20%] h-64 cursor-pointer transition-all duration-500 ease-in-out hover:rotate-6 hover:scale-125 active:rotate-1 active:scale-95"
        />
      </Link>

      <Link href="/hm">
        <img
          src="img/hm-store.png"
          alt="Hospital"
          className="absolute right-[10%] top-[20%] h-64 cursor-pointer transition-all duration-500 ease-in-out hover:rotate-6 hover:scale-125 active:rotate-1 active:scale-95"
        />
      </Link>

      <img src="img/sun.png" alt="Sun" className='h-48 md:h-64 hover:rotate-180 transition-all duration-500 ease-in-out' />
    </div>
  );
};

export default Map;
