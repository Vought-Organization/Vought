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
});

export default useStyles;
