import React from "react";
import "../css/pages/HomePage.css";
import Background from '../assets/backgroundPhoto.jpg'
import TestHeader from './components/TestHeader';


export default function HomePage() {
  return (
    <div className="HomePageParent">
<img src={Background} className='background'></img>
<TestHeader/>
<div className="hey">Hello World</div>
    </div>
  );
};
