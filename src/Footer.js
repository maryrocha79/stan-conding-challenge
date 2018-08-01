import React, { Component } from 'react';
import './Footer.css';
import facebook from './assets/social/facebook-blue.svg';
import twitter from './assets/social/twitter-blue.svg';
import instagram from './assets/social/instagram-blue.svg';
import appStore from './assets/store/app-store.svg';
import playStore from './assets/store/play-store.svg';
import windowsStore from './assets/store/windows-store.svg';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer font-small blue">
          <div className="container text-center text-md-left">
            <div className="row ">
              <div className="col-6 align-self-start">
                <img src={facebook} alt="" className="social" />
                <img src={twitter} alt="" className="social" />
                <img src={instagram} alt="" className="social" />
              </div>
              <div className="col-6 align-self-end">
                <img src={appStore} alt="" className="store" />
                <img src={playStore} alt="" className="store" />
                <img src={windowsStore} alt="" className="store" />
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className="col align-self-center">
                <small className="font-weight-bold text-uppercase mt-3 mb-4">
                  Home
                </small>
              </div>
              <div className="col align-self-center">
                <small className="font-weight-bold text-uppercase mt-3 mb-4">
                  Terms and Conditions
                </small>
              </div>
              <div className="col align-self-center">
                <small className="font-weight-bold text-uppercase mt-3 mb-4">
                  Privacy Policy
                </small>
              </div>
              <div className="col align-self-center">
                <small className="font-weight-bold text-uppercase mt-3 mb-4">
                  Collection Statement
                </small>
              </div>
              <div className="col align-self-center">
                <small className="font-weight-bold text-uppercase mt-3 mb-4">
                  Help
                </small>
              </div>
              <div className="col align-self-center">
                <small className="font-weight-bold text-uppercase mt-3 mb-4">
                  Manage Account
                </small>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            © 2018 Copyright: DemoStriming All Rights Reserved
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
