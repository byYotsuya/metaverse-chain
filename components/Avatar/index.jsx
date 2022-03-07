import Image from 'next/image';
import { useMoralis } from 'react-moralis';

export default function Avatar ({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();

  return (
    <Image
      src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get('username')}.svg`}
      alt={`Avatar of ${username || user.get('username')}`}
      layout='fill'
      className='object-cover rounded-full bg-black cursor-pointer hover:opacity-75'
      onClick={() => logoutOnPress && logout()}
    />
  );
}
