import FlexBox from 'components/FlexBox';
import CustomerDashboardLayout from 'components/layout/CustomerDashboardLayout';
import CustomerDashboardNavigation from 'components/layout/CustomerDashboardNavigation';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import TableRow from 'components/TableRow';
import { H3, H5, Small } from 'components/Typography';
import Person from '@mui/icons-material/Person';
import { Avatar, Button, Card, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { format } from 'date-fns';
import Link from 'next/link';
import React, { useEffect } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { getCurrentUserData } from '../../src/redux-actions/user-redux/user.selectors';
import { useRouter } from 'next/router';
import { auth } from 'services/firebase.app';



const Redirect = ({ to }) =>{
  const router = useRouter();
  useEffect(() =>{
    router.push(to);
  }, [to]);
  return null;
};
const Profile = () => {
  const user_data = useSelector(getCurrentUserData);
  const infoList = [{
    title: '00',
    subtitle: 'Barcha buyurtmalar'
  }, {
    title: '00',
    subtitle: 'Tulov qilinmaganlar'
  }, {
    title: '00',
    subtitle: 'Junatlishi kutilayotganlar'
  }, {
    title: '00',
    subtitle: 'Yetib kelishi kutilayotganlar'
  }];
  const user = auth?.currentUser?.uid;
  if(!user&&!user_data){
    return <Redirect to='/'/>
  };
  return <CustomerDashboardLayout>
      <DashboardPageHeader icon={Person} title="Mening profilim" button={<Link href="/profile/edit">
            <Button color="primary" sx={{
        px: '2rem',
        bgcolor: 'primary.light'
      }}>
              <SettingsIcon sx={{marginRight: '5px'}}/>  Sozlamalar
            </Button>
          </Link>} navigation={<CustomerDashboardNavigation />} />

      <Box mb={4}>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Card sx={{
            display: 'flex',
            p: '14px 32px',
            height: '100%',
            alignItems: 'center'
          }}>
              <Avatar src={user_data?.user_avatar} sx={{
              height: 64,
              width: 64
            }} />
              <Box ml={1.5} flex="1 1 0">
                <FlexBox flexWrap="wrap" justifyContent="space-between" alignItems="center">
                  <div>
                    <H5 my="0px">{user_data?.user_name} {' '} {user_data?.user_surname}</H5>
                    <FlexBox alignItems="center">
                      <Typography color="grey.600">Ballar:</Typography>
                      <Typography ml={0.5} color="primary.main">
                        {user_data?.user_balance}
                      </Typography>
                    </FlexBox>
                  </div>

                  <Typography color="grey.600" letterSpacing="0.2em">
                    {user_data?.user_status?.toUpperCase()}
                  </Typography>
                </FlexBox>
              </Box>
            </Card>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={4}>
              {infoList.map(item => <Grid item lg={3} sm={6} xs={6} key={item.subtitle}>
                  <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                p: '1rem 1.25rem'
              }}>
                    <H3 color="primary.main" my="0px" fontWeight="600">
                      {item.title}
                    </H3>
                    <Small color="grey.600" textAlign="center">
                      {item.subtitle}
                    </Small>
                  </Card>
                </Grid>)}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <TableRow sx={{
      p: '0.75rem 1.5rem'
    }}>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Ismi
          </Small>
          <span>{user_data?.user_name}</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Familiyasi
          </Small>
          <span>{user_data?.user_surname}</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Telefon raqami
          </Small>
          <span>{user_data?.user_contact}</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5}>
            tug'ilgan sanasi
          </Small>
          <span className="pre">
            {/* {format(new Date(user_data?.user_birth_date?.seconds*1000), 'dd MMM, yyyy')} */}
          </span>
        </FlexBox>
      </TableRow>
    </CustomerDashboardLayout>;
};

export default Profile;