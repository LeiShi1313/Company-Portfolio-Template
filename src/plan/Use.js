import React from 'react';
module.exports = React.createClass({
  render: function() {
    return (

      <div className="container">
        <h3>Use</h3>
        <p style={{textAlign: 'center', fontSize: 15, backgroundColor: '#00ffff'}}><span style={{backgroundColor: '#00ffff'}}><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width={110} height={97} /></span></p>
        <h1 style={{textAlign: 'center'}}><span style={{backgroundColor: '#00ffff'}}>Welcome to the TinyMCE &amp; Community Plugins demo!</span></h1>
        <h5 style={{textAlign: 'center'}}><span style={{backgroundColor: '#00ffff'}}>Note, this is not an "enterprise/premium" demo.</span><br /><span style={{backgroundColor: '#00ffff'}}>Visit the <a href="https://www.tinymce.com/pricing/#demo-enterprise">pricing page</a> to demo our premium plugins.</span></h5>
      </div>
    );
  }
});
