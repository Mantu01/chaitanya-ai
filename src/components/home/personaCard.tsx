'use client'

import Image from 'next/image';
import { Zap, ArrowRight, Layers, Play } from 'lucide-react';
import { data, Persona } from '@/constants/data';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function PersonaCard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleStartConversation = (navig: string) => {
    router.push(`/chat/${navig}`);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
      {data.map((persona: Persona, index) => (
        <div
          key={persona.id}
          className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} ${persona.tilt}`}
          style={{ transitionDelay: `${index * 300 + 500}ms` }}
        >
          <div
            className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
              hoveredCard === persona.id ? 'scale-105 -rotate-1' : ''
            }`}
            onMouseEnter={() => setHoveredCard(persona.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative">
              {/* Background gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-red-500/10 rounded-2xl rotate-1 scale-105 blur-md"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-orange-600/8 via-transparent to-amber-500/8 rounded-2xl -rotate-1 scale-[1.02]"></div>
              
              {/* Card content */}
              <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 backdrop-blur-xl rounded-2xl border-2 border-orange-500/20 p-6 overflow-hidden">
                {/* Decorative SVG elements */}
                <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
                  <path d="M20,20 Q40,15 60,25 T100,20" stroke="orange" strokeWidth="0.5" fill="none"/>
                  <path d="M0,50 Q30,45 60,50 T120,50" stroke="amber" strokeWidth="0.3" fill="none"/>
                  <path d="M80,10 Q100,5 120,15 T160,10" stroke="orange" strokeWidth="0.4" fill="none"/>
                </svg>
                
                <div className="relative z-10">
                  {/* Persona header with image and name */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${persona.color} rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500 scale-110`}></div>
                      <div className={`relative w-16 h-16 rounded-xl border-2 ${persona.accent} overflow-hidden group-hover:rotate-6 transition-transform duration-500 relative before:absolute before:inset-[-2px] before:bg-gradient-to-br before:from-transparent before:via-orange-500/30 before:to-transparent before:rounded-xl before:z-[-1] before:blur-[0.5px]`}>
                        <Image 
                          src={persona.image}
                          alt={persona.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white group-hover:text-orange-300 transition-colors duration-300">
                        {persona.name}
                      </h3>
                      <p className="text-orange-400 font-bold text-sm tracking-wide mb-2">
                        {persona.role}
                      </p>
                    </div>
                    
                    <Zap className="w-6 h-6 text-orange-400 animate-pulse" />
                  </div>
                  
                  {/* Persona description */}
                  <div className="mb-6">
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {persona.description}
                    </p>
                  </div>
                  
                  {/* Action button */}
                  <button 
                    onClick={() => handleStartConversation(persona.nav)}
                    className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:via-amber-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-orange-500/20 flex items-center justify-center gap-3 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full group-hover:before:translate-x-full before:transition-transform before:duration-700"
                  >
                    <Play className="w-4 h-4 relative z-10" />
                    <span className="font-black relative z-10">Start Chat</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PersonaCard