import ReactPaginate from 'react-paginate';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { BsChevronRight } from '@react-icons/all-files/bs/BsChevronRight';
import { BsChevronLeft } from '@react-icons/all-files/bs/BsChevronLeft';
import { Paginate } from './style';

export function Pagination(props: any) {
  const changePage = e => {
    props.editPageCount(e.selected);
  };
  return (
    <Paginate className="paginate">
      <ReactPaginate
        previousLabel={<BsChevronLeft />}
        nextLabel={<BsChevronRight />}
        pageCount={props.dataRender.total_pages}
        onPageChange={changePage}
        initialPage={0}
        containerClassName={'paginate__list'}
        previousLinkClassName={'paginate__prev'}
        nextLinkClassName={'paginate__next'}
        disabledClassName={'paginate--disable'}
        activeClassName={'paginate--active'}
      />
    </Paginate>
  );
}
