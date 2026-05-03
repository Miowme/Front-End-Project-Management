import { Stack } from '@mui/material';

const AuthLayout = ({children}) => {
  return (
    <Stack
      flexdirection={'column'}
      alignitems={'center'}
      justifycontent={'center'}
      height={'100vh'}
      width={'100%'}
    >
        {children}
    </Stack>
  );
};

export default AuthLayout;
