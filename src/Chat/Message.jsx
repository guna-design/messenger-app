import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckIcon, SendIcon } from 'lucide-react';

const Message = ({ message, activeUser, user, formatTimestamp }) => {
  return (
    <div className={`flex ${message.sender === activeUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex ${message.sender === activeUser ? 'flex-row-reverse' : 'flex-row'} items-end`}>
        <Avatar className="w-8 h-8">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div
          className={`mx-2 p-3 rounded-lg ${
            message.sender === activeUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          <p>{message.text}</p>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs opacity-75">{formatTimestamp(message.timestamp)}</span>
            {message.sender === activeUser && (
              <span className="ml-2">
                {message.status === 'sent' && <SendIcon className="w-3 h-3" />}
                {message.status === 'delivered' && <CheckIcon className="w-3 h-3" />}
                {message.status === 'read' && (
                  <div className="flex">
                    <CheckIcon className="w-3 h-3" />
                    <CheckIcon className="w-3 h-3 -ml-1" />
                  </div>
                )}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
