import React from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import Questions from '../components/Questions';
import Slider from '../components/Slider';


const Home = () => {
  return <div>
      <NavigationBar/>
      <Slider/>
      <Categories/> 
      <Questions/>
      <Footer/>
  </div>;
};

export default Home;
