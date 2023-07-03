import React, { PureComponent } from 'react';
import "./NavBar.scss";
import Pic from '../../Assets/pic3.svg';
import { Link } from 'react-router-dom';


class NavBarComponent extends PureComponent {
 render() {
    const{category,handleitems} =this.props;
    console.log(category);
    return (
      <div className='container'>
        <div className='product'>
        <img className="product-logo" src={Pic} alt="pic"/>
        <div className="product-list">
           {category.map((val,index) =>
              <div key={index} >
                {/* onClick={this.props.handleChange} */}
               <Link onClick={handleitems} to={val}>
               {val}
               </Link> 
              </div>
            )}
         </div>
        </div>
     </div>
    )
  }
}

export default NavBarComponent