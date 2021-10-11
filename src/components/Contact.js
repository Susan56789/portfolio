import React from "react";
import SocialFollow from "./socialFollow";
import '../index.css';
import user from '../images/user.jpg';
export default function Contact() {
 
 
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
          </div>
       <img src={user} alt="Susan Wairimu" style={{width:"70px",height:"70px"} }/>
       
        <footer>
        <SocialFollow />
        </footer>
           </div>
      </div>
    </section>
  );
}