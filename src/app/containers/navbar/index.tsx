import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { Col } from 'reactstrap';
import avtar from '../../../images/avatarMenu.png';
import { GrMenu } from '@react-icons/all-files/gr/GrMenu';
import { GrClose } from '@react-icons/all-files/gr/GrClose';
import { useState } from 'react';
import { MenuNavbar } from 'app/components/menu';
import { Logo } from 'app/components/logo';
import avatarMenu from '../../../images/avatarMenu.png';
import { useHistory } from 'react-router';
import {
  AccountZone,
  ActiveMenuMobile,
  AiOutlineLefts,
  AvatarAndName,
  ButtonNavBar,
  Containers,
  HamburgerMenu,
  HeaderHome,
  MenuBorrowerProfile,
  MenuMobile,
  MenuSubDown,
  MenuSubMobile,
  RowNavBar,
} from './style';
import { useDispatch } from 'react-redux';
import { authActions } from 'redux/slices';
import { useEffect } from 'react';
import userApi from 'api/userApi';
export function Navbar(props) {
  const history = useHistory();
  const dispath = useDispatch();
  const [accName, setaccName] = useState<any>({});
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      userApi
        .getNameAcc(localStorage.getItem('access_token'))
        .then(res => setaccName(res));
    }
  }, []);
  const [openMenuMobile, setopenMenuMobile] = useState(false);
  const [statusMenuMobile, setstatusMenuMobile] = useState({
    Myaccount: false,
    BorrowerProfile: false,
    LenderProfile: false,
    NFT: false,
  });
  const openMenu = () => {
    setopenMenuMobile(!openMenuMobile);
    if (openMenuMobile === false) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  const [statusBlockLogout, setstatusBlockLogout] = useState(false);
  const logout = () => {
    dispath(authActions.logout());
    setstatusBlockLogout(!statusBlockLogout);
    history.push('/');
  };
  const onClickBlock = () => {
    setstatusBlockLogout(!statusBlockLogout);
  };
  const openDownMenuMobile = value => {
    switch (value) {
      case 'Myaccount':
        setstatusMenuMobile({
          ...statusMenuMobile,
          Myaccount: !statusMenuMobile.Myaccount,
        });
        break;
      case 'BorrowerProfile':
        setstatusMenuMobile({
          ...statusMenuMobile,
          BorrowerProfile: !statusMenuMobile.BorrowerProfile,
        });
        break;
      case 'LenderProfile':
        setstatusMenuMobile({
          ...statusMenuMobile,
          LenderProfile: !statusMenuMobile.LenderProfile,
        });
        break;
      case 'NFT':
        setstatusMenuMobile({
          ...statusMenuMobile,
          NFT: !statusMenuMobile.NFT,
        });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <HeaderHome>
        <Containers fluid id={openMenuMobile ? 'fixed__Header' : ''}>
          <RowNavBar>
            <Col className="p-0 col-xl-2 col-lg-3 col-md-4 col-5 d-flex justify-content-start align-items-center warper__logo">
              <Logo></Logo>
            </Col>
            <Col className="p-0 col-xl-10 col-lg-9 col-md-8 col-7 d-flex align-items-center justify-content-between">
              <MenuNavbar></MenuNavbar>
              <Col className="text-end flex-fill">
                <ButtonNavBar color={'gradiend'} status={''}>
                  <NavLink to="/">Become a Pawnshop</NavLink>
                </ButtonNavBar>
                <ButtonNavBar color={''} status={''}>
                  <NavLink to="/">Buy DFY</NavLink>
                </ButtonNavBar>
                <ButtonNavBar color={''} status={'true'}>
                  <NavLink to="/">Connect</NavLink>
                </ButtonNavBar>
                {localStorage.getItem('access_token') ? (
                  <AccountZone onClick={onClickBlock}>
                    <img src={avatarMenu} alt="" />
                    <span>{accName?.data?.name}</span>
                    {statusBlockLogout ? (
                      <ul>
                        <li>change pass</li>
                        <hr />
                        <li onClick={logout}>logout</li>
                      </ul>
                    ) : (
                      ''
                    )}
                  </AccountZone>
                ) : (
                  <ButtonNavBar color={''} status={''}>
                    <NavLink to="/login">Login</NavLink>
                  </ButtonNavBar>
                )}
                <HamburgerMenu onClick={openMenu}>
                  {openMenuMobile ? (
                    <GrClose size="28"></GrClose>
                  ) : (
                    <GrMenu size="28"></GrMenu>
                  )}
                </HamburgerMenu>
              </Col>
            </Col>
          </RowNavBar>
          {openMenuMobile ? (
            <>
              <MenuMobile>
                <AvatarAndName>
                  <img src={avtar} alt="" />
                  <p>admin</p>
                </AvatarAndName>
                <MenuSubMobile>
                  <div>Pawn</div>
                  <div>Staking</div>
                  <div>NFT</div>
                  <ActiveMenuMobile
                    status={statusMenuMobile.Myaccount}
                    className="d-flex justify-content-between"
                    onClick={() => openDownMenuMobile('Myaccount')}
                  >
                    <span className="active">My account</span>
                    <span>
                      <AiOutlineLefts>
                        {statusMenuMobile.Myaccount}
                      </AiOutlineLefts>
                    </span>
                  </ActiveMenuMobile>
                  {statusMenuMobile.Myaccount ? (
                    <MenuSubDown>
                      <div
                        className="d-flex justify-content-between"
                        onClick={() => openDownMenuMobile('BorrowerProfile')}
                      >
                        <span
                          className={
                            statusMenuMobile.BorrowerProfile ? 'active' : ''
                          }
                        >
                          Borrower Profile
                        </span>
                        <span>
                          <AiOutlineLefts>
                            {statusMenuMobile.BorrowerProfile}
                          </AiOutlineLefts>
                        </span>
                      </div>
                      {statusMenuMobile.BorrowerProfile ? (
                        <>
                          <MenuBorrowerProfile>
                            <div>Collateral</div>
                            <div>Contracts</div>
                          </MenuBorrowerProfile>
                        </>
                      ) : (
                        ''
                      )}
                      <div
                        className="d-flex justify-content-between"
                        onClick={() => openDownMenuMobile('LenderProfile')}
                      >
                        <span
                          className={
                            statusMenuMobile.LenderProfile ? 'active' : ''
                          }
                        >
                          Lender Profile
                        </span>
                        <span>
                          <AiOutlineLefts>
                            {statusMenuMobile.LenderProfile}
                          </AiOutlineLefts>
                        </span>
                      </div>
                      {statusMenuMobile.LenderProfile ? (
                        <>
                          <MenuBorrowerProfile>
                            <div>Offers sent</div>
                            <div>Contracts</div>
                            <div>Pawnshop Loan Packages</div>
                            <div>Loan requests</div>
                          </MenuBorrowerProfile>
                        </>
                      ) : (
                        ''
                      )}
                      <div>Staking</div>
                      <div
                        className="d-flex justify-content-between"
                        onClick={() => openDownMenuMobile('NFT')}
                      >
                        <span className={statusMenuMobile.NFT ? 'active' : ''}>
                          NFT
                        </span>
                        <span>
                          <AiOutlineLefts>
                            {statusMenuMobile.NFT}
                          </AiOutlineLefts>
                        </span>
                      </div>
                      {statusMenuMobile.NFT ? (
                        <>
                          <MenuBorrowerProfile>
                            <div>NFT List</div>
                            <div>NFT Auction</div>
                          </MenuBorrowerProfile>
                        </>
                      ) : (
                        ''
                      )}
                    </MenuSubDown>
                  ) : (
                    ''
                  )}
                  <div>FAQ</div>
                  <div>Change password</div>
                  <div>Log out</div>
                </MenuSubMobile>
              </MenuMobile>
            </>
          ) : (
            ''
          )}
        </Containers>
      </HeaderHome>
    </>
  );
}
