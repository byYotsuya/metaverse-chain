import React, { useState } from 'react';
import { useMoralis } from 'react-moralis';

export default function SendMessage ({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend('Messages');
    const messages = new Messages();

    messages.save({
      message,
      username: user.getUsername(),
      ethAddress: user.get('ethAddress')
    }).then(() => {

    }, (error) => {
      console.log(error.message);
    });

    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    setMessage('');
  };

  return (
    <form className='flex absolute w-11/12 bottom-10 bg-black opacity-80 px-5 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400'>
      <input
        className='flex-grow pr-5 pl-1 py-2 outline-none bg-transparent text-white z-50 rounded-full placeholder-gray-500 '
        type='text'
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder={`Enter a message ${user.getUsername()}`}
      />
      <button
        type='submit'
        onClick={sendMessage}
        className='font-bold text-pink-500'
      >
        Send
      </button>
    </form>
  );
}
