import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function myNavbar() {
    return (
        <Navbar expand="lg" className="bg-dark">
            <Container fluid>
                <Navbar.Brand href="#"> <img src="/assets/images/logo.png" alt="netflix logo" width={70} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#" className='text-white fw-bold'>Home</Nav.Link>
                        <Nav.Link href="#" className='text-white fw-bold'>Tv Shows</Nav.Link>
                        <Nav.Link href="#" className='text-white fw-bold'>Movies</Nav.Link>
                        <Nav.Link href="#" className='text-white fw-bold'>Recently Added</Nav.Link>
                        <Nav.Link href="#" className='text-white fw-bold'>My List</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant='dark'><i className="bi bi-search text-white"></i></Button>
                    </Form>
                    <Nav.Link href="#" className='text-white fw-bold'>KIDS</Nav.Link>
                    <Button variant='dark'><i className="bi bi-bell-fill text-white"></i></Button>
                    <Button variant='dark'><i className="bi bi-person-fill text-white"></i></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default myNavbar;