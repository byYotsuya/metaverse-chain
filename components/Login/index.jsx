import Image from 'next/image';
import { useMoralis } from 'react-moralis';

export default function Login () {
  const { authenticate } = useMoralis();

  return (
    <div className='bg-black relative text-white'>
      <h1>Login</h1>

      <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
        {/* Logo */}
        <Image
          className='object-cover rounded-full'
          src='https://links.papareact.com/3pi'
          alt='Logo'
          width={200}
          height={200}
        />
        {/* Login button */}
        <button
          onClick={authenticate}
          className='bg-yellow-500 text-black rounded-lg p-5 font-bold animate-pulse'
        >Login to the metaverse
        </button>
      </div>

      <div className='w-full h-screen'>
        {/* Login form */}

        <Image
          src='https://links.papareact.com/55n'
          layout='fill'
          sizes='40'
          objectFit='cover'
          alt='Form logo'
        />
      </div>
    </div>
  );
}
