import React from 'react';
import './FooterContent.css';

const Footer = () => (
  <div className="row">
    <div className="col-md-3">
      <img src={require('./person_gesture_ok.png')} alt="" />
    </div>
    <div className="col-md-3">
      <img src={require('./person_gesture_no.png')} alt=""/>
    </div>
    <div className="col-md-3">
      <img src={require('./facepalming.png')} alt=""/>
    </div>
    <div className="col-md-3">
      <img src={require('./tipping_hand.png')} alt=""/>
    </div>
  </div>
);

export default Footer;
