import React from 'react'
import Sec1 from '../../Sec-1/Sec1'
import SwiperAutoplay from '../../SwiperAutoplay/SwiperAutoplay'
import Sec2 from '../../Sec-2/Sec2'
import SliderComponent from '../../slider/SliderComponent'
import Card from '../../Card/card'
import DigitalJourney from '../../DigitalJourney/DigitalJourney'
import Project from '../../Project/Project'


function App() {
  return (
    <>  
    <div className='app-container'>
    <SliderComponent/>
     
   <Card/>
 
    <DigitalJourney/>

  <Sec2/>
    <Project/>
    <Sec1/>
    { 
    <SwiperAutoplay/>
   }
    </div>
    </>
  )
}

export default App