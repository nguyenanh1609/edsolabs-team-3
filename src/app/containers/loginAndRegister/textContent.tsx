import * as React from 'react';
import styled from 'styled-components';

const All = styled.div`
  padding-top: 1.9rem;
  padding-bottom: 2.4rem;
  @media (max-width: 376px) {
    padding-top: 2.1rem;
    padding-bottom: 0rem;
  }
`;

const Span = styled.span`
  color: #dba83d;
`;

const BigText = styled.div`
  font-size: 5.4rem;
  font-weight: 700;
  color: white;

  @media (max-width: 321px) {
    max-width: 80%;
    font-size: 2.9rem !important;
    line-height: 2.8rem !important;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 376px) {
    max-width: 30rem;
    line-height: 4.4rem !important;
    font-size: 3.6rem !important;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 426px) {
    width: 36rem;
    line-height: 4.5rem;
    font-size: 3.6rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 769px) {
    font-size: 4.5rem;
  } ;
`;

const SmallText = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: white;
  width: 70rem;

  @media (max-width: 376px) {
    font-size: 1.4rem !important;
    line-height: 1.7rem !important;
    width: 100%;
  }

  @media (max-width: 426px) {
    font-size: 1.8rem;
    line-height: 2rem;
    width: 100%;
  }

  @media (max-width: 769px) {
    width: 100%;
  } ;
`;

export default function textContent() {
  return (
    <All>
      <BigText>
        Exclusive on <Span>DeFi For You</Span>!!!
      </BigText>
      <SmallText>
        Register new DeFi For You account from <Span>01/08/2021</Span> to&nbsp;
        <Span>31/12/2021</Span> to have 100% chance of receiving DFY tokens
      </SmallText>
    </All>
  );
}
