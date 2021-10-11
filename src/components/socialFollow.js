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
      <a href="https://www.linkedin.com/in/susan-macharia-902704174/" target="_blank" rel="noopener noreferrer"
  className="linkedin social">
  <FontAwesomeIcon icon={faLinkedin} size="1x" />
</a>
<a href="https://github.com/Susan56789" target="_blank" rel="noopener noreferrer"
  className="github social">
  <FontAwesomeIcon icon={faGithub} size="1x" />
</a>
      <a href="" target="_blank" rel="noopener noreferrer"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="1x" />
</a>
<a href="https://www.facebook.com/profile.php?id=100070904662307" target="_blank" rel="noopener noreferrer"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="1x" />
</a>
<a href="https://twitter.com/nimoh_sue" target="_blank" rel="noopener noreferrer" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="1x" />
</a>
<a href="https://www.instagram.com/w.a.i.r.i.m.u.__/" target="_blank" rel="noopener noreferrer"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="1x" />
</a>
<a href="https://wa.me/254796486115" target="_blank" rel="noopener noreferrer"
  className="whatsapp social">
  <FontAwesomeIcon icon={faWhatsapp} size="1x" />
</a>
</div>
  );
}