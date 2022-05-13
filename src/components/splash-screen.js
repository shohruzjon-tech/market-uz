import { Box } from '@mui/material';

const SplashScreen = () => (
  <Box
    sx={{
      alignItems: 'center',
      backgroundColor: 'neutral.900',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      left: 0,
      p: 3,
      position: 'fixed',
      top: 0,
      width: '100vw',
      zIndex: 2000
    }}
  >
    <img src='/assets/images/pageLoader.gif' alt='uzstore sahifa yuklovchisi' width={400} height={300}/>
  </Box>
);

export default SplashScreen;