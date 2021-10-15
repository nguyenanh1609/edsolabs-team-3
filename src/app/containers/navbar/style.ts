import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft';
import { Row, Button, Container } from 'reactstrap';
import styled from 'styled-components';
export const RowNavBar = styled(Row)`
  max-height: 100px;
  padding: 20px 30px;
  background-color: #282c37;
  color: #d1d1d3;
  border-bottom: 1px solid #4f4f4f;
  @media (max-width: 600px) {
    padding: 0px 16px;
    max-height: 56px;
    min-height: 56px;
  }
`;
export const AccountZone = styled.div`
  display: inline-block;
  position: relative;
  & > img {
    width: 31px;
    height: 31px;
    margin-left: 20px;
  }
  & > span {
    margin-left: 7px;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
  }
  & > ul {
    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%),
      0 3px 14px 2px rgb(0 0 0 / 12%);
    list-style-type: none;
    padding: 0;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    background-color: red;
    position: absolute;
    top: 42px;
    border-radius: 10px;
    background-color: rgb(62, 65, 75);
    margin: 0;
    hr {
      padding: 0;
      margin: 0;
    }
    li {
      padding: 5px 10px;
      text-align: center;
      border-radius: 10px;
      :hover {
        background-color: rgb(92 94 102);
      }
    }
  }
  @media (max-width: 1440px) {
    & > span {
      display: none;
    }
  }
  @media (max-width: 600px) {
    & > img {
      display: none;
    }
  }
`;
export const ButtonNavBar = styled(Button)`
  margin-left: 20px;
  border: ${props => (props.color ? 'none' : '1px solid #dba83d')};
  box-sizing: border-box;
  border-radius: 25px;
  padding: 9px 20px;
  background: ${props =>
    props.color
      ? 'linear-gradient(221.15deg, #BD8727 0%, #FFD574 49.02%, #FECA50 62.02%, #BD8727 101.47%)'
      : 'transparent'};

  &:hover {
    opacity: 0.7;
    transition: all ease-in-out 0.5s;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    color: ${props => (props.color ? '#282C37' : '#dba83d ')};
    line-height: 17px;
  }
  &:first-child {
    margin-left: 0px;
  }
  @media (max-width: 1352px) {
    margin-left: 10px;
  }
  @media (max-width: 1280px) {
    padding: 9px 10px;
  }
  @media (max-width: 1200px) {
    padding: 9px 20px;
  }
  @media (max-width: 900px) {
    display: ${props => (props.status ? 'inline-block ' : 'none')};
  }
  @media (max-width: 320px) {
    display: ${props => (props.status ? 'inline-block ' : 'none')};
    margin-left: 0px;
  }
`;
export const HamburgerMenu = styled.div`
  cursor: pointer;
  margin-left: 16px;
  display: none;
  svg {
    color: white;
    path {
      stroke: white;
    }
  }
  @media (max-width: 1024px) {
    display: inline-block;
    svg {
      color: white;
      path {
        stroke: white;
      }
    }
  }
`;
//menu mobi le
export const MenuMobile = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #171a23;
  border: 1px solid #fff;
  z-index: 999;
`;
export const AvatarAndName = styled.div`
  text-align: center;
  img {
    margin-top: 17px;
  }
  p {
    margin-top: 15px;
    font-size: 20px;
    color: #fff;
  }
`;
export const MenuSubMobile = styled.div`
  margin-top: 19px;
  div {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    padding: 11px 16px 13px 16px;
    margin: 1px 0px 0px 0px;
  }
`;
interface activeMenuMobile {
  status: boolean;
}
export const ActiveMenuMobile = styled.div<any>`
  background-color: ${(p: activeMenuMobile) => (p.status ? '#282c37' : 'none')};
  .active {
    color: ${(p: activeMenuMobile) => (p.status ? '#DBA83D' : '#fff')};
  }
`;
export const AiOutlineLefts = styled(AiOutlineLeft)`
  transform: ${props => (props.children ? 'rotate(270deg)' : '')};
`;
export const MenuSubDown = styled.div`
  padding: 0px !important;
  div {
    padding-left: 40px;
    background-color: #282c37;
    .active {
      color: #dba83d;
    }
  }
`;
export const MenuBorrowerProfile = styled.div`
  padding: 0px !important;
  background-color: transparent !important;
  div {
    margin-top: 1px;
    background-color: #282c37;
    padding-left: 71px;
  }
`;
export const HeaderHome = styled.header`
  #fixed__Header {
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    z-index: 1000;
    padding: 0px;
    overflow-y: auto;
    margin: 0px;
    ::-webkit-scrollbar {
      display: none;
    }
    ::-webkit-scrollbar-thumb {
      display: none;
    }
    & > div {
      padding: 10px;
      margin: 0px;
      & > div {
        padding: 0px;
      }
    }
  }
`;
export const Containers = styled(Container)``;
