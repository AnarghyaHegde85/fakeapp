import React, { PureComponent } from 'react';
import NavBarComponent from './NavBar.component';
import { Routes,Route } from 'react-router-dom';
import Category from '../../Pages/CategoryPage';

 class NavbarContainer extends PureComponent {
 state={
        category:[],
        Option:"",
        val:'',
    }

    componentDidMount() {
        this.categoryData();
    }

    categoryData = () => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => {this.setState({category:data});
    });
    };

    handleChange=(event) => {
      console.log(event)
      this.setState({items:event.target.innerHTML})
    };
    handleitems=(event)=>{
      this.setState({val: event.target.innerHTML})
    }
     
  render() {
      const{val}=this.state;
    return (
    <>
    <NavBarComponent 
    {...this.state}
    category={this.state.category}
    handleChange={this.handleChange}
    handleitems={this.handleitems}
   />
   <Routes>
    <Route path='/:val' element={ <Category val={val}/>}/>
   </Routes>
   </>
    
    )
  }
}


export default NavbarContainer;
