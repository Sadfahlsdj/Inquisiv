import Header from '../components/Header';
import { Container, Row, Col, Button, Form, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

function HomePage() {
    return (
        <div>
            <Header isNeon={true}/>
            <Container className="text-center text-light">
                <h1 className="display-1 mt-4 fw-bold text-lightgreen-1">Inquisiv.</h1>
                <p className="lead">Streamlining the dropshipping process.</p>
                <div className="d-flex justify-content-center gap-3 my-4">
                    <Button variant="success" size="lg">
                        <Nav.Link href="/products">Start Now →</Nav.Link>
                    </Button>
                    <Button variant="secondary" size="lg">
                        Login →
                    </Button>
                </div>
                <div className="mt-5">
                    {/* image here */}
                </div>
            </Container>

            <Container className="text-center text-light my-5">
                <Row>
                    <Col md={4} className="mb-4">
                        <h3 className="text-lightgreen-1">word1 ⚡</h3>
                        <p>caption</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h3 className="text-lightgreen-1">word2 ✍️</h3>
                        <p>caption</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h3 className="text-lightgreen-1">word3 🔧</h3>
                        <p>caption</p>
                    </Col>
                </Row>
            </Container>

            <Container clasName="text-center text-light my-5">
                <Row className="justify-content-center">
                    <Col className="d-flex justify-content-around">
                        <div className="bg-dark text-light p-4 px-5 rounded">Enter your desired product</div>
                        <div className="bg-dark text-light p-4 px-5 rounded">Gain data and insights</div>
                        <div className="bg-dark text-light p-4 px-5 rounded">Generate custom ads</div>
                    </Col>
                </Row>
            </Container>

            <Container className="text-center text-light my-5">
                <h3>Sign up for our newsletter</h3>
                <Form className="d-flex justify-content-center gap-2 mt-3">
                    <Form.Control type="email" placeholder="Email address" style={{ width: '300px' }} />
                    <Button variant="success">Subscribe</Button>
                </Form>
                <p className="mt-3">email@gmail.com</p>
            </Container>

            <footer className="bg-dark py-4">
                <Container>
                    <Row>
                        <Col>
                            <p className="mb-0">© Inquisiv 2025</p>
                        </Col>
                        <Col className="text-end">
                        <Nav>
                            <Nav.Link href="#usecases" className="text-light">
                            Use cases
                            </Nav.Link>
                            <Nav.Link href="#resources" className="text-light">
                            Resources
                            </Nav.Link>
                        </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default HomePage;
