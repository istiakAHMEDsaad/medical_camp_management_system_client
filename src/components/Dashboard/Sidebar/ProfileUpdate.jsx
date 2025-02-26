import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ProfileUpdate = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: userInfo = [] } = useQuery({
    queryKey: ['userInfo', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user?.email}`);
      return data;
    },
  });
;

  return (
    <>
      <Link to={-1} className='btn btn-primary mt-10 ml-10'>
        Back
      </Link>
      <div className='min-h-[calc(100vh-100px)] flex items-center justify-center'>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <div className='card-body'>
            <fieldset className='fieldset'>
              <label className='fieldset-label'>Name</label>
              <input
                type='text'
                className='input'
                placeholder='name'
                defaultValue={userInfo?.name}
              />

              <label className='fieldset-label'>Email</label>
              <input
                type='email'
                className='input'
                placeholder='email'
                defaultValue={userInfo?.email}
                disabled
              />

              <label className='fieldset-label'>Role</label>
              <input
                type='text'
                className='input'
                placeholder='default role'
                defaultValue={userInfo?.role}
                disabled
              />

              <button className='btn btn-secondary mt-4'>Sbumit</button>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
