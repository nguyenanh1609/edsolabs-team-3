import React from 'react';
import styled from 'styled-components';
import checkIcon from '../../../images/check_icon.svg';
import starIcon from '../../../images/star_icon.svg';
import infoIcon from '../../../images/info_icon.svg';
import tagIcon from '../../../images/tag_icon.svg';
import btcIcon from '../../../images/btc_icon.svg';
import ethIcon from '../../../images/eth_icon.svg';
import dfyIcon from '../../../images/dfy_icon.svg';
import bnbIcon from '../../../images/bnb_icon.svg';
import { ButtonComponent } from 'app/components/Button/Input';
interface IP2P {
  item: {
    name: string;
    rate: number;
    signed: number;
    interest_min: number;
    interest_max: number;
    tags: string[];
    collateral: number[];
  };
}
const P2P = styled.div`
  background-color: #282c37;
  border-radius: 2rem;
  padding: 2rem 1.7rem 2.4rem;
  color: #d1d1d3;
  letter-spacing: 0.04rem;
  margin-bottom: 2.4rem;
  .lender {
    min-height: 22rem;

    &__name {
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.4rem;
      text-decoration-line: underline;
      color: #2596ff;

      & img {
        margin-left: 1.2rem;
      }
    }
    &__rate {
      color: #ffffff;
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2rem;
      display: flex;
      align-items: center;
      margin-top: 0.8rem;
      & img {
        margin-right: 0.5rem;
      }
      span {
        margin: 0 1.6rem;
      }
    }
    &__sign {
      color: #d1d1d3;
      letter-spacing: 0.04rem;
      margin-bottom: 0;
    }
    &__interest {
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.4rem;
      margin-top: 1rem;
      color: #3fd762;
      & img {
        margin-left: 0.6rem;
      }
    }
    &__tag {
      list-style: none;
      font-style: normal;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: #dba83d;
      display: flex;
      flex-wrap: wrap;
      padding-left: 0;
      margin-top: 1.3rem;
      &-item {
        margin-right: 1.2rem;
        border: 0.1rem solid #dba83d;
        box-sizing: border-box;
        border-radius: 17px;
        padding: 0.6rem 0.8rem 0.4rem;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        & img {
          margin-right: 0.9rem;
        }
      }
    }
    &__collateral {
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2rem;
      display: flex;
      align-items: center;
      color: #d1d1d3;
      flex-wrap: wrap;
      img {
        margin: 0 0.4rem;
      }
    }
    &__button {
      background: linear-gradient(
        221.15deg,
        #bd8727 0%,
        #ffd574 49.02%,
        #feca50 62.02%,
        #bd8727 101.47%
      );
      margin: -3.2rem auto 0rem auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      @media screen and (max-width: 1200px) {
        margin-top: 1.8rem;
      }
      @media screen and (max-width: 767px) and (min-width: 575px) {
        margin-top: 0;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .lender {
      &__name {
        font-size: 1.6rem;
      }
      &__rate {
        font-size: 1.4rem;
      }
      &__interest {
        font-size: 1.8rem;
      }
      &__tag {
        font-size: 1.2rem;
      }
      &__collateral {
        margin-bottom: 3.4rem;
        font-size: 1.4rem;
        span {
          margin-bottom: 1.2rem;
          display: block;
          width: 100%;
        }
      }
    }
  }
`;

const P2PItem: React.FC<IP2P> = ({ item }) => {
  let srcIcon: any = o => {
    if (o === 0) return btcIcon;
    else if (o === 1) return ethIcon;
    else if (o === 2) return dfyIcon;
    else if (o === 3) return bnbIcon;
    else return null;
  };
  const renderIconsList =
    item.collateral.length > 5
      ? item.collateral
          .slice(0, 5)
          .map((o, i) => <img key={i} src={srcIcon(o)} alt="" />)
      : item.collateral.map((o, i) => <img key={i} src={srcIcon(o)} alt="" />);
  return (
    <P2P>
      <div className="lender">
        <div className="lender__name">
          {item.name} <img src={checkIcon} alt="" />
        </div>
        <div className="lender__rate">
          <img src={starIcon} alt="" />
          {item.rate}
          <span>|</span>
          <p className="lender__sign"> {item.signed} signed contracts</p>
        </div>
        <div className="lender__interest">
          {item.interest_min} - {item.interest_max}% interest rate{' '}
          <img src={infoIcon} alt="" />
        </div>
        <ul className="lender__tag">
          {item.tags.map((o, i) => (
            <li key={i} className="lender__tag-item">
              <img src={tagIcon} alt="" />
              {o}
            </li>
          ))}
        </ul>
        <div className="lender__collateral">
          <span>Collateral accepted:</span>
          {renderIconsList}{' '}
          {item.collateral.length > 5
            ? `& ${item.collateral.slice(5).length} more`
            : ''}
        </div>
      </div>
      <ButtonComponent
        fontSize="1.6rem"
        width="15.5rem"
        height="4.8rem"
        borderRadius="4.8rem"
        color="#282c37"
        className="lender__button"
      >
        Request loan
      </ButtonComponent>
    </P2P>
  );
};

export default P2PItem;
