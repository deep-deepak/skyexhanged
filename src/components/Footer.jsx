import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1B2760', color: '#fff', padding: '60px 0 20px' }}>
            <Container>
                <Row className="gy-4">
                    <Col lg={4} md={6}>
                        <h5 style={{ color: '#F47920', fontFamily: '"Oswald", sans-serif', letterSpacing: '2px' }}>
                            SKYEXCHIN
                        </h5>
                        <p className="mt-3" style={{ opacity: 0.8, fontSize: '0.95rem' }}>
                            {/* Company description goes here */}
                            Your trusted partner for premium services.
                        </p>
                    </Col>

                    <Col lg={2} md={6}>
                        <h6 style={{ color: '#F47920', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Links</h6>
                        <ul className="list-unstyled mt-3" style={{ fontSize: '0.9rem' }}>
                            {[
                                { label: 'Home', path: '/' },
                                { label: 'About Us', path: '/about' },
                                { label: 'Services', path: '/category' },
                                { label: 'Gallery', path: '/gallery' },
                                { label: 'Blog', path: '/blog' },
                                { label: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.path} className="mb-2">
                                    <Link href={link.path} style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    <Col lg={3} md={6}>
                        <h6 style={{ color: '#F47920', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</h6>
                        <ul className="list-unstyled mt-3" style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                            <li className="mb-2">Phone: +1-000-000-0000</li>
                            <li className="mb-2">Email: info@skyexchin.com</li>
                            <li className="mb-2">Address: To be updated</li>
                        </ul>
                    </Col>

                    <Col lg={3} md={6}>
                        <h6 style={{ color: '#F47920', textTransform: 'uppercase', letterSpacing: '1px' }}>Newsletter</h6>
                        <p className="mt-3" style={{ opacity: 0.8, fontSize: '0.9rem' }}>
                            Subscribe for updates and offers.
                        </p>
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Your email" />
                            <button
                                className="btn"
                                type="button"
                                style={{ background: '#F47920', color: '#fff', border: 'none' }}
                            >
                                →
                            </button>
                        </div>
                    </Col>
                </Row>

                <hr style={{ borderColor: 'rgba(255,255,255,0.15)', marginTop: '40px' }} />
                <p className="text-center mb-0" style={{ opacity: 0.6, fontSize: '0.85rem' }}>
                    © {new Date().getFullYear()} SkyExchin. All rights reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
