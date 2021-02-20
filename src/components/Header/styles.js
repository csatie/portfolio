import styled from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 60px auto;
  flex-direction: column;

  ${breakpointsMedia({
    md: `
      flex-direction:row;
      margin-bottom: 100px;
    `,
  })}
`;

export const TitleWrapper = styled.div`
  max-width: 290px;
`;

TitleWrapper.Position = styled.h1`
  font-size: 50px;
  text-transform: uppercase;
  line-height: 93%;
  font-weight: 900;
`;

TitleWrapper.Name = styled.div`
  border-top: 1px solid;
  margin-top: 10px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: top;

  h2 {
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }
`;

TitleWrapper.Links = styled.nav`
  list-style: none;

  li {
    display: inline-flex;
  }

  img {
    max-height: 30px;
    margin-left: 5px;
  }
`;

export const Bio = styled.p`
  font-size: 18px;
  font-weight: 200;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin: 30px auto 0;
  text-align: center;

  ${breakpointsMedia({
    md: `
      margin: auto 0 auto 10%;
      text-align: left;
    `,
  })};
`;
