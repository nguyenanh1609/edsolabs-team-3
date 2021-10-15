import styled from 'styled-components/macro';

export const Paginate = styled.div`
  .paginate {
    &__list {
      margin: 5.5rem 0 6.9rem 0;
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        width: 3.2rem;
        height: 3.2rem;
        border: 0.1rem solid #d1d1d3;
        box-sizing: border-box;
        border-radius: 0.4rem;
        margin-right: 1.2rem;
        overflow: hidden;
        a,
        svg {
          font-style: normal;
          font-weight: 500;
          font-size: 1.6rem;
          line-height: 2rem;
          text-align: center;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
      }
      &:hover {
        /* background-color: #dba83d;
          border: none; */
        a {
          color: #ffffff !important;
        }
      }
    }
    &--disable {
      border: 0.1rem solid #74767b !important;
      svg {
        color: #74767b !important;
        font-size: 1.6rem;
      }
    }
    &--active {
      border: none !important;
      a {
        background-color: #dba83d;
        color: #ffffff !important;
      }
    }
  }
`;
