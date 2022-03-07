import React from 'react';
import { useMoralis } from 'react-moralis';
import TimeAgo from 'timeago-react';
import Avatar from '../Avatar';

export default function Message ({ message }) {
  const { user } = useMoralis();
  const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

  return (
    <div className={`flex items-end space-x-2 relative ${isUserMessage && 'justify-end'}`}>
      <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2'}`}>
        <Avatar username={user.getUsername()} />
      </div>
      <div className={`flex space-x-4 p-3 rounded-lg ${isUserMessage ? 'rounded-br-none bg-pink-300' : 'rounded-bl-none bg-blue-400'}`}>
        <p>{message.get('message')}</p>
      </div>

      {/* Timeago stamp */}
      <TimeAgo
        datatime={message.get('createdAt')}
        className={`text-[10px] italic text-xs text-gray-400 ${isUserMessage && 'order-first pr-1'}`}
      />

      <p className={`absolute -bottom-5 text-sm ${isUserMessage ? 'text-pink-300' : 'text-blue-400'}`}>
        {user.getUsername()}
      </p>

    </div>
  );
}
