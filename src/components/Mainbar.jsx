import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Primoblocco() {
    return (
        <div className='d-flex justify-content-between py-2 bg-dark px-3'>
            <div className='d-flex align-items-center'>
                <h1 className='text-white'>TV Show</h1>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic" className='ms-3 border border-secondary'>
                        Generi
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Azione</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Drammatico</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Horror</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Romantico</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className='d-flex'>
                <Button variant="dark">
                    <i className="bi bi-grid-fill"></i>
                </Button>
                <Button variant="dark">
                    <i className="bi bi-grid-3x3-gap-fill"></i>
                </Button>
            </div>
        </div>
    );
}

export default Primoblocco;