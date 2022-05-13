import FlexBox from 'components/FlexBox';
import { Grid, Autocomplete } from '@mui/material';
import { H2, H5, H6 } from 'components/Typography';
import { toast } from 'react-hot-toast';
import { Rating } from '@mui/lab';
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import ProductComment from './ProductComment';
import { db } from '../../services/firebase.app';
import { collection, onSnapshot, doc, setDoc, query, where, getDocs } from "firebase/firestore";
import axios from 'axios';
import  { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();


const ProductReview = ({ productId }) => {
  const [client_ip, setClientIP] = useState(undefined);
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setClientIP(res?.data?.IPv4);
  }
  const [comments, setComments] = useState([]);
  const handleFormSubmit = async (values, {
    resetForm
  }) => {
    const commentQuery = query(collection(db, `uzstore_products/${productId}/product_comments`), 
    where("commenter_ip", "==", client_ip));
    const querySnapshot = await getDocs(commentQuery);
    if(querySnapshot.size===0){
      await setDoc(doc(db, 
        `uzstore_products/${productId}/product_comments`, 
        `${values?.comment_id}`),{...values, commenter_ip: client_ip});
        toast.success('Izohingiz qabul qilindi')
        resetForm();
    }else if(querySnapshot.size>=1){
        toast.error('Har bir mahsulot uchun faqat birmarta izoh qoldirishingiz mumkin!')
        resetForm();
        return;
    }
  };

  const {
    values,
    errors,
    touched,
    dirty,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = useFormik({
    initialValues: initialValues,
    validationSchema: reviewSchema,
    onSubmit: handleFormSubmit
  });

  useEffect(()=>{
    getData();
     const unsubscribe = onSnapshot(
       collection(db, `uzstore_products/${productId}/product_comments`), 
       (snapshot) => {
           const commentsList = []; 
           snapshot.forEach((item)=>{
             const data = item.data();
             commentsList.push(data);
           });
           setComments( commentsList);
       });
  return ()=>{
    unsubscribe();
  }
  }, [db]);

  return <Box sx={{padding: '0 20px'}}>
       {
         comments.length===0? 
         <FlexBox mb={1.5}>
         <H6 color="grey.500" mr={0.75} >
            Ushbu mahsulotga hali izoh qoldirilmadi. Birinchi bulishingiz mumkin
         </H6>
       </FlexBox>: undefined
       }
      {comments.sort((a, b)=>a?.comment_id-b?.comment_id).map((item) => <ProductComment {...item} key={item?.comment_id} />)}

      <H2 fontWeight="600" mt={7} mb={2.5}>
        Fikringiz biz uchun muhim
      </H2>
       {console.log(errors)}
      <form onSubmit={handleSubmit}>
        <Box mb={2.5}>
          <FlexBox mb={1.5}>
            <H5 color="grey.700" mr={0.75}>
               Bahoyingiz
            </H5>
            <H5 color="error.main">*</H5>
          </FlexBox>

          <Rating color="warn" size="medium" value={values.comment_marked || 0} onChange={(_, value) => setFieldValue('comment_marked', value)} />
        </Box>

        <Box mb={3}>
          <FlexBox mb={1.5}>
            <H5 color="grey.700" mr={0.75}>
              Izoh
            </H5>
            <H5 color="error.main">*</H5>
          </FlexBox>
          <TextField name="comment_content" placeholder="izohingizni shuyerga yozing..." variant="outlined" multiline fullWidth rows={8} onBlur={handleBlur} onChange={handleChange} value={values.comment_content || ''} error={!!touched.comment_content && !!errors.comment_content} helperText={touched.comment_content && errors.comment_content} />
        </Box>
        <Box mb={3}>
           <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField 
              name="comment_left_by" 
              label="Izoh qoldiruvchi ismi" 
              fullWidth 
              onBlur={handleBlur} 
              onChange={handleChange} 
              value={values.comment_left_by || ''} 
              error={!!touched.comment_left_by && !!errors.comment_left_by} 
              helperText={touched.comment_left_by && errors.comment_left_by} />
            </Grid>
            <Grid item md={6} xs={12}>
            <Autocomplete 
              filterOptions={(options, params) => {
                const filtered = filter(options, params);
      
                if (params.inputValue !== '') {
                  filtered.push({
                    inputValue: params.inputValue,
                    sex: 'Topilmadi...',
                  });
                }
      
                return filtered;
              }}
            options={[{sex: 'Erkak', id:1}, {sex: 'Ayol', id:2}]} getOptionLabel={option => option.sex || ''} value={values.commenter_gender} sx={{
              mb: '1rem'
              }} fullWidth onChange={(_e, value) => setFieldValue('commenter_gender', value?.id)} renderInput={params => <TextField label="Izoh qoldiruvchi kim" placeholder="Izoh qoldiruvchi..." variant="outlined" // size ="large"
              error={!!touched.commenter_gender && !!errors.commenter_gender} helperText={touched.commenter_gender && errors.commenter_gender} {...params} />} />
            </Grid>
           </Grid>
        </Box>
        <Button variant="contained" color="primary" type="submit" disabled={!(dirty && isValid)}>
          Kiritish
        </Button>
      </form>
    </Box>;
};

const initialValues = {
  comment_marked: 0,
  comment_content: '',
  comment_created_at: new Date().toISOString(),
  comment_id: Date.now(),
  comment_left_by: '',
  comment_avatar: 'https://firebasestorage.googleapis.com/v0/b/uzstore.appspot.com/o/images%2Fadmin%2F1.png?alt=media&token=a35388ee-323d-4140-a50f-d5e0944ce638',
  commenter_avatar: null,
  commenter_gender: undefined,
};
const reviewSchema = yup.object().shape({
  comment_marked: yup.number().required('Siz mahsulotni baholamadingiz'),
  comment_content: yup.string().min(10, 'Izoh juda ham qisqa. Iltimos qaytadan kurib chiqing!').required('Izoh kiritilishi shart'),
  comment_left_by: yup.string().required('Izoh qoldiruvchi ismi kiritilishi shart!'),
  commenter_gender: yup.number().required('Izoh qoldiruvchi jinsi kirtilishi shart!')
});
export default ProductReview;