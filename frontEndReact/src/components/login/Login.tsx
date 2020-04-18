import React, { Component, SyntheticEvent } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Translation } from 'react-i18next';
const Flip: any = require('react-reveal/Flip');

class Login extends Component {

    constructor(props: any) {
      super(props);
      this.state = {};
      this.submitLogin = this.submitLogin.bind(this);
    }
  
    submitLogin(submitEvent: SyntheticEvent) {
      submitEvent.preventDefault();
    }
  
    render() {

      return (
        <Translation>
        { t => <Container>
          
          <Flip top>
          <Form onSubmit={this.submitLogin} className="LoginForm">   
            <h2>{t('LOGIN_TITLE')}</h2>
            <Form.Group controlId="formUserName">
              <Form.Label>{t('LOGIN_USER_NAME_LABEL')}</Form.Label>
              <Form.Control type="username" placeholder={t('LOGIN_USER_NAME_PLACE_HOLDER')} className="login-input"/>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>{t('LOGIN_PASSWORD_LABEL')}</Form.Label>
              <Form.Control type="password" placeholder={t('LOGIN_PASSWORD_PLACE_HOLDER')} />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label={t('LOGIN_REMEMBER_ME_LABEL')}/>
            </Form.Group>

            <Button block size="lg" variant="primary" type="submit">
            {t('LOGIN_LOGIN_BUTTON_LABEL')}
            </Button>
          </Form>
        </Flip>
        </Container>}
        </Translation>
      );
    }
  
  }

  export default Login;
