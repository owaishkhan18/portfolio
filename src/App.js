import React from 'react';
import Navbar from './component/navbar';
import Hero from './component/hero';
import Projects from './component/projects';
import Contact from './component/contact';
import Cv from "./assest/images/owiahkhanresume.pdf";
import heroImage from './assest/images/WhatsApp Image 2025-01-23 at 10.15.32 PM.jpeg';

import Foot from "./component/foot"
function App() {
  const heroData = {
    name: 'Owaish khan',
    description: 'A passionate developer crafting modern web experiences.',
  imageUrl:heroImage,
  bioDaTA:Cv,
  };
 
  return (
    <div>
      
      <Navbar />
      <Hero
        name={heroData.name}
        description={heroData.description}
        imageUrl={heroData.imageUrl}
        bioDaTA={heroData.bioDaTA}
      />
      <Projects />
      <Contact />
      {/* <Footer/>
       */}
       <Foot></Foot>
    </div>
     
  );
}

export default App;
