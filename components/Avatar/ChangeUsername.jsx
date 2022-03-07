import React from 'react';
import { useMoralis } from 'react-moralis';

export default function ChangeUsername () {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    // eslint-disable-next-line no-undef
    const username = prompt(`Enter your new username (current: ${user.get('username')})`);

    if (!username) return;

    setUserData({ username });
  };

  return (
    <div className='text-sm absolute top-5 right-5'>
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className='hover:text-pink-700'
      >
        Change your username
      </button>
    </div>
  );
}
