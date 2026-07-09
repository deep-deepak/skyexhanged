import Layout from '@/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '../../data/blogData';

const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateDiff = new Date(b.date) - new Date(a.date);
    return dateDiff !== 0 ? dateDiff : Number(b.id) - Number(a.id);
});

export default function BlogPage() {
    return (
        <Layout>
            <Head>
                <title>Sky Exchange Blog | Latest Cricket News, Tips &amp; Sports Guides</title>
                <meta name="description" content="Stay updated with the latest cricket news, betting tips, match insights, & sports exchange guides on the Sky Exchange Blog. Read more!" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <link rel="canonical" href="https://skyexchin.com/blog/" />
            </Head>

            {/* HERO */}
            <div className="blog-hero">
                <h1 className="blog-hero-title">Skyexchange Blog</h1>
                <p className="blog-hero-sub">Betting tips, guides, news &amp; more</p>
            </div>

            <div className="blog-page">

                {/* FEATURED POST */}
                {sortedPosts.length > 0 && (
                    <div className="featured-wrap" data-aos="fade-up">
                        <Link href={`/blog/${sortedPosts[0].slug}`} className="featured-card">
                            <div className="featured-img-wrap">
                                <Image
                                    src={sortedPosts[0].image}
                                    alt={sortedPosts[0].title}
                                    width={1200}
                                    height={500}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <span className="featured-badge">Featured</span>
                            </div>
                            <div className="featured-body">
                                <span className="post-cat">{sortedPosts[0].category}</span>
                                <h2 className="featured-title">{sortedPosts[0].title}</h2>
                                <p className="featured-excerpt">{sortedPosts[0].excerpt}</p>
                                <div className="post-meta">
                                    <span>{sortedPosts[0].date}</span>
                                    <span className="meta-dot">·</span>
                                    <span>{sortedPosts[0].readTime}</span>
                                </div>
                                <span className="btn-read">Read Article →</span>
                            </div>
                        </Link>
                    </div>
                )}

                {/* GRID */}
                <div className="posts-section">
                    <h2 className="section-heading" data-aos="fade-up">All Articles</h2>
                    <div className="posts-grid">
                        {sortedPosts.slice(1).map((post, i) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="post-card"
                                data-aos="fade-up"
                                data-aos-delay={String((i % 3) * 100)}
                            >
                                <div className="post-img-wrap">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={600}
                                        height={300}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="post-body">
                                    <span className="post-cat">{post.category}</span>
                                    <h3 className="post-title">{post.title}</h3>
                                    <p className="post-excerpt">{post.excerpt}</p>
                                    <div className="post-meta">
                                        <span>{post.date}</span>
                                        <span className="meta-dot">·</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
                .blog-hero {
                    background: linear-gradient(135deg, #111111 0%, #1c1c1c 60%, #2a1a00 100%);
                    padding: 140px 20px 60px;
                    text-align: center;
                    border-bottom: 3px solid #F5C518;
                }
                .blog-hero-title {
                    color: #F5C518;
                    font-size: clamp(2rem, 5vw, 3.2rem);
                    font-weight: 800;
                    margin: 0 0 12px;
                    font-family: 'Poppins', Arial, sans-serif;
                    letter-spacing: 1px;
                }
                .blog-hero-sub {
                    color: #cccccc;
                    font-size: 1.1rem;
                    margin: 0;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .blog-page {
                    background: #f7f7f7;
                    padding: 60px 20px 80px;
                    font-family: 'Poppins', Arial, sans-serif;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                /* FEATURED */
                .featured-wrap { margin-bottom: 64px; }
                .featured-card {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 28px rgba(0,0,0,0.12);
                    background: #fff;
                    text-decoration: none;
                    transition: box-shadow 0.3s;
                }
                .featured-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.18); }
                .featured-img-wrap {
                    position: relative;
                    height: 360px;
                    overflow: hidden;
                }
                .featured-badge {
                    position: absolute;
                    top: 16px; left: 16px;
                    background: #F5C518;
                    color: #111;
                    font-size: 11px;
                    font-weight: 800;
                    padding: 4px 12px;
                    border-radius: 50px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }
                .featured-body {
                    padding: 40px 36px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 14px;
                }
                .featured-title {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #111;
                    margin: 0;
                    line-height: 1.35;
                }
                .featured-excerpt { color: #555; font-size: 14px; line-height: 1.7; margin: 0; }
                .btn-read {
                    display: inline-block;
                    background: #F5C518;
                    color: #111;
                    font-weight: 700;
                    font-size: 13px;
                    padding: 10px 22px;
                    border-radius: 6px;
                    align-self: flex-start;
                    transition: background 0.2s;
                }
                .featured-card:hover .btn-read { background: #e6b800; }

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
                .post-meta {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: #999;
                    font-size: 12px;
                }
                .meta-dot { color: #ccc; }

                /* GRID */
                .section-heading {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #111;
                    margin: 0 0 32px;
                    padding-bottom: 16px;
                    border-bottom: 3px solid #F5C518;
                    display: inline-block;
                }
                .posts-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                }
                .post-card {
                    background: #fff;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 2px 14px rgba(0,0,0,0.08);
                    text-decoration: none;
                    display: flex;
                    flex-direction: column;
                    transition: box-shadow 0.3s, transform 0.3s;
                }
                .post-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.14); transform: translateY(-4px); }
                .post-img-wrap { height: 200px; overflow: hidden; }
                .post-body {
                    padding: 22px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    flex: 1;
                }
                .post-title {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #111;
                    margin: 0;
                    line-height: 1.45;
                }
                .post-excerpt {
                    color: #666;
                    font-size: 13px;
                    line-height: 1.65;
                    margin: 0;
                    flex: 1;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                @media (max-width: 1024px) { .posts-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 768px) {
                    .featured-card { grid-template-columns: 1fr; }
                    .featured-img-wrap { height: 220px; }
                    .featured-body { padding: 24px 20px; }
                    .posts-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </Layout>
    );
}
