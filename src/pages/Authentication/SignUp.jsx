import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { IoWarning } from 'react-icons/io5';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';
import { imageUpload } from '../../api/utils';

const SignUp = () => {
  const { loading, createUser, updateUserProfile, signInWithGoogle } =
    useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (password.length < 6) {
      toast('Password Must Contain 6 Character!', { icon: <IoWarning /> });
      return;
    } else if (!passwordRegex.test(password)) {
      toast(
        'Password must be contain 1 uppercase, 1 lowercase, 1 number, and 1 special character',
        { icon: <IoWarning />, duration: 3000 }
      );
      return;
    }

    // 1. upload image to imgbb
    const photoURL = await imageUpload(image);

    //data?.data?.display_url

    try {
      // 2. register user
      await createUser(email, password);
      // 3. save username & profile pic
      await updateUserProfile(name, photoURL);
      navigate('/login');
      toast.success('Account Create Successfully');
    } catch (error) {
      toast.error(error?.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success('Login Successfully');
      navigate('/');
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <>
      <div className='pl-4 lg:pl-10 my-4'>
        <Link to={'/'} className='btn btn-sm btn-secondary'>
          Go Home
        </Link>
      </div>
      <div className='flex justify-center items-center min-h-screen bg-white'>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
            <p className='text-sm text-gray-400'>Welcome to medical camp</p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=''
            action=''
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter Your Name Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>

              <div className=''>
                <label htmlFor='image' className='block mb-2 text-sm'>
                  Select Image:
                </label>
                <input
                  className='file-input'
                  required
                  type='file'
                  id='image'
                  name='image'
                  accept='image/*'
                />
              </div>

              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <div className='flex justify-between'>
                  <label htmlFor='password' className='text-sm mb-2'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  autoComplete='new-password'
                  id='password'
                  required
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='bg-blue-500 cursor-pointer hover:bg-blue-600 transition-colors w-full rounded-md py-3 text-white'
              >
                {loading ? (
                  <TbFidgetSpinner className='animate-spin m-auto' />
                ) : (
                  'Continue'
                )}
              </button>
            </div>
          </form>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
              Signup with social accounts
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>
          <div
            onClick={handleGoogleLogin}
            className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          <p className='px-6 text-sm text-center text-gray-400'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='hover:underline hover:text-blue-500 text-gray-600'
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
