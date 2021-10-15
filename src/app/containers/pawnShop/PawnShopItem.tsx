import { ButtonComponent } from 'app/components/Button/Input';
import React from 'react';
import heartActive from '../../../images/heart_active.svg';
import heartDisable from '../../../images/heart_disable.svg';
import checkIcon from '../../../images/check_icon.svg';
import starIcon from '../../../images/star_icon.svg';
import { PawnShop } from './style';

interface IShop {
  item: {
    id: number;
    name: string;
    interest: number;
    interestMin: number;
    interestMax: number;
    allowedLoanMax: number;
    allowedLoanMin: number;
    durationQtyMax: number;
    durationQtyMin: number;
    durationQtyType: number;
    loanToValue: number;
    symbol: string;
    collateral: string[];
    reputation: number;
    avatar: string;
    type: number;
    isFavorite?: boolean;
  };
}

const PawnShopItem: React.FC<IShop> = ({ item }) => {
  const renderCollateral =
    item.collateral.length > 3 ? (
      <p className="pawn__collateral-result">
        {item.collateral.slice(0, 3).join(', ')} &{' '}
        {item.collateral.slice(3).length}+ more
      </p>
    ) : (
      <p className="pawn__collateral-result">{item.collateral.join(', ')}</p>
    );

  const methodButton = () => {
    if (item.type === 0) return 'Auto';
    else if (item.type === 1) return 'Semi-Auto';
    return 'Negotiation';
  };
  return (
    <PawnShop>
      <div className="pawn">
        <div className="pawn__shop">
          <div className="pawn__img">
            <img className="pawn__img-shop" src={item.avatar} alt="" />
            <img
              className="pawn__img-icon"
              src={item.isFavorite ? heartActive : heartDisable}
              alt=""
            />
          </div>
          <div className="pawn__content">
            <div className="pawn__name">
              {item.name} <img src={checkIcon} alt="" />
              <div className="pawn__star">
                <img src={starIcon} alt="" />
                {item.reputation}
              </div>
            </div>
            <ul className="pawn__details">
              <li className="pawn__details-item">
                <p className="pawn__details-label">Available:</p>
                <p className="pawn__details-result">
                  {Math.ceil(Math.random() * 1000000).toLocaleString('en')}
                  {' ' + item.symbol}
                </p>
              </li>
              <li className="pawn__details-item">
                <p className="pawn__details-label">Limit:</p>
                <p className="pawn__details-result">
                  {item.allowedLoanMin?.toLocaleString('en')}
                  {' ' + item.symbol} -{' '}
                  {item.allowedLoanMax?.toLocaleString('en')}
                  {' ' + item.symbol}
                </p>
              </li>
              <li className="pawn__details-item">
                <p className="pawn__details-label">Duration:</p>
                <p className="pawn__details-result">
                  {item.durationQtyMin} - {item.durationQtyMax}{' '}
                  {item.durationQtyType === 1 ? 'months' : 'weeks'}
                </p>
              </li>
              {item.loanToValue && (
                <li className="pawn__details-item">
                  <p className="pawn__details-label">LTV:</p>
                  <p className="pawn__details-result">
                    Up to {item.loanToValue}%
                  </p>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="pawn__interest">
          <div className="pawn__rate">
            <p className="pawn__rate-label">
              {item.interestMin || item.interestMax || item.interest
                ? 'Interest rate'
                : ''}
            </p>
            <p className="pawn__rate-result">
              {item.interest
                ? item.interest
                : item.interestMin + ' - ' + item.interestMax}
              % APR
            </p>
          </div>
          <div className="pawn__collateral">
            <p className="pawn__collateral-label">Collateral accepted</p>
            {renderCollateral}
          </div>
          <ButtonComponent
            width="10rem"
            height="2.6rem"
            borderRadius="1.35rem"
            className={`pawn__method pawn__method--${methodButton().toLowerCase()}`}
          >
            {methodButton()}
          </ButtonComponent>
          <ButtonComponent
            fontSize="1.6rem"
            width="14.1rem"
            height="4.8rem"
            borderRadius="4.8rem"
            color="#282c37"
            className="pawn__view"
          >
            View Detail
          </ButtonComponent>
        </div>
      </div>
    </PawnShop>
  );
};

export default PawnShopItem;
