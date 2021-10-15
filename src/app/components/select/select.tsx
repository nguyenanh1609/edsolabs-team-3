import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { iconCoin, LoanAmount } from '../icon';
const SelectA = styled(Select)`
  .css-tlfecz-indicatorContainer {
    padding-left: 0px;
  }
  .css-1gtu0rj-indicatorContainer {
    padding-left: 0px;
  }
  .css-1fz1i0g-Input {
    margin-left: 10px;
  }
  .css-ndvmx-singleValue {
    color: #fff;
    padding-right: 5px;
    margin-left: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-182fo9s-option {
    display: flex;
    justify-content: flex-start;
  }
  .css-y6e3hu-option {
    display: flex;
    justify-content: flex-start;
    color: #fff;
    background-color: #1976d2;
  }
  .css-jp1qg2-multiValue {
    background-color: hsl(0, 0%, 25%);
    color: #fff;
  }
  .css-14euz19-multiValue {
    background-color: hsl(0, 0%, 25%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 94px;
    height: 33px;
    & > .css-1k48koi {
      svg:hover {
        padding: 3px;
        border-radius: 20px;
        background-color: hsl(0, 0%, 50%);
      }
    }
    & > div {
      padding: 0px;
      & > span {
        margin-left: 5px;
      }
    }
  }
  .knhgOc {
    div {
      cursor: text;
    }
  }
  .css-1ywozm8-ValueContainer {
    cursor: text;
  }
  .css-1fz1i0g-Input {
    cursor: text;
    input {
      cursor: text;
    }
  }
  .css-e73spq-control {
    box-shadow: #dba83d 0px 0px 0px 2px;
  }
`;
export function SelectAll(props: any) {
  const options1: any = iconCoin.map(e => ({
    value: e.value,
    label: (
      <>
        <img src={e.url} alt="" style={{ height: '20px', width: '20px' }} />
        <span>{e.value}</span>
      </>
    ),
  }));
  options1.unshift({ value: 'All', label: 'All' });
  const options2: any = LoanAmount.map(e => ({
    value: e.value,
    label: (
      <>
        <img src={e.url} alt="" style={{ height: '20px', width: '20px' }} />
        <span>{e.value}</span>
      </>
    ),
  }));
  options2.unshift({ value: 'All', label: 'All' });
  const options3 = [
    { value: 'All', label: 'All' },
    { value: '1', label: 'Month' },
    { value: '0', label: 'Weeks' },
  ];
  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? 'bold' : 'normal',
      color: 'white',
      backgroundColor: '#161614',
      fontSize: state.selectProps.myFontSize,
      '&:hover': {
        backgroundColor: '#050504',
      },
    }),
    multiValue: (provided, state) => ({
      ...provided,
      fontSize: state.selectProps.myFontSize,
      padding: '0px 7px',
      color: '#fff !important',
      borderRadius: '16.5px',
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: '#161614',
      borderRadius: '20px',
    }),
    indicatorContainer: provider => ({
      ...provider,
      padding: '0px',
    }),
    indicatorsContainer: provider => ({
      ...provider,
      padding: '0px',
    }),
    placeholder: Provider => ({
      ...Provider,
      paddingLeft: '10px',
    }),
    valueContainer: provider => ({
      ...provider,
      padding: '0px 0px 0px 0px',
    }),
    menuList: provided => ({
      ...provided,
      maxHeight: props.heightOption,
      borderRadius: '20px',
      '::-webkit-scrollbar': {
        width: '5px',
        backgroundColor: '#45484f',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: '#a2a3a7',
      },
    }),
    multiValueRemove: () => ({
      color: '#fff',
      backgroundColor: 'transparent',
      borderRadius: '10px',
    }),
    multiValueLabel: provided => ({
      ...provided,
      color: '#fff',
    }),
    container: provided => ({
      ...provided,
      width: '100%',
      height: '100%',
      fontSize: '16px',
    }),
    input: provided => ({
      ...provided,
      fontSize: 16,
      marginleft: '8px',
      color: '#fff',
    }),
    control: provided => ({
      ...provided,
      height: '100%',
      width: '100%',
      outline: 'none',
      borderRadius: '30px',
      // boxShadow: '#dba83d 0px 0px 0px 1px;',
      borderColor: 'rgba(255,255,255,0.24)',
      borderSize: '3px',
      background: 'transparent',
      '&:hover': {
        borderColor: 'rgba(255,255,255,0.24)',
      },
    }),
    singleValue: provider => ({
      ...provider,
      marginleft: '15px',
    }),
  };
  return (
    <>
      <>
        {props.tab === 'bor' ? (
          props.isMuli ? (
            <SelectA
              isMulti
              defaultValue={props.value}
              options={
                props.option === '1'
                  ? options1
                  : props.option === '2'
                  ? options2
                  : options3
              }
              styles={styles}
              components={{
                IndicatorSeparator: () => null,
              }}
              placeholder={props.placeholder}
              onChange={props.onChange}
            ></SelectA>
          ) : (
            <SelectA
              defaultValue={props.value}
              options={
                props.option === '1'
                  ? options1
                  : props.option === '2'
                  ? options2
                  : options3
              }
              styles={styles}
              components={{
                IndicatorSeparator: () => null,
              }}
              placeholder={props.placeholder}
              onChange={props.onChange}
            ></SelectA>
          )
        ) : //tab lend
        props.isMuli ? (
          <SelectA
            isMulti
            defaultValue={props.value}
            options={
              props.option === '1'
                ? options1
                : props.option === '2'
                ? options2
                : options3
            }
            styles={styles}
            components={{
              IndicatorSeparator: () => null,
            }}
            placeholder={props.placeholder}
            onChange={props.onChange}
          ></SelectA>
        ) : (
          <SelectA
            defaultValue={props.value}
            options={
              props.option === '1'
                ? options1
                : props.option === '2'
                ? options2
                : options3
            }
            styles={styles}
            components={{
              IndicatorSeparator: () => null,
            }}
            placeholder={props.placeholder}
            onChange={props.onChange}
          ></SelectA>
        )}
      </>
      {/* {props.option === '1' ? (
        props.default ? (
          <SelectA
            options={options3}
            styles={styles}
            components={{
              IndicatorSeparator: () => null,
            }}
            placeholder={props.placeholder}
            onChange={props.onchange}
            isSearchable={false}
            defaultValue={props.value}
          ></SelectA>
        ) : (
          <SelectA
            defaultValue={props.value}
            isSearchable={false}
            options={options3}
            styles={styles}
            components={{
              IndicatorSeparator: () => null,
            }}
            placeholder={props.placeholder}
            onChange={props.onchange}
          ></SelectA>
        )
      ) : ///option
      props.isMuli ? (
        <SelectA
          isMulti
          options={options1}
          styles={styles}
          components={{
            IndicatorSeparator: () => null,
          }}
          placeholder={props.placeholder}
          onChange={props.onchange}
          defaultValue={props.value}
        ></SelectA>
      ) : props.default ? (
        <SelectA
          defaultValue={props.value}
          options={options2}
          styles={styles}
          components={{
            IndicatorSeparator: () => null,
          }}
          placeholder={props.placeholder}
          onChange={props.onchange}
        ></SelectA>
      ) : (
        <SelectA
          defaultValue={props.value}
          options={options1}
          styles={styles}
          components={{
            IndicatorSeparator: () => null,
          }}
          placeholder={props.placeholder}
          onChange={props.onChange}
        ></SelectA>
      )} */}
    </>
  );
}
