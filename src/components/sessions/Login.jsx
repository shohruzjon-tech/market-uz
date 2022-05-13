import BazarButton from "components/BazarButton";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import FlexBox from "components/FlexBox";
import { H3, Small } from "components/Typography";
import { Box, Card, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import InputMask from 'react-input-mask';
import { TextField } from '@mui/material';
import { auth } from '../../services/firebase.app';
import OtpConfirm from "./auth.otp";
import { toast } from 'react-hot-toast';
import CircularProgress from '@mui/material/CircularProgress';

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

const Login = () => {
  const [isMessage, setMessage] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const recaptchaVery = () =>{
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response ) => {
      },
      'expired-callback': () => {
        recaptchaVery();
      }
    }, auth);
  }


  const handleFormSubmit = async values => {
    setLoading(true);
    const phoneNumber = values?.client_phoneNumber.replace('(','').replace(')','')
    .replace('-','').replace('-','').split(' ').join('');
    recaptchaVery();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      setMessage(true);
      setLoading(false);
    }).catch((error) => {
      toast.error(`Autentifikatsiya bosqichida hatolik yuz berdi. Iltimos raqamingizni tekshirib, qaytadan urinib kuring!`);
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
  const phoneRef = React.useRef('client_phoneNumber');



  return <div> <StyledCard elevation={3}>
      {isMessage? <OtpConfirm resetAuthForm={setMessage}/> : 
        <form className="content" onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={1}>
          UZSTORE | ONLINE BOZORGA XUSH KELIBSIZ
        </H3>
        <Small fontWeight="600" fontSize="12px" color="grey.800" textAlign="center" mb={4.5} display="block">
          Telefon raqam bilan profil ochish yoki profilga kirish
          </Small>
              <InputMask 
                      mask="+\9\9\8 (99) 999-99-99" 
                      maskChar=" "                
                      name="client_phoneNumber"               
                      inputRef={phoneRef}  
                      label="Telefon raqamingizni kiriting" 
                      fullWidth 
                      onBlur={handleBlur} 
                      onChange={handleChange} 
                      value={values.client_phoneNumber || ''} 
                      >
                      {(innerProps)=>(
                      <TextField 
                      {...innerProps}
                      error={!!touched.client_phoneNumber && !!errors.client_phoneNumber} 
                      helperText={touched.client_phoneNumber && errors.client_phoneNumber}/> 
                    )}
                  </InputMask>
        <BazarButton  variant="contained" color="primary" type="submit" fullWidth sx={{
        mb: "1.65rem",
        height: 44,
        mt: "1.65rem",
        padding:'14px 35px'
      }} disabled={!(dirty && isValid)}>
          PROFILGA KIRISH
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
    </StyledCard>
    <div id='recaptcha-container'></div>
    </div>
};

const initialValues = {
  client_phoneNumber: "",
};
const formSchema = yup.object().shape({
  client_phoneNumber: yup.string().required("Telefon raqami kiritilishi shart!"),
});
export default Login;