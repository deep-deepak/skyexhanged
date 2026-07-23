import Layout from '@/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '../../data/blogData';

export async function getStaticPaths() {
    return {
        paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const blog = blogPosts.find((p) => p.slug === params.slug);
    if (!blog) return { notFound: true };
    const related = blogPosts.filter((p) => p.id !== blog.id).slice(0, 3);
    return { props: { blog, related } };
}

export default function BlogDetail({ blog, related }) {
    return (
        <Layout>
            <Head>
                <title>{blog.metaTitle}</title>
                <meta name="description" content={blog.metaDescription} />
            </Head>

            {/* HERO */}
            <div className="detail-hero">
                <div className="detail-hero-inner">
                    <span className="post-cat">{blog.category}</span>
                    <h1 className="detail-title">{blog.title}</h1>
                    <div className="detail-meta">
                        <span>{blog.date}</span>
                        <span className="meta-dot">·</span>
                        <span>{blog.readTime}</span>
                    </div>
                </div>
            </div>

            <div className="detail-page">
                <div className="detail-layout">

                    {/* ARTICLE */}
                    <article className="article-wrap">
                        {blog.hideFeaturedImage !== true && (
                            <div className="article-img-wrap">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    width={900}
                                    height={420}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        )}
                        <div
                            className="article-content"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </article>

                    {/* SIDEBAR */}
                    <aside className="sidebar">
                        <div className="sidebar-card" data-aos="fade-left">
                            <h3 className="sidebar-title">Quick Links</h3>
                            <ul className="sidebar-links">
                                <li><a href="https://wa.me/918146856853" target="_blank" rel="noopener noreferrer">💬 Get Skyexchange ID</a></li>
                                <li><a href="/#login">🔐 Login Help</a></li>
                                <li><a href="/#apk-guide">📱 Download App</a></li>
                                <li><a href="/#deposit">💰 Deposit Guide</a></li>
                                <li><a href="/#promotions">🎁 Promotions</a></li>
                                <li><Link href="/contact">📞 Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="sidebar-wa" data-aos="fade-left" data-aos-delay="100">
                            <p className="sidebar-wa-text">Need help? Chat with us instantly on WhatsApp</p>
                            <a href="https://wa.me/918146856853" target="_blank" rel="noopener noreferrer" className="btn-wa">
                                WhatsApp: +91 8146856853
                            </a>
                        </div>
                    </aside>
                </div>

                {/* RELATED */}
                {related.length > 0 && (
                    <div className="related-section" data-aos="fade-up">
                        <h2 className="related-heading">Related Articles</h2>
                        <div className="related-grid">
                            {related.map((post) => (
                                <Link key={post.id} href={`/blog/${post.slug}`} className="rel-card">
                                    <div className="rel-img-wrap">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            width={400}
                                            height={200}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="rel-body">
                                        <span className="post-cat">{post.category}</span>
                                        <h4 className="rel-title">{post.title}</h4>
                                        <span className="rel-date">{post.date}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="back-link-wrap">
                    <Link href="/blog" className="back-link">← Back to Blog</Link>
                </div>
            </div>

            <style jsx>{`
                /* HERO */
                .detail-hero {
                    background: linear-gradient(135deg, #111111 0%, #1c1c1c 60%, #2a1a00 100%);
                    padding: 130px 20px 48px;
                    border-bottom: 3px solid #F5C518;
                }
                .detail-hero-inner {
                    max-width: 860px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }
                .detail-title {
                    color: #ffffff;
                    font-size: clamp(1.4rem, 3.5vw, 2.2rem);
                    font-weight: 800;
                    margin: 0;
                    font-family: 'Poppins', Arial, sans-serif;
                    line-height: 1.3;
                }
                .detail-meta {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #aaa;
                    font-size: 13px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .meta-dot { color: #555; }

                /* PAGE */
                .detail-page {
                    background: #f7f7f7;
                    padding: 48px 20px 80px;
                    font-family: 'Poppins', Arial, sans-serif;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .detail-layout {
                    display: grid;
                    grid-template-columns: 1fr 300px;
                    gap: 36px;
                    align-items: flex-start;
                    margin-bottom: 60px;
                }

                /* ARTICLE */
                .article-wrap {
                    background: #fff;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
                }
                .article-img-wrap { height: 380px; overflow: hidden; }
                .article-content {
                    padding: 36px 40px 40px;
                    color: #333;
                    font-size: 15px;
                    line-height: 1.85;
                }

                /* SIDEBAR */
                .sidebar { display: flex; flex-direction: column; gap: 20px; position: sticky; top: 120px; }
                .sidebar-card {
                    background: #fff;
                    border-radius: 12px;
                    padding: 24px;
                    box-shadow: 0 2px 14px rgba(0,0,0,0.08);
                    border-top: 4px solid #F5C518;
                }
                .sidebar-title { font-size: 1rem; font-weight: 800; color: #111; margin: 0 0 16px; }
                .sidebar-links {
                    list-style: none;
                    margin: 0; padding: 0;
                    display: flex; flex-direction: column; gap: 10px;
                }
                .sidebar-links li a {
                    color: #444;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 600;
                    transition: color 0.2s;
                }
                .sidebar-links li a:hover { color: #F5C518; }
                .sidebar-wa {
                    background: #111;
                    border-radius: 12px;
                    padding: 24px;
                    text-align: center;
                }
                .sidebar-wa-text { color: #aaa; font-size: 13px; margin: 0 0 16px; line-height: 1.6; }
                .btn-wa {
                    display: block;
                    background: #25D366;
                    color: #fff;
                    font-weight: 700;
                    font-size: 13px;
                    padding: 11px 16px;
                    border-radius: 50px;
                    text-decoration: none;
                    transition: background 0.2s;
                }
                .btn-wa:hover { background: #1da851; }

                /* RELATED */
                .related-section { margin-bottom: 40px; }
                .related-heading {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: #111;
                    margin: 0 0 28px;
                    padding-bottom: 14px;
                    border-bottom: 3px solid #F5C518;
                    display: inline-block;
                }
                .related-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }
                .rel-card {
                    background: #fff;
                    border-radius: 12px;
                    overflow: hidden;
                    text-decoration: none;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .rel-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.12); }
                .rel-img-wrap { height: 160px; overflow: hidden; }
                .rel-body { padding: 16px; display: flex; flex-direction: column; gap: 8px; }
                .rel-title { font-size: 0.9rem; font-weight: 700; color: #111; margin: 0; line-height: 1.4; }
                .rel-date { font-size: 12px; color: #999; }

                /* BACK */
                .back-link-wrap { }
                .back-link {
                    display: inline-block;
                    color: #111;
                    font-weight: 700;
                    font-size: 14px;
                    text-decoration: none;
                    background: #F5C518;
                    padding: 10px 22px;
                    border-radius: 6px;
                    transition: background 0.2s;
                }
                .back-link:hover { background: #e6b800; }

                /* SHARED */
                .post-cat {
                    display: inline-block;
                    background: #fff3cd;
                    color: #b8860b;
                    font-size: 11px;
                    font-weight: 700;
                    padding: 3px 10px;
                    border-radius: 50px;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                }

                /* RESPONSIVE */
                @media (max-width: 900px) {
                    .detail-layout { grid-template-columns: 1fr; }
                    .sidebar { position: static; }
                    .related-grid { grid-template-columns: repeat(2, 1fr); }
                    .article-content { padding: 24px 20px; }
                }
                @media (max-width: 600px) {
                    .related-grid { grid-template-columns: 1fr; }
                    .article-img-wrap { height: 220px; }
                }
            `}</style>

            <style jsx global>{`
                .article-content h2 { font-size: 1.3rem; font-weight: 800; color: #111; margin: 28px 0 12px; }
                .article-content h3 { font-size: 1.1rem; font-weight: 700; color: #222; margin: 20px 0 10px; }
                .article-content p { margin: 0 0 16px; }
                .article-content ul, .article-content ol { padding-left: 22px; margin: 0 0 16px; }
                .article-content li { margin-bottom: 8px; }
                .article-content strong { color: #111; }
            `}</style>
        </Layout>
    );
}
