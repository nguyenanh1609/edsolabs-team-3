import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import P2PList from './P2PList';
import Title from './Title';
export function PersonalLending(props: any) {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Title />
      <P2PList data={props.data} />
    </>
  );
}
