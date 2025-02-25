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

const ApplyCampModal = ({ isOpen, closeModal, requestHandler, singleCamp }) => {
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

                <form className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Camp Name
                    </label>
                    <input
                      type='text'
                      value={campName}
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
                      value={campFees}
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
                      value={location}
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
                      value={professional_name}
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
                      value={user?.displayName}
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
                      value={user?.email}
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
                      className='input input-bordered w-full'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Phone Number
                    </label>
                    <input type='tel' className='input input-bordered w-full' />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Gender
                    </label>
                    <select className='select select-bordered w-full'>
                      <option value=''>Select Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Emergency Contact
                    </label>
                    <input type='tel' className='input input-bordered w-full' />
                  </div>
                </form>

                <div className='divider divider-neutral'></div>

                <div className='flex mt-2 justify-around'>
                  <button
                    onClick={requestHandler}
                    type='button'
                    className='btn btn-primary'
                  >
                    Submit
                  </button>
                  <button
                    type='button'
                    className='btn btn-error'
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
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
};

export default ApplyCampModal;
