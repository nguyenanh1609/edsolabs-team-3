import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

const NumberResultBorrow = styled.div`
  color: #d1d1d3;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.4rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;
export function NumberOfResult() {
  const amountResult = 10;
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <NumberResultBorrow>
        {amountResult} pawnshop packages match your search
      </NumberResultBorrow>
    </>
  );
}
