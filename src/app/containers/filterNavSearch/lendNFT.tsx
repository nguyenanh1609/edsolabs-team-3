import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import searchFilterNav from '../../../images/searchFilterNav.svg';
import closeFilterNav from '../../../images/closeFilterNav.svg';
import {
  Accordion,
  Bong,
  InputSearchNameFilter,
  Resetfilter,
  WarperFilterNav,
} from './style';
import { useHistory } from 'react-router';
import { LoanAmount } from 'app/components/icon';
export function FiterNavSearch(props: any) {
  const onchangeInputName = e => {
    props.onchangeInputName(e);
  };
  const collateralSymbols = e => {
    props.collateralSymbols(e);
  };
  const NFTtype = e => {
    props.NFTtype(e);
  };
  const durationTypes = e => {
    props.durationTypes(e);
  };
  const Assettype = e => {
    props.Assettype(e);
  };
  const history = useHistory();
  const queryString = require('query-string');
  const param = queryString.parse(history.location.search);
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <WarperFilterNav status={props.status}>
        <Resetfilter>
          <span onClick={() => props.clickResetAll()}>Reset filter</span>
          <img
            src={closeFilterNav}
            alt=""
            onClick={() => props.onClick()}
            style={{ cursor: 'pointer' }}
          />
        </Resetfilter>
        <InputSearchNameFilter>
          <div>
            <div>
              <img src={searchFilterNav} alt="" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search pawnshops"
                onChange={onchangeInputName}
                value={param.name === undefined ? '' : param.name}
              />
            </div>
          </div>
        </InputSearchNameFilter>
        <Accordion className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-heading1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapse1"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapse1"
              >
                Duration
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapse1"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-heading1"
            >
              <div className="accordion-body">
                <div className="checkbox__custom">
                  <input
                    type="checkbox"
                    name="Duration"
                    value="0"
                    onChange={durationTypes}
                    checked={
                      param.durationTypes === undefined
                        ? false
                        : param.durationTypes.includes('0')
                    }
                  />
                  <span>Week</span>
                </div>
                <div className="checkbox__custom">
                  <input
                    type="checkbox"
                    name="Duration"
                    value="1"
                    onChange={durationTypes}
                    checked={
                      param.durationTypes === undefined
                        ? false
                        : param.durationTypes.includes('1')
                    }
                  />
                  <span>Month</span>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-heading2">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapse2"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapse2"
              >
                NFT type
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapse2"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-heading2"
            >
              <div className="accordion-body">
                <div className="checkbox__custom">
                  <input
                    type="checkbox"
                    name="SoftNFT"
                    value="0"
                    onChange={NFTtype}
                    checked={
                      param.nftType === undefined
                        ? false
                        : param.nftType.includes('0')
                    }
                  />
                  <span>Soft NFT</span>
                </div>
                <div className="checkbox__custom">
                  <input
                    type="checkbox"
                    name="HardNFT"
                    value="1"
                    onChange={NFTtype}
                    checked={
                      param.nftType === undefined
                        ? false
                        : param.nftType.includes('1')
                    }
                  />
                  <span>Hard NFT</span>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-heading4">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapse4"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapse4"
              >
                Asset type
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapse4"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-heading4"
            >
              <div className="accordion-body">
                <div className="checkbox__custom">
                  <input
                    type="checkbox"
                    name="Assettype"
                    value="1"
                    onChange={Assettype}
                    checked={
                      param.assetType === undefined
                        ? false
                        : param.assetType.includes('1')
                    }
                  />
                  <span>Jewelry</span>
                </div>
                <div className="checkbox__custom">
                  <input
                    type="checkbox"
                    name="Assettype"
                    value="2"
                    onChange={Assettype}
                    checked={
                      param.assetType === undefined
                        ? false
                        : param.assetType.includes('2')
                    }
                  />
                  <span>Car</span>
                </div>
                <div className="checkbox__custom">
                  <input
                    type="checkbox"
                    name="Assettype"
                    value="3"
                    onChange={Assettype}
                    checked={
                      param.assetType === undefined
                        ? false
                        : param.assetType.includes('3')
                    }
                  />
                  <span>Gemstone</span>
                </div>
                <div className="checkbox__custom">
                  <input
                    type="checkbox"
                    name="Assettype"
                    value="4"
                    onChange={Assettype}
                    checked={
                      param.assetType === undefined
                        ? false
                        : param.assetType.includes('4')
                    }
                  />
                  <span>House and land</span>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Collateral accepted
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                {LoanAmount.map((item, index) => (
                  <div className="checkbox__custom" key={index}>
                    <input
                      type="checkbox"
                      name="Collateralaccepted"
                      value={item.value}
                      onChange={collateralSymbols}
                      checked={
                        param.loanSymbols === undefined
                          ? false
                          : param.loanSymbols.includes(item.value)
                      }
                    />
                    <span>
                      <img
                        src={item.url}
                        alt=""
                        style={{ width: '20px', height: '20px' }}
                      />
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Accordion>
      </WarperFilterNav>
      <Bong
        style={{ display: props.status ? 'block' : 'none' }}
        onClick={() => props.onClick()}
      ></Bong>
    </>
  );
}
