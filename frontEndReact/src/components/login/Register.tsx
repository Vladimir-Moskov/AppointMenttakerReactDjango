import React, { Component, SyntheticEvent } from 'react';
import { Form, Button, Container, OverlayTrigger, Tooltip, InputGroup } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Flip: any = require('react-reveal/Flip');

const validationSchema = Yup.object().shape({
  username: Yup.string()
  .min(3, "*Names must have at least 3 characters")
  .max(32, "*Names can't be longer than 32 characters")
  .required("*Name is required"),
  email: Yup.string().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string().required(),
  agree: Yup.bool().required(),
});

interface IRegisterState {
    username: string,
    email: string,
    password: string,
    errors: any[],
    pwdState: any,
    validated: boolean,
  }

class Register extends Component<{}, IRegisterState> {

    constructor(props: any) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: "",
        errors: [],
        pwdState: null,
        validated: false,
      };
      this.submitRegister = this.submitRegister.bind(this);
    }
  
    showValidationErr(elm: any, msg: any) {
      this.setState((prevState) => ({
        errors: [
          ...prevState.errors, {
            elm,
            msg
          }
        ]
      }));
    }
  
    clearValidationErr(elm: any) {
      this.setState((prevState) => {
        let newArr = [];
        for (let err of prevState.errors) {
          if (elm != err.elm) {
            newArr.push(err);
          }
        }
        return {errors: newArr};
      });
    }
  
    onUsernameChange(e: any) {
      this.setState({username: e.target.value});
      this.clearValidationErr("username");
    }
  
    onEmailChange(e: any) {
      this.setState({email: e.target.value});
      this.clearValidationErr("email");
    }
  
    onPasswordChange(e: any) {
      this.setState({password: e.target.value});
      this.clearValidationErr("password");
  
      this.setState({pwdState: "weak"});
      if (e.target.value.length > 8) {
        this.setState({pwdState: "medium"});
      } else if (e.target.value.length > 12) {
        this.setState({pwdState: "strong"});
      }
  
    }
  
    openPopup(e: any) {
      console.log("Hello world!");
    }
  
    submitRegister(event: any/*SyntheticEvent*/) {
      event.preventDefault();
      event.stopPropagation();
      console.log(this.state);
      console.log(event);
      const form: any = event.currentTarget;
      console.log(form.checkValidity());

    /*  if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }*/
/*
      if (this.state.username == "") {
        this.showValidationErr("username", "Username Cannot be empty!");
      }
      if (this.state.email == "") {
        this.showValidationErr("email", "Email Cannot be empty!");
      }
      if (this.state.password == "") {
        this.showValidationErr("password", "Password Cannot be empty!");
      }
  */
    }
  
    render() {
      const { validated }: any = this.state;
      console.log(validated);
      
      let usernameErr = null,
        passwordErr = null,
        emailErr = null;
  
      for (let err of this.state.errors) {
        if (err.elm == "username") {
          usernameErr = err.msg;
        }
        if (err.elm == "password") {
          passwordErr = err.msg;
        }
        if (err.elm == "email") {
          emailErr = err.msg;
        }
      }
  
      let pwdWeak = false,
        pwdMedium = false,
        pwdStrong = false;
  
      if (this.state.pwdState == "weak") {
        pwdWeak = true;
      } else if (this.state.pwdState == "medium") {
        pwdWeak = true;
        pwdMedium = true;
      } else if (this.state.pwdState == "strong") {
        pwdWeak = true;
        pwdMedium = true;
        pwdStrong = true;
      }
  
      return (
        <Translation>
        { t => <Container >
          
          <Flip bottom>
          <Formik initialValues={{ username:"", email:"", password:"", passwordConfirm:"", agree:false}}
          validationSchema={validationSchema}
          onSubmit={this.submitRegister}
          >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
          <Form onSubmit={this.submitRegister} className="LoginForm" noValidate validated={validated} >   
            <h2>{t('REGISTER_TITLE')}</h2>
            <Form.Group controlId="formUserName">
              <Form.Label>{t('LOGIN_USER_NAME_LABEL')}</Form.Label>
              <Form.Control required name="username"
               type="username" placeholder={t('LOGIN_USER_NAME_PLACE_HOLDER')} className="login-input"
               value={values.username}
               onChange={handleChange}
               isValid={touched.username && !errors.username}
               onBlur={handleBlur}
               isInvalid={!!errors.username}
               />
               <Form.Control.Feedback type="valid">Correct User Name</Form.Control.Feedback>
               <Form.Control.Feedback type="invalid">
              Please choose a correct username.{errors.username}
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formUserEmail">
              <Form.Label>{t('REGISTER_USER_EMAIL_LABEL')}</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>

                <Form.Control type="text" name="email"
                 placeholder={t('REGISTER_USER_EMAIL_EXAMPLE')} className="login-input"/>
                
              </InputGroup>
              <Form.Text className="text-muted"> {t('REGISTER_USER_EMAIL_PLACE_HOLDER')}</Form.Text>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>{t('LOGIN_PASSWORD_LABEL')}</Form.Label>
              <Form.Control type="password" name="password" placeholder={t('LOGIN_PASSWORD_PLACE_HOLDER')} />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>{t('REGISTER_CONFIRM_PASSWORD_LABEL')}</Form.Label>
              <Form.Control type="password" name="passwordConfirm" placeholder={t('REGISTER_CONFIRM_PASSWORD_PLACE_HOLDER')} />
            </Form.Group>
            <Form.Group>
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                name="agree"
              />
            </Form.Group>

            <Button block size="lg" variant="primary" type="submit">
            {t('REGISTER_SIGNUP_BUTTON_LABEL')}
            </Button>
          </Form>
           )}</Formik> 
        </Flip>
       
{/* 
        
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"
                onChange={this
                .onUsernameChange
                .bind(this)}/>
              <small className="danger-error">{usernameErr
                  ? usernameErr
                  : ""}</small>
            </div>
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="login-input"
                placeholder="Email"
                onChange={this
                .onEmailChange
                .bind(this)}/>
              <small className="danger-error">{emailErr
                  ? emailErr
                  : ""}</small>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                onChange={this
                .onPasswordChange
                .bind(this)}/>
              <small className="danger-error">{passwordErr
                  ? passwordErr
                  : ""}</small>
  
              {this.state.password && <div className="password-state">
                <div
                  className={"pwd pwd-weak " + (pwdWeak
                  ? "show"
                  : "")}></div>
                <div
                  className={"pwd pwd-medium " + (pwdMedium
                  ? "show"
                  : "")}></div>
                <div
                  className={"pwd pwd-strong " + (pwdStrong
                  ? "show"
                  : "")}></div>
              </div>}
  
            </div>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
            <span className="d-inline-block">
                <Button disabled style={{ pointerEvents: 'none' }}>
                Register
                </Button>
            </span>
            </OverlayTrigger>
           
  
          </div>
        </div>*/}
         </Container>}
        </Translation>

  
      );
  
    }
  
  }

  export default Register;