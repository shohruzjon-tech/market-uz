import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import * as React from 'react';

const GlobalSpinner = () => (
  <Backdrop
    open
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  >
    <CircularProgress color="error" />
  </Backdrop>
);

export default GlobalSpinner;
