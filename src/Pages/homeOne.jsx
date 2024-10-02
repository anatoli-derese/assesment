import React from 'react';
import Card from '../components/card';
import ArrowLeft  from "../assets/Icons/arrow_left.svg";
import ArrowRight from "../assets/Icons/arrow_right.svg";
import { useState } from 'react';



const HomeOne = () => {
    const areas = ["work", "family", "friends"];
    const [index, setIndex] = useState(0);
    const backgroundStyle = {
    backgroundImage: `url('../../public/assets/Areas/${areas[index]}.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    margin: '0',
    padding: '0',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
  };

  const subTitles = [
        'Fluid has internet access, so you cand get up-to-date information from it',
        'Fluid has internet access, so you cand get up-to-date information from it',
        'Fluid has internet access, so you cand get up-to-date information from it'
  ]
  const titles = [
    "Time For Work",
    "Time For Family",
    "Time For Friends"
  ]

  const logoStyle = {
    width: '60%',
    // maxWidth: '300px', 
  };
  const handleLeft = () => {
    setIndex((index - 1 + 3) % 3);
  }
  const handleRight = () => {
    setIndex((index + 1) % 3);
}

  return (
    <div style={backgroundStyle}>
      {/* <img src={logo} alt="Logo" style={logoStyle} /> */}
      <CircleIcon onClick = {
       handleLeft
      }>
        <img src={ArrowLeft} alt="Logo" style={logoStyle} />
      </CircleIcon>
      <Card title={titles[index]} subtitle={subTitles[index]} />
        <CircleIcon  onClick = {
           handleRight
        }>
            <img src={ArrowRight} alt="Logo" style={logoStyle} />
        </CircleIcon>
    </div>
  );
};


const CircleIcon = ({children,onClick}) => {
  
    const circleStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    
    return (
        <div style={circleStyle}  onClick = {onClick}>
        {children}
        </div>
    );
}

export default HomeOne;
