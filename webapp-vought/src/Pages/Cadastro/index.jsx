import React from 'react';

import Grid from '@mui/material/Grid';
import {
  TextField,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import useStyles from './styles';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { useCallback } from 'react';
import { validationSchema } from './validate';

const Cadastro = () => {
  const styles = useStyles();

  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down('sm'));

  const initialValues = {
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    confirmarSenha: '',
  };

  const handleSubmit = useCallback((values) => {}, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({
        getFieldProps,
        handleSubmit: handleFormikSubmit,
        errors,
      }) => (
        <Grid
          container
          spacing={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex="1"
        >
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
              <Typography
                alignSelf="center"
                variant="h2"
                color="rgba(0, 0, 0, 0.44)"
              >
                Cadastro
              </Typography>
              <form onSubmit={handleFormikSubmit} style={{ gap: 25 }}>
                <Stack spacing={1}>
                  <TextField
                    sx={styles.root}
                    label="Nome"
                    variant="filled"
                    fullWidth
                    {...getFieldProps('nome')}
                    helperText={errors.nome}
                    error={!!errors.nome}
                  />
                  <TextField
                    sx={styles.root}
                    label="Email"
                    variant="filled"
                    fullWidth
                    {...getFieldProps('email')}
                    helperText={errors.email}
                    error={!!errors.email}
                  />
                  <TextField
                    sx={styles.root}
                    label="CPF"
                    variant="filled"
                    fullWidth
                    {...getFieldProps('cpf')}
                    helperText={errors.cpf}
                    error={!!errors.cpf}
                  />
                  <TextField
                    sx={styles.root}
                    label="Senha"
                    variant="filled"
                    fullWidth
                    {...getFieldProps('senha')}
                    helperText={errors.senha}
                    error={!!errors.senha}
                  />
                  <TextField
                    sx={styles.root}
                    label="Confirmar senha"
                    variant="filled"
                    fullWidth
                    {...getFieldProps('confirmarSenha')}
                    helperText={errors.confirmarSenha}
                    error={!!errors.confirmarSenha}
                  />
                </Stack>
                <Stack spacing={1}>
                  <Button type="submit" variant="contained">
                    Entrar
                  </Button>
                  <Typography>Não tem uma conta?</Typography>
                  <Link>Crie sua conta aqui</Link>
                </Stack>
              </form>
            </Stack>
          </Grid>
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
        </Grid>
      )}
    </Formik>
  );
};

export default Cadastro;
