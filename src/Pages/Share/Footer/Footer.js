import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footericon from '../../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='background'>
                <Container>
                    <div class="row">
                        <div class="col">
                            <img className='icon float-start' src={footericon} alt="" />
                        </div>
                        <div class="col-md-auto text-white">
                            <h6 className='end-section'>About Online food</h6>
                            <h6 className='end-section'>About Online food</h6>
                            <h6 className='end-section'>About Online food</h6>
                            <h6 className='end-section'>About Online food</h6>
                        </div>
                        <div class="col col-lg-3 text-white">
                            <h6 className='end-section'>About Online food</h6>
                            <h6 className='end-section'>About Online food</h6>
                            <h6 className='end-section'>About Online food</h6>
                            <h6 className='end-section'>About Online food</h6>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col">
                            <h6 className='float-start copyright'>Copyright © RedOnion</h6>
                        </div>
                        <div className="col-md-auto text-white">
                            <h6 className='end-section'>Privacy Policy</h6>
                        </div>
                        <div className="col col-lg-3 text-white">
                            <h6 className='end-section'>Terms of Use</h6>
                        </div>
                        <div className="col col-lg-1 text-white">
                            <h6 className='end-section'>Pricing</h6>
                        </div>
                    </div>

                </Container>
            </div>
        </>
    );
};

export default Footer;