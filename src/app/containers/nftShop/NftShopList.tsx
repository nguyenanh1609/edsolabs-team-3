import React from 'react';
import NftShopItem from './NftShopItem';

const NftShopList = (props: any) => {
  return (
    <>
      {props.dataNFTShopList?.map((item, idx) => (
        <NftShopItem key={idx} item={item} />
      ))}
    </>
  );
};

export default NftShopList;
