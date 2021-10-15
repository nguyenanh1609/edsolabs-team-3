import React from 'react';
import checkIcon from '../../../images/check_icon.svg';
import starIcon from '../../../images/star_icon.svg';
import infoIcon from '../../../images/info_icon.svg';
import tagIcon from '../../../images/tag_icon.svg';
import { ButtonComponent } from 'app/components/Button/Input';
import { P2P } from './style';
interface IP2P {
  item: {
    addressLend: string;
    reputation: number;
    contract: number;
    interestMin: number;
    interestMax: number;
    collateral: [{ url: string; symbol: string }];
    tags: string[];
    icons: string[];
  };
}

const P2PItem: React.FC<IP2P> = ({ item }) => {
  const renderIconsList =
    item.collateral.length > 5
      ? item.icons.slice(0, 5).map((o, i) => <img key={i} src={o} alt="" />)
      : item.icons
          .slice(0, item.collateral.length)
          .map((o, i) => <img key={i} src={o} alt="" />);

  return (
    <P2P>
      <div className="lender">
        <div className="lender__name">
          <span>{item.addressLend}</span> <img src={checkIcon} alt="" />
        </div>
        <div className="lender__rate">
          <img src={starIcon} alt="" />
          {item.reputation}
          <span>|</span>
          <p className="lender__sign">
            {item.contract}
            {item.contract > 0 ? ' signed contracts' : ' signed contract'}
          </p>
        </div>
        <div className="lender__interest">
          {item.interestMin} - {item.interestMax}% interest rate{' '}
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
