const useStyles = () => ({
  root: {
    '.MuiInputBase-root.MuiFilledInput-root': {
      '&:hover:not(.Mui-disabled):before': {
        borderBottom: 0,
      },
      borderRadius: '10px',
      '&:before': {
        borderBottom: 0,
      },
      '&:after': {
        borderBottom: 0,
      },
    },
    '.MuiFormLabel-root.MuiInputLabel-root': {
      fontFamily: 'Inter',
    },
  },
  fontColor: {
    color: '#FFFFFF',
  },

  switchStyle: {
    width: 42,
    height: 26,
    paddingLeft: '5px',
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: '1.5px',
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: (theme) => (theme.palette.mode === 'light' ? 0.7 : 0.3),
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: (theme) =>
        theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: (theme) =>
        theme.transitions.create(['background-color'], {
          duration: 500,
        }),
    },
  },
});

export default useStyles;
