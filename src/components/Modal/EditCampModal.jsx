import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

const EditCampModal = ({
  isOpen,
  onClose,
  onSubmit,
  campData,
  startDate,
  setStartDate,
}) => {
  const {
    _id,
    campName,
    campFees,
    location,
    professional_name,
    description,
  } = campData || {};

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden'>
      <div className='bg-white p-6 rounded-lg shadow-lg lg:w-96'>
        <h2 className='text-2xl font-semibold mb-4'>Edit Camp</h2>
        <form onSubmit={onSubmit}>
          {/* name */}
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Camp Name
            </label>
            <input
              type='text'
              name='campName'
              required
              defaultValue={campName}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            />
          </div>
          {/* camp fees */}
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Camp Fees
            </label>
            <input
              type='number'
              name='campFees'
              required
              defaultValue={campFees}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            />
          </div>
          {/* date */}
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Camp Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
              dateFormat='Pp'
              campDate
              className='input input-bordered w-full'
            />
            {/* <input
              type='date'
              name='campDate'
              required
              defaultValue={campDate}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            /> */}
          </div>
          {/* location */}
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Location
            </label>
            <input
              type='text'
              name='location'
              required
              defaultValue={location}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            />
          </div>
          {/* doctor */}
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Doctor
            </label>
            <input
              type='text'
              name='professional_name'
              required
              defaultValue={professional_name}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            />
          </div>
          {/* description */}
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Description
            </label>
            <input
              type='text'
              name='description'
              required
              defaultValue={description}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            />
          </div>

          <div className='flex justify-end gap-2'>
            <p onClick={onClose} className='btn btn-secondary'>
              Cancel
            </p>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditCampModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  campData: PropTypes.object,
  startDate: PropTypes.any,
  campDate: PropTypes.any,
};

export default EditCampModal;
