import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub,
    faWhatsapp
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Follow me on Social Media</h3>
      <a href=""
  className="linkedin social">
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
<a href=""
  className="github social">
  <FontAwesomeIcon icon={faGithub} size="2x" />
</a>
      <a href=""
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href=""
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href=""
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
<a href=""
  className="whatsapp social">
  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
</a>
</div>
  );
}