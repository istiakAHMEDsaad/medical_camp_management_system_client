import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ShowcaseCard from '../../components/Cards/ShowcaseCard';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { Link } from 'react-router-dom';

const ShowcaseSection = () => {
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
    <div className='container mx-auto my-10'>
      <p
        className='font-semibold lg:text-4xl md:text-3xl text-2xl text-center
        animate__animated animate__flash animate__slower animate__infinite
      '
      >
        Our most popular <span className='text-blue-600'>Medical Camps</span>
      </p>
      <div className='mt-4'>
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
        <div className='my-10 flex items-center justify-center'>
          <Link to={"/available-camps"} className='btn btn-primary'>See All Camps</Link>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
