import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import logo from "/medical-camp-icon.webp"
import { useState } from 'react';

const Sidebar = () => {
    const [isActive, setActive] = useState(false)
    //sidebar responsive handle
  const handleToggle = () => {
    setActive(!isActive)
  }
  
    return (
    <>
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

        <button onClick={handleToggle} className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'>
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}>

      </div>
    </>
  );
};

export default Sidebar;
