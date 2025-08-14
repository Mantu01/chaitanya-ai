'use client'

import { data, Persona } from '@/constants/data';
import { useChat } from '@/context/ChatContext';
import { ArrowLeft, Zap, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

function Header() {

  const {currentPersona}=useChat();
  const router=useRouter();

  const handleBackClick = (): void => {
    router.back();
  };

  return (
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-gray-900/90 border-b border-gradient-to-r from-orange-500/10 via-orange-500/30 to-orange-500/10">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-amber-500/10 to-orange-600/5"></div>
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"></div>
          </div>
          
          <div className="relative px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-5">
                <button 
                  onClick={handleBackClick}
                  className="group relative p-2.5 hover:bg-orange-500/10 rounded-xl transition-all duration-500 hover:scale-110 active:scale-95"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <ArrowLeft className="w-6 h-6 text-orange-400 group-hover:text-orange-300 group-hover:-translate-x-1 transition-all duration-300 relative z-10" />
                </button>
                
                <div className="flex items-center space-x-4">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/50 to-amber-600/50 rounded-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-orange-400/40 shadow-2xl shadow-orange-500/20 group-hover:border-orange-400/60 transition-all duration-300">
                      <img 
                        src={currentPersona.image} 
                        alt={currentPersona.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-amber-400/10"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-gray-900 shadow-lg">
                      <div className="w-full h-full rounded-full bg-green-400 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h1 className="text-lg font-bold text-white flex items-center space-x-2 tracking-tight">
                      <span className="bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">{currentPersona.name}</span>
                      <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
                    </h1>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 px-2 py-0.5 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full border border-orange-400/20">
                        <Zap className="w-3 h-3 text-orange-400" />
                        <span className="text-xs font-medium text-orange-300">{currentPersona.role}</span>
                      </div>
                      <div className="flex items-center space-x-1 px-1.5 py-0.5 bg-gray-800/60 rounded-full border border-gray-600/30">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-300">Online</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
        </div>
      </div>
  )
}

export default Header