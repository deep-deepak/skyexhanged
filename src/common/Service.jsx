import { useRouter } from 'next/router';
import React from 'react';
import Seo from './Seo';
import PageHeading from './PageHeading';
import { Container } from 'react-bootstrap';

export default function Service({ data, serviceName }) {
    const router = useRouter();

    if (router.isFallback) return <div>Loading...</div>;
    if (!data) return <div>Service not found</div>;

    return (
        <div>
            <Seo
                title={`${data.heroSection.title} | SkyExchin`}
                descrption={data.heroSection.description[0]}
            />
            <PageHeading title={data.heroSection.title} image={data.heroSection.image} />
            <Container className="py-5">
                <p className="text-muted text-center">Service page content — design coming soon.</p>
            </Container>
        </div>
    );
}
