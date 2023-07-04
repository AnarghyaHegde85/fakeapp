import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

class ProductComponent extends PureComponent {

  render() {
    const { product, fetchproductDetails } = this.props;
    console.log(product);

    return (
      <>
        
    
          <div className='productlist' >
         
         <Link className='productlist-cross' to={`/${product.category}`}>X</Link>
   
         <div className='productlist-container'>
         
           <div >
             <img className='productlist-pic' src={product.image} alt='productImg' />
           </div>
           <div className='productlist-details'>
             <li className='productlist-title'>{product.title}</li>
             <li className='productlist-price'>price: {product.price}</li>
             <li className='productlist-category'>category: {product.category}</li>
             <li className='productlist-description'>description: {product.description}</li>
           </div>
         </div>
         
       </div>
        
    
      </>
    )
  }
}

export default ProductComponent;