import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Message = ({ userName, text }) => {
  return (
    <Box
      bg="teal.100"
      borderRadius="lg"
      p={2}
      my={1}
      alignSelf={userName === 'User1' ? 'flex-start' : 'flex-end'}
      maxWidth="70%"
    >
      <Text fontWeight="bold">{userName}:</Text>
      <Text>{text}</Text>
    </Box>
  );
};

export default Message;
