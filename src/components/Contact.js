import React from "react";
import SocialFollow from "./socialFollow";
import user from "../images/user.jpg";


export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <SocialFollow />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
          <img src={user}  width="90" height="90" alt="Susan Wairimu"/>
          </div>
        </div>
        <p className="leading-relaxed mb-5">
            Interested in working together? Let's make something great ! <br/>
            Tel: +254796486115
          </p>
        
      </div>
    </section>
  );
}