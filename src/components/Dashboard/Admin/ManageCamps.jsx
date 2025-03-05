import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../shared/LoadingSpinner';
import { useState } from 'react';
import EditCampModal from '../../Modal/EditCampModal';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

const ManageCamps = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [getId, setGetId] = useState(null);

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

  const handleEditClick = (camp) => {
    setSelectedCamp(camp);
    setGetId(camp?._id);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const updatedCamp = {
      campName: formData.get('campName'),
      campFees: parseFloat(formData.get('campFees')),
      campDate: format(startDate, 'P'),
      location: formData.get('location'),
      professional_name: formData.get('professional_name'),
      description: formData.get('description'),
    };

    try {
      await axiosSecure.patch(`/camps-edit/${getId}`, updatedCamp);

      toast.success('Update Successfully');

      handleModalClose();
    } catch (error) {
      toast.error(error?.message);
    }
  };

  const handleDelete = async (dID) => {
    try {
      await axiosSecure.delete(`/delete-camp/${dID}`);
      toast.success('Delete data successfully!');
      refetch();
    } catch (error) {
      toast.error(error?.message);
    }
  };

  const modernDelete = (id) => {
    toast((t) => (
      <div className='flex gap-3 items-center'>
        <div>
          <p>
            Are you <span className='font-bold text-red-600'>sure</span>?
          </p>
        </div>

        <div className='gap-2 flex'>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
            className='bg-red-400 hover:bg-red-500 transition-colors text-white px-3 py-1 rounded-md cursor-pointer'
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className='bg-green-400 hover:bg-green-500 transition-colors text-white px-3 py-1 rounded-md cursor-pointer'
          >
            No
          </button>
        </div>
      </div>
    ));
  };

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

                <td>
                  <div className='flex gap-2'>
                    <button
                      onClick={() => handleEditClick(item)}
                      className='btn btn-sm btn-secondary'
                    >
                      edit
                    </button>

                    <button
                      onClick={() => modernDelete(item?._id)}
                      className='btn btn-sm btn-error'
                    >
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EditCampModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
        campData={selectedCamp}
        setStartDate={setStartDate}
        startDate={startDate}
      />
    </div>
  );
};

export default ManageCamps;

// to={`/dashboard/manage-camps/${item?._id}`}
