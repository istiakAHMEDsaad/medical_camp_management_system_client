import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full h-[36rem] bg-cover bg-center rounded-md'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70 rounded-md'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />
          <Link to='/aa' className='btn btn-secondary'>
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
};

export default Slide;
