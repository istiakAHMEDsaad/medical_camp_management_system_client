import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingSpinner from '../shared/LoadingSpinner';
import ShowcaseCard from '../Cards/ShowcaseCard';

const AvailableCamp = () => {
  const { data: camps, isLoading } = useQuery({
    queryKey: ['camps'],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/camps`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <title>Medical Camp | Available Camp</title>
      <meta name='description' content='Available camp page' />
      <div className='container mx-auto pt-4 overflow-hidden'>
        <div className='mb-10 mt-2'>
          <p className='text-center lg:text-4xl text-blue-500 font-semibold
            animate__animated animate__pulse animate__slower animate__infinite
          '>
            Our All Available Camps
          </p>
        </div>
        {/* Camp card format */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
          {camps && camps?.length > 0 ? (
            <div>
              {camps?.map((camp) => (
                <ShowcaseCard key={camp?._id} camp={camp} />
              ))}
            </div>
          ) : (
            <p className='text-center font-semibold text-3xl text-red-500'>
              No Data Available
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AvailableCamp;
