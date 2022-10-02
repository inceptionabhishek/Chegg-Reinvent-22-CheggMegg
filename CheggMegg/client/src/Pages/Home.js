import React from 'react'
import CarouselComponent from "../Components/CarouselComponent";
import HomeDetails from '../Components/HomeDetails';
import Footer from '../Components/Footer';
import FlowChart from '../Components/FlowChart';

function Home() {
  return (
    <>
      <div className='back-background'>
        <CarouselComponent />
        <FlowChart />
        <HomeDetails />
        <Footer />
      </div>
    </>
  );
}

export default Home