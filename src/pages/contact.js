import Layout from '@/layout/Layout';
import Head from 'next/head';
import { useState } from 'react';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <Layout>
            <Head>
                <title>Contact Us – Skyexchange</title>
                <meta name="description" content="Get in touch with Skyexchange. Contact us via phone, WhatsApp or email for support and queries." />
            </Head>

            {/* HERO BANNER */}
            <div className="contact-hero">
                <h1 className="contact-hero-title">Contact Us</h1>
                <p className="contact-hero-sub">We&apos;re here to help — reach out anytime</p>
            </div>

            <div className="contact-page">

                {/* INFO CARDS */}
                <div className="info-grid" data-aos="fade-up">
                    <div className="info-card">
                        <div className="info-icon">📞</div>
                        <h3 className="info-label">Call Us</h3>
                        <a href="tel:+919062813000" className="info-value">+91 9062813000</a>
                        <p className="info-note">Mon – Sun, 9am – 11pm</p>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">💬</div>
                        <h3 className="info-label">WhatsApp</h3>
                        <a href="https://wa.me/9062813000" target="_blank" rel="noopener noreferrer" className="info-value">+91 9062813000</a>
                        <p className="info-note">Quick response guaranteed</p>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">✉️</div>
                        <h3 className="info-label">Email Us</h3>
                        <a href="mailto:info@skyexchange.com" className="info-value">info@skyexchange.com</a>
                        <p className="info-note">We reply within 24 hours</p>
                    </div>
                </div>

                {/* FORM + SIDE INFO */}
                <div className="contact-body">

                    {/* FORM */}
                    <div className="form-wrap" data-aos="fade-right">
                        <h2 className="form-title">Send Us a Message</h2>
                        {submitted ? (
                            <div className="success-box">
                                <span className="success-icon">✅</span>
                                <p>Thank you! Your message has been received. We&apos;ll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject *</label>
                                        <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                                            <option value="">Select a topic</option>
                                            <option value="account">Account / Login Help</option>
                                            <option value="deposit">Deposit / Withdrawal</option>
                                            <option value="betting">Betting Query</option>
                                            <option value="technical">Technical Issue</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group full">
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" name="message" rows={5} placeholder="Describe your query in detail..." value={form.message} onChange={handleChange} required />
                                </div>
                                <button type="submit" className="btn-submit">Send Message &rarr;</button>
                            </form>
                        )}
                    </div>

                    {/* SIDE INFO */}
                    <div className="side-info" data-aos="fade-left">
                        <div className="side-card">
                            <h3 className="side-title">Why Contact Us?</h3>
                            <ul className="side-list">
                                <li>🎯 Get your Skyexchange betting ID</li>
                                <li>💰 Deposit &amp; withdrawal support</li>
                                <li>🔐 Account login &amp; password help</li>
                                <li>📱 App download &amp; setup guide</li>
                                <li>🏏 Live betting &amp; market queries</li>
                                <li>🎁 Promotions &amp; bonus queries</li>
                            </ul>
                        </div>
                        <div className="side-card side-whatsapp">
                            <div className="wa-icon-wrap">
                                <svg viewBox="0 0 32 32" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.666 4.8 1.83 6.8L2 30l7.43-1.8A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
                                    <path d="M23.07 20.18c-.31-.87-1.8-1.71-2.53-1.82-.52-.08-.97.02-1.37.32-.54.41-.78.82-1.15.82-.27 0-.63-.22-1.08-.6-.9-.74-1.66-1.74-2.07-2.48-.28-.5-.3-.9.04-1.28.28-.3.62-.47.62-.95 0-.31-.6-2.01-1.06-2.6-.27-.35-.56-.46-.93-.46-.62 0-1.26.21-1.68.66-.73.78-1.07 1.78-.92 2.84.2 1.41 1.02 2.86 2.18 4.04 1.16 1.18 2.7 2.2 4.17 2.64 1.02.3 2.05.2 2.86-.28.62-.37 1.08-.96 1.28-1.65.09-.31.07-.62-.06-.8z" fill="#fff"/>
                                </svg>
                            </div>
                            <h3 className="side-title">Fastest Response</h3>
                            <p className="side-text">Message us on WhatsApp for the quickest reply — usually within minutes.</p>
                            <a href="https://wa.me/9062813000" target="_blank" rel="noopener noreferrer" className="btn-wa">Chat on WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .contact-hero {
                    background: linear-gradient(135deg, #111111 0%, #1c1c1c 60%, #2a1a00 100%);
                    padding: 140px 20px 60px;
                    text-align: center;
                    border-bottom: 3px solid #F5C518;
                }
                .contact-hero-title {
                    color: #F5C518;
                    font-size: clamp(2rem, 5vw, 3.2rem);
                    font-weight: 800;
                    margin: 0 0 12px;
                    font-family: 'Poppins', Arial, sans-serif;
                    letter-spacing: 1px;
                }
                .contact-hero-sub {
                    color: #cccccc;
                    font-size: 1.1rem;
                    margin: 0;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                .contact-page {
                    background: #f7f7f7;
                    padding: 60px 20px 80px;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* INFO CARDS */
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    max-width: 1100px;
                    margin: 0 auto 60px;
                }
                .info-card {
                    background: #ffffff;
                    border-radius: 12px;
                    padding: 32px 24px;
                    text-align: center;
                    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
                    border-top: 4px solid #F5C518;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .info-card:hover { transform: translateY(-4px); box-shadow: 0 8px 28px rgba(0,0,0,0.13); }
                .info-icon { font-size: 2rem; margin-bottom: 12px; }
                .info-label {
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: #888;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin: 0 0 8px;
                }
                .info-value {
                    display: block;
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: #111;
                    text-decoration: none;
                    margin-bottom: 6px;
                }
                .info-value:hover { color: #F5C518; }
                .info-note { font-size: 0.8rem; color: #999; margin: 0; }

                /* BODY LAYOUT */
                .contact-body {
                    display: grid;
                    grid-template-columns: 1fr 360px;
                    gap: 32px;
                    max-width: 1100px;
                    margin: 0 auto;
                    align-items: flex-start;
                }

                /* FORM */
                .form-wrap {
                    background: #ffffff;
                    border-radius: 12px;
                    padding: 40px 36px;
                    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
                }
                .form-title {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #111;
                    margin: 0 0 28px;
                }
                .contact-form { display: flex; flex-direction: column; gap: 20px; }
                .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                .form-group { display: flex; flex-direction: column; gap: 6px; }
                .form-group.full { grid-column: 1 / -1; }
                .form-group label { font-size: 13px; font-weight: 600; color: #444; }
                .form-group input,
                .form-group select,
                .form-group textarea {
                    border: 1.5px solid #ddd;
                    border-radius: 8px;
                    padding: 11px 14px;
                    font-size: 14px;
                    font-family: 'Poppins', Arial, sans-serif;
                    color: #333;
                    outline: none;
                    transition: border-color 0.2s;
                    background: #fafafa;
                    resize: vertical;
                }
                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus { border-color: #F5C518; background: #fff; }
                .btn-submit {
                    background: #F5C518;
                    color: #111;
                    border: none;
                    border-radius: 8px;
                    padding: 13px 32px;
                    font-size: 15px;
                    font-weight: 800;
                    cursor: pointer;
                    align-self: flex-start;
                    font-family: 'Poppins', Arial, sans-serif;
                    transition: background 0.2s, transform 0.15s;
                    letter-spacing: 0.3px;
                }
                .btn-submit:hover { background: #e6b800; transform: translateY(-1px); }

                .success-box {
                    background: #f0fff4;
                    border: 1.5px solid #68d391;
                    border-radius: 10px;
                    padding: 32px 24px;
                    text-align: center;
                    color: #276749;
                    font-size: 15px;
                    font-weight: 600;
                }
                .success-icon { font-size: 2.5rem; display: block; margin-bottom: 14px; }

                /* SIDE */
                .side-info { display: flex; flex-direction: column; gap: 20px; }
                .side-card {
                    background: #ffffff;
                    border-radius: 12px;
                    padding: 28px 24px;
                    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
                }
                .side-title { font-size: 1rem; font-weight: 800; color: #111; margin: 0 0 16px; }
                .side-list {
                    list-style: none;
                    margin: 0; padding: 0;
                    display: flex; flex-direction: column; gap: 11px;
                }
                .side-list li { font-size: 14px; color: #444; font-weight: 500; }

                .side-whatsapp { background: #111; text-align: center; }
                .side-whatsapp .side-title { color: #F5C518; }
                .wa-icon-wrap { margin-bottom: 12px; }
                .side-text { color: #aaa; font-size: 13px; margin: 0 0 20px; }
                .btn-wa {
                    display: inline-block;
                    background: #25D366;
                    color: #fff;
                    font-weight: 700;
                    font-size: 14px;
                    padding: 11px 28px;
                    border-radius: 50px;
                    text-decoration: none;
                    transition: background 0.2s;
                }
                .btn-wa:hover { background: #1da851; }

                /* RESPONSIVE */
                @media (max-width: 960px) {
                    .contact-body { grid-template-columns: 1fr; }
                    .side-info { flex-direction: row; flex-wrap: wrap; }
                    .side-card { flex: 1; min-width: 260px; }
                }
                @media (max-width: 700px) {
                    .info-grid { grid-template-columns: 1fr; }
                    .form-row { grid-template-columns: 1fr; }
                    .form-wrap { padding: 28px 20px; }
                    .side-info { flex-direction: column; }
                }
            `}</style>
        </Layout>
    );
}
