import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  nome: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  cpf: Yup.string().min(11, 'Cpf inválido').required('Campo obrigatório'),
  senha: Yup.string()
    .max(50, 'Máximo 50 caracteres')
    .required('Campo obrigatório'),
  confirmarSenha: Yup.string()
    .required('Campo Obrigatório')
    .oneOf([Yup.ref('senha')], 'As senhas devem ser iguais.'),
});
