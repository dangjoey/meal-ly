import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import facebookLogo from '../../assets/facebook-logo.svg'
import './style.scss'

const FacebookLoginButton = (props) => {

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_KEY}
      autoLoad={false}
      callback={props.responseFacebook}
      render={renderProps => (
        <div className="facebook-container">
          <button className="facebook-login" onClick={renderProps.onClick}>Continue with Facebook</button>
          <img alt="fb-logo" className="fb-logo" src={facebookLogo}></img>
        </div>
      )}
    />
  )
}

export default FacebookLoginButton;