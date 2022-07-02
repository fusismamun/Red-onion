import React from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import './Home.css';
const Home = () => {
    return (
        <>
            <div className='background'>
            <Container>
                <div>
                <h1 className='position-absolute top-50 start-50 translate-middle fs-2'>Best food waiting for your belly</h1>
                <input className='home-input ' type="Search" placeholder='Search food items' />
                </div>
                <div>
                    <button className='btn-regular position-absolute top-50 start-50 translate-middle'>Search</button>
                </div>
                
            </Container>
            </div>
        </>
    );
};

export default Home;