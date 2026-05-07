import { Button, Paper, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import AuthLayout from '@/components/layouts/AuthLayout';
import TextField from '@/components/ui/Forms/Textfield';
import session from '@/utils/session';
import services from '@/services';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = Yup.object({
  email: Yup.string()
    .required('Email harus di isi')
    .email('Format email tidak valid'),
  password: Yup.string().required('Password harus di isi'),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await services.auth.login(data);
      session.setSession(response.data.data);
      navigate('/');
    } catch (error) {
      console.error('login gagal', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Stack
        flexdirection={'column'}
        alignttems={'center'}
        justifycontent={'center'}
        height={'100vh'}
        width={'100%'}
      >
        <Paper
          sx={{
            padding: 2,
            width: 500,
          }}
        >
          <Typography
            variant="h5"
            component={'h1'}
            align="center"
            marginbottom={2}
          >
            Masuk
          </Typography>
          <Stack
            flexdirection={'column'}
            gap={1}
            component={'form'}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              id={'email'}
              label={'Email'}
              control={control}
              name="email"
            />
            <TextField
              id={'password'}
              label={'Password'}
              control={control}
              name="password"
              secureText
            />
            <Button
              type="submit"
              variant="contained"
              loading={loading}
              fullWidth
            >
              Masuk ke akun Anda
            </Button>

            <Button
              onClick={() => navigate('/signup')}
              type="button"
              variant="text"
              fullWidth
            >
              Daftar baru
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </AuthLayout>
  );
};

export default Login;
