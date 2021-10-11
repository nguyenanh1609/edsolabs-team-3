import styled from 'styled-components/macro';
import vn from '../../../images/flag.vn.svg';
import en from '../../../images/flag.en.svg';
import { HiArrowNarrowRight } from '@react-icons/all-files/hi/HiArrowNarrowRight';

const AddressList = styled.div`
  ul {
    height: 33.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 0;
  }

  li {
    list-style: none;
    font-size: 1.4rem;
    line-height: 2.1rem;
    margin-bottom: 5.6rem;
    font-weight: 500;
  }
  @media screen and (max-width: 575px) {
    li {
      margin-bottom: 3rem;
    }
    .phone-LD {
      a {
        display: block;
        width: 18rem !important;
        line-height: 3rem;
      }
      img {
        margin-left: 1.7rem;
      }
    }
  }
`;
const AddressItem = styled.div`
  .title {
    color: #ffffff;
    font-weight: bold;
    padding-bottom: 2.4rem;
    margin: 0;
  }
  .phone {
    padding-bottom: 0.8rem;
  }
  a {
    text-decoration: none;
    color: #dba83d;
    display: flex;
    width: 15rem;
    justify-content: space-between;
  }
  .phone-LD {
    a {
      width: 30rem;
    }
  }
  .view-companies {
    width: 19rem;
    align-items: center;
    transition: 0.4s;
    &:hover {
      margin-left: 2rem;
    }
  }
  p {
    color: #9fa6b2;
  }
`;
export function Address() {
  return (
    <AddressList>
      <ul>
        <li>
          <AddressItem>
            <p className="title">DeFi For You - Hanoi Office</p>
            <div className="phone phone-VN">
              <a href="https://app.defiforyou.uk/tel:+84%209643%2066605">
                {' '}
                +84 9643 66605 <img src={vn} alt="vietnam" />
              </a>
            </div>
            <div className="phone phone-EN">
              <a href="https://app.defiforyou.uk/tel:+84%209643%2066605">
                {' '}
                +84 9644 41735 <img src={en} alt="england" />
              </a>
            </div>
            <p className="desc">
              BT NQ 25-15 Vinhomes Riverside, LongBien, Hanoi, Vietnam
            </p>
          </AddressItem>
        </li>
        <li className="london__item">
          <AddressItem>
            <p className="title">DeFi For You - London Office</p>

            <div className="phone phone-LD">
              <a href="https://app.defiforyou.uk/tel:+84%209643%2066605">
                {' '}
                +84 9644 41735 <img src={en} alt="england" /> Sean Mason - CFO
              </a>
            </div>
            <p className="desc">
              Office 32 19-21 Crawford Street, London, United Kingdom, WlH lPJ
            </p>
            <p className="desc">Registration Number: 13126050</p>
            <a
              href="https://find-and-update.company-information.service.gov.uk/company/13126050?fbclid=IwAR3Fm3QHdllfP_z1QIZ9e9UX-warFarV1XuwBqsxXyPl0M3k-BLSvkNdXuE"
              className="view-companies"
            >
              View on Companies House <HiArrowNarrowRight />
            </a>
          </AddressItem>
        </li>
      </ul>
    </AddressList>
  );
}
