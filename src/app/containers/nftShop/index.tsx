import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NumberOfResult } from '../numberOfResult';
import NftShopList from './NftShopList';

export function NftShop(props: any) {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <NumberOfResult
        amount={props.dataLendNFT.total_elements}
        content="collateral offers match your search"
      />
      <NftShopList dataNFTShopList={props.dataLendNFT.content} />
    </>
  );
}
