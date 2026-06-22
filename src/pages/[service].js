import Service from '@/common/Service';
import Layout from '@/layout/Layout';
import serviceData from '../data/api.json';

export async function getStaticPaths() {
    const paths = Object.keys(serviceData).map((serviceName) => ({
        params: { service: serviceName },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const data = serviceData[params.service];

    if (!data) return { notFound: true };

    return {
        props: {
            serviceData: data,
            serviceName: params.service,
        },
    };
}

const ServicePage = ({ serviceData, serviceName }) => {
    return (
        <Layout>
            <Service data={serviceData} serviceName={serviceName} />
        </Layout>
    );
};

export default ServicePage;
