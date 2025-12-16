import React, { useState, useMemo } from 'react';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import LoyaltyCard from './components/LoyaltyCard';
import ChatAssistant from './components/ChatAssistant';
import ChristmasOffers from './components/ChristmasOffers';
import PrebridalPackages from './components/PrebridalPackages';
import EditStylistModal from './components/EditStylistModal';
import EditReviewModal from './components/EditReviewModal';
import ClientReviews from './components/ClientReviews';
import { SERVICES, STYLISTS as INITIAL_STYLISTS } from './constants';
import { Stylist, SocialLink } from './types';
import { Star, MapPin, Phone, Instagram, Facebook, Scissors, Sparkles, Armchair, Sun, QrCode, Edit2, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('Hair (Female)');
  const [stylists, setStylists] = useState<Stylist[]>(INITIAL_STYLISTS);
  const [editingStylist, setEditingStylist] = useState<Stylist | null>(null);
  
  // State for Review/Social Links
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    { 
      id: 'instagram', 
      platform: 'instagram', 
      url: 'https://instagram.com/glamerabytania', 
      title: 'Follow Us' 
    },
    { 
      id: 'google', 
      platform: 'google', 
      url: 'https://g.page/glamera', 
      title: 'Review Us' 
    }
  ]);
  const [editingLink, setEditingLink] = useState<SocialLink | null>(null);

  const categories = useMemo(() => {
    return Array.from(new Set(SERVICES.map(s => s.category)));
  }, []);

  const filteredServices = SERVICES.filter(s => s.category === activeCategory);

  const handleUpdateStylist = (updatedStylist: Stylist) => {
    setStylists(prev => prev.map(s => s.id === updatedStylist.id ? updatedStylist : s));
    setEditingStylist(null);
  };

  const handleUpdateLink = (updatedLink: SocialLink) => {
    setSocialLinks(prev => prev.map(l => l.id === updatedLink.id ? updatedLink : l));
    setEditingLink(null);
  };

  // Helper to render the correct icon based on platform
  const renderSocialIcon = (platform: SocialLink['platform']) => {
    switch (platform) {
      case 'instagram':
        return (
          <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-md mb-4 group-hover:scale-110 transition-transform">
             <Instagram size={24} />
          </div>
        );
      case 'google':
        return (
          <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
             <svg viewBox="0 0 24 24" className="w-6 h-6">
               <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
               <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
               <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
               <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
             </svg>
          </div>
        );
      case 'facebook':
        return (
          <div className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-md mb-4 group-hover:scale-110 transition-transform">
             <Facebook size={24} />
          </div>
        );
      case 'whatsapp':
        return (
          <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-md mb-4 group-hover:scale-110 transition-transform">
             <MessageCircle size={24} />
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 bg-glam-gold rounded-full flex items-center justify-center text-white shadow-md mb-4 group-hover:scale-110 transition-transform">
             <Star size={24} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen text-gray-100 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center text-white">
        <div className="flex flex-col items-center group cursor-pointer">
          {/* Logo Simulation */}
          <div className="relative border border-glam-gold/50 rounded-full w-14 h-14 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <span className="font-script text-3xl text-glam-gold pt-2 pr-1">Ge</span>
          </div>
          <div className="flex flex-col items-center -mt-1">
             <span className="text-[10px] tracking-widest uppercase font-sans">by Tania</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-bold">
          <a href="#studio" className="hover:text-glam-gold transition relative group">
            Studio
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-glam-gold transition-all group-hover:w-full"></span>
          </a>
          <a href="#services" className="hover:text-glam-gold transition relative group">
            Services
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-glam-gold transition-all group-hover:w-full"></span>
          </a>
          <a href="#loyalty" className="hover:text-glam-gold transition relative group">
            Loyalty
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-glam-gold transition-all group-hover:w-full"></span>
          </a>
        </div>
        
        <button 
          onClick={() => setIsBookingOpen(true)}
          className="bg-glam-gold/90 backdrop-blur-md text-black font-bold px-8 py-3 rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition duration-300"
        >
          Book Now
        </button>
      </nav>

      <Hero onBookNow={() => setIsBookingOpen(true)} />
      
      {/* Christmas Special Offers */}
      <ChristmasOffers onBook={() => setIsBookingOpen(true)} />

      {/* Prebridal Packages - Highlighted */}
      <PrebridalPackages onBook={() => setIsBookingOpen(true)} />

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-glam-gold font-bold tracking-widest uppercase text-sm">Experience Excellence</span>
          <h2 className="font-serif text-5xl mt-3 mb-6">Signature Services</h2>
          <div className="w-24 h-1 bg-glam-gold mx-auto"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border border-glam-gold ${
                activeCategory === category 
                ? 'bg-glam-gold text-glam-black shadow-lg scale-105' 
                : 'bg-transparent text-gray-300 hover:bg-glam-gold/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-[fadeIn_0.5s_ease-out]">
          {filteredServices.map((service, idx) => (
            <div key={service.id} className="bg-white text-gray-800 p-10 rounded-sm shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-t-4 border-transparent hover:border-glam-teal group relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-glam-rose/50 rounded-full blur-2xl group-hover:bg-glam-gold/20 transition-all"></div>
              
              <div className="w-14 h-14 bg-glam-black text-glam-gold rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg relative z-10">
                 <Scissors size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="font-serif text-2xl mb-3 relative z-10 text-glam-black">{service.name}</h3>
              <p className="text-gray-500 mb-6 h-12 relative z-10 font-light text-sm line-clamp-3">{service.description}</p>
              
              <div className="flex justify-between items-center pt-6 border-t border-gray-100 relative z-10">
                <span className="font-serif text-2xl text-glam-teal">₹{service.price}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{service.duration} mins</span>
              </div>
            </div>
          ))}
          
          {/* Promo Card - Matches Teal Accent - Only show on first tab or if space permits */}
          {activeCategory.includes('Hair') && (
            <div className="bg-glam-teal text-white p-10 rounded-sm shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden group cursor-pointer" onClick={() => setIsBookingOpen(true)}>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30"></div>
               
               <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                 <div className="border-2 border-glam-gold rounded-full p-4 inline-block mb-6">
                   <Sparkles className="text-glam-gold w-8 h-8" />
                 </div>
                 <h3 className="font-serif text-3xl mb-3">New Client?</h3>
                 <p className="text-gray-200 mb-8 font-light">Receive a complimentary deep conditioning treatment with your first haircut or color service.</p>
                 <span className="inline-block border-b border-glam-gold pb-1 text-glam-gold uppercase tracking-widest text-sm hover:text-white transition-colors">Claim Offer</span>
               </div>
            </div>
          )}
        </div>
      </section>

      {/* NEW: Studio Showcase Section to match images */}
      <section id="studio" className="py-24 bg-black/10">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <div className="inline-block border border-gray-300 px-4 py-1 text-xs uppercase tracking-widest mb-2">Our Space</div>
                 <h2 className="font-serif text-5xl leading-tight">Designed for <br/> <span className="text-glam-gold italic">Pure Indulgence</span></h2>
                 <p className="text-gray-300 text-lg leading-relaxed font-light">
                   Step into an atmosphere of refined elegance. Our interiors feature textured gold walls, custom-designed LED mirrors, and plush quilted seating to ensure your comfort is as exquisite as your results.
                 </p>
                 <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="flex items-start gap-4">
                       <div className="bg-white/10 p-3 rounded-full text-glam-gold"><Sun size={24}/></div>
                       <div>
                         <h4 className="font-bold font-serif text-lg">Golden Ambience</h4>
                         <p className="text-sm text-gray-400 mt-1">Warm lighting and textured finishes for a relaxing glow.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="bg-white/10 p-3 rounded-full text-glam-gold"><Armchair size={24}/></div>
                       <div>
                         <h4 className="font-bold font-serif text-lg">Premium Comfort</h4>
                         <p className="text-sm text-gray-400 mt-1">Luxury quilted leather chairs for maximum relaxation.</p>
                       </div>
                    </div>
                 </div>
              </div>
              
              {/* Image Grid simulating the user's photos */}
              <div className="relative">
                 <div className="absolute -top-10 -left-10 w-32 h-32 bg-glam-gold/10 rounded-full blur-3xl"></div>
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-glam-teal/10 rounded-full blur-3xl"></div>
                 
                 <div className="grid grid-cols-2 gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=800&auto=format&fit=crop" 
                      alt="Pedicure Station" 
                      className="w-full h-64 object-cover rounded-tr-[3rem] shadow-xl hover:scale-[1.02] transition-transform duration-500"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop" 
                      alt="Styling Station" 
                      className="w-full h-64 object-cover rounded-bl-[3rem] shadow-xl mt-12 hover:scale-[1.02] transition-transform duration-500"
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Loyalty Section */}
      <section id="loyalty" className="py-24 bg-gradient-to-br from-black/80 to-glam-black relative text-white overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-glam-teal/20 skew-x-12 transform origin-top"></div>
        
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
           <div>
              <span className="text-glam-gold font-script text-3xl mb-2 block">Exclusive Access</span>
              <h2 className="font-serif text-5xl mb-6">The <span className="text-glam-gold">Elite</span> Club</h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
                Our digital loyalty program rewards your commitment to self-care. Seamlessly track your visits and unlock luxury treatments on us.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                   <div className="text-4xl font-serif text-glam-gold">01</div>
                   <div>
                     <h4 className="font-bold uppercase tracking-wider text-sm">Earn Points</h4>
                     <p className="text-sm text-gray-400">1 stamp for every visit over $50</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                   <div className="text-4xl font-serif text-glam-gold">10</div>
                   <div>
                     <h4 className="font-bold uppercase tracking-wider text-sm">Get Rewarded</h4>
                     <p className="text-sm text-gray-400">Free luxury blowout or manicure</p>
                   </div>
                </div>
              </div>
              
              <button onClick={() => setIsBookingOpen(true)} className="mt-10 bg-glam-gold text-black font-bold px-8 py-3 rounded-full hover:bg-white transition shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Join Membership
              </button>
           </div>
           
           <div className="flex justify-center relative">
             <div className="absolute inset-0 bg-glam-gold/20 blur-[100px] rounded-full"></div>
             <div className="relative transform hover:rotate-2 hover:scale-105 transition-all duration-500">
                <LoyaltyCard />
             </div>
           </div>
        </div>
      </section>

      {/* Stylists */}
      <section id="stylists" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
             <h2 className="font-serif text-5xl mb-4">Meet The Artists</h2>
             <p className="text-gray-400 font-light text-lg">The talented hands behind your transformation.</p>
          </div>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="text-gray-200 border-b border-gray-200 pb-1 hover:text-glam-gold hover:border-glam-gold transition-colors"
          >
            Book with a Stylist
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
           {stylists.map((stylist, i) => (
             <div key={stylist.id} className="group relative">
               <div className="cursor-pointer" onClick={() => setIsBookingOpen(true)}>
                 <div className="relative h-[450px] overflow-hidden mb-6">
                   <div className="absolute inset-0 bg-glam-teal/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <img src={stylist.image} alt={stylist.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                   
                   {/* Edit Button */}
                   <button 
                      onClick={(e) => {
                         e.stopPropagation();
                         setEditingStylist(stylist);
                      }}
                      className="absolute top-4 right-4 z-30 bg-black/40 backdrop-blur-md p-2 rounded-full text-white hover:bg-glam-gold hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
                      title="Edit Stylist Name/Image"
                   >
                      <Edit2 size={18} />
                   </button>

                   {/* Floating Name Card */}
                   <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 transform translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500 shadow-lg z-20">
                      <h3 className="font-serif text-2xl mb-1 text-glam-black">{stylist.name}</h3>
                      <p className="text-glam-teal text-xs uppercase tracking-widest font-bold">{stylist.specializations[0]}</p>
                   </div>
                 </div>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* NEW: Client Reviews Section */}
      <ClientReviews />

      {/* Review Scanner Section */}
      <section className="py-20 bg-glam-sea-green relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <span className="text-glam-gold font-script text-3xl mb-2 block">Share the Love</span>
           <h2 className="font-serif text-4xl mb-12 text-white">Scan to Connect</h2>
           
           <div className="flex justify-center">
             {/* Digital Scanner Stand Simulation */}
             <div className="relative p-1 rounded-3xl bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 shadow-2xl max-w-2xl w-full">
               <div className="bg-white/95 backdrop-blur-xl rounded-[1.4rem] p-8 md:p-12 relative overflow-hidden">
                  
                  {/* Watermark/Logo Background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-glam-gold/5 rounded-full blur-3xl pointer-events-none"></div>

                  {/* Header */}
                  <div className="text-center mb-10 relative z-10">
                    <div className="w-20 h-20 mx-auto border border-glam-gold/30 rounded-full flex items-center justify-center bg-white shadow-sm mb-2">
                       <span className="font-script text-4xl text-glam-black pt-2 pr-1">Ge</span>
                    </div>
                    <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-gray-500 font-bold">Glam Era by Tania</p>
                  </div>

                  {/* QR Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative z-10">
                    
                    {socialLinks.map((link) => (
                      <div key={link.id} className="flex flex-col items-center group relative p-4 rounded-xl hover:bg-gray-50/50 transition duration-300">
                         {/* Edit Button */}
                         <button 
                            onClick={() => setEditingLink(link)}
                            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-glam-gold hover:scale-110 transition-all opacity-0 group-hover:opacity-100 z-20"
                            title="Edit Link & Icon"
                         >
                            <Edit2 size={16} />
                         </button>

                         {renderSocialIcon(link.platform)}
                         
                         <div className="p-2 bg-white border-2 border-glam-gold/50 rounded-xl shadow-inner mb-3 transform group-hover:scale-105 transition-transform duration-500">
                            <img 
                              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(link.url)}`} 
                              alt={`${link.platform} QR`} 
                              className="w-32 h-32 md:w-40 md:h-40" 
                            />
                         </div>
                         
                         <h3 className="font-script text-3xl text-glam-gold mt-2">{link.title}</h3>
                      </div>
                    ))}

                  </div>

                  {/* Footer of card */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center gap-4 text-xs text-gray-400 uppercase tracking-widest">
                    <div className="flex items-center gap-2"><QrCode size={14}/> Scan to connect</div>
                  </div>
               </div>
               
               {/* Reflection/Shine effect */}
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/20 to-transparent pointer-events-none rounded-3xl"></div>
             </div>
           </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-800 pt-20 pb-10 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
           <div className="col-span-1 md:col-span-2 pr-8">
             <div className="mb-6">
               <span className="font-script text-4xl text-glam-black block mb-1">Ge</span>
               <span className="text-xs uppercase tracking-[0.3em] text-glam-gold font-bold">by Tania</span>
             </div>
             <p className="text-gray-500 max-w-sm font-light leading-relaxed mb-6">
               Elevating beauty standards since 2025. A luxury lounge committed to premium products, eco-conscious care, and providing a sanctuary for your self-care journey.
             </p>
             <div className="flex gap-4">
               <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-glam-black hover:text-white transition-colors cursor-pointer"><Instagram size={18}/></div>
               <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-glam-black hover:text-white transition-colors cursor-pointer"><Facebook size={18}/></div>
             </div>
           </div>
           
           <div>
             <h4 className="font-serif text-xl mb-6">Contact</h4>
             <ul className="space-y-4 text-gray-600 font-light">
               <li className="flex items-start gap-3">
                 <MapPin size={20} className="text-glam-gold shrink-0 mt-1"/> 
                 <span>Opposite Zamindara Dhaba, <br/>Tarore, 181133</span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone size={20} className="text-glam-gold shrink-0"/> 
                 <span>9010131000</span>
               </li>
             </ul>
           </div>
           
           <div>
             <h4 className="font-serif text-xl mb-6">Hours</h4>
             <ul className="space-y-3 text-gray-600 font-light">
               <li className="flex justify-between border-b border-gray-100 pb-2"><span>Mon - Sun</span> <span className="font-bold text-glam-black">10am - 7pm</span></li>
             </ul>
           </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs uppercase tracking-wider">
           <p>© 2025 Glam Era by Tania. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-glam-black">Privacy Policy</a>
             <a href="#" className="hover:text-glam-black">Terms of Service</a>
           </div>
        </div>
      </footer>

      {/* Booking Modal Overlay */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
           <BookingForm onClose={() => setIsBookingOpen(false)} stylists={stylists} />
        </div>
      )}

      {/* Edit Stylist Modal */}
      {editingStylist && (
        <EditStylistModal 
          stylist={editingStylist} 
          onSave={handleUpdateStylist} 
          onClose={() => setEditingStylist(null)} 
        />
      )}

      {/* Edit Review/Link Modal */}
      {editingLink && (
        <EditReviewModal 
          link={editingLink} 
          onSave={handleUpdateLink} 
          onClose={() => setEditingLink(null)} 
        />
      )}

      {/* AI Assistant */}
      <ChatAssistant />
    </div>
  );
};

export default App;