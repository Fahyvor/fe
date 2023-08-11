import React, { useState } from 'react';

const MaxInputFields = 5;

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
  const [inputFields, setInputFields] = useState<string[]>(['']);

  const AddField = () => {
    if (inputFields.length < MaxInputFields) {
      setInputFields([...inputFields, '']);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = value;
    setInputFields(newInputFields);
  };

  const handleRemoveField = (index: number) => {
    if (inputFields.length > 1) {
      const newInputFields = inputFields.filter((_, i) => i !== index);
      setInputFields(newInputFields);
    }
  };

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
    <div className='w-full bg-white max-sm:w-full color-black h-screen
    text-black flex flex-col justify-center px-5'>
      <h2 className='text-4xl font-bold'>Add Contact</h2>
      <form onSubmit={handleSubmit} className='grid grid-cols-2 w-2/3 max-sm:w-full gap-4'>
        <div className='flex flex-col'>
        <label>Name:</label>
        <input type="text"
        className="p-3 mt-2 bg-slate-200" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className='flex flex-col'>
        <label>Phone Number:</label>
        <input type="text" 
        className="p-3 mt-2 bg-slate-200" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required  />
        </div>
        <div className='flex flex-col'>
        <label>Email:</label>
        <input type="email" 
        className="p-3 mt-2 bg-slate-200" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='flex flex-col'>
        <label>Address:</label>
        {/* <input type="text" 
        className="p-3 mt-2 bg-slate-200" value={address} onChange={(e) => setAddress(e.target.value)} required /> */}

        {inputFields.map((value, index) => (
          <div key={index} className='w-full'>
            <input
              type="text"
              value={value}
              className="p-3 mt-2 bg-slate-200"
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        ))}
        </div>
        <div className='flex flex-col'>
        <button type="submit"
        className='mt-5 bg-blue-900 rounded-none text-white'>Submit</button>
        </div>

        <div onClick={AddField}
        className='mt-5 bg-blue-900 rounded-none 
        text-center flex items-center justify-center text-white'>Add Contact</div>
      </form>
    </div>
  );
};

export default ContactComponent;
