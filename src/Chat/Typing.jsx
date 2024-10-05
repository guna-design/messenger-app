import React from 'react';
import { motion } from 'framer-motion';

const TypingIndicator = ({ user }) => (
  <div className="flex justify-start mb-4">
    <div className="flex items-center bg-gray-200 rounded-lg px-3 py-2">
      <span className="text-sm text-gray-500">{user} is typing...</span>
      <motion.div
        className="w-2 h-2 bg-gray-500 rounded-full ml-2"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </div>
  </div>
);

export default TypingIndicator;
