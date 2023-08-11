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
      max-sm:abolute max-sm:inset-y-0'>
        <h3 className='text-3xl pb-4'>Logo</h3>

        <div className='dashboard mt-7' onClick={showDashboard}>
          <h2>Dashboard</h2>
        </div>
        <div className='add-contacts mt-5' onClick={showContact}>
          <h2>Add Contacts</h2>
        </div>
      </div>
      
      { dashboard ? (<div className='menu-display pt-6  w-5/6 px-5 flex flex-col gap-5'>
        <div className='dashboard-display flex flex-col gap-3'>
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

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Dashboard: React.FC = () => {
//   const [contacts, setContacts] = useState<Contact[]>([]);
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [longitude, setLongitude] = useState(0);
//   const [latitude, setLatitude] = useState(0);


//   return (
//     <div className='flex gap-5 w-screen pt-5 bg-white color-black text-black
//     h-screen'>
//       <div className='flex flex-col'>
//         <h2 className='text-center text-3xl font-bold'>Dashboard</h2>
//         <div className='add-contact flex justify-end px-5'>
//           <Link to='/contact' className='bg-black text-white
//           rounded-full p-3'>Add Contact</Link>
//         </div>
//         <table >
//           <thead>
//             <tr className='flex w-screen mt-5 gap-1 justify-between
//             max-sm:gap-6 max-sm:flex-col px-8'>
//               <th className='bg-slate-100 p-2 w-1/6
//               max-sm:w-1/3'>Name</th>
//               <th className='bg-slate-100 p-2 w-1/6
//               max-sm:w-1/3'>Phone Number</th>
//               <th className='bg-slate-100 p-2 w-1/6
//               max-sm:w-1/3'>Email</th>
//               <th className='bg-slate-100 p-2 w-1/6
//               max-sm:w-1/3'>Address</th>
//               <th className='bg-slate-100 p-2 w-1/6
//               max-sm:w-1/3'>Longitude</th>
//               <th className='bg-slate-100 p-2 w-1/6
//               max-sm:w-1/3'>Latitude</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.map((contact, index) => (
//               <tr key={index}>
//                 <td>{contact.name}</td>
//                 <td>{contact.phoneNumber}</td>
//                 <td>{contact.email}</td>
//                 <td>{contact.addresses[0]?.street}</td>
//                 <td>{contact.longitude}</td>
//                 <td>{contact.latitude}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
