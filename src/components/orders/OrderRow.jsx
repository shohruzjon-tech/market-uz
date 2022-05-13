import TableRow from 'components/TableRow';
import { H5 } from 'components/Typography';
import East from '@mui/icons-material/East';
import { Chip, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react'; // component props interface

const OrderRow = ({
  item
}) => {
  const getColor = status => {
    switch (status) {
      case 1:
        return 'secondary';

      case 2:
        return 'secondary';

      case 3:
        return 'success';

      case 4:
        return 'error';

      default:
        return '';
    }
  };

  const total_price=item?.ordered_product?.filter((pro)=>item?.ordered_product_id!==pro?.product_id)?.reduce((a, b)=>{
     return a + b?.product_price;
  }, 0);

  const main_order = item?.ordered_product?.filter((pro)=>item?.ordered_product_id===pro?.product_id)[0];

  return <Link href={`/orders/${item?.order_id}`}>
      <a>
        <TableRow sx={{
        my: '1rem',
        padding: '6px 18px'
      }}>
          <H5 m={0.75} textAlign="left">
            {item?.order_id}
          </H5>
          <Box m={0.75}>
            <Chip size="small" label={item?.order_status?.status_name} sx={{
            p: '0.25rem 0.5rem',
            fontSize: 12,
            color: !!getColor(item.status) ? `${getColor(item.status)}.900` : 'inherit',
            backgroundColor: !!getColor(item?.order_status?.status_id) ? `${getColor(item?.order_status?.status_id)}.100` : 'none'
          }} />
          </Box>
          <Typography className="pre" m={0.75} textAlign="left">
            {item?.order_created_date}
          </Typography>
          <Typography m={0.75} textAlign="left">
            {(total_price+(main_order?.product_price*item?.order_quantity))?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} so'm
          </Typography>
          <Typography textAlign="center" color="grey.600" sx={{
          flex: '0 0 0 !important',
          display: {
            xs: 'none',
            md: 'block'
          }
        }}>
            <IconButton>
              <East fontSize="small" color="inherit" />
            </IconButton>
          </Typography>
        </TableRow>
      </a>
    </Link>;
};

export default OrderRow;