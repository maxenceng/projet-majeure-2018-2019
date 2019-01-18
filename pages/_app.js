import React from 'react';
import { Provider, connect } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '../src/Layout';
import actions, { actionPropTypes } from '../src/actions';
import { getLocalStorageItem } from '../src/helpers/common';

import makeStore from '../src/store';

class MyApp extends App {
  static propTypes = {
    actions: actionPropTypes,
  }

  componentWillMount() {
    if (process.browser) {
      const { actions: { locationAction, getProfileAction } } = this.props;
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude: lat, longitude: lng } = position.coords;
          locationAction({
            lng,
            lat,
          });
        }, null, {
          enableHighAccuracy: true,
        });
      }
      if (getLocalStorageItem('userToken') && getLocalStorageItem('idUser')) {
        getProfileAction();
      }
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <PersistGate persistor={store.__persistor}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(connect(null, actions)(MyApp));
