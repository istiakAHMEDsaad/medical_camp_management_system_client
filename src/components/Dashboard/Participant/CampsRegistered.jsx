import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../shared/LoadingSpinner';

const CampsRegistered = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: participantData = [], isLoading } = useQuery({
    queryKey: ['participantData', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/participant/${user?.email}`);
      return data;
    },
  });

  //   const participantData = Array.isArray(apiResponse) ? apiResponse : [apiResponse];

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className='flex items-center justify-center'>
        <h2 className='text-2xl text-slate-600 font-semibold my-5'>
          All Registered Camp Information
        </h2>
      </div>

      {/* Table */}
      <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Camp Name</th>
              <th>Camp Fees</th>
              <th>Participant Name</th>
              <th>Payment Status</th>
              <th>Confirmation Status</th>
              <th>Cancel Button</th>
              <th>Feedback Button</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody>
            {participantData?.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>

                <td>{item?.currentCampName}</td>

                <td>${item?.currentCampFees}</td>

                <td>{item?.currentParticipantName}</td>

                <td>
                  {item?.paymentStatus === 'unpaid' ? (
                    <button className='btn btn-sm btn-secondary'>
                      Pay now
                    </button>
                  ) : (
                    <p className='p-1 rounded-md bg-green-100 text-center font-bold text-green-600'>
                      Paid
                    </p>
                  )}
                </td>

                <td>
                  {item?.confirmationStatus === 'pending' ? (
                    <p className='p-1 rounded-md bg-red-100 text-center font-bold text-red-600'>
                      Pending
                    </p>
                  ) : (
                    ''
                  )}
                </td>

                <td>
                  {item?.paymentStatus === 'unpaid' ? (
                    <button className='btn btn-sm btn-error'>Cancel</button>
                  ) : (
                    ''
                  )}
                </td>

                <td>
                  {item?.paymentStatus === 'unpaid' &&
                  item?.confirmationStatus === 'pending' ? (
                    <button
                      className='btn btn-sm btn-warning'
                      data-tip='hello'
                      disabled='disabled'
                    >
                      Give feedback
                    </button>
                  ) : (
                    <button className='btn btn-sm btn-warning'>
                      Give feedback
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampsRegistered;
