export interface Service {
  id: string;
  name: string;
  duration: number; // in minutes
  price: number;
  category: 'Hair (Female)' | 'Hair (Male)' | 'Skin & Beauty' | 'Nails' | 'Body & Spa' | 'Treatments';
  description: string;
}

export interface Stylist {
  id: string;
  name: string;
  specializations: string[];
  image: string;
}

export interface Appointment {
  serviceId: string;
  stylistId: string;
  date: Date;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface LoyaltyCardState {
  stamps: number;
  maxStamps: number;
  reward: string;
}

export interface SocialLink {
  id: string;
  platform: 'instagram' | 'google' | 'facebook' | 'whatsapp' | 'other';
  url: string;
  title: string;
}