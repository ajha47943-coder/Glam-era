import React, { useState } from 'react';
import { X, Save, Link, Type, Globe } from 'lucide-react';
import Button from './Button';
import { SocialLink } from '../types';

interface EditReviewModalProps {
  link: SocialLink;
  onSave: (updatedLink: SocialLink) => void;
  onClose: () => void;
}

const EditReviewModal: React.FC<EditReviewModalProps> = ({ link, onSave, onClose }) => {
  const [platform, setPlatform] = useState<SocialLink['platform']>(link.platform);
  const [title, setTitle] = useState(link.title);
  const [url, setUrl] = useState(link.url);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...link, platform, title, url });
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="bg-glam-sea-green p-4 flex justify-between items-center text-white">
          <h3 className="font-serif text-xl flex items-center gap-2"><Globe size={20}/> Edit Connection</h3>
          <button onClick={onClose} className="hover:text-glam-gold transition"><X size={24} /></button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          <div>
             <label className="block text-sm font-bold text-gray-700 mb-2">Platform Icon</label>
             <select 
               value={platform}
               onChange={(e) => setPlatform(e.target.value as SocialLink['platform'])}
               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-glam-sea-green outline-none transition text-glam-black bg-white"
             >
               <option value="instagram">Instagram</option>
               <option value="google">Google Maps/Reviews</option>
               <option value="facebook">Facebook</option>
               <option value="whatsapp">WhatsApp</option>
               <option value="other">Other (Star Icon)</option>
             </select>
          </div>

          <div>
             <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
               <Type size={16} /> Display Title
             </label>
             <input 
               type="text" 
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-glam-sea-green outline-none transition text-glam-black"
               required
               placeholder="e.g. Follow Us"
             />
          </div>

          <div>
             <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
               <Link size={16} /> Target URL (Generates QR)
             </label>
             <input 
               type="url" 
               value={url}
               onChange={(e) => setUrl(e.target.value)}
               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-glam-sea-green outline-none transition text-sm text-gray-600"
               required
               placeholder="https://..."
             />
             <p className="text-xs text-gray-400 mt-1">The QR code will automatically update to point to this link.</p>
          </div>

          <div className="pt-2 flex gap-3">
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
              className="flex-[2] bg-glam-sea-green hover:bg-[#0a2320] text-white"
            >
              <Save size={18} className="mr-2 inline" /> Update Card
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditReviewModal;