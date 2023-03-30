import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  nome: Yup.string().required('Nome obrigatório'),
  email: Yup.string().email('Email inválido').required('Email obrigatório'),
  cpf: Yup.string().min(11, 'Cpf inválido').required('CPF obrigatório'),
  senha: Yup.string()
    .max(50, 'Máximo 50 caracteres')
    .required('Senha obrigatória'),
  confirmarSenha: Yup.string()
    .required('Confirma senha Obrigatório')
    .oneOf([Yup.ref('senha')], 'As senhas devem ser iguais.'),
  telefone: Yup.string().required('Telefone obrigatório'),
  cep: Yup.string().required('CEP obrigatório'),
});
