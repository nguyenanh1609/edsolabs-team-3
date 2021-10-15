import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import increaseIcon from '../../../images/arrow_increase.svg';
import decreaseIcon from '../../../images/arrow_decrease.svg';
import { Row } from 'reactstrap';
import { SortNav, NavItem } from './style';

const navList = [
  {
    value: 'Interest rate',
    src: increaseIcon,
    cusSort: o => (o === increaseIcon ? 'interest,desc' : 'interest,asc'),
  },
  {
    value: 'Loan to value',
    src: increaseIcon,
    cusSort: o => (o === increaseIcon ? 'loanToValue,desc' : 'loanToValue,asc'),
  },
  {
    value: 'Duration',
    src: increaseIcon,
    cusSort: o => (o === increaseIcon ? 'durationQty,desc' : 'durationQty,asc'),
  },
  {
    value: 'Limitation',
    src: increaseIcon,
    cusSort: o => (o === increaseIcon ? 'limitation,desc' : 'limitation,asc'),
  },
  {
    value: 'Pawnshop rating',
    src: increaseIcon,
    cusSort: o => (o === increaseIcon ? 'reputation,desc' : 'reputation,asc'),
  },
];
export function NavSortSearch(props) {
  const [items, setItems] = useState(navList);
  const [active, setActive] = useState('');

  const handleClick = v => {
    setItems(
      items.map(o =>
        o.value === v.value
          ? { ...o, src: o.src === increaseIcon ? decreaseIcon : increaseIcon }
          : o,
      ),
    );
    setActive(v.value);
    props.handleSort(v.cusSort(v.src));
  };
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <SortNav className="sort-nav">
        <Row className="sort-nav__list">
          {items.map((o, i) => (
            <NavItem
              key={i}
              active={active === o.value ? 1 : undefined}
              className="sort-nav__item"
              onClick={handleClick.bind(null, o)}
            >
              {o.value} <img src={o.src} alt="" />
            </NavItem>
          ))}
        </Row>
      </SortNav>
    </>
  );
}
