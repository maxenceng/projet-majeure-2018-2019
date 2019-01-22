import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './index.scss';
import Button from '../Button';
import InputList from '../InputList';

const failGoogle = (err) => {
  console.log(err);
};

const Subscribe = ({
  inputList,
  onChange,
  onSubmit,
  googleLogin,
  facebookLogin,
}) => (
  <div className="subPage">
    <div className="subForm">
      <form onSubmit={onSubmit} className="formulaire">
        <div className="inscription">Inscription</div>
        <InputList list={inputList} onChange={onChange} />
        <div className="validation">
          <Button type="submit">Confirmer</Button>
        </div>
        <div className="openIds">
          <div>
            <GoogleLogin
              className="openId"
              clientId="529637638584-qp9rgeeg1g0n63ml36kg572falfj6m1l.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={googleLogin}
              onFailure={failGoogle}
            />
          </div>
          <div>
            <FacebookLogin
              appId="501016000420647"
              autoLoad
              fields="name,email,picture"
              callback={facebookLogin}
              icon="fa-facebook"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
);

Subscribe.propTypes = {
  inputList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  googleLogin: PropTypes.func.isRequired,
  facebookLogin: PropTypes.func.isRequired,
};

export default Subscribe;
