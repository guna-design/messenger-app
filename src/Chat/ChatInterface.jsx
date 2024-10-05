import React from 'react';
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Message } from './Message'; // Import the Message component
import TypingIndicator from './TypingIndicator'; // Import the TypingIndicator component

const ChatInterface = ({
  messages,
  activeUser,
  isTyping,
  inputText,
  setInputText,
  handleSend,
  scrollAreaRef,
  user,
}) => {
  const formatTimestamp = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4" ref={scrollAreaRef}>
          {messages.map((message) => (
            <Message key={message.id} message={message} activeUser={activeUser} user={user} formatTimestamp={formatTimestamp} />
          ))}
          {isTyping && <TypingIndicator user={activeUser === 'user1' ? 'Bob' : 'Alice'} />}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSend} className="flex w-full space-x-2">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow"
          />
          <Button type="submit">
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </>
  );
};

export default ChatInterface;
