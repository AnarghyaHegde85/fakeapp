import React, { PureComponent } from 'react';
import CategoryComponent from './Category.component';


class CategoryContainer extends PureComponent {
 
  state={
        options:"",
        categoryItem:[],
        sortBy:"",
    }

    componentDidMount() {
        this.fetchCategoryItems();
    }
    componentDidUpdate(prevProps){
      if(prevProps.val !==this.props.val){
        this.fetchCategoryItems();
      }
    }

    fetchCategoryItems = () => {
      const {val} =this.props;
      fetch(`https://fakestoreapi.com/products/category/${val}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        
        this.setState({categoryItem:data});
    })
      
      .catch(err => {
        console.log(err);
      });
  };

  handleSortChange = (event) => {
    const sortBy=event.target.value;
    this.setState({ sortBy},() => {
      this.sortData();
    })
  }

  sortData = () => {
    const {categoryItem,sortBy} = this.state;
    let sortedData = [...categoryItem];
  
    if(sortBy ==='Ascending'){
      sortedData.sort();
    } else if (sortBy ==='Descending'){
      sortedData.sort().reverse();
    }
    this.setState({categoryItem:sortedData});
  };
     
  render() {
       const {categoryItem,sortBy}=this.state;

       const {itemData,val} =this.props;
    return (
    <>
   <CategoryComponent 
    categoryItem={categoryItem}
    sortBy={sortBy}
    handleSortChange={this.handleSortChange}
  />
    </>
    
    )
  }
}



export default CategoryContainer;
