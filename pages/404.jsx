import BazarImage from 'components/BazarImage';
import FlexBox from 'components/FlexBox';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Error404 = () => {
  const router = useRouter();

  const handleGoBack = async () => {
    router.back();
  };

  return <FlexBox flexDirection="column" height="90vh" justifyContent="center" alignItems="center" px={2}>
       <FlexBox mb={2} flexDirection="column">
           <Typography variant="h6" component="h2" align='center'
            sx={{fontWeight: 'bold', fontSize: '28px'}}
           >
               Qidirilayotgan sahifa topilmadi. 
          </Typography>
           <Typography variant="p" component="p" align='justify' mt={2}>
            Notug'ri havola orqali tashrif buyurdingiz yoki  sahifa uchirilgan bulishi mumkin
          </Typography>
       </FlexBox>
      <BazarImage src="/assets/images/illustrations/404.svg" sx={{
      display: 'block',
      maxWidth: '320px',
      width: '100%',
      mb: '1.5rem'
    }} />
      <FlexBox flexWrap="wrap">
        <Button variant="outlined" color="primary" sx={{
        m: '0.5rem'
      }} onClick={handleGoBack}>
          Ortga Qaytish
        </Button>
        <Link href="/">
          <Button variant="contained" color="primary" sx={{
          m: '0.5rem'
        }}>
            Bosh sahifaga o'tish
          </Button>
        </Link>
      </FlexBox>
    </FlexBox>;
};

export default Error404;