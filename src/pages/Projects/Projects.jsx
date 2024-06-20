import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Projects.css';
import './images_carousel.css';
import { Icon } from '@iconify/react';
import Slider from "react-slick";
import bg1 from './img/parallax_effect/bubble1.png';
import bg2 from './img/parallax_effect/bubble2.png';
import bg3 from './img/parallax_effect/bubble3.png';
import bg4 from './img/parallax_effect/bubble4.png';
import bg5 from './img/parallax_effect/bubble5.png';
const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};



function Projects() {
    const [loading, setLoading] = useState(false);
    const [projeto, setProjeto] = useState(1);
    const [nomeProjeto, setNomeProjeto] = useState('vergz');
    const [description, setDescription] = useState('TESTE');



    useEffect(() => {
        // callApis()
        setLoading(true)

        setNomeProjeto(projeto == 1 ? 'vergz' : projeto == 2 ? 'thiago' : 'hermes')
        setLoading(false)
    }, [projeto]);
    const descHermes = 'The main objective of "Hermes project" is to offer an online art gallery with a navigation experience that engages the user and provides an understanding of the history of our art, considering the complexities of each piece. Currently, the portability is limited to desktop, but it is responsive up to 600px in width by 400px in height. The project has allowed me to gain a deep understanding of how to deploy and manage an application. Both the database and server were built from scratch on virtual servers, providing a solid foundation for future projects where this expertise may be necessary. The access link is already available and can be accessed at: http://hermesarts.com.br:5000'
    const descVergz = 'Vergz Studio Tattoo App is a responsive React app, project designed to enhance the client experience at Vergz Studio, a dynamic tattoo studio specialized in realizm style. This application provides an intuitive and user-friendly platform for clients to explore the studio portfolio, schedule appointments, and engage with the artists. With a sleek design and seamless navigation, the app aims to streamline the tattoo booking process and foster a closer connection between artists and clients at Vergz Studio. Link acessible on https://portifolio-vergz2.vercel.app/'
    const descMonster = 'This project was a personal challenge I set for myself. The idea was to create a project in less than one week that functions differently on mobile screens and desktops. It is a commercial energy drink interface where you can open a menu to view credits for the images used. On mobile devices, you can also select which product information you want to see on the screen. Additionally, clicking on the logo in the header will automatically scroll to the top of the screen. You can access the link at https://monster-interface.vercel.app/'

    const linkHermes = 'https://hermesproject-sql-server.onrender.com/'
    const linkVergz = 'https://portifolio-vergz2.vercel.app/'
    const linkThiago = 'https://adv-thiago-conde.vercel.app/'
    document.addEventListener("mousemove", parallax);
    function parallax(event) {
        this.querySelectorAll(".parallax-wrap img").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 200;
            const y = (window.innerHeight - event.pageY * position) / 200;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }

    const onChangeInput = e => {
        this.setState({
            [e.target.name]: parseInt(e.target.value, 10) || 0
        });
    };






    const getProjeto = async (number) => {
        setLoading(true)
        await setProjeto(number)
        await setNomeProjeto(number == 1 ? 'vergz' : number == 2 ? 'thiago' : 'hermes')
        setLoading(false)
        return

    }






    return (
        <>
            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
            <div class='default-project'>
                <div class="parallax-wrap" data-aos="zoom-in" data-aos-duration="1000">
                    <img value="-15" src={bg5} />
                    <img value="5" src={bg2} />
                    <img value="30" src={bg3} />
                    <img value="-5" src={bg4} />
                    <img value="15" src={bg1} />
                </div>
                <div class='bg-projects'>
                </div>

                <div class='page-projects row' >

                    <div class='title mt-3' data-aos="fade-left" data-aos-duration="1000"><span>PROJECTS</span></div>

                    <div class='carousel-vergs d-flex-justify-content-center mt-2' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000" >
                        <div class='row d-flex justify-content-center'>


                            <p class={projeto == 3 ? 'hermes-project' : 'vergs-tattoo'}>

                                <Icon icon="bxs:left-arrow"
                                    class='icon-projects'
                                    onClick={e => getProjeto(projeto - 1)}
                                    style={{ display: projeto > 1 ? 'inline' : 'none' }}
                                />

                                {projeto == 1 ? 'VERGZ TATTOO' : projeto == 2 ? 'ADV THIAGO' : 'HERMES PROJECT'}

                                <Icon icon="bxs:right-arrow"
                                    onClick={e => getProjeto(projeto + 1)}
                                    style={{ display: projeto < 3 ? 'inline' : 'none' }}
                                />
                            </p>


                            {projeto !== 3 ? <div style={{ display: 'block' }}>


                                <button class='button-desc side-infos'
                                    data-bs-toggle="modal" data-bs-target="#modalProject"
                                    onClick={e => setDescription(projeto == 1 ? linkVergz : linkThiago)}
                                >
                                    Live Preview
                                </button>
                            </div> :
                                <div style={{ display: 'block' }}>


                                    <Link to="http://hermesarts.com.br:5000/" >
                                        <button class='button-desc side-infos'
                                            data-bs-toggle="modal" data-bs-target="#modalProject"

                                        >
                                            Live Preview
                                        </button>
                                    </Link>


                                </div>

                            }


                            <div class='resize-carousel  mt-2' >
                                <Slider {...settings}>
                                    <div class={`imgSlider ${projeto == 1 ? 'vergz' : projeto == 2 ? 'thiago' : 'hermes'}1 `} />
                                    <div class={`imgSlider ${projeto == 1 ? 'vergz' : projeto == 2 ? 'thiago' : 'hermes'}2 `} />
                                    <div class={`imgSlider ${projeto == 1 ? 'vergz' : projeto == 2 ? 'thiago' : 'hermes'}3 `} />
                                    <div class={`imgSlider ${projeto == 1 ? 'vergz' : projeto == 2 ? 'thiago' : 'hermes'}4 `} />
                                </Slider>
                            </div>
                        </div>

                    </div>






                    <div class="modal fade" id="modalProject" tabindex="-2" aria-labelledby="modalProjectLabel" aria-hidden="true">

                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable .modal-xl ">


                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close btn-close-white" id="closeCircuito" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class='modal-body p-1'>
                                    <div>
                                        <iframe class='project-info-modal' src={description} title="description"></iframe>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>




            </div>

        </>
    )
}

export default Projects;