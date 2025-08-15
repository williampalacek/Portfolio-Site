import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';
import profile from '../profile';

function Header() {
  const [showMore, setShowMore] = useState(false);
  const [isExploding, setIsExploding] = React.useState(false);
  const firstName = profile.fullName.split(' ')[0];

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "476px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
    if (!showMore) {
      const openSound = new Audio(process.env.PUBLIC_URL + `/sounds/sfx/open.wav`);
      openSound.play();
    } else {
      const closeSound = new Audio(process.env.PUBLIC_URL + `/sounds/sfx/close.wav`);
      closeSound.play();
    }
  };

  return (
    <header className="">
      <Confetti active={ isExploding } config={ config }/>
      <h1 className="font-Outfit text-5xl font-bold">{">>"} {profile.initials}.</h1>
      <p className="font-Inter font-normal mt-6"> <span className="bg-da_green">having fun comes first and great work will follow.</span> Well tbh, still figuring out what that really means, but I'm diving in headfirst</p>
      <p className="font-Inter font-normal mt-6">—and that's what matters.</p>
      <div className={`transition-all duration-500 ${showMore ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden ${showMore ? '' : 'm-0'}`}>
        <div className="border-2 border-dashed border-da_green rounded-md mt-4 p-2">
          <img src={process.env.PUBLIC_URL + "/images/dance.gif"} alt="Dance GIF" className="w-32 h-32 self-center" />
          <p className="font-Inter font-light">
            <em>Make it Fun. Make it Cool. Make it Yours.</em>
          </p>
          <p className="mt-4 font-Inter font-normal">
            Hey this is {firstName}, welcome! I'm currently a student at Queen's University, Ontario, Canada finishing my Bachelors on Computer and Electrical Engineering with <em>2+ years of professional experience</em>. <strong>I bring a unique blend of technical expertise and passion to pick up literally anything and run with it.</strong>
          </p>
          <p className="mt-4 font-Inter font-normal">
            You might notice that I choose a little bit of everything in my projects (not even just coding!)
          </p>
          <p className="mt-4 font-Inter font-normal">
            I consider these projects as a creative process and I'm always looking for ways to improve my skills and make some cool stuff. Recently I've been learning Blender, Three.Js after developing an interest in computer graphics and animation. Although it may not be my technical specialty, it's my personal philosophy that the more you know, the more you can do.  
          </p>
          <p className="mt-4 font-DMMono font-normal">
            Everything will find its right place someday. :)
          </p>
          <p className="mt-4 font-Inter font-normal">
            When I'm not busy, I enjoy pumping some iron, playing guitar, gaming and making some random art. If you think that's cool and want to make some cool stuff together, dont hesitate to contact me. Cheers 🥂
          </p>
        </div>
      </div>
      <nav className="flex space-x-4 text-[0.75rem] mt-6">
        <button
          className="relative overflow-hidden transition-all bg-da_green hover:bg-da_green group rounded-md flex items-center justify-center w-[108px] h-[44px] border-current border-2"
          onClick={toggleShowMore}
        >
          <span className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
          <span className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
            {showMore ? 'Minimize' : 'Learn More'}
            <div className="flex justify-end ml-2">
              <img src={showMore ? process.env.PUBLIC_URL +"/icons/close.svg" : process.env.PUBLIC_URL +"/icons/play-icon.svg"} alt=">" className="w-4 h-4" />
            </div>
          </span>
        </button>
        <button
          className="relative overflow-hidden transition-all bg-white hover:bg-da_green group rounded-md flex items-center justify-center w-[108px] h-[44px] border-current border-2"
          onClick={() => {
            setIsExploding(!isExploding);
            navigator.clipboard.writeText(profile.email);
            alert('Email copied to clipboard! :)');
          }}
        >
          <span className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
          <span className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
            Email Me
            <div className="flex justify-end ml-2">
              <img src={process.env.PUBLIC_URL + "/icons/copy-icon.svg"} alt=">" className="w-5 h-5  bg-da_green border-da_green border-2" />
            </div>
          </span>
        </button>
      </nav>
    </header>
  );
}

export default Header;