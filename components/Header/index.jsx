import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Avatar from '../Avatar';
import ChangeUsername from '../Avatar/ChangeUsername';

export default function Header () {
  const { user } = useMoralis();
  return (
    <div className='sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700'>
      <div className='grid grid-cols-5 lg:grid-cols-6 lg:items-center items-end'>
        <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
          <Image
            src='https://links.papareact.com/3pi'
            alt='Image'
            layout='fill'
            className='object-cover rounded-full'
            objectFit='cover'
          />
        </div>

        <div className='col-span-4 text-left lg:text-center'>
          <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'>
            <Avatar logoutOnPress />
          </div>

          <h1 className='text-3xl'>Welcome to the Metaverse</h1>
          <h2 className='text-5xl font-bold truncate'>{user.get('username')}</h2>

        </div>
        <ChangeUsername />
      </div>
    </div>
  );
}
