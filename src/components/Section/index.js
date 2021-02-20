import styled from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const SectionWrapper = styled.div`
  border-left: 1px solid;
  padding: 0 30px;

  ${breakpointsMedia({
    md: `
      padding-left: 60px;
      margin: 100px 0;
    `,
  })};
`;

export const SectionTitle = styled.div`
  transform: rotate(-90deg);
  position: absolute;
  background: #fff;
  margin-left: -80px;
  margin-top: 40px;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 200;
  letter-spacing: 0.25em;
  text-transform: uppercase;

  ${breakpointsMedia({
    md: `
      margin-left: -110px;
    `,
  })}
`;
