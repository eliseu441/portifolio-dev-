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

import monster1 from './img/monster/monster1_desk.png';
import monster2 from './img/monster/monster2_desk.png';
import monster3 from './img/monster/monster1_mobile.png';

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
    const descHermes = 'The main objective of "Hermes project" is to offer an online art gallery with a navigation experience that engages the user and provides an understanding of the history of our art, considering the complexities of each piece. Currently, the portability is limited to desktop, but it is responsive up to 600px in width by 400px in height. The project has allowed me to gain a deep understanding of how to deploy and manage an application. Both the database and server were built from scratch on virtual servers, providing a solid foundation for future projects where this expertise may be necessary. The access link is already available and can be accessed at: http://hermesarts.com.br:5000'
    const descVergz = 'Vergz Studio Tattoo is a responsive app for all screens, project designed to enhance the client experience at Vergz Studio, a dynamic tattoo studio specialized in realizm style. This application provides an intuitive and user-friendly platform for clients to explore the studio portfolio, schedule appointments, and engage with the artists. With a sleek design and seamless navigation, the app aims to streamline the tattoo booking process and foster a closer connection between artists and clients at Vergz Studio. Link acessible on https://vergs-tattoo-kcqo0vg6e-eliseu441.vercel.app/'
    const descMonster = 'This project was a personal challenge I set for myself. The idea was to create a project in less than one week that functions differently on mobile screens and desktops. It is a commercial energy drink interface where you can open a menu to view credits for the images used. On mobile devices, you can also select which product information you want to see on the screen. Additionally, clicking on the logo in the header will automatically scroll to the top of the screen. You can access the link at https://monster-interface.vercel.app/'








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
            <img src={monster2} alt="2" />,
            <img src={monster3} alt="3" />,
            <img src={monster1} alt="4" />
        ]);




        setLoading(false)
    }






    return (
        <>

            {loading == true ?
                <div class='loader-background' >
                    <p>Loading Porjects</p>
                    <div class="loader">
                    </div>

                </div>
                : <></>}


            <div class='page-projects row'>
                <div class='carousel-hermes col-12 d-flex-justify-content-center'>
                    <div >
                        <p class='hermes-project '>HERMES PROJECT- only desktop  </p>

                        <button class='button-desc side-infos ms-5'
                            data-bs-toggle="modal" data-bs-target="#modalProject"
                            onClick={e => setDescription(descHermes)}
                        >
                            Infos
                        </button>

                        <Link to="http://hermesarts.com.br:5000" ><button
                            class='button-desc side-production ms-5'>
                            Deploy link<i class="bi bi-arrow-right"></i>
                        </button>
                        </Link>

                    </div>
                    {slidesHermes && loading == false ?

                        <div >
                            <Carousel slides={slidesHermes} autoplay={false} interval={5000} />
                        </div>
                        : <></>}
                </div>
                <div class='carousel-vergs col-12 d-flex-justify-content-center'>
                    <div class=''>
                        <p class='vergs-tattoo'>VERGS-TATTOO (desktop and mobile) </p>
                        <div>
                            <button class='button-desc side-infos ms-5'
                                data-bs-toggle="modal" data-bs-target="#modalProject"
                                onClick={e => setDescription(descVergz)}
                            >
                                Infos
                            </button>

                            <Link to="https://portifolio-vergz2.vercel.app/" ><button
                                class='button-desc side-production ms-5'>
                                Deploy link<i class="bi bi-arrow-right"></i>
                            </button>
                            </Link>

                        </div>

                    </div>
                    {slidesVergs && loading == false ?

                        <div >
                            <Carousel slides={slidesVergs} autoplay={false} interval={5000} />
                        </div>
                        : <></>}
                </div>
                <div class=' col-12 d-flex-justify-content-center'>
                    <div class=''>
                        <p class='monster'>MONSTER INTERFACE (mobile and desktop) </p>

                        <button class='button-desc side-infos ms-5'
                            data-bs-toggle="modal" data-bs-target="#modalProject"
                            onClick={e => setDescription(descMonster)}
                        >
                            Infos
                        </button>

                        <Link to="https://monster-interface.vercel.app/" ><button
                            class='button-desc side-production ms-5'>
                            Deploy link<i class="bi bi-arrow-right"></i>
                        </button>
                        </Link>

                    </div>
                    {slidesMonster && loading == false ?

                        <div >
                            <Carousel slides={slidesMonster} autoplay={false} interval={5000} />
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
                                <div class='project-info-modal'>
                                    {description}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>




            <div class="aviso">

                <h4>Pagina criada para desktop.</h4>
            </div>

        </>
    )
}

export default Projects;