import React, { useState } from 'react';
import { X, Save, List, Tag, Gift } from 'lucide-react';
import Button from './Button';

interface OfferData {
  items: string[];
  price: number;
  bonus?: string;
}

interface EditOfferModalProps {
  offer: OfferData;
  onSave: (updatedOffer: OfferData) => void;
  onClose: () => void;
}

const EditOfferModal: React.FC<EditOfferModalProps> = ({ offer, onSave, onClose }) => {
  const [price, setPrice] = useState(offer.price);
  const [itemsStr, setItemsStr] = useState(offer.items.join('\n'));
  const [bonus, setBonus] = useState(offer.bonus || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const items = itemsStr.split('\n').map(i => i.trim()).filter(i => i.length > 0);
    onSave({
      price,
      items,
      bonus: bonus || undefined
    });
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
        <div className="bg-[#C5A028] p-4 flex justify-between items-center text-white">
          <h3 className="font-serif text-xl flex items-center gap-2"><Tag size={20}/> Edit Offer Details</h3>
          <button onClick={onClose} className="hover:text-black transition"><X size={24} /></button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          <div>
             <label className="block text-sm font-bold text-gray-700 mb-2">Price (₹)</label>
             <input 
               type="number" 
               value={price}
               onChange={(e) => setPrice(Number(e.target.value))}
               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A028] outline-none transition text-glam-black font-mono"
               required
             />
          </div>

          <div>
             <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
               <List size={16} /> Services Included
             </label>
             <textarea 
               value={itemsStr}
               onChange={(e) => setItemsStr(e.target.value)}
               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A028] outline-none transition text-sm text-gray-800 min-h-[120px]"
               required
               placeholder="Enter each service on a new line..."
             />
             <p className="text-xs text-gray-400 mt-1">Tip: Add "Complimentary" in brackets to highlight an item.</p>
          </div>

          <div>
             <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
               <Gift size={16} /> Bonus Offer (Optional)
             </label>
             <input 
               type="text" 
               value={bonus}
               onChange={(e) => setBonus(e.target.value)}
               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A028] outline-none transition text-sm text-gray-600"
               placeholder="e.g. Free Haircut included"
             />
          </div>

          <div className="pt-4 flex gap-3">
            <Button 
              type="button"
              variant="ghost"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-[2] bg-[#C5A028] hover:bg-[#b08d1e] text-white"
            >
              <Save size={18} className="mr-2 inline" /> Update Offer
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOfferModal;