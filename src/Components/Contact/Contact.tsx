import React, { useState } from 'react';

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Contact {
  name: string;
  phoneNumber: string;
  email: string;
  addresses: Address[];
  longitude: number;
  latitude: number;
}

const ContactComponent: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Contact = {
      name,
      phoneNumber,
      email,
      addresses: [{ street: address, city: 'City', state: 'State' }],
      longitude: 0,
      latitude: 0, 
    };
    setContacts([...contacts, newContact]);
    setName('');
    setPhoneNumber('');
    setEmail('');
    setAddress('');
  };

  return (
    <div className='w-screen bg-white color-black
    text-black h-screen flex flex-col justify-center items-center'>
      <h2 className='text-center text-4xl font-bold'>Add Contact</h2>
      <form onSubmit={handleSubmit} className='flex flex-col w-1/3 mt-5 gap-4'>
        <label>Name:</label>
        <input type="text"
        className="p-3 mt-2 bg-slate-200" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Phone Number:</label>
        <input type="tel" 
        className="p-3 mt-2 bg-slate-200" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required pattern="[0-9]{10}" />
        <label>Email:</label>
        <input type="email" 
        className="p-3 mt-2 bg-slate-200" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Address:</label>
        <input type="text" 
        className="p-3 mt-2 bg-slate-200" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <button type="submit"
        className='mt-5 bg-black text-white'>Add Contact</button>
      </form>
    </div>
  );
};

export default ContactComponent;
