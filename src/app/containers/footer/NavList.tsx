import { HiArrowNarrowRight } from '@react-icons/all-files/hi/HiArrowNarrowRight';
import { Nav } from './style';

const NavList = () => {
  return (
    <Nav>
      <p className="title">Quick navigation</p>
      <a
        href="https://app.defiforyou.uk/defi-for-you-whitepaper.v2.pdf"
        className="nav-link"
      >
        Whitepaper <HiArrowNarrowRight />
      </a>
      <a
        href="https://app.defiforyou.uk/defi-for-you-whitepaper.v2.pdf"
        className="nav-link"
      >
        Get the mobile app <HiArrowNarrowRight />
      </a>
      <a
        href="https://app.defiforyou.uk/defi-for-you-whitepaper.v2.pdf"
        className="nav-link"
      >
        <span>
          Buy <span className="dfy"> DFY </span> on Exchanges
        </span>{' '}
        <HiArrowNarrowRight />
      </a>
    </Nav>
  );
};

export default NavList;
