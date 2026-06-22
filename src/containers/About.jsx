import React from 'react';
import { Container } from 'react-bootstrap';
import Seo from '@/common/Seo';
import PageHeading from '@/common/PageHeading';

export default function About() {
    return (
        <div>
            <Seo title="About SkyExchin" descrption="Learn about SkyExchin — your trusted partner for premium services." />
            <PageHeading title="About Us" image="/images/about-hero.jpg" />
            <Container className="py-5">
                <p className="text-muted text-center">About page content — design coming soon.</p>
            </Container>
        </div>
    );
}
