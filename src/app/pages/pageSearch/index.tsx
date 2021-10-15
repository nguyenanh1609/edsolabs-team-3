/* eslint-disable react-hooks/exhaustive-deps */
import { FiterNavSearch } from 'app/containers/filterNavSearch/borrowCryptocurrency';
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
import { Filter } from './style';
import { useHistory } from 'react-router';
import SearchBorrowCryApi from 'api/searchBorrowCryApi';
import { useEffect } from 'react';
import searchPersonalLend from 'api/searchPersonalLendApi';

const ContainerPage = styled(Container)`
  padding: 0 1.6rem;
`;

const RowPage = styled(Row)`
  .row {
    --bs-gutter-x: 2.3rem;
  }
`;
export function PageSearch() {
  const queryString = require('query-string');
  const history = useHistory();
  const [statusFilterNav, setstatusFilterNav] = useState(false);
  // chuyển đổi url ra obj
  const param = queryString.parse(history.location.search);
  //data lấy từ filter search
  const [dataSearch, setdataSearch] = useState<any>({
    // name: '',
    // interestRanges: '',
    // loanToValueRanges: '',
    // collateralSymbols: [],
    // loanSymbols: [],
    // loanTypes: [],
    // durationTypes: [],
  }); //data lấy được từ người dùng khi onchange
  const resetDataFilter = () => {
    setdataSearch({
      name: '',
      interestRanges: '',
      loanToValueRanges: '',
      collateralSymbols: [],
      loanTypes: [],
      durationTypes: [],
      loanSymbols: [],
      size: 5,
      status: 3,
    });
    history.push({
      pathname: '/pawn/offer',
      search: queryString.stringify({ size: 10 }),
    });
  };
  const onChangeInputSearch = (e: any) => {
    setdataSearch({ ...dataSearch, name: e.target.value });
  }; //lấy dữ liệu từ ô input

  const onChangeInterestRange = (e: any) => {
    setdataSearch({ ...dataSearch, interestRanges: e.target.value });
  };
  const onChangeLoanToValue = (e: any) => {
    setdataSearch({ ...dataSearch, loanToValueRanges: e.target.value });
  };

  const onChangeCollateralAccepted = e => {
    if (e.target.checked) {
      const newvalue = dataSearch?.collateralSymbols;
      newvalue.push(e.target.value);
      setdataSearch({ ...dataSearch, collateralSymbols: newvalue });
    } else {
      const newValue1 = [...dataSearch?.collateralSymbols];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, collateralSymbols: newValue2 });
    }
  };
  const onChangeLoanToken = e => {
    if (e.target.checked) {
      const data = {
        loanSymbols: [],
      };
      const newvalue =
        dataSearch.loanSymbols === undefined
          ? [...data.loanSymbols, e.target.value]
          : [...dataSearch.loanSymbols, e.target.value];
      // const newvalue: any = dataSearch?.loanSymbols;
      // newvalue.push(e.target.value);
      setdataSearch({ ...dataSearch, loanSymbols: newvalue });
    } else {
      const newValue1 = [...dataSearch.loanSymbols];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, loanSymbols: newValue2 });
    }
  };
  const onChangeLoanType = e => {
    if (e.target.checked) {
      const data = {
        loanTypes: [],
      };
      const newvalue =
        dataSearch.loanTypes === undefined
          ? [...data.loanTypes, e.target.value]
          : [...dataSearch.loanTypes, e.target.value];
      setdataSearch({ ...dataSearch, loanTypes: newvalue });
    } else {
      const newValue1 = [...dataSearch.loanTypes];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, loanTypes: newValue2 });
    }
  };
  const onChangeDuration = e => {
    if (e.target.checked) {
      const newvalue = dataSearch?.durationTypes;
      newvalue.push(e.target.value);
      setdataSearch({ ...dataSearch, durationTypes: newvalue });
    } else {
      const newValue1 = [...dataSearch.durationTypes];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, durationTypes: newValue2 });
    }
  };
  //lấy api render ra mà hình
  const [dataRender, setdataRender] = useState<any>({});
  const [dataPersonalLend, setDataPersonalLend] = useState<any>([]);

  const fetchDataPersonalLend = async () => {
    try {
      const response = await searchPersonalLend.search();
      const data = await response.data;
      setDataPersonalLend(data);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchDataPersonalLend();
  }, []);

  useEffect(() => {
    if (
      dataSearch.interestRanges === undefined &&
      dataSearch.collateralSymbols === undefined &&
      dataSearch.loanTypes === undefined &&
      dataSearch.name === undefined
    ) {
      SearchBorrowCryApi.search(param)
        .then((res: any) => {
          setdataRender(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      //goij laij api
      SearchBorrowCryApi.search(dataSearch)
        .then((res: any) => {
          setdataRender(res.data);
        })
        .catch(error => {
          console.log(error);
        });
      history.push({
        pathname: '/pawn/offer',
        search: queryString.stringify(dataSearch),
      });
    }
  }, [dataSearch]);
  //truyền param vào state 1 lần
  useEffect(() => {
    const data: any = {
      durationTypes: [],
      loanSymbols: [],
      collateralSymbols: [],
    };
    const newArrDuration = [...data.durationTypes];
    const newArrDuration2 =
      typeof param.durationTypes === 'undefined'
        ? []
        : typeof param.durationTypes === 'string'
        ? [param.durationTypes].concat(newArrDuration)
        : param.durationTypes.concat(newArrDuration);

    const newLoanToken = [...data.loanSymbols];
    const newLoanToken2 =
      typeof param.loanSymbols === 'undefined'
        ? []
        : typeof param.loanSymbols === 'string'
        ? [param.loanSymbols].concat(newLoanToken)
        : param.loanSymbols.concat(newLoanToken);

    const newCollateralAccepted = [...data.collateralSymbols];
    const newCollateralAccepted2 =
      typeof param.collateralSymbols === 'undefined'
        ? []
        : typeof param.collateralSymbols === 'string'
        ? [param.collateralSymbols].concat(newCollateralAccepted)
        : param.collateralSymbols.concat(newCollateralAccepted);
    setdataSearch({
      ...dataSearch,
      durationTypes: newArrDuration2,
      loanSymbols: newLoanToken2,
      collateralSymbols: newCollateralAccepted2,
      collateralAmount: param.collateralAmount,
      durationQty: param.durationQty,
      loanAmount: param.loanAmount,
      status: 3,
      size: 5,
      loanTypes: param.loanTypes,
      interestRanges: param.interestRanges,
      loanToValueRanges: param.loanToValueRanges,
    });
  }, []);
  const editPageCount = e => {
    setdataSearch({ ...dataSearch, page: e });
  };
  //onclick mowr filter nav
  const onClick = () => {
    setstatusFilterNav(!statusFilterNav);
    if (statusFilterNav === false) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleSort = o => {
    setdataSearch({ ...dataSearch, cusSort: o });
  };
  console.log('param', param);
  console.log('data từ api trả về', dataRender);
  console.log('----------------------------------------');
  console.log('data filter nav gửi api', dataSearch);
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/*navbar*/}
      <Navbar></Navbar>
      <ContainerPage>
        <RowPage>
          <Col xl="9">
            <Filter>
              <img
                src={filtericon}
                alt=""
                onClick={onClick}
                style={{ cursor: 'pointer' }}
              />
            </Filter>
            <Col>
              <NumberOfResult
                content="pawnshop packages match your search"
                amount={dataRender.total_elements}
              />
            </Col>
            <Col>
              <Suggest
                src={hurry_img}
                title="You are not in a hurry and can await?"
                desc="Request a loan from a trusted P2P lender to get a better interest rate and LTV"
              ></Suggest>
            </Col>
            <Col>
              <PersonalLending data={dataPersonalLend} />
            </Col>
            <Col>
              <Suggest
                src={loan_img}
                title="Want an instant loan?"
                desc="Submit your collateral to get a loan in seconds"
              ></Suggest>
            </Col>
            <Col>
              <NavSortSearch handleSort={handleSort} />
            </Col>
            <Col>
              <PawnShop data={dataRender} />
            </Col>
            {dataRender?.total_pages > 0 && (
              <Col>
                <Pagination
                  editPageCount={editPageCount}
                  dataRender={dataRender}
                />
              </Col>
            )}
          </Col>
          <Col xl="3">
            <FiterNavSearch
              status={statusFilterNav}
              onClick={onClick}
              onChangeInputSearch={onChangeInputSearch}
              onChangeInterestRange={onChangeInterestRange}
              onChangeLoanToValue={onChangeLoanToValue}
              onChangeCollateralAccepted={onChangeCollateralAccepted}
              onChangeLoanToken={onChangeLoanToken}
              onChangeLoanType={onChangeLoanType}
              onChangeDuration={onChangeDuration}
              resetDataFilter={resetDataFilter}
              dataSearch={dataSearch}
            ></FiterNavSearch>
          </Col>
        </RowPage>
      </ContainerPage>
      {/*footter*/}
      <Footer></Footer>
    </>
  );
}
