'use client'

import React, { useEffect } from 'react';
import { Send } from 'lucide-react';
import { useChat } from '@/context/ChatContext';

const MessageInput: React.FC = () => {
  const {
    message,
    setMessage,
    sendMessage,
    textareaRef
  } = useChat();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const adjustTextareaHeight = (): void => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 via-gray-900/98 to-transparent backdrop-blur-2xl">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl opacity-50 group-focus-within:opacity-80 transition-opacity duration-300"></div>
          
          <div className="relative flex items-end space-x-3 px-4 py-3 bg-gray-800/90 backdrop-blur-xl rounded-xl border border-orange-500/20 shadow-lg shadow-orange-500/10 transition-all duration-300 group-focus-within:border-orange-400/40">
            
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows={1}
                className="w-full bg-transparent text-white placeholder-gray-400/70 border-none resize-none focus:outline-none text-sm leading-relaxed tracking-wide overflow-hidden"
                style={{ minHeight: '24px', maxHeight: '120px' }}
              />
              <div className="absolute bottom-0 left-0 right-16 h-[1px] bg-gradient-to-r from-orange-400/0 via-orange-400/50 to-orange-400/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <button
              onClick={sendMessage}
              disabled={!message.trim()}
              className="group relative p-2.5 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:rotate-0 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-400 rounded-lg blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <Send className="w-4 h-4 text-white relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;