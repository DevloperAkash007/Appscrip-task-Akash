import { useState } from "react";
import './index.css';

const redHeart = 'https://res.cloudinary.com/dadbo0ufx/image/upload/v1762057936/heart_bkci23.png';
const outlineHeart = 'https://res.cloudinary.com/dadbo0ufx/image/upload/v1762058293/heart_ulu1x1.png';


const ProductCard = (props) => {
  const {product } = props;
  const {title, price, image } = product;
  const [isLiked,setIsLiked] = useState(false);
  
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <li className="product-card">
        <div className="product-image-container">
            <img src={image} alt={`${title}`} className='product-image' />
        </div>
        <div className="product-title-container">
        < h2 className='product-card-title'>{title}</h2>
        <div className='price-and-heard-button-container'>
            <p className="price">Price: ${price}</p>
             <button type='button' className="heart-icon-button" onClick={handleLikeClick}> 
             <img alt={isLiked? "red heart": 'outline heart'} src={isLiked? redHeart: outlineHeart}/>  
             </button>
        </div>
        </div>
    </li>
  );
};

export default ProductCard;