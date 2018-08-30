import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

//import logo from './logo.svg';
import './App.css';
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Landing from "../Landing/Landing";
import SurveyNew from "../SurveyNew/SurveyNew";

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/surveys" component={Dashboard}></Route>
            <Route path="/surveys/new" component={SurveyNew}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
