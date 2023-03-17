import React, { useEffect, useState } from 'react'
import Axios from "axios";
import "../Styles/Footer.css";
import footer from "../Assets/Footer.png";
import whatsapp from "../Assets/greenwhats.png";
import face from "../Assets/greenface.png";
import twitter from "../Assets/greentwit.png";
import insta from "../Assets/greeninsta.png";
import Nav from 'react-bootstrap/Nav';

function Footer() {
    const [myfooter, setFooter] = useState();

    useEffect(() => {
        Axios.get(`http://localhost:4000/footer`)
            .then(res => {
                console.log(res)
                setFooter({ val: res })
            })
            .catch(error => console.log(error))
    }, [])

    const [mycontact, setContact] = useState();

    useEffect(() => {
        Axios.get(`http://localhost:4000/contact`)
            .then(res => {
                console.log(res)
                setContact({ val: res })
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            <section><img src={footer} width={"100%"} />
                <footer className="bg-sucees text-white pt-5 pb-4" style={{ "backgroundColor": "#598216" }} >
                    <div className="container text-center text-md-left">
                        <div className="row text-center text-md-left">
                            {myfooter?.val.data.map((item, index) => {
                                    return (
                                        <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mt-3 contain-align-footer" key={index}>
                                            <h6 className="text-uppercase mb-1 font-weight-bold text-white contain-align-footer"><img src={item.icon} />{item.heading}</h6>
                                            <p className='contain-align-footer'>{item.content}</p>
                                        </div>
                                    )
                                })
                            }
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <div className='contain-align-footer contact'>
                                    {mycontact?.val.data.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <p className='contain-align-footer'> <img className='px-2' src={item.icon} />  {item.content}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <Nav activeKey="#home" className="pb-3">
                            <Nav.Item >
                                <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link href="#bharosapartner" className='text-white'>Bharosa partners</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link href="#ourteam" className='text-white'>Our team</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="row align-item-center" style={{ width: "100.6%" }}>
                        <div className="col-lg-9 col-md-9 back">
                            <p>Copyright 2021</p>
                        </div>
                        <div className="col-lg-3 col-md-3 back">
                            <img src={face} />
                            <img src={whatsapp} />
                            <img src={insta} />
                            <img src={twitter} />
                        </div>
                    </div>
                    {/* <Header /> */}
                </footer>
            </section>
        </>
    )
}

export default Footer;