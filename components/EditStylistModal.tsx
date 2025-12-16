import React, { useState } from 'react';
import { Stylist } from '../types';
import { X, Save, Image as ImageIcon } from 'lucide-react';

interface EditStylistModalProps {
  stylist: Stylist;
  onSave: (updatedStylist: Stylist) => void;
  onClose: () => void;
}

const EditStylistModal: React.FC<EditStylistModalProps> = ({ stylist, onSave, onClose }) => {
  const [name, setName] = useState(stylist.name);
  const [image, setImage] = useState(stylist.image);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...stylist, name, image });
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="bg-glam-black p-4 flex justify-between items-center text-white">
          <h3 className="font-serif text-xl">Edit Stylist</h3>
          <button onClick={onClose} className="hover:text-glam-gold transition"><X size={24} /></button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Image Preview */}
          <div className="flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-glam-gold shadow-lg group bg-gray-100">
              <img src={image} alt="Preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/150')} />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                 <span className="text-white text-xs font-bold">Preview</span>
              </div>
            </div>
          </div>

          <div>
             <label className="block text-sm font-bold text-gray-700 mb-2">Stylist Name</label>
             <input 
               type="text" 
               value={name}
               onChange={(e) => setName(e.target.value)}
               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-glam-gold focus:border-transparent outline-none transition text-glam-black"
               required
               placeholder="Enter stylist name"
             />
          </div>

          <div>
             <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
               <ImageIcon size={16} /> Image URL
             </label>
             <input 
               type="url" 
               value={image}
               onChange={(e) => setImage(e.target.value)}
               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-glam-gold focus:border-transparent outline-none transition text-sm text-gray-600"
               required
               placeholder="https://example.com/image.jpg"
             />
             <p className="text-xs text-gray-400 mt-1">Paste a direct link to an image (JPG, PNG)</p>
          </div>

          <div className="pt-2 flex gap-3">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-[2] bg-glam-gold text-white font-bold py-3 rounded-xl shadow-lg hover:bg-yellow-600 transition flex items-center justify-center gap-2"
            >
              <Save size={20} /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStylistModal;