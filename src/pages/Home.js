import React from 'react'
import AboutUs from '../components/AboutUs';
import HeroSection from '../components/HeroSection';
import GreenupCollection from '../components/GreenupCollection';
import CPlusCollection from '../components/CPlusCollection';
import ProductCollection from '../components/ProductCollection';
import Responsive from '../components/testing'


function Home() {
    return (
        <>
            <HeroSection/>
            <AboutUs />
            <GreenupCollection />
            <CPlusCollection />
            <ProductCollection/>
        </>
    )
}

export default Home
