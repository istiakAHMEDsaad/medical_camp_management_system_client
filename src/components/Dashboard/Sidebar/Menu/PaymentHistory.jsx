import { FaHistory } from 'react-icons/fa';
import MenuItem from './MenuItem';

const PaymentHistory = () => {
  return (
    <>
      <MenuItem
        icon={FaHistory}
        label={'Payment History'}
        address={'payment-history'}
      />
    </>
  );
};

export default PaymentHistory;
