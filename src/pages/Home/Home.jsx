import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import { Carousel } from '3d-react-carousal';
import background from './img/teste_tail.png';


function Home() {

    useEffect(() => {
        matrix()
    }, []);



    const matrix = async (nutri) => {
        var c = await document.getElementById("c");
        var ctx = c.getContext("2d");

        //making the canvas full screen
        c.height = window.innerHeight;
        c.width = window.innerWidth;

        //chinese characters - taken from the unicode charset
        var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        //converting the string into an array of single characters
        matrix = matrix.split("");

        var font_size = 10;
        var columns = c.width / font_size; //number of columns for the rain
        //an array of drops - one per column
        var drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for (var x = 0; x < columns; x++)
            drops[x] = 1;

        //drawing the characters
        function draw() {
            //Black BG for the canvas
            //translucent BG to show trail
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#51ff00";//green text
            ctx.font = font_size + "px arial";
            //looping over drops
            for (var i = 0; i < drops.length; i++) {
                //a random chinese character to print
                var text = matrix[Math.floor(Math.random() * matrix.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i * font_size, drops[i] * font_size);

                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if (drops[i] * font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;

                //incrementing Y coordinate
                drops[i]++;
            }
        }

        setInterval(draw, 50);

    }




    return (
        <>
            <div class='page-default'>





                <div class='apresentation'>
                    <img class='img-arrow' src={background} />
                    <div class='apresentation-text'>
                        <p class='margin-who'>WH0</p>
                        <p class='margin-is'>AM</p>

                        <p class='margin-i'>I?</p>

                    </div>


                </div>

                <div class='description'>

                    <div class="card">
                        <p class="description-Title">


                            I'm Eliseu,<br></br> I was hired as a Service Analyst at Vivo, where I have daily interaction with creation and maintenance of applications.
                            During my off-hours, I organize my time to develop an individualized plan that allows me to explore new technologies. I focus on personal projects to improve my skills.
                        </p>
                        <div class="share">
                            <a href="https://github.com/eliseu441/eliseu441"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg></a>

                            <a href="https://www.linkedin.com/in/eliseu-caetano-da-silva-68a272186/"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                            </svg></a>

                        </div>
                    </div>
                </div>

                <canvas id="c"></canvas>

            </div>

            <div class="aviso">
                <div class='card-mobile-advice'>
                    <p >This is an redirect screen for mobile navigation. To view the options, click on the Saturn icon in the top left corner.Keep in mind that desktop is a completely different experience</p>
                </div>
                <div>
                    <div class="loader-black">
                        <div class="blackhole">
                            <div class="blackhole-circle"></div>
                            <div class="blackhole-disc"></div>
                        </div>
                        <div class="curve">
                            <svg viewBox="0 0 500 500">
                                <path id="loading" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"></path>
                                <text width="500">

                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;