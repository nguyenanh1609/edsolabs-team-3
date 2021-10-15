import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components/macro';
import { iconCoin } from '../../components/icon';
import P2PItem from './P2PItem';
const ColItem = styled(Col)`
  display: flex;
`;

const P2PList = (props: any) => {
  const lendData = props.data?.content?.map(o => ({
    addressLend: o.associatedAddress,
    reputation: o.reputation,
    contract: o.completedContracts,
    interestMin: o.minInterestRate,
    interestMax: o.maxInterestRate,
    tags: ['Good LTV', 'Fast Disburement', 'Trusted'],
    collateral: o.p2PLenderPackages[0].acceptableAssetsAsCollateral.map(e => ({
      address: e.address,
      symbol: e.symbol,
    })),
    icons: iconCoin.map(o => o.url),
  }));
  return (
    <Row>
      {lendData?.slice(0, 2).map((item, idx) => (
        <ColItem key={idx} className="col-12 col-md-6 col__item">
          {' '}
          <P2PItem item={item} />
        </ColItem>
      ))}
    </Row>
  );
};

export default P2PList;
