import React, { useCallback, useContext, useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import Grid from '@mui/material/Grid';
import {
  TextField,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  InputAdornment,
} from '@mui/material';
import useStyles from './styles';
import { Stack } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { validationSchema } from './validate';
import { acessoUsuario } from '../../Services/Usuario/acessoUsuario';
import { useAuth } from '../../Context/useAuth';

const initialValues = {
  userName: '',
  senha: '',
};

const Login = () => {
  const styles = useStyles();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { signed, user, loginUsuario, logoutUsuario } = useAuth();

  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down('sm'));

  const { data } = useQuery(['login'], () => acessoUsuario());

  useEffect(() => {
    let timer;
    if (errorMessage !== '') {
      timer = setTimeout(() => setErrorMessage(''), 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [errorMessage]);

  const handleSubmit = useCallback(
    (values) => {
      console.log(values.userName);
      console.log(data?.data);
      const userInfo = data?.data.filter(
        (item) => item.userName === values.userName
      );

      console.log(userInfo);
      if (!!userInfo.length) {
        loginUsuario(userInfo[0]);
        navigate('/');
      } else {
        setErrorMessage('userName ou senha inválido');
      }
    },
    [data, loginUsuario]
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ getFieldProps, handleSubmit: handleFormikSubmit, errors }) => (
        <Grid
          container
          spacing={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex="1"
        >
          {!media && (
            <Grid
              item
              md={6}
              sm={5}
              xs={12}
              sx={{ backgroundColor: '#3A0635' }}
              display="flex"
              justifyContent="center"
              margin="0 auto"
              flexDirection="colunm"
              minHeight="100%"
              flex="1"
            >
              <Stack
                spacing={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding={3}
              >
                <Typography
                  variant="h4"
                  sx={styles.fontColor}
                  fontWeight="bold"
                >
                  Você é novo por aqui?
                </Typography>
                <Typography sx={styles.fontColor}>
                  Se cadastre em nosso sistema pelo botão abaixo para começar a
                  usar nossos serviços!
                </Typography>
              </Stack>
            </Grid>
          )}
          <Grid
            item
            md={6}
            sm={7}
            xs={12}
            display="flex"
            justifyContent="center"
            margin="0 auto"
            flexDirection="colunm"
            minHeight="100%"
          >
            <Stack
              spacing={3}
              maxWidth={500}
              display="flex"
              justifyContent="center"
              flex={1}
              padding={3}
            >
              <form onSubmit={handleFormikSubmit}>
                <Stack spacing={3}>
                  <Typography
                    alignSelf="center"
                    variant="h2"
                    color="rgba(0, 0, 0, 0.44)"
                  >
                    Login
                  </Typography>
                  <Stack spacing={1}>
                    <TextField
                      {...getFieldProps('userName')}
                      sx={styles.root}
                      label="userName"
                      variant="filled"
                      fullWidth
                      helperText={errors.userName}
                      error={!!errors.userName}
                    />
                    <TextField
                      {...getFieldProps('senha')}
                      sx={styles.root}
                      label="Senha"
                      variant="filled"
                      fullWidth
                      helperText={errors.senha}
                      error={!!errors.senha}
                      type="password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">j</InputAdornment>
                        ),
                      }}
                    />
                    <div>{JSON.stringify(user)}</div>
                  </Stack>
                  {errorMessage !== '' && <div>{errorMessage}</div>}
                  <Stack spacing={1}>
                    <Button variant="contained" type="submit">
                      Entrar
                    </Button>
                    <Typography>Não tem uma conta?</Typography>
                    <Link>Crie sua conta aqui</Link>
                  </Stack>
                </Stack>
              </form>
            </Stack>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default Login;
