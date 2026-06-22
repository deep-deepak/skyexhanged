import Layout from "@/layout/Layout";
import { blogPosts } from "../../data/blogData";
import { Container, Row, Col } from "react-bootstrap";
import Seo from "@/common/Seo";

export async function getStaticPaths() {
    const paths = blogPosts.map((post) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const blog = blogPosts.find((post) => post?.slug === params.slug);

    if (!blog) return { notFound: true };

    return { props: { blog } };
}

const BlogDetails = ({ blog }) => {
    return (
        <Layout>
            <Seo title={blog.metaTitle} descrption={blog.metaDescription} />
            <Container className="mt-4" style={{ paddingTop: '150px' }}>
                <Row className="justify-content-center">
                    <Col lg={10} md={12}>
                        <h1 className="text-center mb-3">{blog.title}</h1>
                        {blog.hideFeaturedImage !== true && (
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="img-fluid rounded mb-4 w-100"
                                style={{ maxHeight: '450px', objectFit: 'cover' }}
                            />
                        )}
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} className="blog-content" />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default BlogDetails;
