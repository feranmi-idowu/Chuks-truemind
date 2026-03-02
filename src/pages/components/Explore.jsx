import React from "react";
import Im1 from "../../assets/images/Im1.png";
import '../styles/home.css'
import Popular from "./data/PopularData";
import JollofRiceEntrees from "./data/JollofRiceEntreesData"
import PopularCard from "./cards/PopularCard";
import JollofCard from "./cards/JollofCards";
import SwallowCard from "./cards/SwallowCard";
import SwallowData from "./data/SwallowData";
import { useState } from "react";

function Explore() {
    const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };
    return (
            <div className="home-container">
                <section className="img-home-container">
                    <img src={Im1} className="img-home" alt="la"/>
                    <div className="home-overlay">
                        <div className="home-hero-content">
                            <h1>Chuks Kitchen</h1>
                            <p>Chuks  Kitchen Nigerian Home Cooking 4.8  (1.2k)</p>
                        </div>
                    </div>
                </section> 
                <section className="menu-section">
                    <div className="menu-categories">
                        <p className="menu-category-heading">Menu Categories</p>
                        <a  href="#popular" 
                            className={activeLink === 'popular' ? 'active-tab' : 'menu-category'} 
                            onClick={() => handleLinkClick('popular')}>Popular</a>
                        <a  href="#Jollof-Rice-Entrees" 
                            className={activeLink === 'Jollof-Rice-Entrees' ? 'active-tab' : 'menu-category'} 
                            onClick={() => handleLinkClick('Jollof-Rice-Entrees')}>Jollof Rice & Entrees</a>
                        <a href="#Swallow-Soups" className={activeLink === 'Swallow-Soups' ? 'active-tab' : 'menu-category'} 
                            onClick={() => handleLinkClick('Swallow-Soups')} >Swallow & Soups</a>
                        <a href="#Grills-sides" className={activeLink === 'Grills-sides' ? 'active-tab' : 'menu-category'} 
                            onClick={() => handleLinkClick('Grills-sides')}>Grills & sides</a>
                        <a href="#Beverages" className={activeLink === 'Beverages' ? 'active-tab' : 'menu-category'} 
                            onClick={() => handleLinkClick('Beverages')}>Beverages</a>
                        <a href="#Desserts" className={activeLink === 'Desserts' ? 'active-tab' : 'menu-category'} 
                            onClick={() => handleLinkClick('Desserts')}>Desserts</a>
                    </div>
                    <section id="popular" className="popular-section">
                        <h1>Popular</h1>
                        <div className="home-popularCards">
                            {Popular.map(popular => (
                                <PopularCard 
                                    key={popular.key}
                                    image={popular.image}
                                    title={popular.title}
                                    description={popular.description}
                                    price={popular.price}
                                />
                            ))}
                        </div>
                    </section>
                    <section id="Jollof-Rice-Entrees" className="popular-section">
                        <h1>Jollof Rice & Entrees</h1>
                        <div className="home-popularCards">
                            {JollofRiceEntrees.map(jollofRiceEntrees => (
                                <JollofCard 
                                    key={jollofRiceEntrees.title}
                                    image={jollofRiceEntrees.image}
                                    title={jollofRiceEntrees.title}  
                                    description={jollofRiceEntrees.description}   
                                    price={jollofRiceEntrees.price}                        
                                />
                            ))}
                        </div>
                    </section>
                    <section id="Swallow-Soups" className="popular-section">
                        <h1>Swallow & Soups</h1>
                        <div className="home-popularCards">
                            {SwallowData.map(swallowData => (
                                <SwallowCard 
                                    key={swallowData.key}
                                    image={swallowData.image}
                                    title={swallowData.title}  
                                    description={swallowData.description}   
                                    price={swallowData.price}                        
                                />
                            ))}
                        </div>
                    </section>
                </section>
                
            </div>

    )
}

export default Explore;
