import React from 'react';
import Button from './Button';

interface HeroProps {
  onBookNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  const scrollToStudio = () => {
    const element = document.getElementById('studio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay - Using an image that matches the Gold Wall/Mirror vibe */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Salon Interior with Gold Mirrors" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left text-white px-6 max-w-7xl mx-auto w-full pt-20">
        <div className="max-w-3xl">
          <div className="flex items-end gap-4 mb-4 animate-[fadeInDown_1s_ease-out]">
            <p className="text-glam-gold uppercase tracking-[0.3em] text-sm md:text-base font-bold">Luxury Beauty Lounge</p>
            <div className="h-[1px] w-20 bg-glam-gold mb-1.5"></div>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-4 leading-none drop-shadow-2xl">
            Glam Era <br/>
            <span className="font-script text-glam-gold text-5xl md:text-7xl ml-2 relative -top-4">by Tania</span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed border-l-2 border-glam-gold pl-6">
            Where artistry meets ambience. Experience our signature treatments in a sanctuary designed with gold textures, calming teals, and pure luxury.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={onBookNow} className="px-10 py-4 text-lg bg-glam-gold hover:bg-white hover:text-black border-2 border-transparent">Book Appointment</Button>
            <Button onClick={scrollToStudio} variant="outline" className="px-10 py-4 text-lg border-white text-white hover:bg-white/10 backdrop-blur-sm">Explore Studio</Button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fdfbfb] to-transparent z-10"></div>
    </div>
  );
};

export default Hero;