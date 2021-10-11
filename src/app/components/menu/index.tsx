import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
const Menu = styled(Col)`
  ul {
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    li {
      display: inline-block;
      padding-left: 36px;
      a {
        font-weight: 500;
        font-size: 1.6rem;
        text-decoration: none;
        color: #d1d1d3;
        :hover {
          color: #dba83d;
        }
      }
      .selected {
        transition: 1s all ease-in-out;
        color: #dba83d;
        span {
          position: relative;
          &::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 25px;
            height: 2px;
            background: #dba83d;
            border-radius: 1px;
          }
        }
      }
      @media (max-width: 1366px) {
        padding-left: 26px;
      }
    }
  }
  @media (max-width: 1440px) {
    & > ul {
      & > li {
        padding-left: 36px;
      }
    }
  }
  @media (max-width: 1366px) {
    & > ul {
      & > li {
        padding-left: 30px;
      }
    }
  }
  @media (max-width: 1280px) {
    & > ul {
      & > li {
        padding-left: 30px;
      }
    }
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
export function MenuNavbar() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Menu>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="selected">
              <span>Pawn</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/search" activeClassName="selected">
              <span>Brorow</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/login" activeClassName="selected">
              <span>Lend</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/111" activeClassName="selected">
              <span>NFT</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/22" activeClassName="selected">
              <span>My Account</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/2222" activeClassName="selected">
              <span>FAQ</span>
            </NavLink>
          </li>
        </ul>
      </Menu>
    </>
  );
}
