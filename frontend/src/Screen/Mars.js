import React from 'react'
import MarsImg from '../Component/PlanetImg/Mars.jpg';

export default function () {
  return (
    <div>
    <h1 
      className="my-5 display-3 fw-bold ls-tight px-3" 
      style={
        {
          color: 'rgb(77, 134, 156)',
          textAlign:'center'
          }
          }>
        Mars
    </h1>
    <p>
        Mars is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron(III) oxide dust, giving it
         the nickname "the Red Planet".[21][22] Mars is among the brightest objects in Earth's sky and its high-contrast albedo features 
         have made it a common subject for telescope viewing. It is classified as a terrestrial planet and is the second smallest of the 
         Solar System's planets with a diameter of 6,779 km (4,212 mi). In terms of orbital motion, a Martian solar day (sol) is equal to 
         24.5 hours and a Martian solar year is equal to 1.88 Earth years (687 Earth days). Mars has two natural satellites that are small 
         and irregular in shape: Phobos and Deimos.
         <br></br>
        <br></br>
        The relatively flat plains in northern parts of Mars strongly contrast with the cratered terrain in southern highlands – this terrain 
        observation is known as the Martian dichotomy. Mars hosts many enormous extinct volcanos (such as Olympus Mons, 21.9 km or 13.6 mi 
        tall) and one of the largest canyons in the Solar System (Valles Marineris, 4,000 km or 2,500 mi long). Geologically, the planet is 
        fairly active with marsquakes trembling underneath the ground, dust devils sweeping across the landscape, and cirrus clouds. Carbon 
        dioxide is substantially present in Mars's polar ice caps and thin atmosphere. During a year, there are large surface temperature 
        swings on the surface between −78.5 °C (−109.3 °F) to 5.7 °C (42.3 °F)[c] similar to Earth's seasons, as both planets have significant 
        axial tilt.
        <br></br>
        <br></br>
        <img
            className="d-block w-100"
            src={MarsImg}
            
          />
        Mars was formed approximately 4.5 billion years ago. During the Noachian period (4.5 to 3.5 billion years ago), Mars's surface was
         marked by meteor impacts, valley formation, erosion, and the possible presence of water oceans. The Hesperian period 
         (3.5 to 3.3–2.9 billion years ago) was dominated by widespread volcanic activity and flooding that carved immense outflow 
         channels. The Amazonian period, which continues to the present, was marked by the wind as a dominant influence on geological 
         processes. Due to Mars's geological history, the possibility of past or present life on Mars remains of great scientific interest.
        <br></br>
        <br></br>
        Since the late 20th century, Mars has been explored by uncrewed spacecraft and rovers, with the first flyby by the Mariner 4 
        probe in 1965, the first Mars orbiter by the Mars 2 probe in 1971, and the first landing by the Viking 1 probe in 1976. As of 
        2023, there are at least 11 active probes orbiting Mars or at the Martian surface. Mars is an attractive target for future human 
        exploration missions, though in the 2020s no such mission is planned.
    </p>
    </div>
  )
}
