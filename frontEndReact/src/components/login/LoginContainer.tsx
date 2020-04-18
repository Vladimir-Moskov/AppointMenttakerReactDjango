import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import { Nav, Container, Row, Col } from 'react-bootstrap';

interface IAppState {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  
}

class LoginContainer extends Component<{}, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  
  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  render(){
    const {isLoginOpen, isRegisterOpen} = this.state;
    return (
        <Container>

<Row className="centerForm">
            <Col xs={6} md={4}>
            <Nav fill variant="pills" defaultActiveKey="/login">
                <Nav.Item>
                <Nav.Link href="/login">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav.Item>
    
            </Nav>
        <div>
        <div className="box-controller">
          <div
            className={"controller " + (isLoginOpen
            ? "selected-controller"
            : "")}
            onClick={this
            .showLoginBox
            .bind(this)}>
            Login
          </div>
          <div
            className={"controller " + (isRegisterOpen
            ? "selected-controller"
            : "")}
            onClick={this
            .showRegisterBox
            .bind(this)}>
              Register
          </div>
        </div>
        {isLoginOpen &&
        <div className="box-container">
           <Login/>
        </div>
        }      
       {isRegisterOpen &&
        <div className="box-container">
          <Register/>
        </div>
      }
    </div> </Col>

    </Row>
     </Container>

    );
  }
}

export default LoginContainer;
