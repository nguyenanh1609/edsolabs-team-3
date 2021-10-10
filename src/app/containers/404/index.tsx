import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from 'reactstrap';
import logo from '../../../images/logo.png';
import Au_notFound from '../../../images/Au_notFound.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
`;

const Header = styled.div`
  height: 10rem;
  background: #232732;
  display: flex;
  align-items: center;

  img {
    margin-left: 3rem;
    width: 24.5rem;
    height: 6rem;
  }
`;

const Main = styled.div`
  background: #171a23;
  height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .row {
    align-items: center;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 1920px) {
    img {
      width: 85.3rem;
      height: 78.8rem;
    }
  }

  @media (max-width: 376px) {
    justify-content: flex-start;
  }

  @media (max-width: 321px) {
    justify-content: flex-start;
  }
`;

const Panel = styled.div`
  color: white;

  .bigText {
    font-size: 7.2rem;
    font-weight: 700;
  }

  .smallText {
    font-size: 4.8rem;
    font-weight: 500;
  }

  .buttonStyled {
    margin-top: 4.4rem;
    height: 5.4rem;
    width: 17.9rem;
    border-radius: 2.7rem;
    background: linear-gradient(
      #bd8727 0%,
      #ffd574 48.31%,
      #feca50 61.12%,
      #bd8727 100%
    );
    color: #282c37;
    font-weight: bold;
    font-size: 2rem;
    border: none;
    outline: none;
  }

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 376px) {
    margin-top: 3rem;

    .bigText {
      font-size: 5.5rem;
    }

    .smallText {
      font-size: 3.8rem;
    }

    .buttonStyled {
      margin-top: 3rem;
      height: 3.6rem;
      width: 15rem;
      border-radius: 2rem;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 321px) {
    margin-top: 2rem;

    .bigText {
      font-size: 5rem;
    }

    .smallText {
      font-size: 3rem;
    }

    .buttonStyled {
      margin-top: 3rem;
      height: 3.6rem;
      width: 15rem;
      border-radius: 2rem;
      font-size: 1.5rem;
    }
  }
`;

export function Not404() {
  return (
    <>
      <Helmet>
        <title>404</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <Header>
          <a href="/">
            <img src={logo} alt="defi" />
          </a>
        </Header>
        <Main>
          <Container>
            <Row>
              <Col lg={6} xs={12}>
                <Panel>
                  <div className="bigText">Oopps...</div>
                  <div className="smallText">Page not found.</div>
                  <button className="buttonStyled">GO BACK</button>
                </Panel>
              </Col>
              <Col lg={6} xs={12}>
                <img src={Au_notFound} alt="not found 404" />
              </Col>
            </Row>
          </Container>
        </Main>
      </Wrapper>
    </>
  );
}
