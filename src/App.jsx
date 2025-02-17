import React from 'react';
import Navbar from './Navbar/navbar.jsx'
import Home from './Home/home.jsx'
import Cursor from './cursor.jsx';
import JDI from './Components/JDI/jdi.jsx'
import VC from './Components/Video-Card/vc.jsx'
import TP from './Components/Top-Picks/tp.jsx'
import Trending from './Components/Trending/trending.jsx'
import Men from './Sections/men.jsx'
import Women from './Sections/women.jsx'
import Kids from './Sections/kids.jsx'
import Shop from './Shop/shop.jsx'
import Footer from './Footer/footer.jsx'

const App = () => {  
  return (
    <>
      <Navbar/>
      <Home/>
      <JDI/>
      <TP/>
      <Trending/>
      <Men/>
      <Women/>
      <Kids/>
      <VC/>
      <Shop/>
      <Footer/>
    </>
  );
}

export default App;
