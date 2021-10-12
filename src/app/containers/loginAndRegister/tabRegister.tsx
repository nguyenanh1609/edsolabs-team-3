import { useRef, useState } from 'react';
import { TabPane } from 'reactstrap';
import styled from 'styled-components';
import InputCustom from './inputCustom';
import { BsEyeFill } from '@react-icons/all-files/bs/BsEyeFill';
import { BsEyeSlashFill } from '@react-icons/all-files/bs/BsEyeSlashFill';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

interface props {
  id: string;
}

interface IFormInput {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

const AU_SITE_KEY: string = '6LcSG9EaAAAAABvbpHkdugGmjEWeYPp6NoPPDEvt';

const TabPaneLogin = styled(TabPane)`
  padding-top: 3rem;

  .pError {
    color: rgb(255, 72, 72);
    font-size: 1.2rem;
    line-height: 1.2rem;
    padding-top: 0.4rem;
  }

  .pInfor {
    color: white;
    font-size: 1.4rem;
    margin-bottom: 0px;
  }

  .p1 {
    margin-bottom: 0.3rem;
  }

  .p2 {
    margin-bottom: 2.9rem;
  }

  .pYellow {
    color: #dba83d;
  }

  .divButton {
    width: 58.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .buttonStyled {
    margin-top: 4rem;
    margin-bottom: 13.1rem;
    width: 17.4rem;
    height: 4.4rem;
    border-radius: 2.8rem;
    background: linear-gradient(
      #bd8727 0%,
      #ffd574 48.31%,
      #feca50 61.12%,
      #bd8727 100%
    );
    color: #282c37;
    font-weight: 500;
    font-size: 1.6rem;
    border: none;
    outline: none;
  }

  @media (max-width: 376px) {
    padding-top: 2.5rem;

    .divButton {
      width: 100%;
    }
    .buttonStyled {
      margin-bottom: 2.8rem;
      width: 17rem;
      height: 4.2rem;
    }

    .pInfor {
      line-height: 1.7rem;
    }

    .p1 {
      margin-bottom: 0.8rem;
    }
  }

  @media (max-width: 426px) {
    .divButton {
      width: 100%;
    }
    .buttonStyled {
      margin-bottom: 3rem;
      width: 17rem;
      height: 4.2rem;
    }
  }
  @media (max-width: 769px) {
    .recaptcha {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 1025px) {
    .divButton {
      width: 100%;
    }
  }
`;

export default function TabRegister({ id }: props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const [token, setToken] = useState('');
  const reCaptcha = useRef();
  const onSubmit = (data: IFormInput) => {
    if (!token) {
      return;
    }
    console.log(JSON.stringify(data) + '************1111!' + token);
    setToken('');
  };

  const [hide1, setHide1] = useState<boolean>(true);
  const getHide1 = () => setHide1(!hide1);

  const [hide2, setHide2] = useState<boolean>(true);
  const getHide2 = () => setHide2(!hide2);

  return (
    <TabPaneLogin tabId={id}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputCustom
          label="Name"
          type="text"
          placeHolder="Enter name"
          Icon={null}
          iconClick={null}
          register={register('name', { required: true })}
          err={
            errors?.name?.type === 'required' && (
              <p className="pError">Invalid name</p>
            )
          }
        />

        <InputCustom
          label="Email"
          type="text"
          placeHolder="Enter email"
          Icon={null}
          iconClick={null}
          register={register('email', { required: true })}
          err={
            errors?.email?.type === 'required' && (
              <p className="pError">Invalid email</p>
            )
          }
        />

        <InputCustom
          label="Password"
          type={hide1 ? 'password' : 'text'}
          placeHolder="Enter password"
          Icon={hide1 ? BsEyeSlashFill : BsEyeFill}
          iconClick={getHide1}
          register={register('password', { required: true })}
          err={
            errors?.password?.type === 'required' && (
              <p className="pError">Invalid password</p>
            )
          }
        />

        <InputCustom
          label="Confirm password"
          type={hide2 ? 'password' : 'text'}
          placeHolder="Enter password"
          Icon={hide2 ? BsEyeSlashFill : BsEyeFill}
          iconClick={getHide2}
          register={register('rePassword', { required: true })}
          err={
            errors?.rePassword?.type === 'required' && (
              <p className="pError">Invalid password</p>
            )
          }
        />

        <p className="pInfor p1">
          We will not share or sell your information to 3rd parties.
        </p>
        <p className="pInfor p2">
          By clicking on <span className="pYellow">Create Account</span>, you
          agree to DeFi For You’s Terms and Conditions of Use.
        </p>

        <ReCAPTCHA
          className="recaptcha"
          sitekey={AU_SITE_KEY}
          hl="en"
          size="normal"
          ref={reCaptcha}
          onChange={token => setToken(token)}
          onExpired={() => setToken('')}
        />

        <div className="divButton">
          <button type="submit" className="buttonStyled">
            Create Account
          </button>
        </div>
      </form>
    </TabPaneLogin>
  );
}
