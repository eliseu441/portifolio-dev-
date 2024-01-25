import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './ProjectsMobile.css';
import { Carousel } from '3d-react-carousal';
import background from './img/teste_tail.png';
import background2 from './img/background_description - Copia.jpg';
import { Navigation, A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import hermes5 from './img/hermes/home.png';
import hermes2 from './img/hermes/century.png';
import hermes3 from './img/hermes/sculp.png';
import hermes4 from './img/hermes/types.png';
import hermes1 from './img/hermes/art_book.png';

import vergz1 from './img/vergs/vergs1.png';
import vergz2 from './img/vergs/vergs2.png';
import vergz3 from './img/vergs/vergs3.png';
import vergz4 from './img/vergs/vergs4.png';
import vergz5 from './img/vergs/vergz5.png';

import monster1 from './img/monster/monster1_desk.png';
import monster2 from './img/monster/monster2_desk.png';
import monster3 from './img/monster/monster1_mobile.png';
import monster4 from './img/monster/monster2_mobile.png';



function ProjectsMobile() {

    useEffect(() => {
    }, []);
    const swiper = useSwiper();




    return (
        <>



            <div class='page-projects-mobile'>
                <div class='content-projects'>
                <div class='hermes-project mb-5'>
                    
                    <p >HERMES-PROJECT</p>
                    <Swiper
                   spaceBetween={30}
                   centeredSlides={true}
                   autoplay={{
                     delay: 2500,
                     disableOnInteraction: false,
                   }}
                   pagination={{
                     clickable: true,
                   }}   
                   modules={[Autoplay, Pagination]}
                   className="mySwiper"
                   style={{
                    "--swiper-pagination-color": "#FFBA08",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                  }}

                    >
                        <SwiperSlide><img class='img-arrow' width='100%' height='100%' src={hermes5} /></SwiperSlide>
                        <SwiperSlide><img class='img-arrow' width='100%' height='100%' src={hermes2} /></SwiperSlide>
                        <SwiperSlide><img class='img-arrow' width='100%' height='100%' src={hermes3} /></SwiperSlide>
                        <SwiperSlide><img class='img-arrow' width='100%' height='100%' src={hermes4} /></SwiperSlide>
                        <SwiperSlide><img class='img-arrow' width='100%' height='100%' src={hermes1} /></SwiperSlide>
                    </Swiper>

                </div>
                <div class='vergz-tattoo mb-5'>
                <p >VERGZ-TATTOO-STUDIO</p>
                    <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}   
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    style={{
                     "--swiper-pagination-color": "#FFFF",
                     "--swiper-pagination-bullet-inactive-color": "#999999",
                     "--swiper-pagination-bullet-inactive-opacity": "1",
                     "--swiper-pagination-bullet-size": "10px",
                     "--swiper-pagination-bullet-horizontal-gap": "6px"
                   }}
                    >
                        <SwiperSlide><img class='img-arrow' width='100%' height='100%' src={vergz4} /></SwiperSlide>
                        <SwiperSlide><img class='img-arrow' width='100%' height='100%' src={vergz1} /></SwiperSlide>
                        <SwiperSlide><img class='img-arrow' width='100%' height='100%' src={vergz2} /></SwiperSlide>
                        <SwiperSlide><img class='img-arrow' width='100%' height='100%' src={vergz3} /></SwiperSlide>
                        <SwiperSlide><img class='img-arrow' width='100%' height='100%' src={vergz5} /></SwiperSlide>
                    </Swiper>

                </div>
                <div class='monster-interface '>
                <p >MONSTER-INTERFACE</p>
                    <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}   
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    style={{
                     "--swiper-pagination-color": "#3cff00",
                     "--swiper-pagination-bullet-inactive-color": "#999999",
                     "--swiper-pagination-bullet-inactive-opacity": "1",
                     "--swiper-pagination-bullet-size": "10px",
                     "--swiper-pagination-bullet-horizontal-gap": "6px"
                   }}
                    >
                        <SwiperSlide><img class='img-arrow' width='100%' height='100%' src={monster3} /></SwiperSlide>
                        <SwiperSlide><img class='img-arrow' width='100%' height='100%' src={monster4} /></SwiperSlide>
                        <SwiperSlide><img class='img-arrow' width='100%' height='100%' src={monster1} /></SwiperSlide>
                    </Swiper>

                </div>

                </div>

            </div>



        </>
    )
}

export default ProjectsMobile;