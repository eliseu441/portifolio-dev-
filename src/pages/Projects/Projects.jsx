import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Projects.css';

import { Carousel } from '3d-react-carousal';
import hermes5 from './img/hermes/home.png';
import hermes2 from './img/hermes/century.png';
import hermes3 from './img/hermes/sculp.png';
import hermes4 from './img/hermes/types.png';
import hermes1 from './img/hermes/art_book.png';

import vergz1 from './img/vergs/vergs1.png';
import vergz2 from './img/vergs/vergs2.png';
import vergz3 from './img/vergs/vergs3.png';
import vergz4 from './img/vergs/vergs4.png';

import th1 from './img/thiago_adv/th1.png';
import th2 from './img/thiago_adv/th2.png';
import th3 from './img/thiago_adv/th3.png';

function Projects() {
    const [author, setAuthor] = useState("MICHELANGELO");
    const [loading, setLoading] = useState(false);
    const [comboSculp, setComboSculp] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [slidesHermes, setSlidesHermes] = useState(false);
    const [slidesVergs, setSlidesVergs] = useState(false);
    const [slidesMonster, setSlidesMonster] = useState(false);
    const [description, setDescription] = useState('TESTE');



    useEffect(() => {
        // callApis()
        callApis()
    }, []);
    const descHermes = 'http://hermesarts.com.br:5000/'
    const descVergz = 'https://portifolio-vergz2.vercel.app/'
    const descThiago = 'https://adv-thiago-conde.vercel.app/'








    const callApis = async () => {
        await setLoading(true)
        await setSlidesHermes([
            <img src={hermes1} alt="1" />,
            <img src={hermes5} alt="2" />,
            <img src={hermes2} alt="3" />,
            <img src={hermes3} alt="4" />,
            <img src={hermes4} alt="5" />
        ]);
        await setSlidesVergs([
            <img src={vergz1} alt="1" />,
            <img src={vergz4} alt="2" />,
            <img src={vergz2} alt="3" />,
            <img src={vergz3} alt="4" />
        ]);
        await setSlidesMonster([
            <img src={th2} alt="2" />,
            <img src={th3} alt="3" />,
            <img src={th1} alt="4" />
        ]);




        setLoading(false)
    }






    return (
        <>
            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
            {loading == true ?
                <div class='loader-background' >
                    <p>Loading Porjects</p>
                    <div class="loader">
                    </div>

                </div>
                : <></>}
            <div>


                <div class='page-projects row'>

                    <div class='project-title' data-aos="fade-left" data-aos-duration="1000"><span>PROJECTS</span></div>
                    <div class='project-subtitle' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800"><span>some works in construction...</span></div>
                    
                    <div class='carousel-vergs col-12 d-flex-justify-content-center' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
                        <div class=''>
                            <p class='vergs-tattoo'>VERGS-TATTOO </p>
                            <div>
                                <button class='button-desc side-infos ms-5'
                                    data-bs-toggle="modal" data-bs-target="#modalProject"
                                    onClick={e => setDescription(descVergz)}
                                >
                                    Live Preview
                                </button>


                            </div>

                        </div>
                        {slidesVergs && loading == false ?

                            <div >
                                <Carousel slides={slidesVergs} autoplay={false} interval={5000} />
                            </div>
                            : <></>}
                    </div>
                    <div class=' col-12 d-flex-justify-content-center ' data-aos="fade-right" data-aos-duration="1000">
                        <div class=''>
                            <p class='monster'>ADV. THIAGO CONDE</p>

                            <button class='button-desc side-infos ms-5'
                                data-bs-toggle="modal" data-bs-target="#modalProject"
                                onClick={e => setDescription(descThiago)}
                            >
                                Live Preview
                            </button>


                        </div>
                        {slidesMonster && loading == false ?

                            <div >
                                <Carousel slides={slidesMonster} autoplay={false} interval={5000} />
                            </div>
                            : <></>}
                    </div>
                    <div class='carousel-hermes col-12 d-flex-justify-content-center mt-3' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1500">
                        <div >
                            <p class='hermes-project' >HERMES PROJECT  </p>

                            <button class='button-desc side-infos ms-5'
                                data-bs-toggle="modal" data-bs-target="#modalProject"
                                onClick={e => setDescription(descHermes)}
                            >
                                Live Preview
                            </button>

                        </div>
                        {slidesHermes && loading == false ?

                            <div >
                                <Carousel slides={slidesHermes} autoplay={false} interval={5000} />
                            </div>
                            : <></>}
                    </div>
                    

                    <div class="modal fade " id="modalProject" tabindex="-2" aria-labelledby="modalProjectLabel" aria-hidden="true">

                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable .modal-xl ">


                            <div class="modal-content">
                                <div class="modal-header  ">

                                    <button type="button" class="btn-close btn-close-white" id="closeCircuito" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class='modal-body p-1'>
                                    <div >
                                        <iframe class='project-info-modal' src={description} title="description"></iframe>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
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

export default Projects;