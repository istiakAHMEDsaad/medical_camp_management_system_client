import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  getAuth,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ChangePasswordModal = ({ handleChangePassword, onClose, logOut }) => {
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const [eyeOpen, setEyeOpen] = useState(false);

  const reauthenticate = async (currentPassword) => {
    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    await reauthenticateWithCredential(user, credential);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleChangePassword(newPassword);
      logOut();
      navigate('/login');
      toast.success('Password changed successfully. Please log in again.');
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') {
        try {
          await reauthenticate(currentPassword);
          await handleChangePassword(newPassword);
          logOut();
          navigate('/login');
          toast.success('Password changed successfully. Please log in again.');
        } catch (reauthError) {
          console.error('Error re-authenticating:', reauthError);
          toast.error('Failed to re-authenticate. Please try again.');
        }
      } else {
        console.error('Error changing password:', error);
        toast.error(error.message);
      }
    }
  };

  const showPass = () => {
    setEyeOpen(!eyeOpen);
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-4 rounded-lg shadow-lg'>
        <h2 className='text-xl mb-4'>Change Password</h2>
        <form className='relative' onSubmit={handleSubmit}>
          <input
            type={eyeOpen === false ? 'password' : 'text'}
            placeholder='Current Password'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className='mb-2 p-2 border rounded w-full'
            required
          />
          <span onClick={showPass} className='absolute right-4 top-2'>
            {eyeOpen === true ? (<FaEyeSlash size={20} />) : (<FaEye size={20} />)}
          </span>
          <input
            type={eyeOpen === false ? 'password' : 'text'}
            placeholder='New Password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className='mb-2 p-2 border rounded w-full'
            required
          />
          <div className='flex justify-end'>
            <button
              type='button'
              onClick={onClose}
              className='bg-gray-500 px-4 py-2 rounded-lg text-white mr-2'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-blue-500 px-4 py-2 rounded-lg text-white'
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ChangePasswordModal.propTypes = {
  handleChangePassword: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
};

export default ChangePasswordModal;
