import * as React from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';

interface Props {
  id: number;
  path: any;
  title: string;
  description: string;
}

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 376px) {
    margin-bottom: 5rem;
    height: 9.3rem;
    flex-direction: row;
    text-align: left;
  }

  @media (max-width: 769px) {
    margin-bottom: 5rem;
  }
`;

const ItemOdd = styled(Item)`
  @media (max-width: 376px) {
    flex-direction: row;
    text-align: left;

    img {
      margin-right: 2.7rem;
    }
  }
`;

const ItemEven = styled(Item)`
  @media (max-width: 376px) {
    flex-direction: row-reverse;
    text-align: right;

    img {
      margin-left: 2.4rem;
    }
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.4rem;
  padding-top: 3.5rem;
  color: #ffffff;
  @media (max-width: 376px) {
    font-size: 1.8rem;
    padding-top: 1rem;
    line-height: 2.2rem;
  }
`;

const Description = styled.div`
  font-size: 1.6rem;
  line-height: 2rem;
  padding-top: 2rem;
  color: #ffffff;
  margin: auto;
  @media (min-width: 1920px) {
    width: 27.2rem;
    line-height: 1.7rem;
  }

  @media (max-width: 376px) {
    font-size: 1.4rem;
    line-height: 1.7rem;
    padding-top: 0.8rem;
  }
`;

export default function FeatureItem({ id, path, title, description }: Props) {
  return (
    <>
      <Col xs={12} lg={3} md={6}>
        {id % 2 === 0 && (
          <ItemEven>
            <img src={path} alt={title} />
            <div>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </div>
          </ItemEven>
        )}

        {id % 2 !== 0 && (
          <ItemOdd>
            <img src={path} alt={title} />
            <div>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </div>
          </ItemOdd>
        )}
      </Col>
    </>
  );
}
