import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { TbFidgetSpinner } from 'react-icons/tb'

const AddCampForm = ({
  onSubmit,
  startDate,
  setStartDate,
  checkUpImg,
  setCheckUpImg,
  loading
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  return (
    <div className='max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg'>
      <h2 className='text-2xl font-bold mb-6 text-blue-600'>Add Camp</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        {/* Camp Name */}
        <div>
          <label className='block text-gray-700'>Camp Name</label>
          <input
            type='text'
            {...register('campName', { required: true })}
            className='input input-bordered w-full'
          />
          {errors.campName && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>

        {/* Image */}
        <div>
          <label className='block text-gray-700'>Image</label>
          <p
            className={`text-sm ${
              checkUpImg === 'no photo uploded'
                ? 'text-red-500 italic'
                : 'text-green-500'
            }`}
          >
            {checkUpImg}
          </p>
          <input
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setCheckUpImg(file.name);
              } else {
                setCheckUpImg('no photo uploaded');
              }
            }}
            type='file'
            {...register('image', { required: true })}
            className='file-input input-bordered w-full'
          />
          {errors.image && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>

        {/* Camp fees */}
        <div>
          <label className='block text-gray-700'>Camp Fees</label>
          <input
            type='number'
            {...register('campFees', { required: true })}
            className='input input-bordered w-full'
          />
          {errors.campFees && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>

        {/* Date time */}
        <div>
          <label className='block text-gray-700'>Date & Time</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setValue('dateTime', date);
            }}
            dateFormat='Pp'
            className='input input-bordered w-full'
          />
          {errors.dateTime && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>

        {/* Location */}
        <div>
          <label className='block text-gray-700'>Location</label>
          <input
            type='text'
            {...register('location', { required: true })}
            className='input input-bordered w-full'
          />
          {errors.location && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>

        {/* Healthcare name */}
        <div>
          <label className='block text-gray-700'>
            Healthcare Professional Name
          </label>
          <input
            type='text'
            {...register('healthcareProfessionalName', { required: true })}
            className='input input-bordered w-full'
          />
          {errors.healthcareProfessionalName && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>

        {/* Participant count */}
        <div>
          <label className='block text-gray-700'>Participant Count</label>
          <input
            type='number'
            {...register('participantCount', {
              required: true,
              valueAsNumber: true,
            })}
            className='input input-bordered w-full'
            defaultValue={0}
            disabled
          />
          {errors.participantCount && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>

        {/* Description */}
        <div>
          <label className='block text-gray-700'>Description</label>
          <textarea
            {...register('description', { required: true })}
            className='textarea textarea-bordered w-full'
          />
          {errors.description && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>

        {/* Submit */}
        <button type='submit' className='btn btn-primary w-full mt-4'>
          {loading ? (<TbFidgetSpinner className='animate-spin m-auto'/>) : 'Submit'}
        </button>
      
      </form>
    </div>
  );
};

AddCampForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  setStartDate: PropTypes.func.isRequired,
  checkUpImg: PropTypes.any,
  setCheckUpImg: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default AddCampForm;
/* 
{
    "campName": "Kyla Alvarez",
    "image": {
        "0": {}
    },
    "campFees": "44",
    "location": "Ad perferendis praes",
    "healthcareProfessionalName": "Jin Bray",
    "participantCount": 0,
    "description": "Qui ipsum id volup",
    "dateTime": "02/24/2025, 5:18 PM"
}
*/
