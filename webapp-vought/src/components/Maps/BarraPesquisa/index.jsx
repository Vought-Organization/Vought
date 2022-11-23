import React, { useCallback } from 'react';

import {
  Box,
  Grid,
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
              <Grid
                container
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: {
                    sm: 'column-reverse',
                    md: 'row',
                    overflowY: 'auto',
                  },
                }}
              >
                <Grid item sm={12} md={10} alignContent="center">
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '5px 10px',
                      margin: '0 5px',
                    }}
                  >
                    <Typography variant="caption">{filter.evento}</Typography>
                    <Typography variant="caption">{filter.endereco}</Typography>
                    <Typography variant="caption">
                      {`Distância
          ${calculaDistancia(
            geo.lat,
            geo.lng,
            filter.coords[0].lat,
            filter.coords[0].lng
          )}`}
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  sm={12}
                  md={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: {
                      sm: 0,
                      md: '0 10px',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      borderRadius: '5px',
                      height: {
                        sm: '100px',
                        md: '50px',
                      },
                    }}
                  >
                    <img
                      src={`${
                        filter.image.substr(0, 15) === 'http'
                          ? filter.image
                          : `data:image/jpg;base64,${filter.image}`
                      }`}
                      alt="Jesus"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '5px',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
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
