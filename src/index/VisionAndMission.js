import React from 'react';

export default () => (
  <div className="container">
    <h2>Vision and Mission</h2>
    <div className="row">
      <div className="col-md-12">
        <p>LIFE IS NOT PERFECT. LIFE IS NOT EASY. LIFE IS GOOD.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <p>We see it when we believe it.  Each one of us has a choice: to focus our energy on obstacles or opportunities. To fixate on our problems, or focus on solutions.  We can harp on what’s wrong with the world  (see most news media), or we can cultivate what’s right with the world. What we focus on grows.</p>

        <p>That’s why the Life is Good community shares one simple, unifying mission: to spread the power of optimism.</p>

      </div>
      <div className="col-md-8">
        <video autoPlay controls>
          <source src={require('./video.mp4')} type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
);
