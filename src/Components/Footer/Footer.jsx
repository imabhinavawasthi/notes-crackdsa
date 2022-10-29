import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faYoutube, faWhatsapp, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCopyright, faEnvelope, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div>
<div class="container mt-5">
  <footer
          class="text-center text-lg-start text-dark"
          style={{"background-color": "#ECEFF1"}}
          >
    <section
             class="d-flex justify-content-between p-4 text-white"
             style={{"background-color": "var(--theme-color)"}}
             >
      <div class="me-5">
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href="" class="text-white me-4">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="" class="text-white me-4">
        <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="" class="text-white me-4">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="" class="text-white me-4">
        <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="" class="text-white me-4">
        <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </section>

    <section class="">
      <div class="container text-center text-md-start">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Notes crackDSA</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{"width": "60px", "background-color": "#7c4dff", "height": "2px"}}
                />
            <p>
              A Unit of <strong><a style={{textDecoration:"none", color:"var(--theme-color)"}} href="https://crackdsa.com" target="_blank" >crackDSA.com</a></strong>
            </p>
            <p>
                <a href="/terms&conditions" target="_blank" style={{textDecoration:"none"}} >Terms & Conditions <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </p>
          </div>

          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Explore</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{"width": "60px", "background-color": "#7c4dff", "height": "2px"}}
                />
            <p>
            <a style={{textDecoration:"none", color:"var(--theme-color)"}} href="" target="_blank" >About Notes crackDSA</a>
            </p>
            <p>
            <a style={{textDecoration:"none", color:"var(--theme-color)"}} href="" target="_blank" >Contribute (Join Us)</a>
            </p>
            <p>
            <a style={{textDecoration:"none", color:"var(--theme-color)"}} href="https://crackdsa.com" target="_blank" >Learn DSA | crackdsa.com</a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{"width": "60px" ,"background-color": "#7c4dff" ,"height": "2px"}}
                />
            <p><FontAwesomeIcon icon={faEnvelope} /> <a style={{textDecoration:"none", color:"var(--theme-color)"}} href="mailto:helloss@crackdsa.com" target="_blank" >helloss@crackdsa.com</a></p>
            <p><FontAwesomeIcon icon={faPhone} /><a style={{textDecoration:"none", color:"var(--theme-color)"}} href="tel:0919956217210" target="_blank" > +91 99562 17210</a></p>
          </div>
        </div>
      </div>
    </section>
<hr/>
    <div
         class="text-center p-3"
         style={{"background-color": "#ECEFF1"}}
         >
      Made with <FontAwesomeIcon color='red' icon={faHeart} /> in India | <FontAwesomeIcon  icon={faCopyright} /> 2022 @ crackDSA
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer