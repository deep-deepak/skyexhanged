import PageHeading from '@/common/PageHeading';
import Seo from '@/common/Seo';
import Layout from '@/layout/Layout';

export default function GalleryPage() {
    return (
        <Layout>
            <Seo title="Gallery | SkyExchin" descrption="Browse SkyExchin's project gallery." />
            <PageHeading title="Gallery" image="/images/gallery-hero.jpg" />
            
        </Layout>
    );
}
