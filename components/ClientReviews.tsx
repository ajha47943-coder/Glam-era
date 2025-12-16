import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "Absolutely in love with my new hair color! Tania really understood what I wanted. The ambience is just wow.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "Anjali Gupta",
    text: "Best bridal makeup service in town. I felt like a princess on my big day. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "Rohan Mehta",
    text: "Great vibe and professional staff. The haircut was precise and the head massage was relaxing.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

const ClientReviews: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-glam-gold font-bold tracking-widest uppercase text-sm">Testimonials</span>
            <h2 className="font-serif text-5xl mt-3 mb-6 text-glam-black">Client Love</h2>
            <div className="w-24 h-1 bg-glam-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-[#FAF9F6] p-10 rounded-2xl relative group hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-glam-gold/20 hover:shadow-xl">
                <Quote className="absolute top-6 right-6 text-glam-gold/20 w-12 h-12" />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#d4af37" className="text-glam-gold" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 italic leading-relaxed text-lg font-light">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-glam-gold" />
                  <div>
                    <h4 className="font-bold font-serif text-xl text-glam-black">{review.name}</h4>
                    <p className="text-xs text-glam-gold uppercase tracking-wider font-bold">Happy Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default ClientReviews;