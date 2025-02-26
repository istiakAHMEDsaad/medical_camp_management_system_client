import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../shared/LoadingSpinner';

const ManageCamps = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: campData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['manageCampData', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/manage-camp/${user?.email}`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  console.log(campData);

  return (
    <div className='mt-3'>
      <div className='flex items-center justify-center mb-5'>
        <h2 className='text-3xl font-semibold text-slate-600'>Manage Camp</h2>
      </div>

      <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Camp Name</th>
              <th>Posted Date</th>
              <th>Camp Location</th>
              <th>Camp Doctor</th>
              <th>Operation</th>
            </tr>
          </thead>

          <tbody>
            {campData?.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>

                <td>{item?.campName}</td>
                
                <td>{item?.campDate}</td>
                
                <td>{item?.location}</td>
                
                <td>{item?.professional_name}</td>
                
                <td><div><button className="btn btn-sm btn-secondary">update</button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCamps;
