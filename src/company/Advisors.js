import React from 'react';


export default () => (
  <div className="container">
    <h3>Advisors</h3>
    <div className="row">
      <div className="col-md-3">
        <img src={require('./avatars/svg/boy-3.svg')} alt=""/>
        <h4>Smith</h4>
        <p>Super University</p>
      </div>
      <div className="col-md-3">
        <img src={require('./avatars/svg/boy-4.svg')} alt=""/>
        <h4>Jones</h4>
        <p>Super University</p>
      </div>
      <div className="col-md-3">
        <img src={require('./avatars/svg/girl-3.svg')} alt=""/>
        <h4>Ashley</h4>
        <p>Super University</p>
      </div>
      <div className="col-md-3">
        <img src={require('./avatars/svg/girl-4.svg')} alt=""/>
        <h4>Evans</h4>
        <p>Super University</p>
      </div>
    </div>
  </div>
);
