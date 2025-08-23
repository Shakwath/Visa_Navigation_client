import React from 'react';
import Navbar from './Navbar';
import img1 from '../assets/Banner 1.jpg';
import img2 from '../assets/Banner2.jpg';
import img3 from '../assets/Banner3.jpg';
import Footer from './Footer';
import FAQ from './FAQ';
import FeaturesSection from './FeaturesSection';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1}  className="w-full h-10/12" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full h-10/12" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full h-10/12" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            </div>

            {/* Extra Section 01*/}
            <div >
            <FeaturesSection></FeaturesSection>
            </div>
            {/* Extra Section 02*/}
            <div>
              <FAQ></FAQ>
           </div>
       </div>
    );
};

export default Home;