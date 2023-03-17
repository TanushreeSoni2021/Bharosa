import React from 'react';
import "../Styles/Home.css"
import insta from '../Assets/Instagram.png';
import face from '../Assets/Facebook.png';
import twitter from '../Assets/Twitter.png';
import whatsapp from '../Assets/Whatsapp.png';

function Sticky() {
  return (
    <>
        <section>
        <div className="icon-bar ">
          <a href="#" className="bg-icon pt-2" target="_blank"><img src={face} /></a>
          <a href="#" className="bg-icon" target="_blank"><img src={whatsapp} /></a>
          <a href="#" className="bg-icon" target="_blank"><img src={insta} /></a>
          <a href="#" className="bg-icon pb-2" target="_blank"><img src={twitter} /></a>
        </div>
      </section>
    </>
  )
}

export default Sticky;