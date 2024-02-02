import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './HomeMobile.css';
import background from './img/teste_tail.png';


function HomeMobile() {

    useEffect(() => {
    }, []);





    return (
        <>
            <div class='page-home-mobile'>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div class="card-home-mobile">
                    <div class="box">
                        <span class="title-home-mobile">WHO AM I?</span>
                        <div class='sub-home-mobile'>
                            <strong> I'm Eliseu,<br></br> I was hired as a Service Analyst at Vivo, where I have daily interaction with creation and maintenance of applications.
                            During my off-hours, I organize my time to develop an individualized plan that allows me to explore new technologies. I focus on personal projects to improve my skills.</strong>
                            
                        </div>
                    </div>
                </div>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

            </div>

        </>
    )
}

export default HomeMobile;