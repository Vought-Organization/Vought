import { useServices } from '../../apiService';

const { users } = useServices();

export const acessoUsuario = async () => {
  const response = await users.get('/login');
  return response;
};

export const cadastroUsuario = async (entrada) => {
  const response = await users.post('/', entrada);
  return response;
};
