import React, { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai'
import { MdOutlineCancel } from 'react-icons/md'
import ContactComponent from '../Contact/ContactComponent';
import axios from 'axios';
import { fetchLocationData, GoogleMapsApiResponse } from './MapService';

interface GoogleMapsApiResponse {
  results: {
    formatted_address: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }[];
}

const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

export async function fetchLocationData(address: string): Promise<GoogleMapsApiResponse | null> {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        address,
        key: API_KEY,
      },
    });

    return response.data as GoogleMapsApiResponse;
  } catch (error) {
    console.error('Error fetching location data:', error);
    return null;
  }
}

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
  const [mobile, setMobile] = useState(false);

  const [address, setAddress] = useState('');
  const [locationData, setLocationData] = useState<GoogleMapsApiResponse | null>(null);

  const handleFetchLocation = async () => {
    if (address) {
      const data = await fetchLocationData(address);
      setLocationData(data);
    }
  };

  const showDashboard = () => {
    setDashboard(true);
    setContact(false);
    setMobile(false);
  }

  const showContact = () => {
    setContact(true);
    setDashboard(false);
    setMobile(false);
  }

  const showMobileNav = () => {
    setMobile(true);
  }


  return (
    <div className='flex w-screen bg-white color-black text-black
    h-screen'>
      <div className='absolute mobile-nav flex invisible
      max-sm:visible mt-5 justify-end px-6 max-sm:w-screen z-50' onClick={showMobileNav}>
        <AiOutlineBars size={40}/>
      </div>
      <div className='menu bg-blue-900 pt-6 w-1/5 text-white px-3 
      max-sm:inset-y-0 max-sm:w-2/5 max-sm:invisible'>
        <h3 className='text-3xl pb-4'>Logo</h3>

        <div className='dashboard mt-7' onClick={showDashboard}>
          <h2>Dashboard</h2>
        </div>
        <div className='add-contacts mt-5' onClick={showContact}>
          <h2>Add Contacts</h2>
        </div>
      </div>

      {mobile ? (
        <div className='menu bg-blue-900 pt-6 text-white px-3 
        max-sm:w-screen z-50'>
          <div className='cancel flex justify-end' onClick={() => setMobile(false)}>
            <MdOutlineCancel size={35}/>
          </div>
          <h3 className='text-3xl pb-4'>Logo</h3>
  
          <div className='dashboard mt-7' onClick={showDashboard}>
            <h2>Dashboard</h2>
          </div>
          <div className='add-contacts mt-5' onClick={showContact}>
            <h2>Add Contacts</h2>
          </div>
        </div>
      ):

      null }
      
      { dashboard ? (<div className='menu-display pt-6  w-5/6 px-5 flex
      max-sm:w-screen flex-col gap-5 max-sm:absolute'>
        <div className='dashboard-display flex flex-col gap-3'>
          <h2 className='text-3xl'>Dashboard</h2>
          <p>Welcome back, User</p>

          {/* <small>You do not have any user on your contact list</small> */}
          {contacts.length === 0 ? (
        <small>You do not have any users on your contact list</small>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <p>Name: {contact.name}</p>
              <p>Phone: {contact.phoneNumber}</p>
              <p>Email: {contact.email}</p>
            </li>
          ))}
        </ul>
      )}
        </div>

        <button className='bg-blue-900 text-white
        w-1/4 max-sm:w-3/4 rounded-none' onClick={showContact}>Add Contact</button>
      </div>):
      null }

        {contact ? ( 
          <ContactComponent 
          initialName={name}
          initialPhoneNumber={phoneNumber}
          initialEmail={email}
          initialAddress={address}/>
        ): null

        }
    </div>
  );
};

export default Dashboard;

// {locationData && (
//   <div>
//     <p>Formatted Address: {locationData.results[0].formatted_address}</p>
//     <p>Latitude: {locationData.results[0].geometry.location.lat}</p>
//     <p>Longitude: {locationData.results[0].geometry.location.lng}</p>
//   </div>
// )}
// </div>
