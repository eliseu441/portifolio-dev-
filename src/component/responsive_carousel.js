import React, { useState, useEffect } from 'react';

const ResponsiveCarousel = (params) => {



    return (
        <>
        <div class={params.project == 'vergz' ? 'carousel-vergz' : params.project == 'hermes' ? 'carousel-hermes' : 'carousel-thiago'}>
            <div className="slider_nav">
                <a href="#" className="prev">
                    <span className="circle" />
                    <span className="icon">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="circle" />
                </a>
                <a href="#" className="next">
                    <span className="circle" />
                    <span className="icon">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="circle" />
                </a>
            </div>
            <div className="fn_cs_slider" data-responsive="on">

                <div className="slider_top">
                    <img src="/img/1x1.jpg" alt="" />
                    <ul>
                        <li className="prev" data-index={1}>
                            <div className="item">
                                <img src="/img/1x1.jpg" alt="" />
                                <div className="item_in">
                                    <div className="img project-images" style={{ backgroundImage: `url(/img/slider/${params.project}/img1.png)` }} />
                                </div>
                            </div>
                        </li>
                        <li className="active" data-index={2}>
                            <div className="item">
                                <img src="/img/1x1.jpg" alt="" />
                                <div className="item_in">
                                    <div className="img project-images" style={{ backgroundImage: `url(/img/slider/${params.project}/img2.png)` }} />
                                </div>
                            </div>
                        </li>
                        <li className="next2" data-index={3}>
                            <div className="item">
                                <img src="/img/1x1.jpg" alt="" />
                                <div className="item_in">
                                    <div className="img project-images" style={{ backgroundImage: `url(/img/slider/${params.project}/img3.png)` }} />
                                </div>
                            </div>
                        </li>
                        <li className="prev2" data-index={4}>
                            <div className="item">
                                <img src="/img/1x1.jpg" alt="" />
                                <div className="item_in">
                                    <div className="img project-images" style={{ backgroundImage: `url(/img/slider/${params.project}/img4.png)` }} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )

}

export default ResponsiveCarousel;