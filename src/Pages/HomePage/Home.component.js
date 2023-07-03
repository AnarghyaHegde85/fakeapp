import React, { PureComponent } from 'react';
import Pic from '../../Assets/pic1.jpg';
import "./Home.scss";
import Footer from '../../Component/Footer';
// import NavBar from '../../Component/NavBar';

class HomeComponent extends PureComponent {
  render() {
    return (
      <>
        <div className='home'>
          <img className='home-pic' src={Pic} alt='bgImg'/>
          <Footer />
        </div>
      </>
    )
  }
}

export default HomeComponent;