import styled from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const Form = styled.form`
  width: 100%;

  ${breakpointsMedia({
    md: `
      width: 70%;
      margin: 0 auto
    `,
  })};

  label,
  input,
  textarea {
    width: 100%;
  }

  input,
  textarea {
    border: 1px solid;
    padding: 10px;
    border-radius: 0;
    font-size: 14px;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
  }

  label {
    font-size: 14px;
    font-weight: 200;
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }

  button {
    padding: 15px 30px;
    border: none;
    background: #000;
    color: #fff;
    font-weight: 200;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    cursor: pointer;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
`;

export const FormInline = styled.div`
  flex-direction: column;
  display: flex;

  ${breakpointsMedia({
    md: `
      column-count: 2;
      column-gap: 25px;
      justify-content: space-between;
      flex-direction: row;
    `,
  })};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${breakpointsMedia({
    md: `
      width: 50%;
      display: inline-flex;
    `,
  })};
`;
