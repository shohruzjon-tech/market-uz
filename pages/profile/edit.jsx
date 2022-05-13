import Card1 from 'components/Card1';
import FlexBox from 'components/FlexBox';
import CustomerDashboardLayout from 'components/layout/CustomerDashboardLayout';
import CustomerDashboardNavigation from 'components/layout/CustomerDashboardNavigation';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import CameraEnhance from '@mui/icons-material/CameraEnhance';
import Person from '@mui/icons-material/Person';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Avatar, Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Formik } from 'formik';
import Link from 'next/link';
import React, { useEffect } from 'react';
import * as yup from 'yup';
import { storage, db } from 'services/firebase.app';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { LOADING_AVATAR } from '../../src/avatar';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserData } from '../../src/redux-actions/user-redux/user.selectors';
import { userAuthSucces } from '../../src/redux-actions/user-redux/user.actions';
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { toast } from 'react-hot-toast';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';
import { auth } from 'services/firebase.app';

const Redirect = ({ to }) =>{
  const router = useRouter();
  useEffect(() =>{
    router.push(to);
  }, [to]);
  return null;
};

const ProfileEditor = () => {
  const user_data = useSelector(getCurrentUserData);
  const [userAvatar, setAvatar] = React.useState(user_data?.user_avatar);
  const [imgUrl, setImageUrl] = React.useState(user_data?.user_avatar);
  const [isLoading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsub = onSnapshot(doc(db, "uzstore_users", `${user_data?.user_id}`), (doc) => {
      const data = doc.data();
      dispatch(userAuthSucces(data));
  });

  return ()=>{
    unsub();
  }
  }, [db]);

  const uploadFileToFirebase = (file)=>{
    if(!file) return;
    setAvatar(LOADING_AVATAR);
    const storageRef = ref(storage, `/uzstore_avatars/${user_data?.user_name}${user_data?.user_surname}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', (snapshot)=>{
    },
    (error) => {
   }, 
   () => {
     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setAvatar(downloadURL);
      setImageUrl(downloadURL);
     });
   });
};



  const handleFormSubmit = async values => {
    setLoading(true);
    const userDocRef = doc(db, "uzstore_users", `${user_data?.user_id}`);
    try {
      await updateDoc(userDocRef, {
        "user_name": values?.first_name,
        "user_surname": values?.last_name,
        "user_birth_date": values?.birth_date,
        "user_avatar": imgUrl,
    });
    toast.success('Malumotlar yangilandi');
    setLoading(false);
    } catch (error) {
      toast.error('Malumotlarni yangilashda hatolik yuz berdi. Iltimos qaytadan urinib kuring!');
      setLoading(false);
      console.log(error);
    }
  };
  const initialValues = {
    first_name: user_data?.user_name,
    last_name: user_data?.user_surname,
    birth_date: new Date(user_data?.user_birth_date?.seconds*1000),
  };


  const user = auth?.currentUser?.uid;
  if(!user&&!user_data){
    return <Redirect to='/'/>
  };
  return <CustomerDashboardLayout>
      <DashboardPageHeader icon={Person} title="Profilga ishlov berish" button={<Link href="/profile">
            <Button color="primary" sx={{
        px: '2rem',
        bgcolor: 'primary.light'
      }}>
              Profilga qaytish
            </Button>
          </Link>} navigation={<CustomerDashboardNavigation />} />

      <Card1>
        <FlexBox alignItems="flex-end" mb={3}>
          <Avatar src={userAvatar} sx={{
          height: 64,
          width: 64
        }} />

          <Box ml={-2.5}>
            <label htmlFor="profile-image">
              <Button component="span" color="secondary" sx={{
              bgcolor: 'grey.300',
              height: 'auto',
              p: '8px',
              borderRadius: '50%'
            }}>
                <CameraEnhance fontSize="small" />
              </Button>
            </label>
          </Box>
          <Box display="none">
            <input onChange={e => uploadFileToFirebase(e.target.files[0])} id="profile-image" accept="image/*" type="file" />
          </Box>
        </FlexBox>
        <Formik initialValues={initialValues} validationSchema={checkoutSchema} onSubmit={handleFormSubmit}>
          {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue
        }) => <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField name="first_name" label="Ismingiz" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.first_name || ''} error={!!touched.first_name && !!errors.first_name} helperText={touched.first_name && errors.first_name} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="last_name" label="Familiyangiz" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.last_name || ''} error={!!touched.last_name && !!errors.last_name} helperText={touched.last_name && errors.last_name} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField  label="Telefon raqamingiz" fullWidth  value={user_data?.user_contact}  disabled/>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker label="Tug'ilgan sanangiz" value={values.birth_date} maxDate={new Date()} inputFormat="dd MMMM, yyyy" shouldDisableTime={() => false} renderInput={props => <TextField size="small" fullWidth {...props} error={!!touched.birth_date && !!errors.birth_date || props.error} helperText={touched.birth_date && errors.birth_date} />} onChange={newValue => setFieldValue('birth_date', newValue)} />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary">
                 O'zgarishlarni saqlash
                 {isLoading? <CircularProgress color="inherit" size={25} sx={{marginLeft: '15px'}}/>: undefined}
              </Button>
            </form>}
        </Formik>
      </Card1>
    </CustomerDashboardLayout>;
};

const checkoutSchema = yup.object().shape({
  first_name: yup.string().required('Ism kiritilishi shart'),
  last_name: yup.string().required('Familiya kiritilishi shart'),
  birth_date: yup.date(`Notug'ri format!`).required(`Tug'ilgan sanangiz kiritilishi shart`),
});
export default ProfileEditor;