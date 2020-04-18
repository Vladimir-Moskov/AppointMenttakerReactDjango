import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import i18n from './../../i18n';
const Zoom: any = require('react-reveal/Zoom');

export class About extends Component {

    render(){
        return(
            <Translation>
            { t =>
            <Zoom>
            <Container fluid className="InfoContainer">
                <h2>{t('MAIN_FOOTER_ABOUT_TITLE')}</h2>
                <p>
                    <b>{t('ABOUT_AUTHOR_LABEL')}</b>: Volodymyr Moskov
                </p>
                <p>
                    <b>{t('ABOUT_START_DATE_LABEL')}</b>: 03-20-2020
                </p>
                <h4>{t('ABOUT_PROJECT_SUMMARY_LABEL')}</h4>
                <p>
                    {t('ABOUT_PROJECT_SUMMARY_TEXT')}
                </p>  
                
                    <h4>{t('ABOUT_TECH_STACK_LABEL')}</h4>
                    <section>
                        <h5>Back End:</h5>
                        <ul>
                            <li>Python</li>
                            <li>Django (django-rest-framework)</li>
                            <li>PostgreSQL</li>
                        </ul>
                        <h5>Front End:</h5>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Saga</li>
                            <li>Bootstrap</li>
                            <li>i18next</li>
                        </ul>
                    </section>
                 
                <p>
                    <b>{t('ABOUT_PROJECT_WIKI_LABEL')}</b>: 
                    <a href="https://proactionca.ent.cgi.com/confluence/pages/viewpage.action?pageId=61253059">
                     Project - Python/Django + React</a>
                </p>
                <p>
                    <b>{t('ABOUT_PROJECT_REPO_LABEL')}</b>: 
                    <a href="https://proactionca.ent.cgi.com/bitbucket/projects/FSHE/repos/reactpy-appointmenttakerapp/browse">
                         reactpy-appointmenttakerapp</a>
                </p>
            </Container>
            </Zoom>
            }
           </Translation>
        );
    }
}

