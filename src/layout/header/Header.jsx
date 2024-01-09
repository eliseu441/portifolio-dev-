import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import gif from './logoV.png';

function topFunction(e) {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const Header = () => {
  const [page, setPage] = useState(1);


  return (

    <header class="fixed">
      <nav class="navbar fixed-top color-nav">
        <div class=" header-content">
          <div class="gif ">

          </div>

          <div class="header-deaktop-options" >
                    <Link to="/" >
            <button class={page == 1 ? "buttonDetails details-1 active" : "buttonDetails details-1"} type="button" 
              onClick={e=> setPage(1)}>
              <p>ABOUT ME</p>
            </button>
            </Link>
            <Link to="/projects" >
            <button class={page == 2 ? "buttonDetails active" : "buttonDetails "} type="button" 
              onClick={e=> setPage(2)}>
              <p>PROJECTS</p>
            </button>
            </Link>
                    <Link to="/experience" >
            <button class={page == 3 ? "buttonDetails details-2 active" : "buttonDetails details-2"} type="button"  
              onClick={e=> setPage(3)}>
              <p>EXPERIENCE</p>
            </button>
            </Link>

          </div>



          <div id="mainnav" >
            <ul class="menu">
              <li class="home">
                <a class="button-icon">
                  <div class="cube">
                    <span class="side front">Contact</span>
                    <span class="side top">Click below</span>
                  </div>
                </a>
                <ul class="submenuteste creditos">

                <Link to="https://github.com/eliseu441" className="buttonText" >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0,0,256,256"
                    style={{ fill: "#000000" }}>
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.33333,5.33333)"><path d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c9.40662,0 17,7.59339 17,17c0,7.66536 -5.04306,14.12252 -12,16.25195v-5.11523c0,-1.91008 -1.10068,-3.5481 -2.69141,-4.36328c3.13805,-0.60035 5.72121,-2.3751 6.93703,-4.76606c1.21582,-2.39096 0.9149,-5.10432 -0.80812,-7.28668c0.44354,-1.36529 0.93902,-3.76003 -0.23828,-5.64453c-2.26987,0 -3.73455,1.55591 -4.43359,2.52344c-1.19501,-0.39258 -2.47379,-0.5962 -3.76562,-0.59961c-1.29267,0.00115 -2.5728,0.20278 -3.76953,0.59375c-0.70074,-0.96798 -2.16424,-2.51758 -4.42969,-2.51758c-1.35107,2.16264 -0.51586,4.48839 -0.06836,5.4375c-1.84039,2.17401 -2.23014,4.93209 -1.04286,7.37992c1.18727,2.44783 3.80041,4.27375 6.99208,4.88571c-1.30614,0.67319 -2.28436,1.89475 -2.58398,3.37695h-1.31445c-1.297,0 -1.80095,-0.52702 -2.50195,-1.41602c-0.692,-0.889 -1.43608,-1.48638 -2.33008,-1.73437c-0.482,-0.051 -0.80672,0.31563 -0.38672,0.64063c1.419,0.966 1.51694,2.54703 2.08594,3.58203c0.518,0.932 1.5793,1.77148 2.7793,1.77148h1.57031v3.25195c-6.95694,-2.12943 -12,-8.58659 -12,-16.25195c0,-9.40661 7.59339,-17 17,-17z"></path></g></g>
                  </svg>
                  </Link>
                  <Link to="https://www.linkedin.com/in/eliseu-caetano-da-silva-68a272186/" className="buttonText" >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                  </svg>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Header