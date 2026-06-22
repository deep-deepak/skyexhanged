import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
    { label: 'Home',            path: '/',               badge: null },
    { label: 'In-Play',         path: '/in-play',        badge: null },
    { label: 'Multi Markets',   path: '/multi-markets',  badge: null },
    { label: 'Cricket',         path: '/cricket',        badge: 6    },
    { label: 'Soccer',          path: '/soccer',         badge: 13   },
    { label: 'Tennis',          path: '/tennis',         badge: 13   },
    { label: 'Virtual Cricket', path: '/virtual-cricket',badge: null },
    { label: 'E-Soccer',        path: '/e-soccer',       badge: 7    },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const isActive = (path) => {
        if (path === '/') return router.pathname === '/';
        return router.pathname === path || router.pathname.startsWith(path + '/');
    };

    return (
        <>
            <header className="skyexch-header">

                {/* ── TOP BAR ── */}
                <div className="top-bar">
                    <div className="top-bar-inner">

                        {/* Logo */}
                        <Link href="/" className="logo-link">
                            <div className="logo">
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                                    <rect width="46" height="46" rx="5" fill="#000" />
                                    <polygon points="23,5 41,14 41,32 23,41 5,32 5,14" fill="#ffffff" />
                                    <text x="23" y="29" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="900" fontFamily="Arial Black,Arial,sans-serif">X</text>
                                </svg>
                                <span className="logo-name">SKYEXCHIN</span>
                            </div>
                        </Link>

                        {/* Search */}
                        <div className="search-wrap">
                            <svg className="search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                            </svg>
                            <input type="text" placeholder="Search Events" className="search-input" />
                        </div>

                        {/* Auth */}
                        <div className="auth-section">
                            <svg className="user-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                            </svg>
                            <input type="text"     placeholder="Username"   className="auth-input" />
                            <input type="password" placeholder="Password"   className="auth-input" />
                            <input type="text"     placeholder="Validation" className="auth-input" />
                            <button className="btn-login">
                                Login
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="login-icon">
                                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                    <polyline points="10,17 15,12 10,7" />
                                    <line x1="15" y1="12" x2="3" y2="12" />
                                </svg>
                            </button>
                            <button className="btn-signup">Sign up</button>
                        </div>

                        {/* Hamburger */}
                        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            <span /><span /><span />
                        </button>
                    </div>
                </div>

                {/* ── NAV BAR ── */}
                <nav className={`nav-bar ${isMenuOpen ? 'menu-open' : ''}`}>
                    <div className="nav-inner">
                        <ul className="nav-list">
                            {navItems.map((item) => (
                                <li key={item.path} className="nav-item">
                                    <Link
                                        href={item.path}
                                        className={`nav-link ${item.badge ? 'has-badge' : ''} ${isActive(item.path) ? 'active' : ''}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.badge !== null && (
                                            <span className="nav-badge">{item.badge}</span>
                                        )}
                                        <span className="nav-label">{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="nav-right">
                            <span className="timezone">Time Zone :&nbsp;<strong>GMT+5:30</strong></span>
                            <button className="nav-btn">One Click Bet</button>
                            <button className="nav-btn">Setting</button>
                        </div>
                    </div>
                </nav>
            </header>

            <style jsx global>{`
                /* ── HEADER ── */
                .skyexch-header {
                    position: fixed;
                    top: 0; left: 0; right: 0;
                    z-index: 1030;
                    font-family: Arial, sans-serif;
                    box-shadow: 0 3px 15px rgba(0,0,0,0.5);
                }

                /* ════════ TOP BAR ════════ */
                .top-bar {
                    background: #111111;
                    border-bottom: 1px solid #2a2a2a;
                }
                .top-bar-inner {
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 0 16px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                /* LOGO */
                .logo-link { text-decoration: none; flex-shrink: 0; }
                .logo {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 3px;
                }
                .logo-name {
                    color: #fff;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 3px;
                    font-family: Arial, sans-serif;
                }

                /* SEARCH */
                .search-wrap {
                    position: relative;
                    flex: 1;
                    max-width: 380px;
                    display: flex;
                    align-items: center;
                }
                .search-icon {
                    position: absolute;
                    left: 10px;
                    color: #888;
                    pointer-events: none;
                }
                .search-input {
                    width: 100%;
                    background: #f2f2f2;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    padding: 7px 12px 7px 32px;
                    color: #333;
                    font-size: 13px;
                    outline: none;
                }
                .search-input::placeholder { color: #999; }
                .search-input:focus { border-color: #F47920; }

                /* AUTH */
                .auth-section {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin-left: auto;
                }
                .user-icon { flex-shrink: 0; }
                .auth-input {
                    background: #f7f7f7;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    padding: 6px 10px;
                    font-size: 12px;
                    width: 108px;
                    color: #333;
                    outline: none;
                }
                .auth-input:focus { border-color: #F47920; }
                .btn-login {
                    background: #cc1111;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    padding: 7px 16px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    white-space: nowrap;
                    flex-shrink: 0;
                }
                .btn-login:hover { background: #aa0000; }
                .login-icon { display: block; }
                .btn-signup {
                    background: #3a3a3a;
                    color: #fff;
                    border: 1px solid #555;
                    border-radius: 4px;
                    padding: 7px 16px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    white-space: nowrap;
                    flex-shrink: 0;
                }
                .btn-signup:hover { background: #555; }

                /* HAMBURGER */
                .hamburger {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 4px;
                    margin-left: auto;
                    flex-shrink: 0;
                }
                .hamburger span {
                    display: block;
                    width: 24px; height: 2px;
                    background: #fff;
                    border-radius: 2px;
                    transition: all 0.3s;
                    transform-origin: center;
                }
                .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
                .hamburger.open span:nth-child(2) { opacity: 0; }
                .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

                /* ════════ NAV BAR ════════ */
                .nav-bar {
                    background: #F5C518;
                }
                .nav-inner {
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 0 16px;
                    display: flex;
                    align-items: stretch;
                    justify-content: space-between;
                }

                /* NAV LIST */
                .nav-list {
                    list-style: none;
                    margin: 0; padding: 0;
                    display: flex;
                    align-items: stretch;
                }
                .nav-item {
                    display: flex;
                    align-items: stretch;
                    border-right: 1px solid rgba(0,0,0,0.15);
                }
                .nav-item:first-child { border-left: 1px solid rgba(0,0,0,0.15); }

                /* NAV LINK */
                .nav-link {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 6px 14px 7px;
                    color: #111;
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                    white-space: nowrap;
                    min-height: 38px;
                    position: relative;
                    transition: background 0.15s;
                    gap: 2px;
                }
                .nav-link.has-badge {
                    padding-top: 4px;
                    justify-content: space-between;
                }
                .nav-link:hover { background: rgba(0,0,0,0.1); }
                .nav-link.active { background: #111318; color: #F5C518; }

                /* BADGE */
                .nav-badge {
                    background: #cc1111;
                    color: #fff;
                    font-size: 9px;
                    font-weight: 800;
                    min-width: 18px;
                    height: 14px;
                    border-radius: 2px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 4px;
                    line-height: 1;
                    align-self: flex-start;
                }
                .nav-label { line-height: 1; display: block; }

                /* NAV RIGHT */
                .nav-right {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-shrink: 0;
                    padding-left: 16px;
                }
                .timezone {
                    font-size: 12px;
                    color: #222;
                    font-weight: 600;
                    white-space: nowrap;
                    padding-right: 8px;
                    border-right: 1px solid rgba(0,0,0,0.2);
                }
                .timezone strong { font-weight: 800; color: #000; }
                .nav-btn {
                    background: #2c2c2c;
                    color: #F5C518;
                    border: none;
                    border-radius: 3px;
                    padding: 5px 12px;
                    font-size: 12px;
                    font-weight: 700;
                    cursor: pointer;
                    white-space: nowrap;
                    letter-spacing: 0.3px;
                }
                .nav-btn:hover { background: #1B2760; }

                /* ════════ RESPONSIVE ════════ */
                @media (max-width: 1200px) {
                    .auth-input { width: 90px; }
                    .nav-link { padding-left: 10px; padding-right: 10px; font-size: 12px; }
                }
                @media (max-width: 1024px) {
                    .timezone { display: none; }
                    .auth-input { width: 78px; font-size: 11px; }
                }
                @media (max-width: 900px) {
                    .search-wrap { max-width: 180px; }
                    .auth-section { display: none; }
                    .hamburger { display: flex; }
                    .nav-bar { display: none; }
                    .nav-bar.menu-open { display: block; }
                    .nav-inner { flex-direction: column; padding: 0; }
                    .nav-list { flex-direction: column; }
                    .nav-item { border-right: none; border-left: none; border-bottom: 1px solid rgba(0,0,0,0.1); }
                    .nav-item:first-child { border-left: none; }
                    .nav-link { flex-direction: row; justify-content: flex-start; gap: 8px; padding: 12px 20px; min-height: unset; }
                    .nav-link.has-badge { padding-top: 12px; }
                    .nav-right { padding: 10px 20px; border-top: 1px solid rgba(0,0,0,0.15); flex-wrap: wrap; }
                }
                @media (max-width: 600px) {
                    .search-wrap { display: none; }
                }
            `}</style>
        </>
    );
};

export default Header;
