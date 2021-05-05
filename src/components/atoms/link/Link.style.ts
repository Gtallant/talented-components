import styled from 'styled-components';

export const a = styled.a`
  font: normal normal normal 14px/28px Montserrat;
  letter-spacing: -0.22px;
  color: #272635;

  &:hover, &:focus {
    font-weight: bold;
    letter-spacing: -.6px;
  }
`;

export const span = styled.span`
  display: inline-block;
  height: 0;
  width: 0;
  overflow: hidden;
`;
