import React from 'react';
import Image from 'next/image';

const sections = [
    {
        heading: null,
        paras: [
            'Sky Exchin emerged as a specialized online platform focused on delivering high-quality betting and gaming services through a smooth and secure system. From its early days, the platform positioned itself as a reliable destination for users seeking a seamless online betting experience supported by advanced technology and user-friendly features.',
        ],
    },
    {
        heading: 'The Beginning of Sky Exchin',
        paras: [
            'At the time of its establishment, Sky Exchin entered the market with a clear goal: to provide secure, fast, and dependable betting services. The platform was designed to meet the growing demand for online sports betting and casino gaming by offering a wide range of markets and competitive options.',
            'One of the key highlights during its launch phase was the introduction of multiple sports markets. Users were given access to popular sports categories, allowing them to explore different betting opportunities on a single platform. This diversity quickly helped Sky Exchin build recognition in the competitive online betting industry.',
        ],
    },
    {
        heading: 'Expansion into Live Betting and Online Casino',
        paras: [
            'As the platform evolved, Sky Exchin expanded its offerings by adding live betting features. Live betting allowed users to place wagers in real time while matches were in progress, enhancing excitement and engagement. This feature became a major attraction for sports enthusiasts who preferred dynamic and interactive betting experiences.',
            'In addition to sports markets, Sky Exchin developed an extensive online casino section. The casino area included a variety of games designed to cater to different user preferences. By combining sports betting and casino gaming under one platform, Sky Exchin created a comprehensive ecosystem that appealed to a broader audience.',
        ],
    },
    {
        heading: 'Focus on Technology and Security',
        paras: [
            'A major reason behind the growth of Sky Exchin has been its commitment to advanced technology and strong security systems. From the beginning, the platform invested in modern infrastructure to ensure smooth navigation, fast loading times, and uninterrupted service.',
            'Security has remained a top priority. Sky Exchin implemented secure payment systems to protect user transactions and financial data. By maintaining strict security protocols, the platform built confidence among users who valued privacy and safety while engaging in online betting.',
            'The integration of reliable payment gateways ensured that deposits and withdrawals were processed efficiently. This focus on secure and hassle-free transactions played a significant role in establishing Sky Exchin as a trusted platform.',
        ],
    },
    {
        heading: 'Competitive Odds and User-Centric Services',
        paras: [
            'Another important milestone in the history of Sky Exchin is its commitment to offering attractive and competitive odds. Competitive odds are essential in the betting industry, and the platform consistently worked to provide favorable rates across various sports and games.',
            'Beyond odds, user satisfaction has always been at the center of its operations. Sky Exchin invested in customer support services to assist users with account-related queries, technical issues, and transaction concerns. Responsive support strengthened user trust and contributed to long-term loyalty.',
        ],
    },
    {
        heading: 'Growth in the Indian Betting Market',
        paras: [
            'Over time, Sky Exchin gained strong acceptance in the Indian betting market. With the increasing popularity of online sports betting and casino gaming in India, the platform positioned itself as a dependable option for users seeking reliability and variety.',
            'Its consistent performance, secure systems, and broad selection of games helped it attract thousands of users across the country. The combination of trustworthiness and innovation allowed Sky Exchin to build a solid reputation in a competitive industry.',
        ],
    },
    {
        heading: 'Reputation and Ongoing Development',
        paras: [
            'Today, Sky Exchin is recognized for its wide array of betting options, secure operations, and user-friendly interface. The platform continues to refine its services by upgrading technology and enhancing user experience.',
            'Its journey reflects steady growth driven by a clear focus on security, transparency, and customer satisfaction. By maintaining high operational standards and continuously expanding its features, Sky Exchin has established itself as a dependable name in the online betting and gaming sector.',
        ],
    },
];

export default function HistorySection() {
    return (
        <section className="history-section">
            <div className="history-container">

                {/* LEFT — sticky image */}
                <div className="history-left">
                    <div className="sticky-image">
                        <Image
                            src="/images/skyexchangeapp-img-012.webp"
                            alt="History of Sky Exchin"
                            width={600}
                            height={800}
                            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
                            priority
                        />
                    </div>
                </div>

                {/* RIGHT — scrollable content */}
                <div className="history-right">
                    <h2 className="hist-main-heading">History of Sky Exchin</h2>
                    {sections.map((s, i) => (
                        <div key={i} className="hist-block">
                            {s.heading && <h3 className="hist-sub-heading">{s.heading}</h3>}
                            {s.paras.map((p, j) => (
                                <p key={j} className="hist-para">{p}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .history-section {
                    background: #111111;
                    padding: 80px 0 90px;
                }
                .history-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 40px;
                    display: flex;
                    align-items: flex-start;
                    gap: 60px;
                }

                /* LEFT sticky */
                .history-left {
                    flex: 0 0 44%;
                    max-width: 44%;
                    position: sticky;
                    top: 114px;
                    align-self: flex-start;
                }
                .sticky-image {
                    border-radius: 12px;
                    overflow: hidden;
                }

                /* RIGHT scrollable */
                .history-right {
                    flex: 1;
                    min-width: 0;
                }
                .hist-main-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.8rem);
                    font-weight: 800;
                    margin-bottom: 24px;
                    font-family: 'Poppins', Arial, sans-serif;
                    line-height: 1.2;
                }
                .hist-block {
                    margin-bottom: 32px;
                }
                .hist-sub-heading {
                    color: #F5C518;
                    font-size: 20px;
                    font-weight: 800;
                    margin-bottom: 14px;
                    font-family: 'Poppins', Arial, sans-serif;
                    line-height: 1.3;
                }
                .hist-para {
                    color: #cccccc;
                    font-size: 16px;
                    line-height: 1.85;
                    margin-bottom: 16px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .hist-para:last-child { margin-bottom: 0; }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .history-container { gap: 40px; }
                    .history-left { flex: 0 0 40%; max-width: 40%; }
                }
                @media (max-width: 768px) {
                    .history-container { flex-direction: column; gap: 40px; padding: 0 20px; }
                    .history-left { flex: none; max-width: 100%; width: 100%; position: static; }
                }
            `}</style>
        </section>
    );
}
