import { useServices } from '../../apiService';

export const acessoUsuario = async () => {
  const { users } = useServices();

  const response = await users.get('/login');
  return response;
};
