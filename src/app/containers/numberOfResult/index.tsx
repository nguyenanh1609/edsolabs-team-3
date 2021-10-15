import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NumberResultBorrow } from './style';

export function NumberOfResult(props) {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <NumberResultBorrow>
        {props.amount} {props.content}
      </NumberResultBorrow>
    </>
  );
}
