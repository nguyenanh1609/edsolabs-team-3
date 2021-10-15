import { ButtonComponent } from 'app/components/Button/Input';
import React from 'react';
import tIcon from '../../../images/T_nft_icon.svg';
import diamondIcon from '../../../images/diamo_nft_icon.svg';
import artworkIcon from '../../../images/art_nft_icon.svg';
import starIcon from '../../../images/star_icon.svg';
import hardNft from '../../../images/hard_nft.png';
import { NftShop } from './style';

interface IShop {
  item: {
    id: number;
    nftId: number;
    nftStatus: number;
    nftType: number;
    bcNftId: number;
    bcCollateralId: number;
    nftName: string;
    borrowerWalletAddress: string;
    reputation: number;
    durationTime: number;
    durationType: number;
    nftAssetLocation: string;
    nftEvaluatedPrice: number;
    nftEvaluatedSymbol: string;
    expectedLoanAmount: number;
    expectedLoanSymbol: string;
    nftAssetTypeId: number;
    nftAvatarCid: string;
    nftMediaCid: string;
    method: 'Diamond' | string;
  };
}

const NftShopItem: React.FC<IShop> = ({ item }) => {
  return (
    <NftShop>
      <div className="nft">
        <div className="nft__img">
          {item.nftMediaCid && (
            <img
              className="nft__img-shop"
              src={'https://defiforyou.mypinata.cloud/ipfs/' + item.nftMediaCid}
              alt=""
            />
          )}

          {item.nftType === 0 && (
            <img src={hardNft} alt="" className="nft__img-label" />
          )}
        </div>
        <div className="nft__content">
          <div className="nft__name">
            {item.nftName}
            <div className="nft__star">
              <img src={starIcon} alt="" />
              {item.reputation}
            </div>
          </div>
          <ul className="nft__details">
            <li className="nft__details-item">
              <p className="nft__details-label">Borrower:</p>
              <p className="nft__details-result nft__details-result--blue">
                {item.borrowerWalletAddress}
              </p>
            </li>
            <li className="nft__details-item">
              <p className="nft__details-label">Duration:</p>
              <p className="nft__details-result">
                {item.durationTime}{' '}
                {item.durationType === 0
                  ? item.durationTime > 1
                    ? 'weeks'
                    : 'week'
                  : item.durationTime > 1
                  ? 'months'
                  : 'month'}
              </p>
            </li>
            {item.nftAssetLocation && (
              <li className="nft__details-item">
                <p className="nft__details-label">Asset location:</p>
                <p className="nft__details-result">{item.nftAssetLocation}</p>
              </li>
            )}
            {item.nftEvaluatedPrice && (
              <li className="nft__details-item">
                <p className="nft__details-label">Evaluated price:</p>
                <div className="nft__details-result">
                  <img src={tIcon} alt="" />
                  {item.nftEvaluatedPrice.toLocaleString('en')}{' '}
                  {item.nftEvaluatedSymbol}
                </div>
              </li>
            )}
          </ul>
        </div>
        <div className="nft__interest">
          <div className="nft__rate">
            <p className="nft__rate-label">Expected loan</p>
            <p className="nft__rate-result">
              {item.expectedLoanAmount.toLocaleString('en')}{' '}
              {item.expectedLoanSymbol}
            </p>
          </div>

          {/* nftAssetTypeId chắn diamond, lẻ artwork */}
          <ButtonComponent
            width="9.4rem"
            height="2.3rem"
            borderRadius="1.7rem"
            color="#DBA83D"
            fontSize="1.2rem"
            className="nft__method"
          >
            {item.nftAssetTypeId % 2 === 0 ? (
              <img src={diamondIcon} alt="" />
            ) : (
              <img src={artworkIcon} alt="" />
            )}
            {item.nftAssetTypeId % 2 === 0 ? 'Diamond' : 'Artwork'}
          </ButtonComponent>
          <ButtonComponent
            fontSize="1.6rem"
            width="13.5rem"
            height="4.8rem"
            borderRadius="4.8rem"
            color="#282c37"
            className="nft__offer"
          >
            Send Offer
          </ButtonComponent>
        </div>
      </div>
    </NftShop>
  );
};

export default NftShopItem;
