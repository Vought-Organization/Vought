import { useState, useCallback } from 'react';
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { useAuth } from '../../../Context/useAuth';
import { useNavigate } from 'react-router-dom';
import './style.css'

const NavBarDinamica = () => {
  const { signed, logoutUsuario } = useAuth();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = useCallback(() => {
    navigate('/');
    logoutUsuario();
  }, []);

  const settings = [
    {
      label: 'Profile',
      onClick: () => console.log('Não implementado'),
    },
    {
      label: 'Eventos',
      onClick: () => console.log('Não implementado'),
    },
    {
      label: 'Meus Ingressos',
      onClick: () => console.log('Não implementado'),
    },
    { label: 'Logout', onClick: () => handleLogout() },
  ];

  if (signed) {
    return (
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          sx={{
            color: (theme) => theme.palette.common.white,
            backgroundColor: '#3A0635',
          }}
          variant="text"
          onClick={() => navigate('../escolha-evento')}
        >
          Criar evento
        </Button>
        <Button
          sx={{
            color: (theme) => theme.palette.common.white,
            backgroundColor: '#3A0635',
          }}
          variant="text"
          onClick={() => navigate('../hot-site')}
        >
          Exportar dados
        </Button>
        <Box sx={{ flexGrow: 0 }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="" />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting, i) => (
              <MenuItem key={setting.toString()} onClick={handleCloseUserMenu}>
                <ButtonBase
                  variant="contained"
                  onClick={() => setting.onClick()}
                >
                  {setting.label}
                </ButtonBase>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box sx={{ maxWidth: 440, gap: 5, display: 'flex' }}>
        <Button className='botao--cadastro' variant="contained" sx={{backgroundColor: '#530a4c'}} onClick={() => navigate('/cadastro')}>
          Criar Conta
        </Button>
        <Button className='botao--cadastro' variant="contained" sx={{backgroundColor: '#530a4c'}} onClick={() => navigate('/login')}>
          Entrar
        </Button>
      </Box>
    );
  }
};

export default NavBarDinamica;
