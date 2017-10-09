import React from 'react';
import ReactDOM from 'react-dom';

// Main routers
import Overview from './overview/Overview';
import Ecosystem from './ecosystem/Ecosystem';
import About from './about/About';
import Products from './products/Products';
import Plan from './plan/Plan';

// Footer
import FooterContent from './footer/FooterContent';

import './index.css';

import {
  BrowserRouter as Router,
  Redirect,
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
          <li><NavLink to="/overview" activeStyle={{ color: 'orangered' }}>Overview</NavLink></li>
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
        <Route exact path="/" render={() => (
          <Redirect to="/overview"/>
        )}/>
        <Route exact path="/overview" component={Overview}/>
        <Route exact path="/ecosystem" component={Ecosystem}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/plan" component={Plan}/>
        <Route exact path="/about" component={About}/>
      </main>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
