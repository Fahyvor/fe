import React, { useState , useEffect} from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import ContactComponent from '../Contact/ContactComponent';

interface DisplayComponentProps {
  data: newContact;
}

interface newContact {
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
}

const Dashboard: React.FC<DisplayComponentProps> = ({  data }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [dashboard, setDashboard] = useState(true);
  const [contact, setContact] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tableData, setTableData] = useState<RowData[]>([]);
  const [parseDataObject, setParseDataObject] = useState<parseData[]>([]);

    useEffect (() => {
        try {
           const getData = async  () => {
          const data = await localStorage.getItem(('newContact'))
          const parseData = JSON.parse(data)
          console.log(parseData)
        } 
      getData()
      }
        catch (error) {
          console.log('Error:', error)
        }
    })

    

  const showDashboard = () => {
    setDashboard(true);
    setContact(false);
    setMobile(false);
  };

  const showContact = () => {
    setContact(true);
    setDashboard(false);
    setMobile(false);
  };

  const showMobileNav = () => {
    setMobile(true);
  };

  return (
    <div className='flex w-screen bg-white color-black text-black h-screen'>
      {/* Mobile navigation button */}
      <div className='absolute mobile-nav flex invisible max-sm:visible mt-5 justify-end px-6 max-sm:w-screen z-50' onClick={showMobileNav}>
        <AiOutlineBars size={40}/>
      </div>

      {/* Side menu */}
      <div className='menu bg-blue-900 pt-6 w-1/5 text-white px-3 max-sm:inset-y-0 max-sm:w-2/5 max-sm:invisible'>
        <h3 className='text-3xl pb-4'>Logo</h3>
        <div className='dashboard mt-7' onClick={showDashboard}>
          <h2>Dashboard</h2>
        </div>
        <div className='add-contacts mt-5' onClick={showContact}>
          <h2>Add Contacts</h2>
        </div>
      </div>

      {/* Mobile menu */}
      {mobile ? (
        <div className='menu bg-blue-900 pt-6 text-white px-3 max-sm:w-screen z-50'>
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
      ) : null}

      {/* Dashboard display */}
      {dashboard ? (
        <div className='menu-display pt-6 w-5/6 px-5 flex max-sm:w-screen flex-col gap-5 max-sm:absolute'>
          <div className='dashboard-display flex flex-col gap-3'>
            <h2 className='text-3xl'>Dashboard</h2>
            <p>Welcome back, User</p>
            {contacts.length === 0 ? (
              <small>You do not have any users on your contact list</small>
            ) : (
              <ul>
                {parseDataObject.map((contact, index) => (
                  <li key={index}>
                    <p>Name: {contact.name}</p>
                    <p>Phone: {contact.phoneNumber}</p>
                    <p>Email: {contact.email}</p>
                    <p>Address: {contact.address}</p>
                  </li>
                ))}
              </ul>
            )}
            <ul>
              {parseDataObject.map((contact, index) => (
                  <li key={index}>
                    <p>Name: {contact.name}</p>
                    <p>Phone: {contact.phoneNumber}</p>
                    <p>Email: {contact.email}</p>
                    <p>Address: {contact.address}</p>
                  </li>
                ))}
              </ul>
          </div>
          <button className='bg-blue-900 text-white w-1/4 max-sm:w-3/4 rounded-none' onClick={showContact}>
            Add Contact
          </button>
        </div>
      ) : null}

      {/* Contact form */}
      {contact ? <ContactComponent  /> : null}
    </div>
  );
};

export default Dashboard;
