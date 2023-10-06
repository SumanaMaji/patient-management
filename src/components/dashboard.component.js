import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../dashboard.css';
import { NavLink } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import logo from '../assets/images/logo.png';
import Listings from '../pages/Listings';
import { Link } from 'react-router-dom'
import Sidebar from '../common/Sidebar';

const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
            <div style={{ display: 'flex', margin: 0, padding: 0, }}>
              <Sidebar />
                <main style={{ width: '100%', padding: '20px', backgroundColor: '#e9e9e9', }}>
                    <Container>
                        Dashboard
                        <div className='col-md-12 ms-2'>
                                <Card className='cards'>
                                    <Card.Header as="h5">Listings</Card.Header>
                                    <Card.Body>
                                        <Card.Title style={{ color: '#000' }}>Patient Listings</Card.Title>
                                        <Card.Text>
                                            Hello Admin, Welcome To Dashboard...
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                    </Container>
                </main>
            </div>
    );
}

export default Dashboard;
