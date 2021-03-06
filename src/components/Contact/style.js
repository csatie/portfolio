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

export const Label = styled.label`
  font-size: 14px;
  ${(props) => props.theme.typographyVariants['fontWeight'][props.fontWeight]}
`;

export const Button = styled.label`
  font-size: 14px;
  padding: 15px 30px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  ${(props) => props.theme.typographyVariants['fontWeight'][props.fontWeight]}
`;
