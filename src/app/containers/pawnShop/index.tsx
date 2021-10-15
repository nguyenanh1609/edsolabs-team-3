import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import PawnShopList from './PawnShopList';
export function PawnShop(props: any) {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <PawnShopList data={props.data}></PawnShopList>
    </>
  );
}
