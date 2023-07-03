import React, { PureComponent } from 'react';
import NavBarContainer from '../NavBar/NavBar.container';
import Home from '../../Pages/HomePage';

import CategoryContainer from '../../Pages/CategoryPage/Category.container';


export class MainContainer extends PureComponent {
    state={
        category:[],
        option:"",
        categoryItem:[]
    }

    componentDidMount() {
        this.categoryData();
    }

   

    categoryData = () => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => {this.setState({category:data});
    })
    }

    fetchCategoryItems = () => {
      fetch(`https://fakestoreapi.com/products/category/${this.state.option}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({categoryItem:data})
  })
  }

    handleChange = (e) => {
      console.log("CLICKED")
        const option=e.target.innerHTML;
        console.log(option);
        this.setState({option:option},() => {
          this.fetchCategoryItems();
        })
      }
     handle={
      handleChange:this.handleChange.bind(this)
     }
     
  render() {
   
    return (
    <>
    <NavBarContainer {...this.state} 
    handleChange={this.handleChange}
   />
    <div>
      {this.state.option === ""?<Home />:
    <>
    <CategoryContainer {...this.state}
     handleChange={this.handleChange}/>

      {/* <Routes>
        <Route path='/Product' element={<Product />}/>
        <Route path='/category' element={<CategoryContainer />}/>
      </Routes> */}
    </>}
    </div>
    {/* <div>
    <CategoryContainer {...this.state}/>
      <Routes>
        <Route path='/Product' element={<Product />}/>
      </Routes>
    </div> */}
    
    
    </>
    
    )
  }
}

export default MainContainer