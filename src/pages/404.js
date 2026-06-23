import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/layout/Layout';

export default function Custom404() {
    return (
        <Layout>
            <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
                <Row className="text-center">
                    <Col>
                        <h1 className="display-1" style={{ color: '#F5C518' }}>404</h1>
                        <h2>Page Not Found</h2>
                        <p className="lead">The page you&apos;re looking for doesn&apos;t exist.</p>
                        <Link href="/" passHref>
                            <Button style={{ background: '#1B2760', border: 'none' }} size="lg">
                                Go Back Home
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}
