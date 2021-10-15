import styled from 'styled-components/macro';

export const Button = styled.button`
  font-size: 1.6rem;
  line-height: 2rem;
  color: #282c37;
  font-weight: 500;
  padding: 1.4rem 2.4rem;
  background: linear-gradient(
    221.15deg,
    #bd8727 0%,
    #ffd574 49.02%,
    #feca50 62.02%,
    #bd8727 101.47%
  );

  margin-bottom: 1rem;
  border-radius: 17.2rem;
  border: none;

  &:hover {
    opacity: 0.7;
    transition: all ease-in-out 0.5s;
  }
  @media (max-width: 540px) {
    font-size: 1.4rem;
    margin-bottom: 0;
  }
`;

export const P = styled.p`
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 3rem;
  @media (max-width: 992px) {
    margin-right: 30%;
  }
  @media (max-width: 540px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-bottom: 1.2rem;
    margin-right: 50%;
  }
`;

export const H4 = styled.h4`
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 4.4rem;
  color: #ffffff;
  margin-bottom: 1rem;
  @media (max-width: 540px) {
    line-height: 2rem;
    font-size: 1.6rem;
    margin-bottom: 0.7rem;
  }
`;

export const ContainerAbs = styled.div`
  background: linear-gradient(
      90.03deg,
      #131318 21.91%,
      #211e22 64.64%,
      rgba(23, 26, 35, 0) 68.82%
    ),
    url(${props => props.color}) no-repeat;
  background-position: 100%;
  background-size: cover;
  border-radius: 2rem;
  margin: 0 auto;
  @media (max-width: 992px) {
    background: linear-gradient(
        90.03deg,
        #131318 21.91%,
        #211e22 42.44%,
        rgba(23, 26, 35, 0) 68.82%
      ),
      url(${props => props.color}) no-repeat;
    background-position: 100%;
    background-size: cover;
  }
`;

export const Box = styled.div`
  padding: 4.8rem 0 4.8rem 9.8rem;
  @media (max-width: 992px) {
    padding: 2.4rem;
  }
  @media (max-width: 768px) {
    padding: 1.6rem;
  }
`;
