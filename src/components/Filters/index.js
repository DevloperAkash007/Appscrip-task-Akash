import { useState,useEffect } from 'react';
import './index.css';

const filterConstants = [
     
        {
            id: 'Men',
            label: "men's clothing",
        },
        {
            id: 'Women',
            label: "women's clothing",
        },
        {
            id: 'jewelery',
            label: 'jewelery',  
        },
        {
            id: 'electronics',
            label: 'electronics',
        }
   
 ,
];



const Filters = (props) => {
    const {searchFilterproductsBasedonIdeal} = props;
    const [idealForSelectedItems, setIdealForSelectedItems] = useState([]);

     useEffect(() => {
        searchFilterproductsBasedonIdeal(idealForSelectedItems);
     }, [idealForSelectedItems]);

    const searchFilterBasedonIdeal = (event) => {
        const { value, checked } = event.target;
         
        if (checked) {
            setIdealForSelectedItems((prevItems) => [...prevItems, value]);
           
           
        } else {
            setIdealForSelectedItems((prevItems) =>
                prevItems.filter((item) => item !== value)
            );
        }
        
    }

    return (
    <div className="filter-container">
        {filterConstants.map((item) => (
            <div key={item.id}>
                <input id={item.id} type='checkbox' onChange={searchFilterBasedonIdeal} value={item.label}/>
                <label htmlFor={item.id}>{item.label}</label>
            </div>
        ))}
          
        
    </div>);
    
    
};



export default Filters;