import styled from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const ProjectWrapper = styled.div`
  display: flex;
  margin: 30px auto 60px;
  align-items: center;
  flex-direction: column;

  ${breakpointsMedia({
    md: `
      flex-direction:row;
    `,
  })}
`;

export const ProjectImage = styled.div`
  width: 100%;
  margin-bottom: 30px;

  ${breakpointsMedia({
    md: `
      width: 60%;
      margin-bottom: 0; 
    `,
  })}

  img {
    max-width: 100%;
  }
`;

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 60px;

  ${breakpointsMedia({
    md: `
      width: 40%;
      padding: 0 30px;
      margin-bottom: 0;
    `,
  })}
`;

ProjectDescription.Title = styled.h2`
  order: 1;

  a {
    display: flex;
    align-items: flex-end;
    line-height: 1;
    margin: 10px 0;
    font-size: 26px;
    text-decoration: none;
    color: #000;
    width: fit-content;

    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }

  img {
    margin-left: 10px;
  }
`;

ProjectDescription.Subtitle = styled.h3`
  order: 0;
  font-size: 14px;
  font-weight: 200;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;

ProjectDescription.Excerpt = styled.p`
  order: 3;
  margin-top: 30px;
`;
