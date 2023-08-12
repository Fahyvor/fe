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

interface FormComponentProps {
  onSave: (data: Contact) => void;
}

// const onSave = () => {

// }

const MaxInputFields = 5;

const ContactComponent: React.FC<FormComponentProps> = ({ onSave }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [addresses, setAddresses] = useState<string[]>(['']);
  const [remove, setRemove] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const newAddresses = [...addresses];
    newAddresses[index] = value;
    setAddresses(newAddresses);
  };

  const handleRemoveField = (index: number) => {
    if (addresses.length > 1) {
      const newAddresses = addresses.filter((_, i) => i !== index);
      setAddresses(newAddresses);
    }
  };

  const AddField = () => {
    if (addresses.length < MaxInputFields) {
      setAddresses([...addresses, '']);
    }
    removeState();
  };

  const removeState = () => {
    if (addresses.length >= 2) {
      setRemove(false);
    } 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Contact = {
      name,
      phoneNumber,
      email,
      addresses: addresses.map(address => ({
        street: address,
        city: 'City',
        state: 'State',
      })),
      longitude: 0,
      latitude: 0,
    };
    setContacts([...contacts, newContact]);
    setName('');
    setPhoneNumber('');
    setEmail('');
    setAddresses([]);
    onSave(newContact);
  };

  return (
    <div className='w-full bg-white max-sm:absolute max-sm:w-full color-black h-screen text-black flex flex-col justify-center px-5'>
      <h2 className='text-4xl font-bold'>Add Contact</h2>
      <form onSubmit={handleSubmit} className='grid grid-cols-2 w-2/3 max-sm:w-full gap-4'>
        <div className='flex flex-col'>
          <label>Name:</label>
          <input type="text" className="p-3 mt-2 bg-slate-200" value={name} 
          name='name' onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className='flex flex-col'>
          <label>Phone Number:</label>
          <input type="text" className="p-3 mt-2 bg-slate-200" value={phoneNumber}
          name='phoneNumber' onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div className='flex flex-col'>
          <label>Email:</label>
          <input type="email" className="p-3 mt-2 bg-slate-200" value={email}
          name='email' onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='flex flex-col'>
          <label>Addresses:</label>
          {addresses.map((value, index) => (
            <div key={index} className='w-full'>
              {remove ? (<div onClick={() => handleRemoveField(index)}>remove</div>) : null}
              <input
                type="text"
                name='address'
                value={value}
                className="p-3 mt-2 bg-slate-200 w-full"
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        <div className='flex flex-col'>
          <button type="submit" className='mt-5 bg-blue-900 rounded-none text-white'>Submit</button>
        </div>
        <div onClick={AddField} className='mt-5 bg-blue-900 rounded-none text-center flex items-center justify-center text-white'>Add Address</div>
      </form>
    </div>
  );
};

export default ContactComponent;
