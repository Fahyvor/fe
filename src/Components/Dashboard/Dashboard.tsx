import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactComponent from '../Contact/ContactComponent';

const Dashboard: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [dashboard, setDashboard] = useState(true);
  const [contact, setContact] = useState(false);

  const showDashboard = () => {
    setDashboard(true);
    setContact(false);
  }

  const showContact = () => {
    setContact(true);
    setDashboard(false);
  }


  return (
    <div className='flex w-screen bg-white color-black text-black
    h-screen'>
      <div className='menu bg-blue-900 pt-6 w-1/5 text-white px-3 
      max-sm:abolute max-sm:inset-y-0 max-sm:collapse'>
        <h3 className='text-3xl pb-4'>Logo</h3>

        <div className='dashboard mt-7' onClick={showDashboard}>
          <h2>Dashboard</h2>
        </div>
        <div className='add-contacts mt-5' onClick={showContact}>
          <h2>Add Contacts</h2>
        </div>
      </div>
      
      { dashboard ? (<div className='menu-display pt-6  w-5/6 px-5 flex
      max-sm:w-screen flex-col gap-5'>
        <div className={`dashboard-display flex flex-col gap-3 ${dashboard ? '' : 'hidden'} md:block`}>
          <h2 className='text-3xl'>Dashboard</h2>
          <p>Welcome back, User</p>

          <small>You do not have any user on your contact list</small>
        </div>

        <button className='bg-blue-900 text-white
        w-2/4 rounded-none' onClick={showContact}>Add Contact</button>
      </div>):
      null }

        {contact ? ( 
          <ContactComponent />
        ): null

        }
    </div>
  );
};

export default Dashboard;