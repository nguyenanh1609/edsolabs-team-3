import styled from 'styled-components/macro';

export const NftShop = styled.div`
  background: #282c37;
  border-radius: 2rem;
  padding: 2rem;
  margin-bottom: 2rem;
  letter-spacing: 0.04rem;
  position: relative;

  .nft {
    display: flex;
    flex-wrap: wrap;
    &__shop {
      display: flex;
      width: 70%;
    }
    &__img {
      width: 21.5rem;
      &-shop {
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        object-fit: cover;
      }
      &-label {
        position: absolute;
        left: -0.8rem;
      }
    }
    &__content {
      flex: 1;
      margin-left: 2rem;
      border-right: 0.1rem solid #9bcfff36;
    }
    &__name {
      font-style: normal;
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 2.9rem;
      color: #ffffff;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
    }
    &__star {
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2rem;
      color: #ffffff;
      margin-top: 0.8rem;
      display: flex;
      align-items: center;
      img {
        margin-right: 0.6rem;
      }
    }
    &__details {
      padding-left: 0;
      padding: 0.7rem 0;
      &-item {
        font-size: 1.6rem;
        list-style: none;
        display: flex;
      }
      &-label {
        color: #a2a3a7;
        min-width: 15rem;
      }
      &-result {
        color: #ffffff;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        &--blue {
          color: #2596ff;
          text-decoration: underline;
        }
        img {
          margin-right: 0.6rem;
          margin-bottom: 0.5rem;
        }
      }
    }
    &__interest {
      width: 30%;
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-end;
    }
    &__rate {
      &-label {
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.1rem;
        text-align: right;
        color: #a2a3a7;
      }
      &-result {
        font-style: normal;
        font-weight: 600;
        font-size: 3rem;
        line-height: 3.7rem;
        text-align: right;
        color: #3fd762;
      }
    }
    &__collateral {
      &-label {
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.1rem;
        color: #a2a3a7;
      }
      &-result {
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2rem;
        color: #ffffff;
      }
    }
    &__method {
      font-style: normal;
      font-weight: 500;
      line-height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 1.1rem;
      letter-spacing: 0.04rem;
      border: 0.1rem solid #dba83d;
      background: transparent;
      padding-top: 0.2rem;
      img {
        padding-bottom: 0.1rem;
      }
    }
    &__offer {
      background: linear-gradient(
        221.15deg,
        #bd8727 0%,
        #ffd574 49.02%,
        #feca50 62.02%,
        #bd8727 101.47%
      );
      border: none;
      margin-top: 6rem;
    }
  }
  @media screen and (max-width: 991px) {
    .nft {
      &__content {
        border-bottom: 0.1rem solid #9bcfff36;
        border-right: none;
      }
      &__interest {
        width: 100%;
        margin: 1.2rem auto 0;
        align-items: flex-start;
      }
      &__rate-label {
        text-align: left;
      }
      &__name {
        font-size: 1.8rem;
      }
      &__rate-result {
        font-size: 2rem;
      }
      &__offer {
        margin-top: 2.4rem;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .nft {
      &__img {
        margin: 0 auto;
      }
      &__content {
        flex: none;
        width: 100%;
        margin-top: 2rem;
        margin-left: 0;
      }
      &__details {
        padding: 2rem 0 0;
      }
    }
  }
`;
