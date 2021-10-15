/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.css';
import { PageHome } from './pages/pageHome';
import { Not404 } from './containers/404';
import { PageSearch } from './pages/pageSearch';
import { PageSign } from './pages/pageSign';
import { PageSearchLend } from './pages/pageSearchLend';
import { PageSearchNft } from './pages/pageSearchNft';
export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        // titleTemplate="%s - React Boilerplate"
        // defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/">
          <Redirect to="/pawn" />
        </Route>
        <Route exact path="/pawn/lender/nft-result" component={PageSearchNft} />
        <Route exact path="/pawn" component={PageHome} />
        <Route exact path="/pawn/offer" component={PageSearch} />
        <Route exact path="/login">
          {localStorage.getItem('access_token') !== '' ? (
            <PageSign />
          ) : (
            <Redirect to="/pawn" />
          )}
        </Route>
        <Route exact path="/pawn/lender" component={PageSearchLend} />
        <Route component={Not404} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
