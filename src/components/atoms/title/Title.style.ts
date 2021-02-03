import styled from 'styled-components';

const styles = `
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  &.HEADING_1 {
    font: 48px Staatliches;
    letter-spacing: 0px;
    color: #272635;
  }
  &.HEADING_2 {
    font: 24px Staatliches;
    letter-spacing: 0px;
    color: #272635;
  }
  &.HEADING_3 {
    font: 18px Montserrat;
    letter-spacing: -0.29px;
    color: #272635;
  }
  &.HEADING_4 {
    font: 14px Montserrat;
    font-weight: bold;
    letter-spacing: -0.22px;
    color: #272635;
  }
  &.HEADING_5 {
    font: 14px Montserrat;
    font-weight: 300;
    letter-spacing: -0.22px;
    color: #272635;
    text-transform: uppercase;
  }
  &.HEADING_6 {
    font: 14px Montserrat;
    letter-spacing: -0.22px;
    color: #272635;
  }
`;

export const HEADING_1 = styled.h1`${styles}`;
export const HEADING_2 = styled.h2`${styles}`;
export const HEADING_3 = styled.h3`${styles}`;
export const HEADING_4 = styled.h4`${styles}`;
export const HEADING_5 = styled.h5`${styles}`;
export const HEADING_6 = styled.h6`${styles}`;
