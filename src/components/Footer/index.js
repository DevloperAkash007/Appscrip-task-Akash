
import './index.css';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className='signup-contact-us-container'>
        <div className='signup-container'>
            <h1 className='sigup-container-heading'>Be the first to know</h1>
            <p className='signup-container-para'>Sign up for updates from mettā muse.</p>
            <div><input className="subscibe-input"/><button type='button' className='subscribe-btn'>Subscibe</button></div>
        </div>
        <div>
            <div className='contact-us-container'>
            <h1 className='heading'>CONTACT US</h1>
            <p className='para'>+44 221 133 5360</p>
            <p className='para'>customercare@mettamuse.com</p>
            </div>
            <div>
           <h1 className='heading'>Currency</h1>
           <img alt="us" className='us' src="https://res.cloudinary.com/dadbo0ufx/image/upload/v1762068341/Language_kg14bu.png"/>
           <p className='para'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>
        </div>
    
      <p className="footer-text">© 2024 Your Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;