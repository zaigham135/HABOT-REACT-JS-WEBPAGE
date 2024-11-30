import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../img/WebWhiteLogo-removebg-preview.png'; // Make sure to add your logo image

const Section6 = () => {
    const footerLinks = {
        company: {
            title: "Company",
            links: [
                { name: "About", url: "/" },
                { name: "FAQ", url: "/" }
            ]
        },
        terms: {
            title: "Terms",
            links: [
                { name: "Data privacy", url: "/" },
                { name: "Terms", url: "/" },
                { name: "Accessibility", url: "/" }
            ]
        },
        related: {
            title: "Related",
            links: [
                { name: "Find Buyer", url: "/" },
                { name: "Feedback", url: "/" }
            ]
        }
    };

    const socialIcons = [
        { icon: <FaLinkedin />, url: "/" },
        { icon: <FaTwitter />, url: "/" },
        { icon: <FaFacebook />, url: "/" },
        { icon: <FaInstagram />, url: "/" }
    ];

    return (
        <footer className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Logo and Copyright */}
                    <div className="footer-brand">
                        <img src={logo} alt="HABOT" className="footer-logo white-logo" />
                        <p className="copyright">© R Singhania</p>
                    </div>

                    {/* Links Sections */}
                    <div className="footer-links">
                        {Object.values(footerLinks).map((section, index) => (
                            <div key={index} className="footer-section">
                                <h3>{section.title}</h3>
                                <ul>
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href={link.url}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div className="footer-social">
                        {socialIcons.map((social, index) => (
                            <a 
                                key={index} 
                                href={social.url}
                                className="social-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Section6;
