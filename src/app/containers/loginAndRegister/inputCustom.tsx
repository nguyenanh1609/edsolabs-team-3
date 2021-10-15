import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 9.7rem;

  .inputDiv {
    display: flex;
  }

  .icon {
    font-size: 2.4rem;
    color: white;
    margin-left: -3.4rem;
    margin-top: 1rem;
    cursor: pointer;
  }

  .iconErr {
    font-size: 2.4rem;
    color: rgb(255, 72, 72);
    margin-left: -3.4rem;
    margin-top: 1rem;
    cursor: pointer;
  }

  .error {
    border: 1px solid rgb(255, 72, 72);
    &:focus {
      border: 1px solid rgb(255, 72, 72);
      caret-color: rgb(255, 72, 72);
    }
  }

  @media (min-width: 1440px) {
    width: 58.4rem;
  }
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 0.6rem;
`;

const InputStyled = styled.input`
  height: 4.4rem;
  width: 100%;
  background: inherit;
  border-radius: 2.2rem;
  padding-left: 2.4rem;
  padding-right: 3.5rem;
  border: 1px solid #74767b;
  outline: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: #ffffff;

  &:focus {
    border: 1px solid #dba83d;
    caret-color: #dba83d;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-size: 1.4rem;
    color: #a2a3a7;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-size: 1.4rem;
    color: #a2a3a7;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    font-size: 1.4rem;
    color: #a2a3a7;
  }
`;

interface Props {
  label: string;
  type: string;
  placeHolder: string;
  Icon: any;
  iconClick: any;
  register: any;
  err: any;
}

export default function InputCustom({
  label,
  type,
  placeHolder,
  Icon,
  iconClick,
  register,
  err,
}: Props) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <div className="inputDiv">
        <InputStyled
          autoComplete="off"
          type={type}
          placeholder={placeHolder}
          {...register}
          className={classnames({ error: err !== false })}
        />
        {Icon && (
          <Icon className={err ? 'iconErr' : 'icon'} onClick={iconClick} />
        )}
      </div>
      {err}
    </Wrapper>
  );
}
