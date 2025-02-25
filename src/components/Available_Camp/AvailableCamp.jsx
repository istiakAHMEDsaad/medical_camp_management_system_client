import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingSpinner from '../shared/LoadingSpinner';
import ShowcaseCard from '../Cards/ShowcaseCard';
import { useState } from 'react';

const AvailableCamp = () => {
  const [twoCol, setTwoCol] = useState(false);
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const { data: camps, isLoading } = useQuery({
    queryKey: ['camps', searchTerm],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/camps?search=${searchTerm}`
      );
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleReset = () => {
    setSearchTerm('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(search);
  };

  return (
    <>
      <title>Medical Camp | Available Camp</title>
      <meta name='description' content='Available camp page' />
      <div className='container mx-auto pt-4 overflow-hidden'>
        <div className='mb-10 mt-2'>
          <p
            className='text-center lg:text-4xl text-blue-500 font-semibold
            animate__animated animate__pulse animate__slower animate__infinite
          '
          >
            Our All Available Camps
          </p>
        </div>

        {/* Search bar */}
        <div className='mb-10 space-y-2'>
          <div className='flex items-center gap-2'>
            <span className='text-2xl'>Show card as</span>
            <button onClick={() => setTwoCol(!twoCol)} className='btn'>
              {twoCol === false ? '3 Column' : '2 Column'}
            </button>
          </div>

          <div className='p-5 border border-gray-300 rounded-sm'>
            {/* Category Functionalities */}
            <div className='flex flex-col md:flex-row items-center gap-4'>
              <div className='join'>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  className='input join-item md:w-96'
                  placeholder='Search camp name'
                />
                <button
                  onClick={handleSearch}
                  className='btn btn-primary join-item'
                >
                  Search
                </button>
              </div>

              <div>
                <select name='category' id='category' className='select'>
                  <option value=''>Filter By Category</option>
                  <option value='ascending'>Price Lowest</option>
                  <option value='descending'>Price Highest</option>
                </select>
              </div>

              <div>
                <button onClick={handleReset} className='btn btn-error'>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Camp card format */}
        <div>
          {camps && camps?.length > 0 ? (
            <div
              className={`grid grid-cols-1 ${
                twoCol === false ? 'lg:grid-cols-3 md:grid-cols-2 xl:px-30' : 'md:grid-cols-2 lg:px-80'
              } lg:gap-y-10 md:gap-4 gap-y-10`}
            >
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
