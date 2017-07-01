import React from 'react';
import ReactDOM from 'react-dom';

// Main routers
import Ecosystem from './ecosystem/Ecosystem';
import OverviewCompany from './company/Overview_of_the_company';
import Roadmap from './roadmap/Roadmap';
import OverviewGoods from './goods/Overview_of_the_goods';
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
          <li><NavLink to="/ecosystem" activeStyle={{ color: 'orangered' }}>Ecosystem</NavLink></li>
          <li><NavLink to="/company" activeStyle={{ color: 'orangered' }}>Overview of the Company</NavLink></li>
          <li><NavLink to="/roadmap" activeStyle={{ color: 'orangered' }}>Roadmap</NavLink></li>
          <li><NavLink to="/goods" activeStyle={{ color: 'orangered' }}>Overview of the Goods</NavLink></li>
          <li><NavLink to="/plan" activeStyle={{ color: 'orangered' }}>Plan</NavLink></li>
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
        <IndexRoute component={Ecosystem} />
        <Route path="/ecosystem" component={Ecosystem}/>
        <Route path="/company" component={OverviewCompany}/>
        <Route path="/roadmap" component={Roadmap}/>
        <Route path="/goods" component={OverviewGoods}/>
        <Route path="/plan" component={Plan}/>
      </main>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
