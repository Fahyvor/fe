import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);


  return (
    <div className='flex gap-5 w-screen pt-5 bg-white color-black text-black
    h-screen'>
      <div className='flex flex-col'>
        <h2 className='text-center text-3xl font-bold'>Dashboard</h2>
        <div className='add-contact flex justify-end px-5'>
          <Link to='/contact' className='bg-black text-white
          rounded-full p-3'>Add Contact</Link>
        </div>
        <table >
          <thead>
            <tr className='flex w-screen mt-5 gap-1 justify-between
            max-sm:gap-6 max-sm:flex-col px-8'>
              <th className='bg-slate-100 p-2 w-1/6
              max-sm:w-1/3'>Name</th>
              <th className='bg-slate-100 p-2 w-1/6
              max-sm:w-1/3'>Phone Number</th>
              <th className='bg-slate-100 p-2 w-1/6
              max-sm:w-1/3'>Email</th>
              <th className='bg-slate-100 p-2 w-1/6
              max-sm:w-1/3'>Address</th>
              <th className='bg-slate-100 p-2 w-1/6
              max-sm:w-1/3'>Longitude</th>
              <th className='bg-slate-100 p-2 w-1/6
              max-sm:w-1/3'>Latitude</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
                <td>{contact.addresses[0]?.street}</td>
                <td>{contact.longitude}</td>
                <td>{contact.latitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
