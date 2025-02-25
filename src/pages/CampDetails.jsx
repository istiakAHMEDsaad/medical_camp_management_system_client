import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import {
  FaCalendarAlt,
  FaUserMd,
  FaUsers,
  FaMapMarkerAlt,
  FaStickyNote,
  FaMoneyBill,
  FaArrowLeft,
} from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import ApplyCampModal from '../components/Modal/ApplyCampModal';

const CampDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);
  const { id } = useParams();
  const { user } = useAuth();

  const {
    data: singleCamp = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['single_camp', id],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/camps/${id}`
      );
      return data;
    },
  });

  const {
    campName,
    image,
    campFees,
    campDate,
    location,
    professional_name,
    participant_count,
    description,
  } = singleCamp || {};

  if (isLoading) {
    <LoadingSpinner />;
  }

  const closeModal = () => {
    setIsOpen(false);
  };
  const requestHandler = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    const currentCampName = form.currentCampName.value;
    const currentCampFees = parseFloat(form.currentCampFees.value);
    const currentCampLocation = form.currentCampLocation.value;
    const currentCampDoctor = form.currentCampDoctor.value;
    const currentParticipantName = form.currentParticipantName.value;
    const currentParticipantEmail = form.currentParticipantEmail.value;
    const currentParticipantAge = form.currentParticipantAge.value;
    const currentParticipantMoba = form.currentParticipantMoba.value;
    const currentParticipantGen = form.currentParticipantGen.value;
    const currentParticipantEmergencyMoba =
      form.currentParticipantEmergencyMoba.value;

    const collectInfo = {
      currentCampName,
      currentCampFees,
      currentCampLocation,
      currentCampDoctor,
      currentParticipantName,
      currentParticipantEmail,
      currentParticipantAge,
      currentParticipantMoba,
      currentParticipantGen,
      currentParticipantEmergencyMoba,
    };

    console.table(collectInfo);
  };

  return (
    <div className='container mx-auto'>
      <div className='mb-10 mt-2 md:m-0'>
        <Link to={'/available-camps'} className='btn btn-secondary'>
          <FaArrowLeft />
          Back
        </Link>
      </div>
      <div className='flex items-center justify-center min-h-[calc(100vh-40px)]'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 px-2 md:px-6 md:py-6 border border-gray-300 rounded-md shadow-lg'>
          {/* image */}

          <div className=''>
            <img
              className='lg:w-[25rem] h-64 object-cover rounded-md'
              src={image}
              alt='pic'
            />
          </div>
          {/* text */}
          <div className='flex flex-col gap-1'>
            <h2 className='text-blue-500 md:text-3xl text-xl font-semibold'>
              {campName}
            </h2>

            <p className='flex items-center gap-1'>
              <FaMoneyBill
                size={22}
                style={{ color: 'rgba(34, 197, 94, 1)' }}
              />
              <span className='lg:text-xl font-medium text-green-600'>
                Camp Fees:{' '}
              </span>
              <span className='lg:text-xl text-gray-500'>${campFees}</span>
            </p>

            <p className='flex items-center gap-1'>
              <FaCalendarAlt
                size={22}
                style={{ color: 'rgba(34, 197, 94, 1)' }}
              />
              <span className='lg:text-xl font-medium text-green-600'>
                Date:{' '}
              </span>
              <span className='lg:text-xl text-gray-500'>{campDate}</span>
            </p>

            <p className='flex items-center gap-1'>
              <FaMapMarkerAlt
                size={22}
                style={{ color: 'rgba(34, 197, 94, 1)' }}
              />
              <span className='lg:text-xl font-medium text-green-600'>
                Location:{' '}
              </span>
              <span className='lg:text-xl text-gray-500'>{location}</span>
            </p>

            <p className='flex items-center gap-1'>
              <FaUserMd size={22} style={{ color: 'rgba(34, 197, 94, 1)' }} />
              <span className='lg:text-xl font-medium text-green-600'>
                Doctor:{' '}
              </span>
              <span className='lg:text-xl text-gray-500'>
                {professional_name}
              </span>
            </p>

            <p className='flex items-center gap-1'>
              <FaUsers size={22} style={{ color: 'rgba(34, 197, 94, 1)' }} />
              <span className='lg:text-xl font-medium text-green-600'>
                Participant:{' '}
              </span>
              <span className='lg:text-xl text-gray-500'>
                {participant_count}
              </span>
            </p>

            <p className='gap-1 md:flex'>
              <FaStickyNote
                size={22}
                style={{ color: 'rgba(34, 197, 94, 1)' }}
              />
              <span className='lg:text-xl font-medium text-green-600'>
                Participant:{' '}
              </span>
              <span className='lg:text-xl text-gray-500 block lg:w-xl'>
                {description}
              </span>
            </p>
            <div className='flex justify-end'>
              {user?.email ? (
                <button
                  onClick={() => setIsOpen(true)}
                  className='btn btn-primary'
                >
                  Join Camp
                </button>
              ) : (
                ''
              )}
              <ApplyCampModal
                requestHandler={requestHandler}
                closeModal={closeModal}
                isOpen={isOpen}
                singleCamp={singleCamp}
                formRef={formRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
