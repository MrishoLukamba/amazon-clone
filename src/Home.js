import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="container">
                <img className="home__image"src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="" />

                <div onClick className="home__row">
                   <Product rating={4} price={100} title="The Lean Startup" image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"  />
                   <Product rating={1} price={3} title="FIT KING Leg Air Massager for Circulation and Relaxation Foot and Calf Massage with Handheld Controller 3 Intensities 2 Modes(with 2 Extensions)" image="https://images-na.ssl-images-amazon.com/images/I/713O3sHR5HL._AC_SY450_.jpg" />
                </div>
               
                <div className="home__row">
                   <Product rating={4} price={67.99} title="Echo Dot (3rd Gen) with Clock with Mandalorian The Child stand" image="https://images-na.ssl-images-amazon.com/images/I/51ka-NCLsXL._AC_SL1000_.jpg"/>
                   <Product rating={3} price={44} title="Xiaomi Redmi Note 9 Pro 64GB + 6GB RAM, 6.67 FHD DotDisplay, 64MP AI Quad Camera, Qualcomm Snapdragon 720G LTE " image="https://images-na.ssl-images-amazon.com/images/I/71T0vySAgNL._AC_SX679_.jpg"/>
                   <Product rating={5} price={99} title="Samsung 23.5 FHD Curved LED-Lit FreeSync Monitor(LC24F396FHNXZA)" image="https://images-na.ssl-images-amazon.com/images/I/91ubktnbNVL._AC_SL1500_.jpg"/>
                   
                </div>

                <div className="home__row">
                   <Product rating={4} price={800} title="CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD, WiFi Ready & Win 10 Home (GXiVR8060A8, Black)" image="https://images-na.ssl-images-amazon.com/images/I/71fVpfx5oiL._AC_SL1500_.jpg"/>
                </div>


            </div>
            
        </div>
    )
}

export default Home
