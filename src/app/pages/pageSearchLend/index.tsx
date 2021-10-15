/* eslint-disable react-hooks/exhaustive-deps */
import { FiterNavSearch } from 'app/containers/filterNavSearch/lendCryptocurrency';
import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import Table from 'app/containers/table';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from 'reactstrap';
import { Section } from '../pageHome/style';
import { Filter } from '../pageSearch/style';
import filtericon from '../../../images/filtericon.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchLendCryApi from 'api/searchLendCry';
import { useHistory } from 'react-router';
export function PageSearchLend() {
  const [statusFilterNav, setstatusFilterNav] = useState(false);
  const onClick = () => {
    setstatusFilterNav(!statusFilterNav);
    if (statusFilterNav === false) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  const queryString = require('query-string');
  const history = useHistory();
  const [dataSearch, setdataSearch] = useState<any>({
    // name: '',
    // interestRanges: '',
    // loanToValueRanges: '',
    // collateralSymbols: [],
    // loanSymbols: [],
    // loanTypes: [],
    // durationTypes: [],
  }); //data lấy được từ người dùng khi onchange
  const param = queryString.parse(history.location.search);
  const [dataRender, setdataRender] = useState<any>({});
  useEffect(() => {
    // if (
    //   dataSearch.interestRanges === undefined &&
    //   dataSearch.collateralSymbols === undefined &&
    //   dataSearch.loanTypes === undefined &&
    //   dataSearch.name === undefined
    // ) {
    SearchLendCryApi.search(param)
      .then((res: any) => {
        setdataRender(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    // } else {
    //   SearchLendCryApi.search(dataSearch)
    //     .then((res: any) => {
    //       setdataRender(res.data);
    //       // dispatch(pawnShopAction.getPawnShop(res.data));
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    //   history.push({
    //     pathname: '/pawn/offer',
    //     search: queryString.stringify(dataSearch),
    //   });
    // }
  }, [dataSearch]);
  const editPageCount = e => {
    setdataSearch({ ...dataSearch, page: e });
  };
  console.log(dataSearch);
  console.log(dataRender);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/*navbar*/}
      <Navbar></Navbar>
      <Section className="section-even">
        <Container>
          <Row>
            <Col xl="9">
              <Filter>
                <img
                  src={filtericon}
                  alt=""
                  onClick={onClick}
                  style={{ cursor: 'pointer' }}
                />
              </Filter>
              <Table />
            </Col>
            <Col xl="3">
              <FiterNavSearch
                status={statusFilterNav}
                onClick={onClick}
                editPageCount={editPageCount}
              ></FiterNavSearch>
            </Col>
          </Row>
        </Container>
        {/*footter*/}
        <Footer></Footer>
      </Section>
    </>
  );
}
