import { typographyVariants } from './typographyVariants';

const lightTheme = {
  background: {
    main: {
      color: '#FFF',
    },
  },
  borders: {
    main: {
      color: '#000',
    },
  },
  primary: {
    main: {
      color: '#000',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FFF',
      contrastText: '#000',
    },
  },
};

const darkTheme = {
  background: {
    main: {
      color: '#000',
    },
  },
  borders: {
    main: {
      color: '#FFF',
    },
  },
  primary: {
    main: {
      color: '#FFF',
      contrastText: '#000',
    },
  },
  secondary: {
    main: {
      color: '#000',
      contrastText: '#FFF',
    },
  },
};

export default {
  lightTheme,
  darkTheme,
  typographyVariants,
  breakpoints: {
    xs: 0, // extra small
    sm: 480, // small
    md: 768, // medium
    lg: 992, // large
    xl: 1200, // extra large
  },
};
