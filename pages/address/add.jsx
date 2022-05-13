import React, { useEffect } from 'react';
import Card1 from 'components/Card1';
import CustomerDashboardNavigation from 'components/layout/CustomerDashboardNavigation';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import Place from '@mui/icons-material/Place';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Formik } from 'formik';
import Link from 'next/link';
import * as yup from 'yup';
import DashboardLayout from 'components/layout/CustomerDashboardLayout';
import CircularProgress from '@mui/material/CircularProgress';
import { collection, setDoc, doc } from "firebase/firestore"; 
import { db } from 'services/firebase.app';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserData } from '../../src/redux-actions/user-redux/user.selectors';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { auth } from 'services/firebase.app';

const Redirect = ({ to }) =>{
  const router = useRouter();
  useEffect(() =>{
    router.push(to);
  }, [to]);
  return null;
};
const AddressAdder = () => {
  const [isLoading, setLoading] = React.useState(false);
  const user_data = useSelector(getCurrentUserData);


  const handleFormSubmit = async values => {
    setLoading(true);
    const newAddressRef = doc(collection(db, `uzstore_users/${user_data?.user_id}/user_adresses`));
    try {
      await setDoc(newAddressRef, {
        ...values,
        address_id: newAddressRef.id,
      });
      setLoading(false);
      toast.success('Yangi manzil qushildi');
    } catch (error) {
      toast.error('Yangi manzilni qushishda hatolik yuz berdi. Iltimos tekshirib qaytadan kiriting!')
    }
  };
  const user = auth?.currentUser?.uid;
  if(!user){
    return <Redirect to='/'/>
  };
  return <DashboardLayout>
       <DashboardPageHeader icon={Place} title="Yangi manzil qo'shish" button={<Link href="/address">
            <Button color="primary" sx={{
        bgcolor: 'primary.light',
        px: '2rem'
      }}>
              Manzillarga qaytish
            </Button>
          </Link>} navigation={<CustomerDashboardNavigation />} />

      <Card1>
        <Formik initialValues={initialValues} validationSchema={checkoutSchema} onSubmit={handleFormSubmit}>
          {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField name="user_home_number" label="Uy raqami" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.user_home_number || ''} error={!!touched.user_home_number && !!errors.user_home_number} helperText={touched.user_home_number && errors.user_home_number} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="user_street" label="Ko'cha nomi" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.user_street || ''} error={!!touched.user_street && !!errors.user_street} helperText={touched.user_street && errors.user_street} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="user_village" label="Mahalla nomi" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.user_village || ''} error={!!touched.user_village && !!errors.user_village} helperText={touched.user_village && errors.user_village} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="user_city" label="Shahar yoki tuman nomi" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.user_city || ''} error={!!touched.user_city && !!errors.user_city} helperText={touched.user_city && errors.user_city} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="user_region" label="Viloyat nomi" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.user_region || ''} error={!!touched.user_region && !!errors.user_region} helperText={touched.user_region && errors.user_region} />
                  </Grid>
                </Grid>
              </Box>
              <Button type="submit" variant="contained" color="primary">
                Manzilni saqlash
                {isLoading? <CircularProgress color="inherit" size={25} sx={{marginLeft: '15px'}}/>: undefined}
              </Button>
            </form>}
        </Formik>
      </Card1>
    </DashboardLayout>;
};

const initialValues = {
  user_home_number: '',
  user_street: '',
  user_village: '',
  user_city: '',
  user_region: '',
};
const checkoutSchema = yup.object().shape({
  user_home_number: yup.string().required('Uy raqami kiritilishi shart!'),
  user_street: yup.string().required(`Ko'cha nomi kiritlishi shart!`),
  user_village: yup.string().required('Mahalla nomi kiritlishi shart!'),
  user_city: yup.string().required('Shahar yoki tuman nomi kiritlishi shart!'),
  user_region: yup.string().required('Viloyat nomi kiritlishi shart!'),
});

export default AddressAdder;