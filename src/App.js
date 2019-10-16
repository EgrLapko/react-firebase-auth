import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Login from './components/Login/Login';
import './style.css'
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/Pages.js/MainPage';


export default class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state.currentUser));
        });
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="app">
        <Navbar currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" render={(props) => <MainPage {...props} currentUser={this.state.currentUser} />} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}

