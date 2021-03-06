import styled from 'styled-components';

export const Section = styled.section`
  &.section-even {
    background: #171a23 !important;
  }
  &:nth-child(even) {
    background: #232732;
  }
  &:nth-child(odd) {
    background: #171a23;
  }
`;
