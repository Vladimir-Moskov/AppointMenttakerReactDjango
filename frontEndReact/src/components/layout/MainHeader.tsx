
import React, { Component, MouseEvent } from "react";
import { Nav, Navbar, NavItem, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Translation } from 'react-i18next';
import i18n from './../../i18n';
import { ROUTES } from '../../constants/routing';

const Fade: any = require('react-reveal/Fade');

export class MainHeader extends Component {
    constructor(props: any) {
        super(props);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(event: MouseEvent) {
        console.log(i18n.language);
        //TODO: move it to redux
        if (i18n.language == 'en') {
            i18n.changeLanguage('fr');
        }
        else if (i18n.language == 'fr') {
            i18n.changeLanguage('en');
        }
    }

    render() {
        const logedin: boolean = false;

        return (
            <Translation>{t =>
                <Fade top>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href={ROUTES.HOME}>Appointment Maker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav >
                        <NavLink className="nav-link" to={ROUTES.ABOUT} >{t('MAIN_FOOTER_ABOUT_TITLE')}<span className="sr-only">(current)</span></NavLink>
                    </Nav>
                    {logedin &&
                        <Nav className="mr-auto" defaultActiveKey={ROUTES.HOME} variant="pills">
                            <NavLink className="nav-link" to={ROUTES.DEFAULT}>{t('MAIN_HEADER_HOME')}<span className="sr-only">(current)</span></NavLink>
                        </Nav>
                    }
                    {!logedin &&
                        <Nav className="mr-auto" />
                    }
                    <div className="m-1">
                        <Button variant="info" onClick={this.changeLanguage}>{t('MAIN_HEADER_CHANGE_LANGUAGE')}</Button>
                    </div>


                    {!logedin &&
                        <Nav className="justify-content-end" fill variant="pills" defaultActiveKey="/login">
                            <NavItem>
                                <NavLink className="nav-link" to={ROUTES.LOGIN}>{t('MAIN_HEADER_LOGIN')}<span className="sr-only">(current)</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to={ROUTES.SIGNIN}>{t('MAIN_HEADER_SIGNIN')}<span className="sr-only">(current)</span></NavLink>
                            </NavItem>
                        </Nav>
                    }
                    {logedin &&
                        <Nav className="justify-content-end" fill variant="pills">
                            <Nav.Item>
                                <Nav.Link href={ROUTES.LOGIN}>{t('MAIN_HEADER_LOGOUT')}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    }
                </Navbar >
                </Fade>}

            </Translation>
        );
    }
}