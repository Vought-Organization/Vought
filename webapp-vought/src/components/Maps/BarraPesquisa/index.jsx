import React, { useCallback } from 'react';

import {
  Box,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { calculaDistancia } from '../../../Utils/calculaDistancia';
import { debounce } from '../../../Utils/debounce';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles';

const BarraPesquisa = ({
  setFiltro,
  setEventZoom,
  setValue,
  filterPlaces,
  geo,
}) => {
  const styles = useStyles();

  const handleChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleClickEvent = useCallback(
    (evento) => {
      setEventZoom(14);

      setValue({
        lat: evento.coords[0].lat,
        lng: evento.coords[0].lng,
      });
    },
    [setValue, setEventZoom]
  );

  const handleFilter = useCallback(debounce(handleChange), []);

  return (
    <Box sx={styles.root(filterPlaces)}>
      <TextField
        sx={{ background: 'white' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={styles.icon}>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="filled"
        hiddenLabel
        fullWidth
        onChange={handleFilter}
      />
      <Box sx={styles.card}>
        {filterPlaces.length ? (
          filterPlaces?.map((filter) => (
            <Paper
              elevation={2}
              sx={{ margin: '10px 2px' }}
              onClick={() => handleClickEvent(filter)}
            >
              <Box
                sx={{
                  gap: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '5px 10px',
                  margin: '0 5px',
                }}
              >
                <Box>{filter.evento}</Box>
                <Box>{filter.endereco}</Box>
                <Typography>
                  {`Distância
          ${calculaDistancia(
            geo.lat,
            geo.lng,
            filter.coords[0].lat,
            filter.coords[0].lng
          )}`}
                </Typography>
              </Box>
              <Box height={30}>
                <img
                  src={`data:image/png;base64,${filter.image}`}
                  alt="Jesus"
                  st={{ height: '100%' }}
                />
              </Box>
            </Paper>
          ))
        ) : (
          <div>Nenhum evento encontrado</div>
        )}
      </Box>
    </Box>
  );
};

export default BarraPesquisa;
