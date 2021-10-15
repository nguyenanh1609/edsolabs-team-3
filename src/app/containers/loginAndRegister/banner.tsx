import * as React from 'react';
import styled from 'styled-components';
import Au_inOut from '../../../images/Au_inOut.png';

const WrapperImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  @media (min-width: 1920px) {
    width: 65.3rem;
    height: 59.7rem;
  }

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 769px) {
    margin-top: 3.2rem;
    margin-bottom: 2.4rem;
  }

  @media (width: 375px) {
    margin: 0px auto;
    margin-top: 3.2rem;
    margin-bottom: 2.4rem;
    width: 341px;
    height: 313px;
  }

  @media (max-width: 374px) {
    width: 100%;
    height: auto;
  }
`;

export default function Banner() {
  return (
    <WrapperImg>
      <Image src={Au_inOut}></Image>
    </WrapperImg>
  );
}
