import {
  FaCalendarAlt,
  FaUserMd,
  FaUsers,
  FaMapMarkerAlt,
  FaStickyNote,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShowcaseCard = ({ camp }) => {
  const {
    _id,
    campName,
    image,
    campFees,
    campDate,
    location,
    professional_name,
    participant_count,
    description,
  } = camp || {};

  return (
    <Link to={`/camps/${_id}`} className='card md:w-96 bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 lg:hover:scale-105 transition-transform cursor-pointer justify-around'>
      {/* image */}
      <img
        src={image}
        alt='Medical Center'
        className='w-full h-48 object-cover lg:px-2 lg:pt-1'
      />

      <div className='p-4'>
        <h2 className='text-2xl font-bold text-blue-600'>{campName}</h2>

        <p className='text-green-600 text-lg font-semibold'>
          Camp Fees: ${campFees}
        </p>

        <div className='flex items-center text-gray-600 mt-2'>
          <FaCalendarAlt className='mr-2' />
          <span>Date & Time: {campDate}</span>
        </div>

        <div className='flex items-center text-gray-600 mt-2'>
          <FaMapMarkerAlt className='mr-2' />
          <span>Location: {location}</span>
        </div>

        <div className='flex items-center text-gray-600 mt-2'>
          <FaUserMd className='mr-2' />
          <span>Healthcare Professional: {professional_name}</span>
        </div>
        <div className='flex items-center text-gray-600 mt-2'>
          <FaUsers className='mr-2' />
          <span>Participants: {participant_count}</span>
        </div>
        <div className='flex items-center text-gray-600 mt-2'>
          <FaStickyNote className='mr-2 basis-[4%]' />
          <span className='basis-[90%] tooltip' data-tip={description}>
            Description: {description?.substring(0, 60)}...
          </span>
        </div>
      </div>
    </Link>
  );
};

ShowcaseCard.propTypes = {
  camp: PropTypes.object.isRequired,
};

export default ShowcaseCard;
