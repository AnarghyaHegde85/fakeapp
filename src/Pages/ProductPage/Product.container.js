import React, { PureComponent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductComponent from './Product.component';


const Productrender =(props) =>{
  const navigate=useNavigate();
  const params=useParams();
  console.log(params);
  return <ProductContainer navigate={navigate} params={params} {...props} />
}

class ProductContainer extends PureComponent {

     state = {
        product:[],
     }
    componentDidMount(){
        this.fetchproductDetails();
    }

    componentDidUpdate(prevProps){
      if(prevProps.params.id !==this.props.params.id){
        this.fetchproductDetails();
      }
    }

  fetchproductDetails=()=>{
    const{id}=this.props.params;
    //const{categories}=this.props;
    console.log(id);
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(data=>this.setState({product:data}))
   
  }
 


  render() {
    const {product}=this.state;

    // if(!product){
    //   return <div>loading</div>
    console.log(this.state.product)
    // }
    return (
      
        <ProductComponent {...this.state}
        product={product}
        fetchproductDetails={this.fetchproductDetails.bind(this)} />
      
    );
  }
}

// export default ProductContainer;
export default Productrender;
