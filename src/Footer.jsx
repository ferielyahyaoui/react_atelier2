import React from 'react';
function Footer() {
    const items = ['Privacy Policy', 'Terms of Service', 'Support'];
    return (
        <footer style={footerStyle}>
            <div style={contentStyle}>
                <div style={sectionStyle}>
                    <h4 style={headerStyle}>Links</h4>
                    <ul style={listStyle}>
                        {items.map((item, index) => (
                            <li key={index} style={linkStyle}>
                                <a href="#" style={anchorStyle}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={sectionStyle}>
                    <h4 style={headerStyle}>Follow us</h4>
                    <ul style={socialListStyle}>
                        <li style={socialIconStyle}><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialAnchorStyle}>FB</a></li>
                        <li style={socialIconStyle}><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialAnchorStyle}>IG</a></li>
                        <li style={socialIconStyle}><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={socialAnchorStyle}>LI</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );}

const footerStyle = {
    backgroundColor: '#222',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
};
const contentStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '30px',
};

const sectionStyle = {
    maxWidth: '200px',
};

const headerStyle = {
    marginBottom: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
};

const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
};

const linkStyle = {
    marginBottom: '10px',
};

const anchorStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
};

const socialListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
};

const socialIconStyle = {
    backgroundColor: '#007bff',
    padding: '10px',
    borderRadius: '50%',
    margin: '0 10px',
};

const socialAnchorStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
};

const copyrightStyle = {
    fontSize: '14px',
    marginTop: '20px',
};

export default Footer;
