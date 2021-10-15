import React, { useState } from 'react';
import { AdsHome } from 'app/containers/adsHome';
import { FeatureList } from 'app/containers/featureList';
import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import { Silder } from 'app/containers/silders';
import { TabsHome } from 'app/containers/tabsHome';
import { Helmet } from 'react-helmet-async';
import { Container } from 'reactstrap';
import { Section } from './style';
import TermsOfService from '../../components/termsOfService/index';
// import { useState, useEffect } from 'react';
export function PageHome() {
  document.title = 'home';
  // const [state, setstate] = useState(window.innerWidth);
  // const a = () => {
  //   setstate(window.innerWidth);
  // };
  // window.addEventListener('resize', a);
  // console.log(state);
  const [modal, setModal] = useState(false);
  if (
    localStorage.hasOwnProperty('access_token') &&
    !localStorage.hasOwnProperty('terms-and-conditions')
  ) {
    setTimeout(() => {
      setModal(true);
    }, 3000);
  }
  const toggle = () => {
    localStorage.setItem('terms-and-conditions', '1');
    setModal(!modal);
  };

  return (
    <>
      <TermsOfService isOpen={modal} handleAccept={toggle} />
      <Helmet>
        <title>DeFi For You | DeFi For You UK</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/*navbar*/}
      <Navbar></Navbar>
      {/*tabshome*/}
      <TabsHome></TabsHome>
      {/*featurelist*/}
      <FeatureList></FeatureList>
      <Section>
        {/*silders*/}
        <Container>
          <Silder></Silder>
        </Container>
      </Section>
      <Section>
        {/*adsHome*/}
        <Container>
          <AdsHome></AdsHome>
        </Container>
      </Section>
      {/*footter*/}

      <Footer></Footer>
    </>
  );
}
