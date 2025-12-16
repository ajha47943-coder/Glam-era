import React, { useState } from 'react';
import { Edit2 } from 'lucide-react';
import EditOfferModal from './EditOfferModal';

interface OfferData {
  items: string[];
  price: number;
  bonus?: string;
}

interface OfferCardProps extends OfferData {
  onBook: () => void;
  onEdit: () => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ items, price, bonus, onBook, onEdit }) => (
  <div className="relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border border-glam-gold/20 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 group h-full">
    
    <button 
      onClick={(e) => { e.stopPropagation(); onEdit(); }}
      className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white rounded-full text-gray-400 hover:text-glam-gold transition-colors shadow-sm opacity-0 group-hover:opacity-100"
      title="Edit Offer"
    >
      <Edit2 size={16} />
    </button>

    <div onClick={onBook} className="w-full flex-grow cursor-pointer flex flex-col">
      <div className="flex-grow space-y-4 mb-8 w-full text-left pl-4">
        {items.map((item, idx) => {
          const isHighlight = item.toLowerCase().includes('complimentary') || item.toLowerCase().includes('free');
          return (
            <div key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
              <span className={`w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0 transition-colors ${isHighlight ? 'bg-glam-gold' : 'bg-glam-black group-hover:bg-glam-gold'}`}></span>
              {isHighlight ? (
                <span className="bg-[#FFF8E1] text-[#B8860B] font-extrabold px-3 py-1 rounded-lg border border-[#FFE082] shadow-sm transform -translate-y-1 inline-block">
                   {item}
                </span>
              ) : (
                <span>{item}</span>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="border-t border-gray-100 w-full pt-6 mt-auto text-center">
        <div className="font-serif text-4xl text-glam-black group-hover:text-glam-gold transition-colors">₹{price}/-</div>
      </div>
    </div>

    {bonus && (
       <div className="absolute -bottom-10 -right-6 w-44 h-44 bg-gradient-to-br from-glam-gold via-yellow-400 to-[#FCECEE] border-4 border-white rounded-full flex items-center justify-center p-6 text-center shadow-2xl rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 z-10 pointer-events-none">
          <p className="text-black text-xs font-black leading-snug uppercase tracking-widest drop-shadow-md">
            {bonus}
          </p>
       </div>
    )}
  </div>
);

const ChristmasOffers: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const [offers, setOffers] = useState<OfferData[]>([
    {
      items: ['Cleanup', 'Threading', 'D-tan (Complimentary)'],
      price: 749
    },
    {
      items: ['Cleanup', 'Full arms & u/arms wax', 'Threading', 'D-tan (Complimentary)'],
      price: 1199
    },
    {
      items: ['Facial', 'Full arms & U/arms wax', 'Threading', 'D-tan (Complimentary)'],
      price: 1699,
      bonus: "Get Worth ₹650 Haircut Free With ₹1699/- Combo"
    }
  ]);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleSaveOffer = (updatedOffer: OfferData) => {
    if (editingIndex !== null) {
      const newOffers = [...offers];
      newOffers[editingIndex] = updatedOffer;
      setOffers(newOffers);
      setEditingIndex(null);
    }
  };

  return (
    <section className="py-24 relative bg-[#FFFDF5] overflow-hidden">
      {/* Decorative Elements mimicking the gold dust */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" 
           style={{
             backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px), radial-gradient(#d4af37 0.5px, #FFFDF5 0.5px)',
             backgroundSize: '20px 20px',
             backgroundPosition: '0 0, 10px 10px'
           }}>
      </div>
      
      {/* Side Christmas Tree Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-900/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 relative">
           {/* Logo Watermark */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-glam-gold/10 rounded-full flex items-center justify-center opacity-20 pointer-events-none">
              <span className="font-script text-6xl text-glam-gold">Ge</span>
           </div>

           <div className="inline-block border border-black px-10 py-2 rounded-full mb-2 bg-white/50 backdrop-blur-sm">
              <h3 className="font-bold text-xl uppercase tracking-[0.2em] text-black">Christmas</h3>
           </div>
           <h2 className="font-serif text-7xl md:text-8xl text-[#C5A028] mb-6 drop-shadow-sm font-light">Carnival</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-stretch px-4">
          {offers.map((offer, idx) => (
            <OfferCard 
              key={idx} 
              {...offer} 
              onBook={onBook} 
              onEdit={() => setEditingIndex(idx)}
            />
          ))}
        </div>
        
        <div className="text-center mt-20">
           <p className="text-gray-600 italic mb-2">Celebrate the season of giving with our exclusive Christmas Weekend Sale!</p>
           <p className="text-glam-gold font-bold text-lg cursor-pointer hover:underline" onClick={onBook}>@glamerabytania</p>
        </div>
      </div>

      {editingIndex !== null && (
        <EditOfferModal 
          offer={offers[editingIndex]} 
          onSave={handleSaveOffer} 
          onClose={() => setEditingIndex(null)}
        />
      )}
    </section>
  );
};

export default ChristmasOffers;