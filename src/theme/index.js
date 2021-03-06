import { css } from 'styled-components';

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

const typographyVariants = {
  fontWeight: {
    light: css`
      text-transform: uppercase;
      font-weight: 200;
      letter-spacing: 0.25em;
    `,
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
