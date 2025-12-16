import React, { useState, useEffect } from 'react';
import { MAX_STAMPS, LOYALTY_REWARD } from '../constants';
import { Sparkles, Gift, Check, Edit2 } from 'lucide-react';

const LoyaltyCard: React.FC = () => {
  // Persist stamps in local storage for a "real" feel in this demo
  const [stamps, setStamps] = useState<number>(0);
  const [memberId, setMemberId] = useState<string>('');
  
  // New State for Client Name and Date
  const [clientName, setClientName] = useState<string>('Guest');
  const [issueDate, setIssueDate] = useState<string>('');
  const [isEditingName, setIsEditingName] = useState(false);

  useEffect(() => {
    // Load Stamps
    const savedStamps = localStorage.getItem('glam_loyalty_stamps');
    if (savedStamps) {
      setStamps(parseInt(savedStamps, 10));
    } else {
      setStamps(2); // Start with 2 free stamps as a "welcome gift"
    }

    // Load or Generate Unique Member ID
    let storedId = localStorage.getItem('glam_member_id');
    if (!storedId) {
      // Generate a unique ID: GE (Glam Era) + Random 6 digits
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      storedId = `GE-${randomNum}`;
      localStorage.setItem('glam_member_id', storedId);
    }
    setMemberId(storedId);

    // Load Client Name
    const storedName = localStorage.getItem('glam_client_name');
    if (storedName) {
      setClientName(storedName);
    }

    // Load or Set Issue Date (Default to today's month/year)
    let storedDate = localStorage.getItem('glam_issue_date');
    if (!storedDate) {
      const now = new Date();
      storedDate = now.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase();
      localStorage.setItem('glam_issue_date', storedDate);
    }
    setIssueDate(storedDate);
  }, []);

  const addStamp = () => {
    if (stamps < MAX_STAMPS) {
      const newStamps = stamps + 1;
      setStamps(newStamps);
      localStorage.setItem('glam_loyalty_stamps', newStamps.toString());
    }
  };

  const resetCard = () => {
    setStamps(0);
    localStorage.setItem('glam_loyalty_stamps', '0');
  };

  const saveClientName = () => {
    localStorage.setItem('glam_client_name', clientName);
    setIsEditingName(false);
  };

  const progress = (stamps / MAX_STAMPS) * 100;
  const isComplete = stamps >= MAX_STAMPS;

  return (
    <div className="relative overflow-hidden w-full max-w-md mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl text-white p-6 border border-glam-gold/30 group hover:shadow-glam-gold/20 transition-all duration-500">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-glam-gold rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-2xl"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className="flex-grow space-y-4">
            <h3 className="font-serif text-3xl text-glam-gold italic">Glam Era Elite</h3>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
               {/* Client Name Field */}
               <div className="col-span-2 sm:col-span-1">
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Client Name</p>
                 {isEditingName ? (
                    <input 
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      onBlur={saveClientName}
                      onKeyDown={(e) => e.key === 'Enter' && saveClientName()}
                      autoFocus
                      className="bg-transparent border-b border-glam-gold text-white font-serif text-lg w-full focus:outline-none"
                    />
                 ) : (
                    <div 
                      className="group flex items-center gap-2 cursor-pointer"
                      onClick={() => setIsEditingName(true)}
                      title="Click to edit name"
                    >
                      <p className="font-serif text-lg text-white truncate">{clientName}</p>
                      <Edit2 size={12} className="text-gray-600 group-hover:text-glam-gold transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                 )}
               </div>

               {/* Member ID Field */}
               <div>
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Member ID</p>
                 <p className="font-mono text-sm text-gray-300 tracking-wider">{memberId || '...'}</p>
               </div>

               {/* Issue Date Field */}
               <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Issue Date</p>
                  <p className="font-mono text-sm text-gray-300">{issueDate}</p>
               </div>
            </div>
          </div>
          <Sparkles className="text-glam-gold w-10 h-10 flex-shrink-0 opacity-80" />
        </div>

        <div className="mb-6">
           <div className="flex justify-between text-sm mb-2 text-gray-300">
             <span>Progress</span>
             <span>{stamps} / {MAX_STAMPS} Stamps</span>
           </div>
           <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
             <div 
                className="h-full bg-gradient-to-r from-glam-gold to-yellow-300 transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
             ></div>
           </div>
        </div>

        <div className="grid grid-cols-5 gap-3 mb-6">
          {Array.from({ length: MAX_STAMPS }).map((_, i) => (
            <button 
              key={i}
              disabled={i < stamps} // Disable clicking explicitly, handled by "Demo Add Stamp" for UX
              onClick={addStamp} // Allow clicking empty slots for demo feel
              className={`
                aspect-square rounded-full flex items-center justify-center border-2 transition-all duration-300
                ${i < stamps 
                  ? 'bg-glam-gold border-glam-gold text-black shadow-[0_0_10px_rgba(212,175,55,0.5)] scale-100' 
                  : 'bg-transparent border-gray-700 text-transparent hover:border-gray-500 scale-90'
                }
              `}
            >
              {i < stamps && <Check size={16} strokeWidth={4} />}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
          <div className={`p-3 rounded-full ${isComplete ? 'bg-glam-gold text-black animate-bounce' : 'bg-gray-700 text-gray-400'}`}>
            <Gift size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase font-bold text-[10px]">Current Reward</p>
            <p className={`font-serif text-lg leading-tight ${isComplete ? 'text-white' : 'text-gray-500'}`}>
              {isComplete ? "Reward Unlocked!" : LOYALTY_REWARD}
            </p>
          </div>
        </div>

        {isComplete && (
           <button 
             onClick={resetCard}
             className="mt-4 w-full py-2 bg-white text-black font-bold text-sm uppercase tracking-wide rounded hover:bg-gray-200 transition"
           >
             Redeem Reward
           </button>
        )}
        
        {/* Helper for demo purposes */}
        {!isComplete && (
           <p className="text-center text-[10px] text-gray-600 mt-4 cursor-pointer hover:text-glam-gold" onClick={addStamp}>
             (Tap empty circles to simulate visits)
           </p>
        )}
      </div>
    </div>
  );
};

export default LoyaltyCard;