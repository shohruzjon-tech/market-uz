import FlexBox from 'components/FlexBox';
import DashboardLayout from 'components/layout/CustomerDashboardLayout';
import CustomerDashboardNavigation from 'components/layout/CustomerDashboardNavigation';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import TableRow from 'components/TableRow';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Place from '@mui/icons-material/Place';
import { Button, IconButton, Pagination, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserData, getUserAddressList } from '../../src/redux-actions/user-redux/user.selectors';
import { getuserAdressStart } from '../../src/redux-actions/user-redux/user.actions';
import { useRouter } from 'next/router';
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from 'react-hot-toast';
import { db } from 'services/firebase.app';
import { auth } from 'services/firebase.app';


const Redirect = ({ to }) =>{
  const router = useRouter();
  useEffect(() =>{
    router.push(to);
  }, [to]);
  return null;
};
const AddressList = () => {
  const [page, setPage] = useState(1);
  const [endOffset, setEndOffset] = useState();
  const [itemOffset, setItemOffset] = useState(0);
  const handleChange = (event, value) => {
    const newOffset = (value * 5) % user_adress.length;
    setItemOffset(newOffset);
  };
  const user_data = useSelector(getCurrentUserData);
  const user_adress = useSelector(getUserAddressList);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(()=>{
     dispatch(getuserAdressStart(user_data?.user_id));
  }, [])
  useEffect(() => {
    const endOffsett = itemOffset + 5;
    setEndOffset(endOffsett);
    setPage(Math.ceil(user_adress.length / 5));
  }, [itemOffset, user_adress]);

 const deletAdress = async (adress_id)=>{
    try {
      await deleteDoc(doc(db, `uzstore_users/${user_data?.user_id}/user_adresses`, `${adress_id}`));
      toast.success('Manzil uchirildi');
    } catch (error) {
      toast.error('Manzilni uchirishda hatolik yuz berdi. Iltimos qaytadan urinib kuring!');
      console.log(error);
    }
    dispatch(getuserAdressStart(user_data?.user_id));
 }

 const user = auth?.currentUser?.uid;
 if(!user){
   return <Redirect to='/'/>
 };
  return <DashboardLayout>
      <DashboardPageHeader title="Mening manzillarim" icon={Place} button={<Button onClick={()=>router.push('/address/add')} color="primary" sx={{
      bgcolor: 'primary.light',
      px: '2rem'
    }}>
            Yangi manzil qo'shish
          </Button>} navigation={<CustomerDashboardNavigation />} />
      {!user_adress?.length? <Typography textAlign="center">Sizda qushilgan manzillar yuq! Iltimos manzilingizni kiriting!</Typography>: undefined}
      {user_adress?.slice(itemOffset, endOffset)?.map((item) => <TableRow sx={{
      my: '1rem',
      padding: '6px 18px'
    }} key={item?.address_id}>
          <Typography whiteSpace="pre" m={0.75} textAlign="left">
            {user_data?.user_name}   {user_data?.user_surname}
          </Typography>
          <Typography flex="1 1 260px !important" m={0.75} textAlign="left">
            {item?.user_home_number}   {item?.user_street}, {item?.user_village}, {item?.user_city}, {item?.user_region}
          </Typography>
          <Typography whiteSpace="pre" m={0.75} textAlign="left">
            {user_data?.user_contact}
          </Typography>
          <Typography whiteSpace="pre" textAlign="center" color="grey.600">
            <Link href={`/address/${item?.address_id}`}>
              <IconButton>
                <Edit fontSize="small" color="inherit" />
              </IconButton>
            </Link>
            <IconButton onClick={()=>deletAdress(item?.address_id)}>
              <Delete fontSize="small" color="inherit" />
            </IconButton>
          </Typography>
        </TableRow>)}

      <FlexBox justifyContent="center" mt={5}>
        <Pagination count={page}  onChange={handleChange}/>
      </FlexBox>
    </DashboardLayout>;
};

const orderList = [{
  orderNo: '1050017AS',
  status: 'Pending',
  purchaseDate: new Date(),
  price: 350
}, {
  orderNo: '1050017AS',
  status: 'Processing',
  purchaseDate: new Date(),
  price: 500
}, {
  orderNo: '1050017AS',
  status: 'Delivered',
  purchaseDate: '2020/12/23',
  price: 700
}, {
  orderNo: '1050017AS',
  status: 'Delivered',
  purchaseDate: '2020/12/23',
  price: 700
}, {
  orderNo: '1050017AS',
  status: 'Cancelled',
  purchaseDate: '2020/12/15',
  price: 300
}];
export default AddressList;