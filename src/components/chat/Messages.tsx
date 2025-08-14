'use client'

import React, { useRef, useEffect } from 'react';
import { useChat } from '@/context/ChatContext';
import Image from 'next/image';

const Messages: React.FC = () => {
  const { messages, currentPersona, isTyping } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to detect URLs and replace them with clickable links
  const renderTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text?.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={index} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`underline ${messages.find(msg => msg.text === text)?.sender === 'user' ? 'text-orange-200' : 'text-blue-400'}`}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {messages.map((msg, index) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`flex items-start space-x-3 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              {msg.sender === 'assistant' && (
                <div className="relative flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-orange-400/30 shadow-md shadow-orange-500/10">
                    <Image
                      src={currentPersona.image} 
                      alt={currentPersona.name}
                      height={30}
                      width={30}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent"></div>
                  </div>
                </div>
              )}
              
              <div className={`relative ${msg.sender === 'user' ? 'ml-12' : 'mr-12'}`}>
                <div className={`absolute inset-0 rounded-xl blur-md opacity-20 transition-all duration-300 ${
                  msg.sender === 'user' 
                    ? 'bg-gradient-to-br from-orange-600 to-amber-600' 
                    : 'bg-gradient-to-br from-gray-700 to-gray-600'
                }`}></div>
                
                <div className={`relative px-4 py-3 rounded-xl border backdrop-blur-lg transition-all duration-300 ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-br from-orange-600/95 to-amber-600/95 border-orange-400/30 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-gray-800/95 border-gray-600/30 text-gray-50 shadow-lg shadow-gray-900/20'
                }`}>
                  <p className="text-sm leading-relaxed tracking-wide">
                    {renderTextWithLinks(msg.text)}
                  </p>
                  <div className={`mt-2 text-xs ${
                    msg.sender === 'user' 
                      ? 'text-orange-100/70' 
                      : 'text-gray-400/80'
                  } flex items-center justify-end`}>
                    <span>{msg.timestamp}</span>
                  </div>
                  
                  <div className={`absolute w-3 h-3 transform rotate-45 ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-br from-orange-600 to-amber-600 -bottom-1.5 right-4 border-r border-b border-orange-400/30'
                      : 'bg-gray-800 -bottom-1.5 left-4 border-r border-b border-gray-600/30'
                  }`}></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-start space-x-3 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
              <div className="relative flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-orange-400/30 shadow-md shadow-orange-500/10">
                  <Image
                    src={currentPersona.image}
                    alt={currentPersona.name}
                    height={30}
                    width={30}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent"></div>
                </div>
              </div>
              
              <div className="relative mr-12">
                <div className="absolute inset-0 rounded-xl blur-md opacity-20 bg-gradient-to-br from-gray-700 to-gray-600 transition-all duration-300"></div>
                
                <div className="relative px-4 py-3 rounded-xl border backdrop-blur-lg bg-gray-800/95 border-gray-600/30 text-gray-50 shadow-lg shadow-gray-900/20 transition-all duration-300">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  
                  <div className="absolute w-3 h-3 transform rotate-45 bg-gray-800 -bottom-1.5 left-4 border-r border-b border-gray-600/30"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default Messages;