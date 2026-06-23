import React from 'react';
import Image from 'next/image';

const mobileSteps = [
    'Open your mobile browser.',
    'Visit the official Sky Exchange website.',
    'Tap on the "Login" button.',
    'Enter your username and password.',
    'Complete OTP verification if required.',
    'Tap "Login" to access your account.',
];

const safeTips = [
    'Never share your login credentials with anyone.',
    'Use a strong and unique password.',
    'Always log out from shared devices.',
    'Enable OTP verification for added security.',
];

const MobileLoginSection = () => {
    return (
        <section className="ml-section">
            <div className="ml-container">

                {/* LEFT — sticky image */}
                <div className="ml-left">
                    <div className="ml-left-inner">
                        <Image
                            src="/images/45875717-c1c0-4c1d-ba43-8713bddc5a4a.jpg"
                            alt="Sky Exchange Mobile Login Guide"
                            width={600}
                            height={800}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                            priority
                        />
                    </div>
                </div>

                {/* RIGHT — scrollable text */}
                <div className="ml-right">
                    <h2 className="ml-heading">Sky Exchange Mobile Login Guide</h2>
                    <p className="ml-para">
                        Logging in through mobile devices is just as simple and secure.
                    </p>

                    <h3 className="ml-subheading">Steps for Sky Exchange Mobile Login:</h3>
                    <ol className="ml-ordered-list">
                        {mobileSteps.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ol>

                    <p className="ml-para">
                        The mobile version is fully optimized, allowing users to enjoy betting and gaming on the go
                        without compromising security.
                    </p>
                    <p className="ml-para">
                        Logging in through mobile devices is just as simple and secure.
                    </p>

                    <h3 className="ml-subheading">Tips for Safe Sky Exchange Login</h3>
                    <p className="ml-para">
                        To keep your account secure, follow these best practices:
                    </p>
                    <ul className="ml-bullet-list">
                        {safeTips.map((tip, i) => (
                            <li key={i}>{tip}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <style jsx>{`
                .ml-section {
                    background: #0d0d0d;
                    padding: 80px 0 90px;
                    border-top: 1px solid #1a1a1a;
                }
                .ml-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 40px;
                    display: flex;
                    align-items: flex-start;
                    gap: 60px;
                }

                /* LEFT — sticky image */
                .ml-left {
                    flex: 0 0 44%;
                    max-width: 44%;
                    position: sticky;
                    top: 114px;
                    align-self: flex-start;
                }
                .ml-left-inner {
                    border-radius: 12px;
                    overflow: hidden;
                }

                /* RIGHT — text */
                .ml-right { flex: 1; min-width: 0; }

                .ml-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.8rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 18px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .ml-subheading {
                    color: #F5C518;
                    font-size: 1.15rem;
                    font-weight: 700;
                    margin: 28px 0 14px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .ml-para {
                    color: #cccccc;
                    font-size: 16px;
                    line-height: 1.85;
                    margin-bottom: 14px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .ml-para:last-child { margin-bottom: 0; }

                .ml-ordered-list {
                    color: #cccccc;
                    font-size: 15px;
                    line-height: 2.1;
                    padding-left: 24px;
                    margin-bottom: 24px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .ml-bullet-list {
                    color: #cccccc;
                    font-size: 15px;
                    line-height: 2.2;
                    padding-left: 24px;
                    margin-bottom: 0;
                    list-style-type: disc;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .ml-left { flex: 0 0 40%; max-width: 40%; }
                    .ml-container { gap: 40px; }
                }
                @media (max-width: 768px) {
                    .ml-container { flex-direction: column; padding: 0 20px; gap: 40px; }
                    .ml-left { flex: none; max-width: 100%; width: 100%; position: static; }
                }
            `}</style>
        </section>
    );
};

export default MobileLoginSection;
