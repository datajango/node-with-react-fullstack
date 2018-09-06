import React, { Component } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className='Dashboard'>
        <h1>Surveys Dashboard</h1>

        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="large material-icons">chat_bubble_outline</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
