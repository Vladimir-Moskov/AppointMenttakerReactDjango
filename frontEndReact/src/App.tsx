import React, { Component } from 'react';
import './App.css';
import Login from './components/login/Login';
import Register from './components/login/Register';
import { Container, Row, Col } from 'react-bootstrap';
import { MainHeader, Home, MainFooter, About } from './components';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ROUTES } from './constants/routing';

interface IAppState {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  isAuthorized: boolean;
}

class App extends Component<{}, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      isAuthorized: false,

    };
  }

  
  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  render(){
    const {isLoginOpen, isRegisterOpen, isAuthorized} = this.state;
    console.log(`isAuthorized = ${isAuthorized}`);
    return (
      <Container fluid className="App">
         <MainHeader />
        
      <Switch>
        <Route exact path={ROUTES.LOGIN}  component={Login} />
        <Route exact path={ROUTES.SIGNIN}  component={Register} />
        <Route exact path={ROUTES.ABOUT}  component={About} />
        {isAuthorized ?
          <>
          <Route exact path={ROUTES.DEFAULT}  component={Home}/>
          <Route exact path={ROUTES.HOME}  component={Home}/>
          </>: 
          <Redirect to={ROUTES.LOGIN} />
        }


      </Switch>

     </Container>
     

    );
  }
}

export default App;
