import PageHeading from '@/common/PageHeading';
import Seo from '@/common/Seo';
import Layout from '@/layout/Layout';
import { Container } from 'react-bootstrap';

export default function ContactPage() {
    return (
        <Layout>
            <Seo title="Contact SkyExchin" descrption="Get in touch with SkyExchin for a free, no-obligation quote." />
            <PageHeading title="Contact Us" image="/images/contact-hero.jpg" />
            <Container className="py-5">
                <p className="text-muted text-center">Contact page — design coming soon.</p>
            </Container>
        </Layout>
    );
}
