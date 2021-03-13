import styled from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
// import { theme } from '../../theme';

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
    ${(props) => props.theme.typographyVariants['fontWeight'][props.fontWeight]}
  }
`;

TitleWrapper.Links = styled.nav`
  list-style: none;
  display: inline-flex;

  li {
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }

  a {
    background: #000;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
  }

  img {
    max-height: 20px;
    max-width: 20px;
    /* margin-left: 5px; */
  }
`;

export const Bio = styled.p`
  font-size: 18px;
  margin: 30px auto 0;
  text-align: center;

  ${(props) => props.theme.typographyVariants.fontWeight.light}

  ${breakpointsMedia({
    md: `
      margin: auto 0 auto 10%;
      text-align: left;
    `,
  })}
`;
