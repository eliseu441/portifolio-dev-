import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



function Experience() {

    useEffect(() => {


    }, []);












    return (
        <>

<div class='stars'>
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                </div>
            <div class='page-experience row'>

                    <div class='project-title' data-aos="fade-left" data-aos-duration="1000"><span>THE ROAD SO FAR...</span></div>

                <div class='experience-content' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000">

                        
                            <div class="ajustador-2">

                                <div class="ferramentas">
                                    <p class="project-subtitle mb-3">Along my career i have dealed with many tools, above you can see some that i have solid experience and know about my journey untill now.</p>

                                    <p align="left">
                                         <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="80" height="80"/> </a> <a href="https://www.chartjs.org" target="_blank" rel="noreferrer"> <img class='icons'src="https://www.chartjs.org/media/logo-title.svg" alt="chartjs" width="80" height="80"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="80" height="80"/> </a> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="80" height="80"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="80" height="80"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img class='icons'src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="80" height="80"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="80" height="80"/> </a> <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img class='icons'src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="80" height="80"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80"/> </a> <a href="https://www.jenkins.io" target="_blank" rel="noreferrer"> <img class='icons'src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins" width="80" height="80"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="80" height="80"/> </a> <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer"> <img class='icons'src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="80" height="80"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="80" height="80"/> </a> <a href="https://www.nginx.com" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="80" height="80"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="80"/> </a> <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="80" height="80"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img class='icons'src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="80" height="80"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="80" height="80"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img class='icons'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="80" height="80"/> </a> 
                                            </p>
                                </div>
                            </div>



                </div>
                <div className="row mt-5" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1500">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--teste"
                            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            date="2020"
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                            iconStyle={{ background: '#FF4A17', color: 'white', display: 'flex' }}
                            icon={<h3 style={{ margin: 'auto' }}>1</h3>}

                        >
                            <h3 className="vertical-timeline-element-title">Beginning of a developer career</h3>
                            <p>
                            I was studying computer engineering and in parallel a Web Course with JavaScript on Udemy. this gave me the base to deal with using front-end tecs like css and react.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--teste"
                            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            date="2021"
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                            iconStyle={{ background: '#FF4A17', color: 'white', display: 'flex' }}
                            icon={<h3 style={{ margin: 'auto' }}>2</h3>}

                        >
                            <h3 className="vertical-timeline-element-title">First job</h3>
                            <p>
                                Start working on system developments having daily contact with creation of api services using node, this was a good experience to know a lot of things about node frameworks and api's structure.
                            </p>
                        </VerticalTimelineElement><VerticalTimelineElement
                            className="vertical-timeline-element--teste"
                            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                            date="2021"
                            iconStyle={{ background: '#FF4A17', color: 'white', display: 'flex' }}
                            icon={<h3 style={{ margin: 'auto' }}>3</h3>}

                        >
                            <h3 className="vertical-timeline-element-title">Knowledge</h3>
                            <p>
                                This year i have started some courses to improve my skills, the main ones are Rocketseat and Alura courses with focus on back-end development using javascript and node
                            </p>
                        </VerticalTimelineElement><VerticalTimelineElement
                            className="vertical-timeline-element--teste"
                            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                            date="2022"
                            iconStyle={{ background: '#FF4A17', color: 'white', display: 'flex' }}
                            icon={<h3 style={{ margin: 'auto' }}>4</h3>}

                        >
                            <h3 className="vertical-timeline-element-title">New job</h3>
                            <p>
                            I was hired at vivo, by far this is where I gained more knowledge, not just as a developer but as a project designer, infrastructure maintenance, databases creation and maintenance, physical servers and more.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--teste"
                            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                            date="2023-2024"
                            iconStyle={{ background: '#FF4A17', color: 'white', display: 'flex' }}
                            icon={<h3 style={{ margin: 'auto' }}>4</h3>}

                        >
                            <h3 className="vertical-timeline-element-title">Now</h3>
                            <p>
                            I continue to do both maintenance and creation of systems and in addition I deal with databases, designs, etl server, automation, project structuring and everything involving development, preparation and presentation of the project, when i'm not working i usually elaborate some personal projects to expand my skills.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>




            </div>




            <div class="aviso">
                <div class='page-home-mobile'>
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                    <div class="card-home-mobile">
                        <div class="box">
                            <div class='sub-home-mobile'>
                                <strong> for now, this page is only for desktop.</strong>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Experience;