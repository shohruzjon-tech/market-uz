import React, { useState } from 'react';
import { H1 } from '../Typography';
import { TextField } from '@mui/material';
import { Box, styled } from '@mui/system';
import BazarButton from 'components/BazarButton';
import { SearchOutlinedIcon } from 'components/search-box/SearchBox';
import { useRouter } from 'next/router';
const leftImg = '/assets/images/banners/banner000.png';
const rightImg = '/assets/images/banners/banner001.png';
const Container = styled(Box)(({
  theme
}) => ({
  width: '100%',
  height: 450,
  padding: 20,
  paddingTop: 160,
  backgroundColor: theme.palette.grey[100],
  backgroundImage: `url('${leftImg}'), url('${rightImg}')`,
  backgroundSize: '40%, 40%',
  backgroundPosition: 'left bottom, right bottom',
  backgroundRepeat: 'no-repeat, no-repeat',
  transition: 'all .3s',
  '& h1': {
    fontSize: 42,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 1.3
  },
  '& .searchBox': {
    margin: 'auto',
    maxWidth: '600px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: theme.shadows[2]
  },
  [theme.breakpoints.up('md')]: {
    backgroundSize: '450px, 450px'
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: 130,
    height: 550,
    '& h1': {
      fontSize: 38,
      textAlign: 'center'
    }
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: 100,
    height: 480,
    '& h1': {
      fontSize: 30
    },
    '& .searchBox': {
      margin: 0
    }
  }
}));

const GrocerySection1 = () => {
  const [searchValue, setValue] = useState();
  const router = useRouter();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!searchValue) return;
    router.push(`/product/search/${searchValue}`);
  }

  return <Container>
      <H1>
        Buyurtma qiling va 24 soat ichida 
        <br /> qabul qiling
      </H1>
      <Box className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField placeholder="Qidirilyapti..." value={searchValue} onChange={(event)=>setValue(event.target.value)} fullWidth InputProps={{
        sx: {
          height: 50,
          paddingRight: 0,
          color: 'grey.700',
          background: '#fff',
          '& fieldset': {
            border: 'none'
          }
        },
        endAdornment: <BazarButton type="submit" color="primary" variant="contained" disableElevation sx={{
          px: '2rem',
          height: '100%',
          borderRadius: '0 8px 8px 0'
        }}>
                Qidirish
              </BazarButton>,
        startAdornment: <SearchOutlinedIcon fontSize="small" />
      }} />
      </form>
      </Box>
    </Container>;
};

export default GrocerySection1;