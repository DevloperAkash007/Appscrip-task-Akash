
import './index.css';   

const logoUrl = 'https://res.cloudinary.com/dadbo0ufx/image/upload/v1762067508/Logo_ywllgc.png';
const searchIcon = 'https://res.cloudinary.com/dadbo0ufx/image/upload/v1762067763/search-normal_bwjz7a.png';

const Header = () => {
  return (
    <nav className="header-container">
      <img alt='logo' className='logo-image' src={logoUrl}/> 
      <h1 className='logo-head'>Logo</h1>
      <p className='contact-us'>Contact us</p>
    </nav>
  );
};

export default Header;