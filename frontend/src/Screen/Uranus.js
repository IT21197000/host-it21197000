import React from 'react'
import UranusImg from '../Component/PlanetImg/Uranus.jpg';

export default function 
() {
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
            Uranus
        </h1>
        <p>
            Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, 
            ammonia, and methane in a supercritical phase of matter, which in astronomy is called 'ice' or volatiles. The planet's 
            atmosphere has a complex layered cloud structure and has the lowest minimum temperature of 49 K (−224 °C; −371 °F) out of 
            all the Solar System's planets. It has a marked axial tilt of 82.23° with a retrograde rotation period of 17 hours and 14 
            minutes. This means that in an 84-Earth-year orbital period around the Sun, its poles get around 42 years of continuous 
            sunlight, followed by 42 years of continuous darkness.
            <br></br>
            <br></br>
            Uranus has the third-largest diameter and fourth-largest mass among the Solar System's planets. Based on current models, 
            inside its volatile mantle layer is a rocky core, and surrounding it is a thick hydrogen and helium atmosphere. Trace amounts 
            of hydrocarbons (thought to be produced via hydrolysis) and carbon monoxide along with carbon dioxide (thought to have been 
            originated from comets) have been detected in the upper atmosphere. There are many unexplained climate phenomena in Uranus's 
            atmosphere, such as its peak wind speed of 900 km/h (560 mph),[22] variations in its polar cap, and its erratic cloud 
            formation. The planet also has very low internal heat compared to other giant planets, the cause of which remains unclear.
            <br></br>
            <br></br>
            <img
            className="d-block w-100"
            src={UranusImg}
            
          />
            Like the other giant planets, Uranus has a ring system, a magnetosphere, and many natural satellites. Its ring system is 
            extremely dark, with only about 2% of the incoming light reflected. Uranus's 28 natural satellites include 18 known regular 
            moons, of which 13 are small inner moons. Further out are the larger five major moons of the planet: Miranda, Ariel, Umbriel, 
            Titania, and Oberon. Orbiting at a much greater distance from Uranus are the nine known irregular moons. The planet's 
            magnetosphere is highly asymmetric and has many charged particles, which may be the cause of the darkening of its rings and 
            moons.
            <br></br>
            <br></br>
            Uranus is visible to the naked eye, but it is very dim and was not classified as a planet until 1781, when it was first 
            observed by William Herschel. About seven decades after its discovery, consensus was reached that the planet be named after 
            the Greek god Uranus (Ouranos), one of the Greek primordial deities. As of 2024, it had been visited up close only once when 
            in 1986 the Voyager 2 probe flew by the planet.[23] Though nowadays it can be resolved and observed by telescopes, there is 
            much desire to revisit the planet, as shown by Planetary Science Decadal Survey's decision to make the proposed Uranus Orbiter 
            and Probe mission a top priority in the 2023–2032 survey, and the CNSA's proposal to fly by the planet with a subprobe of 
            Tianwen-4.[24]
        </p>
    </div>
  )
}
