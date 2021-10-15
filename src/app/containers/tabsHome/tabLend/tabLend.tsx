import React from 'react';
import { GrInput, WarperInput } from './style';
import { Controller, useForm } from 'react-hook-form';
import { SelectAll } from 'app/components/select/select';
import { useState } from 'react';
import { useHistory } from 'react-router';
export function TabLendForm() {
  const history = useHistory();
  const queryString = require('query-string');
  const [Collateral, setCollateral] = useState<any>(true);
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = data => {
    if (Collateral === true) {
      const newObj = {
        collateralSymbols: [],
        durationQty: Number(data.durationQty),
        durationTypes: Number(data.durationTypes.value),
        loanAmount: Number(data.loanAmount),
        loanSymbols: data.loanSymbols.value,
        size: 10,
      };
      const newArr = data.collateralSymbols.map(value => value.value);
      newObj.collateralSymbols = newArr;
      console.log('true', newObj);
      history.push({
        pathname: '/pawn/lender',
        search: queryString.stringify(newObj),
      });
    } else {
      const newObj = {
        //collateralSymbols: data.collateralSymbols,
        durationQty: Number(data.durationQty),
        durationTypes: Number(data.durationTypes.value),
        loanAmount: Number(data.loanAmount),
        loanSymbols: data.loanSymbols.value,
        size: 10,
        page: 0,
      };
      console.log('ô âu phàn này', newObj);
      history.push({
        pathname: '/pawn/lender/nft-result',
        search: queryString.stringify(newObj),
      });
    }
  };
  const onChangeRadio = e => {
    setCollateral(!Collateral);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GrInput>
        <p>Maximum loan amount</p>
        <div className="">
          <WarperInput
            width="417px"
            height="44px"
            border={Boolean(errors.Duration)}
          >
            <input
              type="text"
              placeholder="Enter amount"
              autoComplete="off"
              {...register('loanAmount', { required: true })}
            />
            {errors.Maximum && (
              <span className="errValiInput">
                Maximum loan amount is required
              </span>
            )}
            <button className="btn__max-lend">Max</button>
          </WarperInput>
          <WarperInput width="111px" height="44px">
            <Controller
              control={control}
              name="loanSymbols"
              // rules={{
              //   required: true,
              // }}
              render={({ field: { onChange, value, ref } }) => (
                <SelectAll
                  tab="lend"
                  value={value}
                  onChange={onChange}
                  default={true}
                  heightOption="255px"
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
          </WarperInput>
        </div>
      </GrInput>
      <GrInput>
        <p>Duration</p>
        <div className="">
          <WarperInput
            width="417px"
            height="44px"
            border={Boolean(errors.durationQty)}
          >
            <input
              type="text"
              autoComplete="off"
              placeholder="durationQty"
              {...register('durationQty', { required: true })}
            />
            {errors.durationQty && (
              <>
                <span className="errValiInput">Invalid duration</span>
                <fieldset></fieldset>
              </>
            )}
          </WarperInput>
          <WarperInput width="111px" height="44px">
            <Controller
              control={control}
              name="durationTypes"
              // rules={{
              //   required: true,
              // }}
              render={({ field: { onChange, value, ref } }) => (
                <SelectAll
                  tab="lend"
                  value={value}
                  onChange={onChange}
                  default={true}
                  heightOption="255px"
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
          </WarperInput>
        </div>
      </GrInput>
      <GrInput>
        <p>Collateral</p>
        <div className="">
          <div className="radio">
            <input
              type="radio"
              name="radio"
              value="1"
              defaultChecked
              onChange={onChangeRadio}
            />
          </div>
          <span>Crypto</span>
          <div className="radio">
            <input
              type="radio"
              name="radio"
              value="2"
              onChange={onChangeRadio}
            />
          </div>
          <span>NFT</span>
        </div>
      </GrInput>
      {Collateral ? (
        <GrInput>
          <div className="">
            <WarperInput width="540px" height="" className="input__full">
              <Controller
                control={control}
                name="collateralSymbols"
                // rules={{
                //   required: true,
                // }}
                render={({ field: { onChange, value, ref } }) => (
                  <SelectAll
                    tab="lend"
                    value={value}
                    onChange={onChange}
                    default={true}
                    heightOption="255px"
                    placeholder="All"
                    isMuli={true}
                    option={'1'}
                    error={Boolean(errors.collateralSymbols)}
                  ></SelectAll>
                )}
              />
              {errors.collateralSymbols && (
                <span className="warning__input">Invalid amount</span>
              )}
            </WarperInput>
          </div>
        </GrInput>
      ) : (
        ''
      )}
      <GrInput>
        <button>Search</button>
      </GrInput>
    </form>
  );
}
