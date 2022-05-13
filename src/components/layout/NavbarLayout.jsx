import { Container } from '@mui/material';
import React from 'react';
import AppLayout from './AppLayout';


const NavbarLayout = ({
  children,
  pad,
  mar
}) => {
  return <AppLayout>
      <Container sx={pad? style1 : mar? style3 : style2}>{children}</Container>
    </AppLayout>;
};

const style1={
  my: '2rem',
  p: 0
};

const style2={
  my: '2rem'
}

const style3={
  my: 0,
  p: 0,
}

export default NavbarLayout;