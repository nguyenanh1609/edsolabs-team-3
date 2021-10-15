import styled from 'styled-components';

export const P2P = styled.div`
  background-color: #282c37;
  border-radius: 2rem;
  padding: 2rem 1.7rem 2.4rem;
  color: #d1d1d3;
  letter-spacing: 0.04rem;
  margin-bottom: 2.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  .lender {
    &__name {
      display: flex;
      & span {
        max-width: 90%;
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.4rem;
        text-decoration-line: underline;
        color: #2596ff;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
      }
      & img {
        margin-left: 1.2rem;
      }
    }
    &__rate {
      color: #ffffff;
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2rem;
      display: flex;
      align-items: center;
      margin-top: 0.8rem;
      & img {
        margin-right: 0.5rem;
      }
      span {
        margin: 0 1.6rem;
      }
    }
    &__sign {
      color: #d1d1d3;
      letter-spacing: 0.04rem;
      margin-bottom: 0;
    }
    &__interest {
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.4rem;
      margin-top: 1rem;
      color: #3fd762;
      & img {
        margin-left: 0.6rem;
      }
    }
    &__tag {
      list-style: none;
      font-style: normal;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: #dba83d;
      display: flex;
      flex-wrap: wrap;
      padding-left: 0;
      margin-top: 1.3rem;
      &-item {
        margin-right: 1.2rem;
        border: 0.1rem solid #dba83d;
        box-sizing: border-box;
        border-radius: 17px;
        padding: 0.6rem 0.8rem 0.4rem;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        & img {
          margin-right: 0.9rem;
        }
      }
    }
    &__collateral {
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2rem;
      display: flex;
      align-items: center;
      color: #d1d1d3;
      flex-wrap: wrap;
      img {
        margin: 0 0.4rem;
        max-width: 2rem;
      }
    }
    &__button {
      background: linear-gradient(
        221.15deg,
        #bd8727 0%,
        #ffd574 49.02%,
        #feca50 62.02%,
        #bd8727 101.47%
      );
      margin: 2.8rem auto 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      flex-shrink: 0;
    }
  }
  @media screen and (max-width: 575px) {
    .lender {
      &__name {
        font-size: 1.6rem;
      }
      &__rate {
        font-size: 1.4rem;
      }
      &__interest {
        font-size: 1.8rem;
      }
      &__tag {
        font-size: 1.2rem;
      }
      &__collateral {
        margin-bottom: 3.4rem;
        font-size: 1.4rem;
        span {
          margin-bottom: 1.2rem;
          display: block;
          width: 100%;
        }
      }
      &__button {
        margin-top: 0;
      }
    }
  }
`;

export const TitlePersonal = styled.div`
  margin: 3rem 0 2rem 0;
  .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 0.04rem;

    &__title {
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.9rem;
      color: #ffffff;
    }
    &__link-view {
      font-size: 1.6rem;
      font-style: normal;
      color: #ffffff;
      font-weight: 500;
      line-height: 2rem;
      &:hover {
        color: #dba83d;
      }
    }
  }
  @media screen and (max-width: 575px) {
    display: none;
  }
  @media screen and (max-width: 1139px) {
    font-size: 1.6rem;
  }
`;
