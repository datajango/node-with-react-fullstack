import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Payments from '../Payments/Payments';
import './Header.css';

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Sign-in with Google</a></li>;
      default:
        return [
          <li className="navitem" key="1"><Payments/></li>,
          <li className="navitem" key="3">Credits: {this.props.auth.credits}</li>,
          <li className="navitem" key="2"><a href="/api/logout">Sign-out</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">FullStack</Link>
          <ul className="right">            
            { this.renderContent() }
          </ul>
        </div>
      </nav>
    );
  }
}

/*
function mapStateToProps(state) {
  return { auth: state.auth };
}
*/

function mapStateToProps({ auth }) {
  return { auth };
}


export default connect(mapStateToProps)(Header);
