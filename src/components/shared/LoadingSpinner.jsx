import DotLoader from 'react-spinners/DotLoader';

const LoadingSpinner = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-296px)]'>
      <DotLoader />
    </div>
  );
};

export default LoadingSpinner;
