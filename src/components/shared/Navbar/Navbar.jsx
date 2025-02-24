import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth.js';
import toast from 'react-hot-toast';
import defaultAvatar from '../../../assets/placeholder.jpg';

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
    toast.success('Logout Successfully');
  };

  const navButton = (
    <>
      <li>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isActive
              ? 'btn btn-secondary text-white'
              : isPending
              ? 'pending'
              : 'btn btn-outline btn-secondary text-black'
          }
        >
          <span>Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/available-camps'
          className={({ isActive, isPending }) =>
            isActive
              ? 'btn btn-secondary text-white'
              : isPending
              ? 'pending'
              : 'btn btn-outline btn-secondary text-black'
          }
        >
          <span>Available Camps</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/aa'
          className={({ isActive, isPending }) =>
            isActive
              ? 'btn btn-secondary text-white'
              : isPending
              ? 'pending'
              : 'btn btn-outline btn-secondary text-black'
          }
        >
          <span>Join US</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className='container mx-auto'>
      <div className='navbar bg-base-100 shadow-sm'>
        {/* Navbar Start */}
        <div className='navbar-start'>
          {/* mobile device */}
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {' '}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />{' '}
              </svg>
            </div>

            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2 lg:space-y-0'
            >
              {navButton}
            </ul>
          </div>
          <Link to={'/'} className='btn btn-ghost text-xl'>
            <div className='flex items-center'>
              <span>MCMS</span>
              <img
                className='w-10 h-10 object-cover'
                src='/medical-camp-icon.webp'
                alt='logo'
              />
            </div>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 lg:space-x-1'>
            {navButton}
          </ul>
        </div>

        {/* Navbar End */}
        <div className='navbar-end'>
          <div className='flex-none'>
            {/* profile menue dropdown */}
            <div className='dropdown dropdown-end'>
              {/* picture */}
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div className='w-10 rounded-full'>
                  <img
                    alt='User IMG'
                    src={user?.email ? user?.photoURL : defaultAvatar}
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow'
              >
                {user?.email ? (
                  <div
                    className='py-1 pl-[11px] flex items-center gap-2 tooltip'
                    data-tip={user?.displayName}
                  >
                    <p className='font-semibold text-base'>Name:</p>
                    <span className='text-base italic text-red-600'>
                      {user?.displayName.substring(0, 7)}...
                    </span>
                  </div>
                ) : (
                  ''
                )}
                {/* displayName */}

                {user?.email ? (
                  <>
                    <li>
                      <Link to={'/dashboard'} className='text-base'>
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogOut} className='text-base'>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to={'/login'} className='text-base'>
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
