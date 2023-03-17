import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Axios from "axios";
import "../Styles/Headers.css";
import "../App.css";
import { Link } from 'react-router-dom'
import { FiDownload } from "react-icons/fi"
import slider1 from "../Assets/slider1.png";
import slider2 from "../Assets/slider2.png"

function Slider() {
    const [mydata, setData] = useState();

    useEffect(() => {
        Axios.get(`http://localhost:4000/slider/${1}`)
            .then(response => {
                console.log(response)
                setData({ val: response })
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            <div id='home' className="mar">
                <div>

                    <Carousel className="container p-2 ">
                        <Carousel.Item className='slide-bar'>
                            <img
                                className="d-block w-100"
                                src={slider1}
                                alt="First slide"
                            />
                            <Carousel.Caption className='caption'>
                                <div className='text-margin m-0'>
                                    <h1>{mydata?.val.data.heading} </h1>
                                    <h3>{mydata?.val.data.secondhead}</h3>
                                    <p>{mydata?.val.data.para}<br />
                                        {mydata?.val.data.secondpara}</p>
                                    <div className='buttons'>
                                        {/* <a href="https://play.google.com/store/apps/details?id=bharosa.mitra.bharosa_mitra_fe_0_1" target="_blank" >
                                            <button className='button-style' type="submit" >
                                                <FiDownload /> Downloads The App</button>
                                        </a> */}
                                        <Link to="https://play.google.com/store/apps/details?id=bharosa.mitra.bharosa_mitra_fe_0_1" target="_blank" >
                                            <button className='button-style' type="submit" >
                                                <FiDownload /> Downloads The App</button>
                                        </Link>
                                      
                                            <Link to="https://play.google.com/store/apps/details?id=bharosa.mitra.bharosa_mitra_fe_0_1" target="_blank" >
                                            <button className='show btn-success' type="submit" style={{ backgroundColor: '#598216' }}>
                                            <FiDownload />App</button>
                                        </Link>

                                       <a href='#contact' ><button className='button-light' variant="light">Contact Us</button></a>
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='slide-bar'>

                            <img

                                className="d-block w-100 h-100"
                                src={slider2}
                                alt="Second slide"

                            />

                            <Carousel.Caption className='caption'>

                                <div className='row m-4 d-flex justify-content-center align-items-center '>
                                    <div className='play-button'>
                                        <a href='https://youtu.be/J_7rmoEwllw' target={'_blank'} className='play'><i style={{ "color": "#598216" }} className="fa fa-play fa-2x" aria-hidden="true"></i></a>

                                    </div>
                                </div>
                                <h3>{mydata?.val.data.video}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>

            </div>
        </>
    )
}

export default Slider