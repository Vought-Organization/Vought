const useStyles = () => ({
  root: (filterPlaces) => ({
    position: 'absolute',
    top: 10,
    left: 6,
    padding: 2,
    backgroundColor: '#fff',
    zIndex: 1,
    height: `${filterPlaces.length > 5 ? 'calc(100% - 50px)' : {}}`,
    width: {
      md: '400px',
      xs: '250px',
    },
    borderRadius: '10px',
  }),
  card: {
    overflowY: 'auto',
    maxHeight: 'calc(100% - 100px)',
    marginTop: '20px',

    '&::-webkit-scrollbar': {
      width: '11px',
      scrollbarWidth: 'thin',
    },

    // '&::-webkit-scrollbar-track': {
    //   background: (theme) => theme.palette.background.default,
    // },

    '&::-webkit-scrollbar-thumb': {
      // backgroundColor: (theme) => theme.palette.grey[500],
      borderRadius: '6px',
      border: (theme) => `3px solid ${theme.palette.background.default}`,
    },
  },
});

export default useStyles;
