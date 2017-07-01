import React from 'react';
import ReactDOM from 'react-dom';

// Main routers
import Index from './index/Index';
import Ecosystem from './ecosystem/Ecosystem';
import OverviewCompany from './about/Overview_of_the_company';
import Products from './products/Products';
import Plan from './plan/Plan';

// Footer
import FooterContent from './footer/FooterContent';

import './index.css';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'


class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { style: 'normal' };
    this.updateStyles = this.updateStyles.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.updateStyles)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateStyles);
  }
  updateStyles() {
    this.setState({
      style: (window.pageYOffset > 64) ? 'compact' : 'normal'
    });
  }
  render() {
    return (
      <nav id="navigator" className={this.state.style || 'normal'}>
        <ul className="container">
          <li><NavLink to="/" activeStyle={{ color: 'orangered' }}>Index</NavLink></li>
          <li><NavLink to="/ecosystem" activeStyle={{ color: 'orangered' }}>Ecosystem</NavLink></li>
          <li><NavLink to="/products" activeStyle={{ color: 'orangered' }}>Products</NavLink></li>
          <li><NavLink to="/plan" activeStyle={{ color: 'orangered' }}>Plan</NavLink></li>
          <li><NavLink to="/about" activeStyle={{ color: 'orangered' }}>About us</NavLink></li>
        </ul>
      </nav>
    )
  }
}

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <FooterContent/>
    </div>
  </footer>
);

const App = () => (
  <Router>
    <div className="wrapper">
      <Navigator />
      <main>
        <Route exact path="/" component={Index}/>
        <Route path="/ecosystem" component={Ecosystem}/>
        <Route path="/products" component={Products}/>
        <Route path="/plan" component={Plan}/>
        <Route path="/about" component={OverviewCompany}/>
      </main>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
