import styled from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  ${breakpointsMedia({
    sm: `
    max-width: 540px;
    `,
    md: `
    max-width: 720px;
    `,
    lg: `
    max-width: 960px;
    `,
    xl: `
    max-width: 1140px;
    `,
  })}
`;
