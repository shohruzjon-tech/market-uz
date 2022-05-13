import DashboardLayout from 'components/layout/CustomerDashboardLayout';
import { H5 } from 'components/Typography';
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
const PaymentMethodsList = () => {
  const user = auth?.currentUser?.uid;
if(!user){
  return <Redirect to='/'/>
};
  return <DashboardLayout>
              <H5 component='h5' textAlign='center'>Ushbu sahifada tamirlash ishlari ketmoqda!</H5>
        </DashboardLayout>;
};

export default PaymentMethodsList;