import React from 'react';
import ReactDOM from 'react-dom';

// Test router
import Overview from './Overview';
import About from './About';
import Post from './Post';

// Main routers
import Ecosystem from './Ecosystem';
import OverviewCompany from './Overview_of_the_company';
import Roadmap from './Roadmap';
import OverviewGoods from './Overview_of_the_goods';
import Plan from './Plan';

import './index.css';

import {
  BrowserRouter as Router,
  Route,
  Link
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
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/post">Post</Link></li>
          <li><Link to="/ecosystem">Ecosystem</Link></li>
          <li><Link to="/company">Overview of the Company></Link></li>
          <li><Link to="/roadmap">Roadmap></Link></li>
          <li><Link to="/goods">Overview of the Goods></Link></li>
          <li><Link to="/plan">Plan</Link></li>
        </ul>
      </nav>
    )
  }
}

const Footer = () => (
  <footer className="footer">
    <div className="container">
    this is footer
    </div>
  </footer>
)

const App = () => (
  <Router>
    <div className="wrapper">
      <Navigator />
      <main>
        <Route exact path="/" component={Overview}/>
        <Route path="/about" component={About}/>
        <Route path="/post" component={Post}/>
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
