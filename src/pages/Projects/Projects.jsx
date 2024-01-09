import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Projects.css';
import API from '../../services/Infos/Infos'
import { DropdownList } from 'react-widgets';
import 'react-widgets/styles.css';
import { Carousel } from '3d-react-carousal';
import resized1 from './img/Michellangelo/La Nuit.jpg';
import resized2 from './img/Michellangelo/madona de bruges resized.png';
import resized3 from './img/Michellangelo/moses_resized.png';
import resized4 from './img/Michellangelo/pieta.jpg';
import cesar from './img/cesar_boust_nobackground.png';

function Projects() {
    const [author, setAuthor] = useState("MICHELANGELO");
    const [loading, setLoading] = useState(false);
    const [comboSculp, setComboSculp] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [slides, setSlides] = useState(false);



    useEffect(() => {
        // callApis()
        /*setSlides([
            <img src={resized1} alt="1" />,
            <img src={resized2} alt="2" />,
            <img src={resized3} alt="3" />,
            <img src={resized4} alt="4" />
        ]);*/
        callApis(10, 'MICHELANGELO')




    }, []);



    const callApis = async (id_author, name) => {
        setLoading(true)
        setAuthor(name)
        let paints = await API.getSculpCarousel({ id: id_author }).then(res => {
            console.log(res)
            let slidesFinal = []
            let contadorSlides = 0
            for (let el of res) {
                console.log(el)
                slidesFinal = [
                    ...slidesFinal[contadorSlides] ? slidesFinal[contadorSlides] : slidesFinal, <img src={`/images/sculptures/${el.FILE_NAME}`} alt={`${el.ID_INDEX}`} />
                ]
                console.log(slides)
                contadorSlides++
            }
            setSlides(slidesFinal)
        }).catch(console.error)
        console.log(slides)


        let combo = await API.getSculptorsCombo().then(e => {
            setComboSculp(e)

        }).catch(console.error)
        setLoading(false)
    }






    return (
        <>
            {loading == true ?
                <div class='loader-background' >
                    <p>Loading Sculptures</p>
                    <div class="loader">
                    </div>

                </div>
                : <></>}

            <div class='slide-cesar'>


                <div className={sidebar == false ? "header-cesar " : "header-cesar side-expanded-background"}>
                    <p >Sculptures are one of the most realistic ways we have for visualizing someone, just like Cesar bust there have been many others throughout history, below you will see a list of them. Clicking on Cesar bust you you will have access to search filters.</p>
                    <img src={cesar} class="logo-header-cesar" onClick={e => setSidebar(!sidebar)} />
                    <div class='combo-sidebar '>
                        <p >Author:</p>
                        {sidebar == true && loading == false && comboSculp.length > 1 ?
                            <DropdownList
                                defaultValue=""
                                data={comboSculp ? comboSculp : ['']}
                                dataKey='ID'
                                textField='NAME'
                                onChange={e => callApis(e.ID, e.NAME)}
                            />
                            : <></>}
                    </div>
                </div>

            </div>
            <div class='page-sculp'>
                <div class='carousel'>

                
                    {slides && loading == false ?
                    
                        <div >
                            <p class='culpTitle'>{author}</p>

                            <Carousel slides={slides} autoplay={false} interval={5000} />
                        </div>
                        : <></>}
                </div>
            </div>



            <div class="aviso">

                <h4>Atualmente a aplicação é focara para desktop, portanto ainda não ha portabilidade menor que 600px de largura por 400px de altura, um tamanho menos implicaria na perca da qualidade das imagens e experiencias.</h4>
            </div>

        </>
    )
}

export default Projects;