'use client'

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { data, Persona } from '@/constants/data';
import { useParams } from 'next/navigation';
import { SYSTEM_PROMPT_HITESH_SIR, hiteshIntro } from '@/constants/hiteshSirPersona';
import { SYSTEM_PROMPT_PIYUSH_GARG, piyusIntro } from '@/constants/piyushGargPersona';

export interface ChatHistory {
  role: 'user' | 'assistant',
  content: string,
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: string;
}

interface ChatContextType {
  isTyping:boolean;
  message: string;
  setMessage: (message: string) => void;
  messages: Message[];
  sendMessage: () => void;
  currentPersona: Persona;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode}> = ({ children,}) => {
  const {id}=useParams();
  const currentPersona:Persona = data[id==='hitesh'?0:1];
  const InitialPrompt:string=id==='hitesh'?SYSTEM_PROMPT_HITESH_SIR:SYSTEM_PROMPT_PIYUSH_GARG;
  const initialTalk:string=id==='hitesh'?hiteshIntro:piyusIntro;
  const [message, setMessage] = useState<string>('');
  const [isTyping,setIsTyping]=useState<boolean>(true);
  const [ChatHistory,setChatHistory]=useState<ChatHistory[] >([]);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(()=>{
    setTimeout(() => {
      setMessages([
        {
          id: 1,
          text: initialTalk,
          sender: 'assistant',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setChatHistory([{role:'assistant',content:InitialPrompt}]);
      setIsTyping(false);
    }, 600);
  },[]);
  const textareaRef = useRef<HTMLTextAreaElement>(null) as React.RefObject<HTMLTextAreaElement>;

  const sendMessage = async () => {
    if (message.trim()) {
      setIsTyping(true);
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      const newChat:ChatHistory={
        role:'user',
        content:message
      };
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
      
      try {
        console.log(ChatHistory)
        const res = await fetch('/api/ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [...ChatHistory, newChat],
          })
        });
        const data = await res.json();
        const AiResponse: ChatHistory = data.message || "Sorry, I couldn't generate a response.";
        const messageResponse:Message={
          id: newMessage.id + 1,
          sender:'assistant',
          text:AiResponse.content,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
        setChatHistory([...ChatHistory,newChat,AiResponse]);
        setMessages(prev => [...prev, messageResponse]);
      } catch (e) {
        console.log(e)
      }finally{
        setIsTyping(false);
      }
    }
  };

  return (
    <ChatContext.Provider value={{
      isTyping,
      message,
      setMessage,
      messages,
      sendMessage,
      currentPersona,
      textareaRef
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};