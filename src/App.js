import { useEffect, useState } from 'react';
import Filters from './components/Filters';
import './App.css';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Footer from './components/Footer'; 
 
const sortOptions = [
  'RECOMMENDED',
  'NEWEST FIRST',
  'POPULAR',
  'PRICE: HIGH TO LOW',
  'PRICE: LOW TO HIGH',
];

const rightArrow = "https://res.cloudinary.com/dadbo0ufx/image/upload/v1762055549/arrow-left_jx78xh.png";
const leftArrow = "https://res.cloudinary.com/dadbo0ufx/image/upload/v1762055903/arrow-left_v7j1pe.png";
const downArrow = 'https://res.cloudinary.com/dadbo0ufx/image/upload/v1762057162/arrow-left_byzzba.png';
const tickMark = 'https://res.cloudinary.com/dadbo0ufx/image/upload/v1762057488/Vector_rhfxkb.png';


const App = () => {
  const [products, setProducts] = useState([]);
  const [copyOfProducts, setCopyOfProducts] = useState([]);

  const [sortFunctionality, setSortFunctionality] = useState(false);
  const [sortedBy, setSortedBy] = useState('RECOMMENDED');
   
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);

  const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setCopyOfProducts(data);
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }

  }

  useEffect(() => {
     fetchProducts();
  }, []);

  

const searchFilterproductsBasedonIdeal = (idealForSelectedItems) => {
  console.log(idealForSelectedItems);
  console.log(products);
    if (idealForSelectedItems.length === 0) {
       fetchProducts();
      
    } else {
      const filteredProducts = copyOfProducts.filter((product) =>{
        return idealForSelectedItems.includes(product.category  
        )
      }
      );
      setProducts(filteredProducts);  
    }
  };

 const onClickSortOption = (event) => {
    setSortedBy(event.target.textContent);
    setSortFunctionality(false);
    if (event.target.textContent === 'PRICE: HIGH TO LOW') {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
    if (event.target.textContent === 'PRICE: LOW TO HIGH') {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    }
    if (event.target.textContent === 'NEWEST FIRST') {
      const sortedProducts = [...products].sort((a, b) => b.id - a.id);
      setProducts(sortedProducts);
    }
    if (event.target.textContent === 'POPULAR') {
      const sortedProducts = [...products].sort((a, b) => a.id - b.id);
      setProducts(sortedProducts);
    }
    if (event.target.textContent === 'RECOMMENDED') {
      const sortedProducts = [...products].sort((a, b) => a.id - b.id);
      setProducts(sortedProducts);
    }
 };

  return (
    <div>
      <Header/>
      <div className='discover-our-products-container'>
        <h1 className='discover-our-products-heading'>DISCOVER OUR PRODUCTS</h1>
        <p className='discover-our-products-description'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
     
        <hr className='horizontal-line' />
      <div className='product-features-container'> 
          <div className='toggle-sildebar-container'>
            <p className='filter-products-size'>{products.length} items</p>
            
            <button type='button' className='filter-sidebar-toggle' onClick={()=> setShowFilterSidebar(value => !value)}>
              <img alt={showFilterSidebar? 'left arrow': 'right arrow'}  src={showFilterSidebar? leftArrow: rightArrow}/> 
              <p className='filter-toggle-text'>{showFilterSidebar? 'Hide Filter': 'show Filter'}</p>
              </button>
          </div>
          <div className='toggle-sildebar-mobile-container'
          ><button type='button' className='filter-sidebar-toggle' onClick={()=> setShowFilterSidebar(value => !value)}>
               
              <p className='filter-toggle-text'>Filter</p>
              </button>
            </div>

          <div className="sort-by-dropdown-container">
              <button className="dropdownbtn" onClick={() => setSortFunctionality(!sortFunctionality)}><p className='sortby-value'>{sortedBy}</p>
               <img alt='down arrow' src={downArrow}/> </button>
              <ul className={sortFunctionality ? 'dropdown-content-show' : 'dropdown-content-hide'}>
                {sortOptions.map((option) => (<li className='dropdown-list-item' onClick={onClickSortOption} key={option}>
                  {sortedBy === option ? <img alt="tick mark" className='tick-mark' src={tickMark}/>: null}{option}</li>
                ))}
              </ul>
          </div>
      </div>

      <hr className='horizontal-line' />
      <div className='products-and-filters-container'>
        {showFilterSidebar && <Filters searchFilterproductsBasedonIdeal={searchFilterproductsBasedonIdeal}/>}
        <ul className='products-list-container'>
        {products.map((product) => (<ProductCard key={product.id} product={product} />))}
        </ul>
      </div>
      <Footer/>
      
    </div>
  );
};

export default App;