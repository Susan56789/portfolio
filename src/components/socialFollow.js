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
      <a href="https://www.linkedin.com/in/susan-macharia-902704174/"
  className="linkedin social">
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
<a href="https://github.com/Susan56789"
  className="github social">
  <FontAwesomeIcon icon={faGithub} size="2x" />
</a>
      <a href=""
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com/profile.php?id=100070904662307"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://twitter.com/Sue_Nimoh" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/w.a.i.r.i.m.u.__/"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
<a href="https://wa.me/254796486115"
  className="whatsapp social">
  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
</a>
</div>
  );
}