import { Button, Grid, TextField, Autocomplete } from '@mui/material';
import { collection, query, where, getDocs } from "firebase/firestore";
import { toast } from 'react-hot-toast';
import { db } from '../../services/firebase.app';
import { Box } from '@mui/system';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import DashboardLayout from '../layout/CustomerDashboardLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getCitiesListStart } from '../../redux-actions/product-redux/product.actions';
import axios from 'axios';
import { useRouter } from 'next/router';
import InputMask from 'react-input-mask';
import { getCurrentUserData } from 'redux-actions/user-redux/user.selectors';
import { setProductOrder } from 'services/firebase.utils';
import CircularProgress from '@mui/material/CircularProgress';


const OrderFormComponent = ({product}) => {
  const getMonthUz = (delta)=>{
    switch (delta) {
      case  1:
      return  'Yanvar';  
      case  2:
      return  'Fevral';  
      case  3:
      return 'Mart';   
      case  4:
      return 'May';   
      case  5:
      return  'April'; 
      case  6:
      return  'Iyyun';  
      case  7:
      return  'Iyyul';  
      case  8:
      return  'Avgust';  
      case  9:
      return  'Sentyabir';  
      case  10:
      return   'Oktyabir';
      case  11:
      return  'Noyabir';
      case  12:
      return  'Dekabir';  
      default:
        return '';
    };
  };
  const user_data = useSelector(getCurrentUserData);
  const [isLoading, setLoading] = React.useState(false);
  const [client_ip, setClientIP] = useState({client_ip: undefined});
  const router = useRouter();
  // handle form submit
  const date = new Date();
  // const timeNow = date.getFullYear()+'/'+`${date.getMonth()+1}`+'/'+date.getDate()+' '+date.getHours()+':'+date.getMinutes();
  const dateNow = date.getFullYear()+'/'+`${date.getMonth()+1}`+'/'+date.getDate();
  const currentMonth = getMonthUz(date.getMonth()+1);
  const delivery = (date.getDate()+1)+' - '+currentMonth;
  const handleFormSubmit = async (values, {
    resetForm
  }) => {
    setLoading(true);
    const querySnap = query(collection(db, "uzstore_pending_orders"), where("client_ip", "==", `${client_ip.client_ip}`),
    where('ordered_product_id', "==", product?.product_id),
    where('order_created_date', "==", dateNow)
    );
    const orderList = await getDocs(querySnap);
    const phoneNumberRealValue = values.client_phoneNumber.replace('(','').replace(')','').replace('-','').replace('-','').split(' ').join('');
    if(orderList.size<=3){
      setProductOrder({
      client_name: values.client_name,
      city_id: parseInt(values.city_id, 10),
      client_phoneNumber: phoneNumberRealValue,
      order_quantity: parseInt(values.order_quantity, 10),
      ...client_ip,
      order_referal_number: parseInt(router.query?.oqim, 10),
      ordered_product: [product],
      order_id: values.order_id,
      order_created_at: new Date(),
      order_created_date: dateNow,
      ordered_product_id: product.product_id,
      status_id: 1,
      order_sent_at: 'Jarayonda',
      estimated_delivery: delivery,
      client_id: user_data? user_data?.user_id : '',
    }).then(()=>{
      setLoading(false);
      router.push(`/success/order?id=${values.order_id}`);
    });
    resetForm();
    }else if(orderList.size>3){
      toast.error('Hurmatli mijoz, siz ushbu mahsulotni buyurtma qilib buldingiz. Iltimos bizning javobimizni kuting!');
      resetForm();
      setLoading(false)
    }
  };

  const dispatch = useDispatch();
  const citiesList = useSelector((state)=>{return state.products.cities_list});
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setClientIP({client_ip: res.data.IPv4});
  }

  useEffect(() => {
    dispatch(getCitiesListStart());
    getData();
  }, [])
  const phoneRef = React.useRef('client_phoneNumber');
  return <div>
        <Formik initialValues={initialValues} validationSchema={orederFormSchema} onSubmit={handleFormSubmit}>
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
                    <TextField 
                    name="client_name" 
                    label="Ismingiz" 
                    fullWidth 
                    onBlur={handleBlur} 
                    onChange={handleChange} 
                    value={values.client_name || ''} 
                    error={!!touched.client_name && !!errors.client_name} 
                    helperText={touched.client_name && errors.client_name} 
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                  <InputMask 
                      mask="+\9\9\8 (99) 999-99-99" 
                      maskChar=" "                
                      name="client_phoneNumber"               
                      label="Telefon" 
                      fullWidth 
                      onBlur={handleBlur} 
                      onChange={handleChange} 
                      value={values.client_phoneNumber || ''} 
                      >
                      {(innerProps)=>(
                      <TextField 
                      inputRef={phoneRef}  
                      {...innerProps}
                      error={!!touched.client_phoneNumber && !!errors.client_phoneNumber} 
                      helperText={touched.client_phoneNumber && errors.client_phoneNumber}/> 
                    )}
                  </InputMask>
                  </Grid>
                  <Grid item md={6} xs={12}>
                      <select 
                       className="form_select" 
                       id='cities_select'
                       onBlur={handleBlur} 
                       onChange={(e)=>setFieldValue('city_id',e.target.value)} 
                       name='city_id'
                       style={{
                         border: touched?.city_id&&errors?.city_id? '1px solid red': '1px solid #ddd'
                       }}
                       >
                           <option selected disabled>Viloyatingz</option>
                           {
                             citiesList?.map((item)=><option key={item?.city_id} value={item?.city_id} className='select_option'>{item?.city_name}</option>)
                           }
                      </select>                      
                      <span className="select_error">{touched?.city_id? errors?.city_id : undefined}</span>
                  </Grid>
                  <Grid item md={6} xs={12}>
                      <select 
                       className="form_select" 
                       id='quantity_select'
                       onBlur={handleBlur} 
                       onChange={(e)=>{setFieldValue('order_quantity',e.target.value); console.log(errors);}} 
                       name='order_quantity' 
                       style={{
                        border: touched?.order_quantity&&errors?.order_quantity? '1px solid red': '1px solid #ddd'
                      }}
                       >
                           <option selected disabled>Buyurtma soni</option>
                           {
                             [1,2,3,4,5,6,7,8].map((item)=><option key={item} value={item} className='select_option'>{item} dona</option>)
                           }
                      </select>
                      <span className="select_error">{touched?.order_quantity? errors?.order_quantity : undefined}</span>
                  </Grid>
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary" sx={{padding:'14px 35px'}}>
                BUYURTMA QILISH
                {isLoading? <CircularProgress color="inherit" size={25} sx={{marginLeft: '15px'}}/>: undefined}
              </Button>
            </form>}
        </Formik>
    </div>;
};

const initialValues = {
  client_name: '',
  city_id: undefined,
  client_phoneNumber: '',
  order_quantity: undefined,
  order_id: Date.now(),
};
const orederFormSchema = yup.object().shape({
  client_name: yup.string().required('Iltimos ismingizni kiriting'),
  city_id: yup.number().required('Iltimos manzilingizni kiriting'),
  client_phoneNumber: yup.string().min(16, 'Iltimos telefon raqamingizni tuliq kiriting').required('Iltimos telefon raqamingizni kiriting'),
  order_quantity: yup.number('Iltimos buyurtma sonini kiriting').required('Iltimos buyurtma sonini kiriting'),
});
OrderFormComponent.layout = DashboardLayout;
export default OrderFormComponent;