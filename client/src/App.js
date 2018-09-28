import React, { PureComponent } from 'react';
import './App.css';
import Home from './components/features/HomePage/Home';
import Admin from './components/features/CMS/Admin';
import { Route, Switch, withRouter } from 'react-router-dom';
import NotFoundPage from './components/features/NotFoundPage/NotFoundPage';
import { Context } from './components/context/context';

class App extends PureComponent {
  state = {
    loading: false,
  }
  showSpinner = () => {
    this.setState({ loading: true });
  }
  hideSpinner = () => {
    this.setState({ loading: false });
  }
  render() {
    return (
      <Context.Provider value={{showSpinner: this.showSpinner, hideSpinner: this.hideSpinner}}>
          {
            this.state.loading && 
            <div className="loading">
              <div className="lds-ripple"><div></div><div></div></div>
            </div>
          }
          <Switch>
            <Route path='/admin' exact component={Admin}/>
            <Route path='/' exact component={Home}/>
            <Route component={NotFoundPage}/>
          </Switch>
      </Context.Provider>
    );
  }
}

export default withRouter(App);