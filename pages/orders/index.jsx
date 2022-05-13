import CustomerDashboardLayout from 'components/layout/CustomerDashboardLayout';
import CustomerOrderList from 'components/orders/CustomerOrderList';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from 'services/firebase.app';

const Redirect = ({ to }) =>{
  const router = useRouter();
  useEffect(() =>{
    router.push(to);
  }, [to]);
  return null;
};

const Orders = () => {
const user = auth?.currentUser?.uid;
if(!user){
  return <Redirect to='/'/>
};
  return <CustomerDashboardLayout>
             <CustomerOrderList />
      </CustomerDashboardLayout>;
};

export default Orders;