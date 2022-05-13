import Card1 from 'components/Card1';
import FlexBox from 'components/FlexBox';
import CameraEnhance from '@mui/icons-material/CameraEnhance';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Avatar, Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { LOADING_AVATAR, USER_AVATAR } from '../../avatar';
import { storage } from '../../services/firebase.app';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from 'react-redux';
import { userAuthStart } from "redux-actions/user-redux/user.actions";
import { getAuthLoadingStatus } from 'redux-actions/user-redux/user.selectors';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from "next/router";


const UserDataPicker = ({ userData }) => {
  const [userAvatar, setAvatar] = React.useState(undefined);
  const [imgUrl, setImageUrl] = React.useState(USER_AVATAR);
  const [status, setStatus] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const uploadFileToFirebase = (file)=>{
    if(!file) return;
    setAvatar(LOADING_AVATAR);
    const storageRef = ref(storage, `/uzstore_avatars/${userData?.user_name}${userData?.user_surname}/${file.name}`);
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
    dispatch(userAuthStart({
      ...values,
      user_avatar: imgUrl,
      user_id: userData.uid,
      user_contact: userData.phoneNumber,
      user_status: 'SILVER',
      user_balance: 0,
    }));
    setStatus(true);
  };

  const isLoading = useSelector(getAuthLoadingStatus);

  if(status){
    router.push('/profile');
  };

  return <Card1>
        <FlexBox alignItems="flex-end" mb={3}>
          <Avatar src={userAvatar} sx={{
          height: 64,
          width: 64
        }} />
          <Box ml={-2.5}>
            <label htmlFor="user-avatar-image">
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
            <input onChange={e => uploadFileToFirebase(e.target.files[0])} id="user-avatar-image" accept="image/*" type="file" />
          </Box>
        </FlexBox>
        <Formik initialValues={initialValues} validationSchema={checkoutSchema} onSubmit={handleFormSubmit}>
          {({
          dirty,
          isValid,
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
                    <TextField name="user_name" label="Ismingizni kiriting!" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.user_name || ''} error={!!touched.user_name && !!errors.user_name} helperText={touched.user_name && errors.user_name} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="user_surname" label="Familiyangizni kiriting!" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.user_surname || ''} error={!!touched.user_surname && !!errors.user_surname} helperText={touched.user_surname && errors.user_surname} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker label="Tug'ilgan yilingizni kiriting!" value={values.user_birth_date} maxDate={new Date()} inputFormat="dd MMMM, yyyy" shouldDisableTime={() => false} renderInput={props => <TextField size="small" fullWidth {...props} error={!!touched.user_birth_date && !!errors.user_birth_date || props.error} helperText={touched.user_birth_date && errors.user_birth_date} />} onChange={newValue => setFieldValue('user_birth_date', newValue)} />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </Box>
              <Button type="submit" variant="contained" color="primary" disabled={!(dirty && isValid)}>
                Malumotlarni saqlash
                {isLoading? <CircularProgress color="inherit" size={25} sx={{marginLeft: '15px'}}/>: undefined}
              </Button>
            </form>}
        </Formik></Card1>
};

const initialValues = {
  user_name: '',
  user_surname: '',
  user_birth_date: undefined,
};
const checkoutSchema = yup.object().shape({
  user_name: yup.string().required('Foydalanuvchi ismi kiritilishi shart!'),
  user_surname: yup.string().required('Foydalanuvchi familiyasi kiritilishi shart!'),
  user_birth_date: yup.date().required(`Foydalanuvchi tug'ilgan sanasi kiritilishi shart!`),
});
export default UserDataPicker;