import React from 'react';
import { useSelector } from 'react-redux';
import PawnShopItem from './PawnShopItem';

const PawnShopList = () => {
  const data = useSelector((state: any) => state.pawnShop.data);
  const dataPawnShops = data.content?.map(o => ({
    id: o.id,
    name: o.pawnShop.name,
    interest: o.interest,
    interestMin: o.interestMin,
    interestMax: o.interestMax,
    allowedLoanMax: o.allowedLoanMax,
    allowedLoanMin: o.allowedLoanMin,
    durationQtyMax: o.durationQtyMax,
    durationQtyMin: o.durationQtyMin,
    durationQtyType: o.durationQtyType,
    loanToValue: o.loanToValue,
    symbol: o.acceptableAssetsAsLoan[0].symbol,
    collateral: o.acceptableAssetsAsCollateral.map(e => e.symbol),
    reputation: o.pawnShop.reputation,
    avatar: o.pawnShop.avatar,
    type: o.type,
    isFavorite: o.isFavourite,
  }));
  return (
    <>
      {dataPawnShops?.map((item, idx) => (
        <PawnShopItem key={idx} item={item} />
      ))}
    </>
  );
};

export default PawnShopList;
