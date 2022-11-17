import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  senha: Yup.string()
    .min(6, "Senha precisa ter no minímo 6 caracteres")
    .max(50, 'Máximo 50 caracteres')
    .required('Campo obrigatório'),
});
