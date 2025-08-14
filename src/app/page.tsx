import { Sparkles,Crown, Bot } from 'lucide-react';
import PersonaCard from '@/components/home/personaCard';
import Image from 'next/image';

interface FloatingShapeProps {
  delay: string;
  className: string;
}

const PersonaBot = () => {
  const FloatingShape = ({ delay, className }: FloatingShapeProps) => (
    <div 
      className={`absolute animate-float ${className}`} 
      style={{ 
        animationDelay: delay,
        animationDuration: '6s',
        animationIterationCount: 'infinite'
      }}
    />
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-orange-500/20 via-orange-600/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-amber-500/15 via-red-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <FloatingShape delay="0s" className="top-20 left-16 w-4 h-12 bg-orange-500/30 rotate-45 rounded-full blur-sm" />
        <FloatingShape delay="1s" className="top-40 right-20 w-8 h-8 border-2 border-amber-400/40 rounded-lg rotate-12" />
        <FloatingShape delay="2s" className="bottom-32 left-24 w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-500 opacity-20 rounded-full" />
        <FloatingShape delay="3s" className="bottom-48 right-32 w-10 h-2 bg-orange-500/25 -rotate-12 rounded-full" />
      </div>
      <div className="relative z-10">

        <div className="container mx-auto px-6 py-8">
          <div className={`text-center mb-16 transition-all duration-1000`}>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/5 to-amber-500/5 px-6 py-3 rounded-full border-2 border-orange-500/20 mb-8 backdrop-blur-xl -rotate-1 relative before:absolute before:inset-[-2px] before:bg-gradient-to-br before:from-transparent before:via-orange-500/30 before:to-transparent before:rounded-full before:z-[-1] before:blur-[0.5px]">
              <Crown className="w-4 h-4 text-orange-400" />
              <Bot className="w-4 h-4 text-amber-400" />
              <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-none">
              <span className="bg-gradient-to-r mr-3 from-orange-300 via-orange-400 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl inline-block hover:scale-105 transition-transform duration-500">
                Elite
              </span>
              <span className="text-white relative inline-block hover:rotate-1 transition-transform duration-500">
                व्यक्तित्व
                <svg className="absolute -bottom-4 left-0 right-0 h-3" viewBox="0 0 300 10" preserveAspectRatio="none">
                  <path d="M0,5 Q75,2 100,5 T200,5" stroke="url(#gradient)" strokeWidth="3.5" fill="none"/>
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#f97316"/>
                      <stop offset="50%" stopColor="#f59e0b"/>
                      <stop offset="100%" stopColor="#f97316"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
          </div>
          <PersonaCard />
          <div className={`flex justify-center transition-all duration-1000`} style={{ transitionDelay: '1000ms' }}>
            <div className="inline-flex items-center gap-6 bg-gradient-to-r from-gray-900/30 to-gray-800/30 px-8 py-4 rounded-2xl border border-orange-500/15 backdrop-blur-xl rotate-1 relative before:absolute before:inset-[-2px] before:bg-gradient-to-br before:from-transparent before:via-orange-500/30 before:to-transparent before:rounded-2xl before:z-[-1] before:blur-[0.5px]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm font-semibold">AI Powered</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm font-semibold">Instant</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm font-semibold">24/7</span>
              </div>
            </div>
          </div>
          <header className="container mx-auto px-6 pt-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image 
                height={48}
                width={48}
                src="/logo.png" 
                alt="Chaitanya AI Logo" 
                className=" object-contain filter drop-shadow-lg hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-300 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Chaitanya AI
              </h2>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default PersonaBot;