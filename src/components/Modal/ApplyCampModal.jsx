import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Fragment } from 'react';
import useAuth from '../../hooks/useAuth';

const ApplyCampModal = ({
  isOpen,
  closeModal,
  requestHandler,
  singleCamp,
  formRef,
}) => {
  const { campName, campFees, location, professional_name } = singleCamp || {};

  const { user } = useAuth();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className={'relative z-10'} onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 backdrop-blur-md' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Join Today!!!
                </DialogTitle>

                <div className='my-2'>
                  <p className='text-sm text-gray-500'>
                    Please fill information with caution!
                  </p>
                </div>

                <form
                  ref={formRef}
                  onSubmit={requestHandler}
                  className='space-y-4'
                >
                  <div className='py-2 space-y-3'>
                    {/* camp name */}
                    <div>
                      <label
                        htmlFor='currentCampName'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Camp Name
                      </label>
                      <input
                        type='text'
                        name='currentCampName'
                        id='currentCampName'
                        defaultValue={campName}
                        readOnly
                        required
                        className='input input-bordered w-full'
                      />
                    </div>

                    {/* camp fees */}
                    <div>
                      <label
                        htmlFor='currentCampFees'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Camp Fees
                      </label>
                      <input
                        type='number'
                        name='currentCampFees'
                        id='currentCampFees'
                        defaultValue={campFees}
                        readOnly
                        required
                        className='input input-bordered w-full'
                      />
                    </div>

                    {/* camp location */}
                    <div>
                      <label
                        htmlFor='currentCampLocation'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Camp Location
                      </label>
                      <input
                        type='text'
                        name='currentCampLocation'
                        id='currentCampLocation'
                        defaultValue={location}
                        readOnly
                        required
                        className='input input-bordered w-full'
                      />
                    </div>

                    {/* camp Healthcare Professional Name */}
                    <div>
                      <label
                        htmlFor='currentCampDoctor'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Healthcare Professional Name
                      </label>
                      <input
                        type='text'
                        name='currentCampDoctor'
                        id='currentCampDoctor'
                        defaultValue={professional_name}
                        readOnly
                        required
                        className='input input-bordered w-full'
                      />
                    </div>

                    {/* camp Participant Name */}
                    <div>
                      <label
                        htmlFor='currentParticipantName'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Participant Name
                      </label>
                      <input
                        type='text'
                        name='currentParticipantName'
                        id='currentParticipantName'
                        defaultValue={user?.displayName}
                        readOnly
                        required
                        className='input input-bordered w-full'
                      />
                    </div>

                    {/* camp Participant Email */}
                    <div>
                      <label
                        htmlFor='currentParticipantEmail'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Participant Email
                      </label>
                      <input
                        type='text'
                        name='currentParticipantEmail'
                        id='currentParticipantEmail'
                        defaultValue={user?.email}
                        readOnly
                        required
                        className='input input-bordered w-full'
                      />
                    </div>

                    {/* camp Participant Age */}
                    <div>
                      <label
                        htmlFor='currentParticipantAge'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Participant Age
                      </label>
                      <input
                        type='number'
                        name='currentParticipantAge'
                        id='currentParticipantAge'
                        required
                        placeholder='enter your age'
                        className='input input-bordered w-full'
                      />
                    </div>

                    {/* camp Participant Phone */}
                    <div>
                      <label
                        htmlFor='currentParticipantMoba'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Phone Number
                      </label>
                      <input
                        type='text'
                        name='currentParticipantMoba'
                        id='currentParticipantMoba'
                        required
                        placeholder='+8801xxxxxxxxx'
                        className='input input-bordered w-full'
                      />
                    </div>

                    {/* camp Participant Gender */}
                    <div>
                      <label
                        htmlFor='currentParticipantGen'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Select Gender
                      </label>
                      <select
                        className='select select-bordered w-full'
                        name='currentParticipantGen'
                        id='currentParticipantGen'
                        required
                      >
                        <option value=''>Select Gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                      </select>
                    </div>

                    {/* camp Participant Emergency number */}
                    <div>
                      <label
                        htmlFor='currentParticipantEmergencyMoba'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Emergency Contact Number
                      </label>
                      <input
                        type='text'
                        name='currentParticipantEmergencyMoba'
                        id='currentParticipantEmergencyMoba'
                        required
                        placeholder='+8801xxxxxxxxx'
                        className='input input-bordered w-full'
                      />
                    </div>
                  </div>

                  <div className='divider divider-neutral'></div>

                  {/* button section */}
                  <div className='flex mt-2 justify-around'>
                    <button type='submit' className='btn btn-primary'>
                      Submit
                    </button>
                    <p className='btn btn-error' onClick={closeModal}>
                      Cancel
                    </p>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

ApplyCampModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  requestHandler: PropTypes.func.isRequired,
  singleCamp: PropTypes.object.isRequired,
  formRef: PropTypes.any,
};

export default ApplyCampModal;
/*
<form ref={formRef} onSubmit={requestHandler} className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Camp Name
                    </label>
                    <input
                      type='text'
                      name='campName'
                      defaultValue={campName}
                      readOnly
                      className='input input-bordered w-full'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Camp Fees
                    </label>
                    <input
                      type='text'
                      name='campFees'
                      defaultValue={campFees}
                      readOnly
                      className='input input-bordered w-full'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Location
                    </label>
                    <input
                      type='text'
                      name='location'
                      defaultValue={location}
                      readOnly
                      className='input input-bordered w-full'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Healthcare Professional Name
                    </label>
                    <input
                      type='text'
                      name='professional_name'
                      defaultValue={professional_name}
                      readOnly
                      className='input input-bordered w-full'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Participant Name
                    </label>
                    <input
                      type='text'
                      name='participantName'
                      defaultValue={user?.displayName}
                      readOnly
                      className='input input-bordered w-full'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Participant Email
                    </label>
                    <input
                      type='email'
                      name='participantEmail'
                      defaultValue={user?.email}
                      readOnly
                      className='input input-bordered w-full'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Age
                    </label>
                    <input
                      type='number'
                      name='age'
                      className='input input-bordered w-full'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      name='phoneNumber'
                      className='input input-bordered w-full'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Gender
                    </label>
                    <select
                      className='select select-bordered w-full'
                      name='gender'
                    >
                      <option value=''>Select Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </select>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Emergency Contact
                    </label>
                    <input
                      type='tel'
                      name='emergencyContact'
                      className='input input-bordered w-full'
                    />
                  </div>
                </form>
*/
