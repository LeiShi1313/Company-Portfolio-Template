import React from 'react';



export default () => (
  <div className="container">
    <h3>Partners</h3>
    <div className="row">
      <div className="col-md-3">
        <img src={require('./companies/svg/windows.svg')} alt=""/>
        <h4>MCMC</h4>
        <p>FLAG Corp.</p>
      </div>
      <div className="col-md-3">
        <img src={require('./companies/svg/apple.svg')} alt=""/>
        <h4>Apple Pie</h4>
        <p>FLAG Corp.</p>
      </div>
      <div className="col-md-3">
        <img src={require('./companies/svg/500px.svg')} alt=""/>
        <h4>Five Hundred</h4>
        <p>FLAG Corp.</p>
      </div>
      <div className="col-md-3">
        <img src={require('./companies/svg/adobe.svg')} alt=""/>
        <h4>Adao Adao</h4>
        <p>FLAG Corp.</p>
      </div>
    </div>
  </div>
);
