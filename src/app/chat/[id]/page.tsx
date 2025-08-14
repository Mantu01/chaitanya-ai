import Header from '@/components/chat/Header';
import Messages from '@/components/chat/Messages';
import MessageInput from '@/components/chat/MessageInput';
import { ChatProvider } from '@/context/ChatContext';

const ChatPage: React.FC = () => {

  return (
    <ChatProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.05),transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.05),transparent)] pointer-events-none"></div>

        <Header/>
        <Messages />
        <MessageInput />
      </div>
    </ChatProvider>
  );
};

export default ChatPage;