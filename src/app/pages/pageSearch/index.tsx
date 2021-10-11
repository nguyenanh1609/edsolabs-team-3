import { FiterNavSearch } from 'app/containers/fiterNavSearch';
import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import { NavSortSearch } from 'app/containers/navSortSearch';
import { NumberOfResult } from 'app/containers/numberOfResult';
import { Pagination } from 'app/containers/pagination';
import { PawnShop } from 'app/containers/pawnShop';
import { Suggest } from 'app/containers/suggest';
import { PersonalLending } from 'app/containers/personalLending';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from 'reactstrap';
import hurry_img from '../../../images/hurry_img.png';
import loan_img from '../../../images/loan_img.png';
import filtericon from '../../../images/filtericon.svg';
import styled from 'styled-components';
import { useState } from 'react';
const Filter = styled(Col)`
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
export function PageSearch() {
  const [statusFilterNav, setstatusFilterNav] = useState(false);
  const onClick = () => {
    setstatusFilterNav(!statusFilterNav);
  };
  const TurnOffFilterNav = () => {
    setstatusFilterNav(false);
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/*navbar*/}
      <Navbar></Navbar>
      <Container>
        <Row>
          <Col xl="9">
            <Filter>
              <img src={filtericon} alt="" onClick={onClick} />
            </Filter>
            <Col>
              <NumberOfResult></NumberOfResult>
            </Col>
            <Col>
              <Suggest
                src={hurry_img}
                title="You are not in a hurry and can await?"
                desc="Request a loan from a trusted P2P lender to get a better interest rate and LTV"
              ></Suggest>
            </Col>
            <Col>
              <PersonalLending></PersonalLending>
            </Col>
            <Col>
              <Suggest
                src={loan_img}
                title="Want an instant loan?"
                desc="Submit your collateral to get a loan in seconds"
              ></Suggest>
            </Col>
            <Col>
              <NavSortSearch></NavSortSearch>
            </Col>
            <Col>
              <PawnShop></PawnShop>
            </Col>
            <Col>
              <Pagination></Pagination>
            </Col>
          </Col>
          <Col xl="3">
            <FiterNavSearch
              status={statusFilterNav}
              TurnOffFilterNav={TurnOffFilterNav}
            ></FiterNavSearch>
          </Col>
        </Row>
      </Container>
      {/*footter*/}
      <Footer></Footer>
    </>
  );
}
