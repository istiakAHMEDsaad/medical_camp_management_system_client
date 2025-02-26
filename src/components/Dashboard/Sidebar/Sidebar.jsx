import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import logo from '/medical-camp-icon.webp';
import { useState } from 'react';
import RegisteredCampsNav from './Menu/RegisteredCampsNav';
import PaymentHistoryNav from './Menu/PaymentHistoryNav';
import AnalyticsNav from './Menu/AnalyticsNav';
import { GrLogout } from 'react-icons/gr';
import { FcSettings } from 'react-icons/fc';
import MenuItem from './Menu/MenuItem';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import AddCampNav from './Menu/AddCampNav';
import ManageCampsNav from './Menu/ManageCampsNav';
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { logOut } = useAuth();
  const handleLogOut = async () => {
    await logOut();
    toast.success('Logout Successfully!');
  };

  const [isActive, setActive] = useState(false);
  //sidebar responsive handle
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <title>Dashboard</title>
      <meta name='dashboard' content='Welcome to the dashboard' />
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-2 font-bold'>
            <Link to='/'>
              <img
                // className='hidden md:block'
                src={logo}
                alt='logo'
                width='50'
                height='50'
                className='h-16 w-16 object-cover'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* logo */}
          <div className='relative md:block'>
            <span onClick={handleToggle} className='absolute right-2 md:hidden'><FaTimes size={30}/></span>
            <Link
              to={'/'}
              className='hidden w-full md:flex md:justify-center md:items-center shadow-sm rounded-lg bg-blue-100 mx-auto'
            >
              <img className='w-12 h-12 object-cover' src={logo} alt='logo' />
              <p className='text-xl font-semibold text-zinc-600'>
                Medical Camp
              </p>
            </Link>
          </div>

          {/* nav item */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
              {/* menu items */}
              <AddCampNav />
              <ManageCampsNav />
              <RegisteredCampsNav />

              <PaymentHistoryNav />
              <AnalyticsNav />
            </nav>
          </div>
        </div>

        {/* profile & logout */}
        <div>
          <hr />
          <MenuItem
            icon={FcSettings}
            label={'Profile'}
            address='/dashboard/profile'
          />
          <button
            onClick={handleLogOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform cursor-pointer'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
