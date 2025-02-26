import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../shared/LoadingSpinner';

const ParticipantProfileManage = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: participantData = {}, isLoading } = useQuery({
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
    <div className='flex flex-col items-center justify-center h-screen space-y-2'>
      {/* update profile */}
      <div className='flex items-center justify-center gap-3 text-slate-600'>
        <h2 className='md:text-3xl text-xl'>Update Your Information</h2>
        <button className='btn'>Update</button>
      </div>

      {/* information */}
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>

          <tbody>
            {/* camp name */}
            <tr>
              <td>1</td>
              <th>Camp Name:</th>
              <td>{participantData?.currentCampName}</td>
            </tr>
            {/* camp fees */}
            <tr>
              <td>2</td>
              <th>Camp Fees:</th>
              <td>{participantData?.currentCampFees}</td>
            </tr>
            {/* camp location */}
            <tr>
              <td>3</td>
              <th>Camp Location:</th>
              <td>{participantData?.currentCampLocation}</td>
            </tr>
            {/* camp doctor */}
            <tr>
              <td>4</td>
              <th>Doctor:</th>
              <td>{participantData?.currentCampDoctor}</td>
            </tr>
            {/* participant name */}
            <tr>
              <td>5</td>
              <th>Namer:</th>
              <td>{participantData?.currentParticipantName}</td>
            </tr>
            {/* participant email */}
            <tr>
              <td>6</td>
              <th>Email:</th>
              <td>{participantData?.currentParticipantEmail}</td>
            </tr>
            {/* participant age */}
            <tr>
              <td>7</td>
              <th>Age:</th>
              <td>{participantData?.currentParticipantAge}</td>
            </tr>
            {/* participant moba */}
            <tr>
              <td>8</td>
              <th>Mobile:</th>
              <td>{participantData?.currentParticipantMoba}</td>
            </tr>
            {/* participant gender */}
            <tr>
              <td>9</td>
              <th>Gender:</th>
              <td>{participantData?.currentParticipantGen}</td>
            </tr>
            {/* participant emergency moba */}
            <tr>
              <td>10</td>
              <th>Emergency Mobile:</th>
              <td>{participantData?.currentParticipantEmergencyMoba}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticipantProfileManage;
{
  /* row 1 */
}
{
  /* <tr>
<th>1</th>
<td>Cy Ganderton</td>
<td>Quality Control Specialist</td>
</tr> */
}
