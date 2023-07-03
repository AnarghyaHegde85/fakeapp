import React, { PureComponent } from 'react';
import './Category.scss';
import { Link } from 'react-router-dom';

class CategoryComponent extends PureComponent {
    
  render() {
    const {categoryItem,handleSortChange,handleitem}=this.props;
    const {option}=this.props;
    console.log(categoryItem);
    return (
      <div className='category-main'> 
      <div className='category-sort'>
        <select className="category-select" onChange={handleSortChange}>
           <option>
            SortBy
           </option>
           <option value="Ascending">Ascending</option>
           <option value="Descending">Descending</option>
        </select>

      </div>

        <div className='category'>
          {categoryItem.map((val,ind) => (
            <div className='category-card' key={ind} >
              <Link to={`/${val.category}/${val.id}`}>
              <img className='category-img' src={val.image} alt='product'/>
              <h4>{val.id}</h4>
              <h4 className='category-title'>{val.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default CategoryComponent;