import { Col } from 'reactstrap';
import styled from 'styled-components/macro';
export const Filter = styled(Col)`
  text-align: right;
  margin-top: 13px;
  @media (max-width: 1920px) {
    display: none;
  }
  @media (max-width: 1440px) {
    display: none;
  }
  @media (max-width: 1366px) {
    display: none;
  }
  @media (max-width: 1280px) {
    display: none;
  }
  @media (max-width: 1199px) {
    display: block;
  }
  @media (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 425px) {
    display: block;
  }
  @media (max-width: 375px) {
    display: block;
  }
  @media (max-width: 320px) {
    display: block;
  }
`;
