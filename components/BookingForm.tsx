import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Stylist } from '../types';
import Button from './Button';
import { Calendar, User, Scissors, CheckCircle, Clock, MessageCircle, Phone } from 'lucide-react';

interface BookingFormProps {
  onClose: () => void;
  stylists: Stylist[];
}

const BookingForm: React.FC<BookingFormProps> = ({ onClose, stylists }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: '',
    stylistId: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleServiceSelect = (id: string) => {
    setFormData({ ...formData, serviceId: id });
    setStep(2);
  };

  const handleStylistSelect = (id: string) => {
    setFormData({ ...formData, stylistId: id });
    setStep(3);
  };

  const handleDateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5);
  };

  const selectedService = SERVICES.find(s => s.id === formData.serviceId);
  const selectedStylist = stylists.find(s => s.id === formData.stylistId);

  const whatsappMessage = encodeURIComponent(
    `*New Booking Request*\n\n` +
    `Hello Glam Era,\nI would like to book an appointment:\n\n` +
    `*Service:* ${selectedService?.name || 'N/A'}\n` +
    `*Price:* ₹${selectedService?.price || 0}\n` +
    `*Stylist:* ${selectedStylist ? selectedStylist.name : 'First Available'}\n` +
    `*Date:* ${formData.date}\n` +
    `*Time:* ${formData.time}\n\n` +
    `*Customer Details:*\n` +
    `Name: ${formData.name}\n` +
    `Phone: ${formData.phone}\n` +
    `Email: ${formData.email}`
  );

  const whatsappLink = `https://wa.me/919010131000?text=${whatsappMessage}`;

  return (
    <div className="bg-white text-glam-black rounded-xl shadow-2xl overflow-hidden max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
      {/* Header */}
      <div className="bg-glam-black p-6 text-white flex justify-between items-center shrink-0">
        <div>
           <h2 className="font-serif text-2xl">Book Your Visit</h2>
           <p className="text-gray-400 text-sm">Step {Math.min(step, 4)} of 4</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-1 shrink-0">
        <div 
          className="bg-glam-gold h-1 transition-all duration-500" 
          style={{ width: `${(step / 5) * 100}%` }}
        ></div>
      </div>

      {/* Content Body - Scrollable */}
      <div className="p-6 overflow-y-auto flex-grow">
        
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2"><Scissors size={20}/> Select Service</h3>
            <div className="grid gap-3">
              {SERVICES.map(service => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className="text-left p-4 border rounded-lg hover:border-glam-gold hover:bg-glam-rose/20 transition group"
                >
                  <div className="flex justify-between font-bold text-gray-800 group-hover:text-glam-black">
                    <span>{service.name}</span>
                    <span>₹{service.price}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1 flex justify-between">
                    <span>{service.description}</span>
                    <span className="flex items-center gap-1"><Clock size={12}/> {service.duration}m</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
             <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="font-bold text-glam-black">Selected:</span> {selectedService?.name}
                <button onClick={() => setStep(1)} className="text-glam-gold underline ml-2">Change</button>
             </div>
            <h3 className="text-xl font-bold flex items-center gap-2"><User size={20}/> Select Stylist</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <button
                  onClick={() => handleStylistSelect('any')}
                  className="p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-glam-gold hover:bg-gray-50 transition flex items-center justify-center flex-col gap-2 h-full min-h-[150px]"
                >
                  <span className="font-bold text-gray-600">Any Stylist</span>
                  <span className="text-xs text-gray-400">First available appointment</span>
                </button>
              {stylists.map(stylist => (
                <button
                  key={stylist.id}
                  onClick={() => handleStylistSelect(stylist.id)}
                  className="p-4 border rounded-xl hover:border-glam-gold hover:shadow-lg transition text-center"
                >
                  <img src={stylist.image} alt={stylist.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-glam-gold" />
                  <div className="font-bold text-lg">{stylist.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{stylist.specializations.join(' • ')}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleDateSubmit} className="space-y-6">
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2 p-3 bg-gray-50 rounded-lg">
                <div><span className="font-bold">Service:</span> {selectedService?.name}</div>
                <div><span className="font-bold">Stylist:</span> {selectedStylist ? selectedStylist.name : 'Any Available'}</div>
                <button type="button" onClick={() => setStep(2)} className="text-glam-gold underline ml-auto">Back</button>
             </div>

            <h3 className="text-xl font-bold flex items-center gap-2"><Calendar size={20}/> Date & Time</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Date</label>
                <input 
                  type="date" 
                  required 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-glam-gold outline-none text-glam-black"
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Preferred Time</label>
                <select 
                  required 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-glam-gold outline-none bg-white text-glam-black"
                  onChange={e => setFormData({...formData, time: e.target.value})}
                >
                  <option value="">Select Time</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                </select>
              </div>
            </div>
            <div className="mt-8">
               <Button type="submit" fullWidth>Continue</Button>
            </div>
          </form>
        )}

        {step === 4 && (
          <form onSubmit={handleFinalSubmit} className="space-y-4">
            <h3 className="text-xl font-bold">Your Details</h3>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Full Name</label>
              <input 
                type="text" required 
                className="w-full p-3 border rounded-lg focus:border-glam-gold focus:ring-1 focus:ring-glam-gold outline-none text-glam-black"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email Address</label>
              <input 
                type="email" required 
                className="w-full p-3 border rounded-lg focus:border-glam-gold focus:ring-1 focus:ring-glam-gold outline-none text-glam-black"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
              <input 
                type="tel" required 
                className="w-full p-3 border rounded-lg focus:border-glam-gold focus:ring-1 focus:ring-glam-gold outline-none text-glam-black"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="bg-glam-rose p-4 rounded-lg mt-4 text-sm">
              <h4 className="font-bold text-glam-black mb-2">Booking Summary</h4>
              <p>{selectedService?.name} with {selectedStylist ? selectedStylist.name : 'First Available'}</p>
              <p>{formData.date} at {formData.time}</p>
              <p className="mt-2 font-bold text-lg">Total: ₹{selectedService?.price}</p>
            </div>

            <Button type="submit" fullWidth className="mt-4">Confirm Appointment</Button>
            <button type="button" onClick={() => setStep(3)} className="w-full text-center text-sm text-gray-500 py-2 hover:text-black">Back</button>
          </form>
        )}

        {step === 5 && (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-serif text-glam-black">Almost Done!</h3>
            <p className="text-gray-600 text-sm">
              Please send your booking details to our team to confirm your slot.
            </p>
            
            <div className="space-y-3 pt-2">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full hover:no-underline">
                 <Button fullWidth className="bg-[#25D366] hover:bg-[#128C7E] border-none text-white flex items-center justify-center gap-2 py-4">
                   <MessageCircle size={24} fill="white" className="text-white" /> 
                   <span>Send via WhatsApp</span>
                 </Button>
              </a>
              
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-xs">OR CALL US</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <a href="tel:9010131000" className="block w-full hover:no-underline">
                  <Button variant="outline" fullWidth className="flex items-center justify-center gap-2 py-3">
                    <Phone size={20} /> Call 9010131000
                  </Button>
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button onClick={onClose} className="text-sm text-gray-500 hover:text-glam-black underline">Close Window</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;