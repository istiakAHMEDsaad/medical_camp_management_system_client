import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaX } from 'react-icons/fa6';

const ManageRegisterCamps = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allParticipant = [] } = useQuery({
    queryKey: ['allParticipantQuery'],
    queryFn: async () => {
      const { data } = await axiosSecure('/participant');
      return data;
    },
  });

  // console.log(allParticipant[0]._id)
  return (
    <div>
      <h1 className='text-3xl text-center font-semibold text-slate-700 underline mb-10'>
        Register Details
      </h1>

      <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Participant Name</th>
              <th>Camp Name</th>
              <th>Camp Fees</th>
              <th>Payment Status</th>
              <th>Confirmation Status</th>
              <th>Cancel</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody>
            {allParticipant?.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.currentParticipantName}</td>
                <td>{item?.currentCampName}</td>
                <td>${item?.currentCampFees}</td>
                <td>{item?.paymentStatus}</td>
                <td>{item?.confirmationStatus}</td>
                <td>
                  {item?.confirmationStatus === 'pending' ? (
                    <button className='btn btn-sm btn-error'>cancel</button>
                  ) : (
                    <FaX color='red' size={18} fontWeight={700} />
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

export default ManageRegisterCamps;
