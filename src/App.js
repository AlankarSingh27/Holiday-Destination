import React from 'react';
import Navbar from './components/navbar/Navbar';
import Card from './components/cards/Cards';
import InfoBox from './components/infobox/Info-box';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';
import Landingpage from './components/landing/Landingpage';

class App extends React.Component{
    render(){
        return(
         <>
        <Navbar/>
        <Landingpage/>
        <Card/>
        <InfoBox/>
        <Contact/>
        <Footer/>
        {/* <div style={{marginBottom:'200px'}}></div> */}
         </>
        )
    }
}
export default App;