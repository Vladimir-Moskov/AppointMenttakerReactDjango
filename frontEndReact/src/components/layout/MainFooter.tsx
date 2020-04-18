
import React, { Component, MouseEvent } from "react";
import { Nav, Navbar, NavItem, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Translation } from 'react-i18next';
import i18n from './../../i18n';
import { ROUTES } from '../../constants/routing';

const Fade: any = require('react-reveal/Fade');

export class MainFooter extends Component {
    constructor(props: any) {
        super(props);
       
    }


    render() {

        return (
            <Translation>{t =>
                <Fade bottom>
                <Navbar bg="primary" variant="dark" expand="lg" sticky="bottom"  className="justify-content-center">
                    
                    <Nav >
                        <NavLink className="nav-link" to={ROUTES.ABOUT} >{t('MAIN_FOOTER_ABOUT_TITLE')}<span className="sr-only">(current)</span></NavLink>
                    </Nav>
                   
                </Navbar >
                </Fade>}

            </Translation>
        );
    }
}