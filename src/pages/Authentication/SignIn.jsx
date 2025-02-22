import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { TbFidgetSpinner } from 'react-icons/tb';
import useAuth from '../../hooks/useAuth';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { useRef } from 'react';

const SignIn = () => {
  const {
    user,
    loading,
    signIn,
    signInWithGoogle,
    handleResetPassword,
    logOut,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';
  const userMail = useRef();
  if (loading) {
    return <LoadingSpinner />;
  }
  /* if (user) {
    return <Navigate to={from} replace={true} />;
  } */

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);

      toast.success('Login Successfully');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error?.message);
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success('Login Successful');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error?.message);
    }
  };

  // Reset Password
  const handlePasswordReset = async () => {
    const mail = userMail?.current?.value;
    try {
      await handleResetPassword(mail);
      logOut();
      navigate('/login');
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <>
    <div className='pl-4 lg:pl-10 my-4'><Link to={-1} className='btn btn-sm btn-secondary'>Go Home</Link></div>
      <div className='flex justify-center items-center min-h-screen bg-white'>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Log In</h1>
            <p className='text-sm text-gray-400'>
              Login to access your account
            </p>
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
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
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
                  autoComplete='current-password'
                  id='password'
                  required
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='bg-blue-500 w-full rounded-md py-3 text-white cursor-pointer hover:bg-blue-600 transition-colors'
              >
                {loading ? (
                  <TbFidgetSpinner className='animate-spin m-auto' />
                ) : (
                  'Continue'
                )}
              </button>
            </div>
          </form>

          <div className='space-y-1'>
            <button
              onClick={handlePasswordReset}
              className='text-xs hover:underline hover:text-lime-500 text-gray-400 cursor-pointer'
            >
              Forgot password?
            </button>
          </div>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
              Login with social accounts
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>

          {/* google login */}
          <div
            onClick={handleGoogleLogin}
            className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          <p className='px-6 text-sm text-center text-gray-400'>
            Don&apos;t have an account yet?{' '}
            <Link
              to='/signup'
              className='hover:underline hover:text-lime-500 text-gray-600'
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
