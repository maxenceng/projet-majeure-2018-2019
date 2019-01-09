import React from 'react';
import { Provider } from 'react-redux';

import Index from '../Layout';
import store from '../store';

export default Component => (
  // eslint-disable-next-line react/prefer-stateless-function
  class Wrapper extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Index>
            <Component />
          </Index>
        </Provider>
      );
    }
  }
);
