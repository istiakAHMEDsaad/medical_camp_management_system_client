import { FaHistory } from 'react-icons/fa';
import MenuItem from './MenuItem';

const PaymentHistoryNav = () => {
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

export default PaymentHistoryNav;
