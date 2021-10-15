import React from 'react';
import {
  TabborrowCryptocurrency,
  TabborrowSub,
  TooltipTabs,
  WrapperInput,
} from './style';
import classnames from 'classnames';
import { useState } from 'react';
import { TabContent } from 'reactstrap';
import { TabborrowNFT } from './style';
import { RiInformationFill } from '@react-icons/all-files/ri/RiInformationFill';
import { BiSearch } from '@react-icons/all-files/bi/BiSearch';
import { ButtonComponent } from 'app/components/Button/Input';
import { Controller, useForm } from 'react-hook-form';
import NFT from '../../../../images/NFT.png';
import { Link } from 'react-router-dom';
import { SelectAll } from 'app/components/select/select';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
export default function TabsBorrow(props: any) {
  //tabs
  const history = useHistory();
  const [activeTabBorRowCryptocurrency, setActiveTabBorRowCryptocurrency] =
    useState('1');
  const toggleCryptocurrency = tab => {
    if (activeTabBorRowCryptocurrency !== tab)
      setActiveTabBorRowCryptocurrency(tab);
    if (tab === '1') {
      history.push({ pathname: '', search: 'tab=1' });
    }
    if (tab === '2') {
      history.push({ pathname: '', search: 'tab=2' });
    }
  };
  useEffect(() => {
    if (history.location.search.includes('?tab=1')) {
      setActiveTabBorRowCryptocurrency('1');
    }
    if (history.location.search.includes('?tab=2')) {
      setActiveTabBorRowCryptocurrency('2');
    }
  }, [activeTabBorRowCryptocurrency, history.location.search]);
  //submit form 1
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();
  const onSumitFormCryptocurrency = data => {
    console.log(data);
    const queryString = require('query-string');
    const newObj = {
      collateralAmount: Number(data.collateralAmount),
      collateralSymbols: [data.collateralSymbols.value], //
      durationQty: Number(data.durationQty),
      durationTypes: [Number(data.durationTypes.value)], //
      loanAmount: Number(data.loanAmount),
      loanSymbols: [data.loanSymbols.value], //
      status: 3,
      size: 5,
    };
    history.push({
      pathname: '/pawn/offer',
      search: queryString.stringify(newObj),
    });
  };

  return (
    <>
      <TabborrowSub tabs>
        <span
          className={classnames({
            activeSub: activeTabBorRowCryptocurrency === '1',
          })}
          onClick={() => {
            toggleCryptocurrency('1');
          }}
        >
          Cryptocurrency
        </span>
        <span
          className={classnames({
            activeSub: activeTabBorRowCryptocurrency === '2',
          })}
          onClick={() => {
            toggleCryptocurrency('2');
          }}
        >
          NFT
        </span>
      </TabborrowSub>
      <TabContent activeTab={activeTabBorRowCryptocurrency}>
        <TabborrowCryptocurrency tabId="1">
          <form onSubmit={handleSubmit(onSumitFormCryptocurrency)}>
            <p>Collateral</p>
            <div>
              <WrapperInput width="417px" height="44px" colorFont="" colorBr="">
                <input
                  type="number"
                  // name="Collateral"
                  placeholder="Enter amount"
                  className={errors.collateralAmount ? 'activeBrinput' : ''}
                  {...register('collateralAmount', { required: true })}
                  autoComplete="off"
                ></input>
                {errors.collateralAmount && (
                  <span className="warning__input">Invalid amount</span>
                )}
                <ButtonComponent
                  className="btn_max"
                  width="64px"
                  height="34px"
                  borderRadius="172px"
                  type="button"
                >
                  Max
                </ButtonComponent>
              </WrapperInput>
              <WrapperInput width="111px" height="44px" colorFont="" colorBr="">
                <Controller
                  control={control}
                  name="collateralSymbols"
                  // rules={{
                  //   required: true,
                  // }}
                  render={({ field: { onChange, value, ref } }) => (
                    <SelectAll
                      tab="bor"
                      value={value}
                      onChange={onChange}
                      default={false}
                      heightOption="255px"
                      placeholder="All"
                      isMuli={false}
                      option={'1'}
                      error={Boolean(errors.collateralSymbols)}
                    ></SelectAll>
                  )}
                />
                {errors.collateralSymbols && (
                  <span className="warning__input">Invalid amount</span>
                )}
              </WrapperInput>
            </div>
            <p>Or</p>
            <div>
              <WrapperInput
                width="225px"
                height="36px"
                colorFont="#DBA83D"
                colorBr="#DBA83D"
                className="input__Choose"
              >
                <input
                  type="text"
                  disabled
                  placeholder="Choose Existing collateral"
                  // defaultValue="Choose Existing collateral"
                  className="input__Disabled"
                ></input>
              </WrapperInput>
            </div>
            <p>Duration</p>
            <div>
              <WrapperInput width="417px" height="44px" colorFont="" colorBr="">
                <input
                  // name="Duration"
                  type="number"
                  placeholder="durationQty"
                  autoComplete="off"
                  className={errors.durationQty ? 'activeBrinput' : ''}
                  {...register('durationQty', { required: true })}
                ></input>
                {errors.durationQty && (
                  <span className="warning__input">Invalid amount</span>
                )}
              </WrapperInput>
              <WrapperInput width="111px" height="44px" colorFont="" colorBr="">
                <Controller
                  control={control}
                  name="durationTypes"
                  // rules={{
                  //   required: true,
                  // }}
                  render={({ field: { onChange, value, ref } }) => (
                    <SelectAll
                      tab="bor"
                      value={value}
                      onChange={onChange}
                      default={false}
                      heightOption="150px"
                      placeholder="All"
                      isMuli={false}
                      option={'3'}
                      error={Boolean(errors.durationTypes)}
                    ></SelectAll>
                  )}
                />
                {errors.durationTypes && (
                  <span className="warning__input">Invalid amount</span>
                )}
              </WrapperInput>
            </div>
            <p>Loan amount</p>
            <div>
              <WrapperInput width="417px" height="44px" colorFont="" colorBr="">
                <input
                  // name="Loanamount"
                  type="number"
                  autoComplete="off"
                  placeholder="Enter amount"
                  className={errors.loanAmount ? 'activeBrinput' : ''}
                  {...register('loanAmount', { required: true })}
                ></input>
                {errors.loanAmount && (
                  <span className="warning__input">Invalid amount</span>
                )}
              </WrapperInput>
              <WrapperInput width="111px" height="44px" colorFont="" colorBr="">
                <Controller
                  control={control}
                  name="loanSymbols"
                  // rules={{
                  //   required: true,
                  // }}
                  render={({ field: { onChange, value, ref } }) => (
                    <SelectAll
                      tab="bor"
                      value={value}
                      onChange={onChange}
                      default={true}
                      heightOption="150px"
                      placeholder="All"
                      isMuli={false}
                      option={'2'}
                      error={Boolean(errors.loanSymbols)}
                    ></SelectAll>
                  )}
                />
                {errors.loanSymbols && (
                  <span className="warning__input">Invalid amount</span>
                )}
              </WrapperInput>
            </div>
            <TooltipTabs>
              Recommended amount <RiInformationFill />
              <span>
                To get a loan quickly, you should set the desired loan amount
                between 50 - 70% of the collateral value.
              </span>
            </TooltipTabs>
            <ButtonComponent
              borderRadius="172px"
              width="530px"
              height="54px"
              fontSize="16px"
              color="#282C37"
              className="btn__submit"
            >
              <BiSearch />
              Search
            </ButtonComponent>
          </form>
        </TabborrowCryptocurrency>
        <TabborrowNFT tabId="2">
          <div className="img">
            <img src={NFT} alt="" />
          </div>
          <button>Find NFT lenders</button>
          <p>
            Don’t have hard NFT?
            <Link to="/login"> Create new</Link>
          </p>
        </TabborrowNFT>
      </TabContent>
    </>
  );
}
