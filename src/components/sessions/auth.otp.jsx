import BazarButton from "components/BazarButton";
import FlexBox from "components/FlexBox";
import { H3,  Small } from "components/Typography";
import { Box, Card, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { TextField } from '@mui/material';
import { toast } from 'react-hot-toast';
import UserDataPicker from "./auth.user.info";
import CircularProgress from '@mui/material/CircularProgress';
import { getUserDocument } from '../../services/firebase.utils';
import { useRouter } from "next/router";
import { userAuthSucces } from '../../redux-actions/user-redux/user.actions';
import { useDispatch } from 'react-redux';



const fbStyle = {
  background: "#3B5998",
  color: "white"
};
const googleStyle = {
  background: "#4285F4",
  color: "white"
};
const StyledCard = styled(({
  children,
  passwordVisibility,
  ...rest
}) => <Card {...rest}>{children}</Card>)(({
  theme,
  passwordVisibility
}) => ({
  width: 500,
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  },
  ".content": {
    textAlign: "center",
    padding: "3rem 3.75rem 0px",
    [theme.breakpoints.down("xs")]: {
      padding: "1.5rem 1rem 0px"
    }
  },
  ".passwordEye": {
    color: passwordVisibility ? theme.palette.grey[600] : theme.palette.grey[400]
  },
  ".facebookButton": {
    marginBottom: 10,
    "&:hover": fbStyle,
    ...fbStyle
  },
  ".googleButton": {
    "&:hover": googleStyle,
    ...googleStyle
  },
  ".agreement": {
    marginTop: 12,
    marginBottom: 24
  }
}));



const OtpConfirm = ({resetAuthForm}) => {
  const [userRef, setUser] = useState(undefined);
  const [isLoading, setLoading] = useState(false);
  const [isDoc, setDoc] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleFormSubmit = async values => {
    setLoading(true);
    window.confirmationResult.confirm(values?.otp_code).then((result) => {
        const user = result.user;
        getUserDocument(user?.uid).then((res)=>{
           if(res.status){
             dispatch(userAuthSucces(res?.data));
           }
             setDoc(res.status);
             setUser(user);
             setLoading(false);
        });
      }).catch((error) => {
        toast.error(`Tasdiqlash kodi noto'g'ri kiritildi!`);
        setLoading(false);
      });
};


  const {
    dirty,
    isValid,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    onSubmit: handleFormSubmit,
    initialValues,
    validationSchema: formSchema
  });
  
  if(isDoc){
    router.push('/profile/edit');
  };

  return <React.Fragment>
    {!isDoc&&userRef? <UserDataPicker userData={userRef}/> :
     <form className="content" onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={1}>
          UZSTORE | ONLINE BOZORGA XUSH KELIBSIZ
        </H3>
        <Small fontWeight="600" fontSize="12px" color="grey.800" textAlign="center" mb={4.5} display="block">
          Profilga kirish uchun tasdiqlash kodini kiriting!
          </Small>
                 <TextField 
                    name="otp_code" 
                    label="Tasdiqlash kodi" 
                    fullWidth 
                    onBlur={handleBlur} 
                    onChange={handleChange} 
                    value={values.otp_code || ''} 
                    error={!!touched.otp_code && !!errors.otp_code} 
                    helperText={touched.otp_code && errors.otp_code} />
        <BazarButton  variant="contained" color="primary" type="submit" fullWidth sx={{
        mb: "1.65rem",
        height: 44,
        mt: "1.65rem",
      }} disabled={!(dirty && isValid)}>
          Tasdiqlash
          {isLoading? <CircularProgress color="inherit" size={25} sx={{marginLeft: '15px'}}/>: undefined}
        </BazarButton>
        <Box mb={2}>
          <Box width="200px" mx="auto">
            <Divider />
          </Box>
          <FlexBox justifyContent="center" mt={-1.625}>
             <Box color="grey.600" bgcolor="background.paper" px={2}>
             </Box>
          </FlexBox>
        </Box>
      </form>}
      </React.Fragment>
};

const initialValues = {
  otp_code: '',
};
const formSchema = yup.object().shape({
  otp_code: yup.number().required("Tasdiqlash kodi kiritilishi shart!"),
});
export default OtpConfirm;