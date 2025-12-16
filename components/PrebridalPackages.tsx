import React from 'react';
import { Clock, Calendar, Sparkles, Star } from 'lucide-react';
import Button from './Button';

interface PackageProps {
  title: string;
  subtitle: string;
  price: number;
  features: string[];
  validity: string;
  image: string;
  isPopular?: boolean;
  onBook: () => void;
}

const PackageCard: React.FC<PackageProps> = ({ title, subtitle, price, features, validity, image, isPopular, onBook }) => (
  <div className="flex flex-col h-full relative group">
    {/* Arch Image Container */}
    <div className="relative h-64 w-full overflow-hidden rounded-t-[10rem] mx-auto z-10 shadow-xl group-hover:transform group-hover:-translate-y-2 transition-all duration-500">
       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
       <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
       
       {/* Badge */}
       {isPopular && (
         <div className="absolute top-6 right-1/2 translate-x-1/2 bg-glam-gold text-white text-xs font-bold px-3 py-1 rounded-full z-20 uppercase tracking-widest shadow-lg">
            Best Value
         </div>
       )}
    </div>

    {/* Content Card */}
    <div className="bg-white pt-16 pb-8 px-6 -mt-12 rounded-3xl shadow-lg border border-[#eaddcf] flex flex-col flex-grow relative z-0 group-hover:shadow-2xl transition-shadow duration-300">
      
      <div className="text-center mb-6">
        <h3 className="font-serif text-2xl text-[#8B5E3C] mb-1">{title}</h3>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#A67C52] font-bold">{subtitle}</p>
      </div>

      <div className="flex-grow space-y-4 mb-8">
         <ul className="space-y-3">
           {features.map((feature, idx) => (
             <li key={idx} className="text-sm text-gray-600 font-light flex items-start gap-2 leading-relaxed text-center justify-center">
               <span className="w-1 h-1 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></span>
               {feature}
             </li>
           ))}
         </ul>
         
         <div className="mt-6 pt-4 border-t border-[#f0e6d9] text-center">
            <p className="text-xs text-gray-500 italic flex items-center justify-center gap-2">
              <Clock size={12} /> {validity}
            </p>
         </div>
      </div>

      <div className="mt-auto text-center">
        <div className="bg-[#FAF6F1] py-3 rounded-xl mb-6 border border-[#f0e6d9]">
           <span className="font-serif text-3xl text-[#8B5E3C]">₹{price.toLocaleString()}</span>
        </div>
        <Button onClick={onBook} className="w-full bg-[#8B5E3C] hover:bg-[#6b462b] text-white border-none shadow-md hover:shadow-lg">
           Book Package
        </Button>
      </div>
    </div>
  </div>
);

const PrebridalPackages: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const packages = [
    {
      title: "Vital",
      subtitle: "Prebridal Package",
      price: 6500,
      image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=600&auto=format&fit=crop", // Indian bride jewelry
      features: [
        "Skin: Cleanup, Skin Brightening Facial, Face Bleach",
        "Flavoured Wax: Full Arms, U/A, Half Legs",
        "Threading",
        "Hand & Foot Rituals"
      ],
      validity: "Valid 15 days until wedding day"
    },
    {
      title: "Classic",
      subtitle: "Prebridal Package",
      price: 12400,
      image: "https://images.unsplash.com/photo-1621798335345-d8687a749989?q=80&w=600&auto=format&fit=crop", // Mehndi
      features: [
        "Skin: D-tan(Back & Front), Face Bleach, Threading, Bridal Glow Facial",
        "Flavoured Wax: Full Arms, U/A, Full Legs",
        "Bridal Nails with Basic Extensions",
        "Hands and Foot Ritual"
      ],
      validity: "Valid for 30 days until wedding day"
    },
    {
      title: "Premium",
      subtitle: "Prebridal Package",
      price: 20850,
      isPopular: true,
      image: "https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=600&auto=format&fit=crop", // Makeup
      features: [
        "Skin: D-tan(Back & Front), Face Bleach, Cleanup, Herbal Facial, Bridal Glow Facial, Threading",
        "Roll on Wax: Full Body Wax",
        "Bridal Nails with Gel Extensions",
        "Advanced Hands & Foot Rituals",
        "Hair Spa"
      ],
      validity: "Valid till 40 days until wedding day"
    }
  ];

  return (
    <section className="py-24 relative bg-[#FDFBF7] overflow-hidden">
      {/* Background Decor - Leaves/Floral hint */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[url('https://images.unsplash.com/photo-1588410298375-927dcc393666?q=80&w=600')] opacity-5 bg-contain bg-no-repeat bg-right-top pointer-events-none transform rotate-180"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[url('https://images.unsplash.com/photo-1588410298375-927dcc393666?q=80&w=600')] opacity-5 bg-contain bg-no-repeat bg-left-bottom pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
           <h2 className="font-serif text-5xl md:text-6xl text-[#8B5E3C] mb-2 tracking-wide">PREBRIDAL</h2>
           <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-[#A67C52]"></div>
              <h3 className="font-serif text-4xl md:text-5xl text-[#A67C52] tracking-widest uppercase">PACKAGES</h3>
              <div className="h-[1px] w-12 bg-[#A67C52]"></div>
           </div>
           <p className="font-script text-4xl text-[#d4af37] mt-4 transform -rotate-3">price list</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
          {packages.map((pkg, idx) => (
            <PackageCard key={idx} {...pkg} onBook={onBook} />
          ))}
        </div>
        
        <div className="mt-20 bg-[#f5efe6] p-8 rounded-2xl border border-[#eaddcf] text-center max-w-3xl mx-auto shadow-sm">
           <div className="flex justify-center mb-4 text-[#d4af37]">
              <Sparkles size={32} />
           </div>
           <h4 className="font-serif text-2xl text-[#8B5E3C] mb-3">Special Early Bird Offer</h4>
           <p className="text-gray-600 text-lg leading-relaxed font-light">
             Save up to <span className="font-bold text-[#8B5E3C]">15% on Prebridal services</span> on early bookings and get an <span className="font-bold text-[#8B5E3C]">extra 10% off</span> on your bridal package.
           </p>
           <div className="mt-6 flex flex-col md:flex-row justify-center gap-6 text-sm text-[#A67C52] font-bold uppercase tracking-widest">
              <span>Contact: 90101-31000</span>
              <span className="hidden md:block">•</span>
              <span>99060-31000</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PrebridalPackages;