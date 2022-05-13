import FlexBox from 'components/FlexBox';
import CustomerDashboardNavigation from 'components/layout/CustomerDashboardNavigation';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import TableRow from 'components/TableRow';
import { H5 } from 'components/Typography';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import { Pagination } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import OrderRow from './OrderRow'; // component props interface
import { useSelector, useDispatch } from 'react-redux';
import { getOrdersListStart } from '../../redux-actions/product-redux/product.actions';
import { getListOfOrderedProducts } from '../../redux-actions/product-redux/product.selectors';
import { getCurrentUserData } from '../../redux-actions/user-redux/user.selectors';

const CustomerOrderList = () => {
  const dispatch = useDispatch();
  const ordersList = useSelector(getListOfOrderedProducts);
  const user_data = useSelector(getCurrentUserData);

  const [page, setPage] = useState();
  const [endOffset, setEndOffset] = useState();
  const [itemOffset, setItemOffset] = useState(0);
  const handleChange = (event, value) => {
    const newOffset = (value * 10) % ordersList.length;
    setItemOffset(newOffset);
  };

  useEffect(()=>{
     dispatch(getOrdersListStart(user_data?.user_id));
     const endOffsett = itemOffset + 10;
     setEndOffset(endOffsett);
     setPage(Math.ceil(ordersList?.length / 10));
  }, [user_data, itemOffset]);
  return <Fragment>
      <DashboardPageHeader title="Mening buyurtmalarim" icon={ShoppingBag} navigation={<CustomerDashboardNavigation />} />

      <TableRow sx={{
      display: {
        xs: 'none',
        md: 'flex'
      },
      padding: '0px 18px',
      background: 'none'
    }} elevation={0}>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Buyurtma raqami #
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Holati
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Sotib olingan sana
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Umumiy qiymati
        </H5>
        <H5 flex="0 0 0 !important" color="grey.600" px={2.75} py={0.5} my={0}></H5>
      </TableRow>

      {ordersList?.slice(itemOffset, endOffset)?.map((item, ind) => <OrderRow item={item} key={ind} />)}

      <FlexBox justifyContent="center" mt={5}>
        <Pagination count={page}  onChange={handleChange} variant="outlined" color="primary" />
      </FlexBox>
    </Fragment>;
};

const orderList = [{
  orderNo: '1050017AS',
  status: 'Pending',
  purchaseDate: new Date(),
  price: 350,
  href: '/orders/5452423'
}, {
  orderNo: '1050017AS',
  status: 'Processing',
  purchaseDate: new Date(),
  price: 500,
  href: '/orders/5452423'
}, {
  orderNo: '1050017AS',
  status: 'Delivered',
  purchaseDate: '2020/12/23',
  price: 700,
  href: '/orders/5452423'
}, {
  orderNo: '1050017AS',
  status: 'Delivered',
  purchaseDate: '2020/12/23',
  price: 700,
  href: '/orders/5452423'
}, {
  orderNo: '1050017AS',
  status: 'Cancelled',
  purchaseDate: '2020/12/15',
  price: 300,
  href: '/orders/5452423'
}];
export default CustomerOrderList;