import React from 'react';


export default () => (
  <div className="container">
    <h3>Core Member</h3>
    <div className="row">
      <div className="col-md-3">
        <img src={require('./avatars/svg/boy-1.svg')} alt=""/>
        <h4>Peter</h4>
        <p>CEO</p>
        <p>XXX University</p>
        <p>FLAG Corp.</p>
      </div>
      <div className="col-md-3">
        <img src={require('./avatars/svg/boy-2.svg')} alt=""/>
        <h4>Mike</h4>
        <p>CTO</p>
        <p>YYY University</p>
        <p>FLAG Corp.</p>
      </div>
      <div className="col-md-3">
        <img src={require('./avatars/svg/girl-1.svg')} alt=""/>
        <h4>Marry</h4>
        <p>CFO</p>
        <p>ZZZ University</p>
        <p>FLAG Corp.</p>
      </div>
      <div className="col-md-3">
        <img src={require('./avatars/svg/girl-2.svg')} alt=""/>
        <h4>Lily</h4>
        <p>COO</p>
        <p>PPP University</p>
        <p>FLAG Corp.</p>
      </div>
    </div>
  </div>
);
