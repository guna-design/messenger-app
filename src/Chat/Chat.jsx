import React, { useState, useEffect, useRef } from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import { Check as CheckIcon, Send as SendIcon } from '@mui/icons-material';

const users = {
  user1: {
    name: 'Alice',
    avatar: '/placeholder.svg',
  },
  user2: {
    name: 'Bob',
    avatar: '/placeholder.svg',
  },
};

export default function EnhancedChatMessenger() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [activeUser, setActiveUser] = useState('user1');
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      const newMessage = {
        id: Date.now(),
        sender: activeUser,
        text: inputText,
        timestamp: new Date(),
        status: 'sent',
      };
      setMessages((prev) => [...prev, newMessage]);
      setInputText('');
      
      // Switch to the other user
      const otherUser = activeUser === 'user1' ? 'user2' : 'user1';
      simulateMessageFlow(newMessage, otherUser);
    }
  };

  const simulateMessageFlow = (message, otherUser) => {
    // Simulate typing from the other user
    setTimeout(() => {
      const replyMessage = {
        id: Date.now(),
        sender: otherUser,
        text: `Reply from ${users[otherUser].name}: "${message.text}"`,
        timestamp: new Date(),
        status: 'sent',
      };
      setMessages((prev) => [...prev, replyMessage]);
    }, 2000); // Simulate a 2-second delay for the reply
  };

  const formatTimestamp = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Card style={{ maxWidth: 400, margin: 'auto' }}>
      <CardHeader>
        <Typography variant="h6" align="center">Enhanced Chat Messenger</Typography>
      </CardHeader>
      <CardContent style={{ maxHeight: 400, overflowY: 'auto', display: 'flex', flexDirection: 'column' }} ref={scrollAreaRef}>
        {messages.map((message) => (
          <div key={message.id} style={{ display: 'flex', justifyContent: message.sender === activeUser ? 'flex-end' : 'flex-start', margin: '10px 0' }}>
            <Avatar alt={users[message.sender].name} src={users[message.sender].avatar} />
            <div style={{ marginLeft: message.sender === activeUser ? '10px' : '0', marginRight: message.sender === activeUser ? '0' : '10px', backgroundColor: message.sender === activeUser ? '#3f51b5' : '#e0e0e0', color: message.sender === activeUser ? 'white' : 'black', borderRadius: '10px', padding: '10px', maxWidth: '70%' }}>
              <Typography variant="body1">{message.text}</Typography>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                <span style={{ fontSize: '0.75rem' }}>{formatTimestamp(message.timestamp)}</span>
                {message.sender === activeUser && (
                  <span>
                    {message.status === 'sent' && <SendIcon fontSize="small" />}
                    {message.status === 'delivered' && <CheckIcon fontSize="small" />}
                    {message.status === 'read' && <CheckIcon fontSize="small" />}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
      <form onSubmit={handleSend} style={{ display: 'flex', padding: '10px' }}>
        <TextField
          variant="outlined"
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{ flexGrow: 1, marginRight: '10px' }}
        />
        <Button type="submit" variant="contained" color="primary">
          <SendIcon />
        </Button>
      </form>
    </Card>
  );
}
