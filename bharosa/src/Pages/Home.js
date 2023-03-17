import React, { useEffect, useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";
import "../App.css";
import Axios from "axios";
import 'tippy.js/dist/tippy.css'
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';
import Linked from "../Assets/linkedin.png";
import greenmail from "../Assets/mail.png";
import Formfill from '../components/Formfill';
import Slider from '../components/Slider';
import We from '../components/We';
import { Link } from "react-router-dom"

const mystyle = {

  textAlign: 'center',
  color: '#598216',
  fontSize: '1.1em'
}

function Home() {

  const [myheading, setHeading] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:4000/heading/${1}`)
      .then(response => {
        console.log(response)
        setHeading({ val: response })
      })
      .catch(error => console.log(error))
  }, [])

  const [myabout, setAbout] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:4000/about/${1}`)
      .then(response => {
        console.log(response)
        setAbout({ val: response })
      })
      .catch(error => console.log(error))
  }, [])

  const [myaboutimg, setAboutimg] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:4000/aboutimg`)
      .then(response => {
        console.log(response)
        setAboutimg({ val: response })
      })
      .catch(error => console.log(error))
  }, [])

  const [myproduct, setProduct] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:4000/aboutproduct/${1}`)
      .then(res => {
        console.log(res)
        setProduct({ val: res })
      })
      .catch(error => console.log(error))
  }, [])

  const [mypartner, setPartner] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:4000/partners`)
      .then(res => {
        console.log(res)
        setPartner({ val: res })
      })
      .catch(error => console.log(error))
  }, [])

  const [myteam, setTeam] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:4000/team`)
      .then(response => {
        console.log(response)
        setTeam({ val: response })
      })
      .catch(error => console.log(error))
  }, [])

  const [mypos, setPos] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:4000/position/${1}`)
      .then(response => {
        console.log(response)
        setPos({ val: response })
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>

      <Slider />
      {/* 2 */}
      <section>

        <div className='container mt-5'>
          <div className='row d-flex justify-content-center '>
            <h2 className=' d-flex justify-content-center head'>{myabout?.val.data.heading}
            </h2>
          </div>
          <div className='row para d-flex justify-content-center'><p>{myabout?.val.data.para}</p></div>
          <div className="row text-center text-md-left">
            {
              myaboutimg?.val.data.map((items, index) => {
                return (
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto " key={index}>
                    <div className="text-uppercase mb-4 font-weight-bold">
                      <Tooltip theme='light' arrow='true' arrowSize='big'
                        html={(
                          <div style={mystyle} >
                            {items.title}
                          </div>
                        )}
                        position="bottom" >
                        <img src={items.images} />
                        <p className='p-2' style={{ fontWeight: 'bold', fontSize: '1em' }} >{items.text}</p>
                      </Tooltip>
                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>
      </section>

      {/* 3 */}
      <section>
        <div className='container-fluid d-flex mt-5 justify-content-center align-items-center bg-img'>
          <div className="styling">
            <img className='row d-flex' src={myproduct?.val.data.logo} height={"80px"} width={"80px"} style={{ 'margin': '0 auto' }} /><br />

            <div className='row d-flex justify-content-center'>
              <h2 className=' d-flex justify-content-center head' style={{ color: "#FFFFFF" }}>{myproduct?.val.data.heading}</h2>
            </div>
            <div className='row d-flex justify-content-center para paragraph-Align'>
              <p style={{ color: "#FFFFFF" }}>{myproduct?.val.data.content}</p>
            </div>
          </div>
        </div>
      </section>
      {/* 4 */}
      <div id='bharosapartner' className='mb-5'></div>

      <section className=" pt-5 pb-4">
        <div>
          <h2 className=' d-flex justify-content-center head'>{myheading?.val.data.head}</h2>
        </div>
        <div className="container text-center text-md-left contain-align">

          <div className="row text-center text-md-left">
            {
              mypartner?.val.data.map((item, index) => {
                return (
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto img-fluid" key={index}>

                    <img src={item.image} className="img-fluid" />
                    <h5 className="font-weight-bold">{item.title}</h5>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      {/* 5 */}
      <div id='ourteam' className='mb-5'></div>

      <section className="text-white pt-5 pb-4" style={{ "backgroundColor": "#F9F8E7" }}>
        <div>
          <h2 className=' d-flex justify-content-center head'>{myheading?.val.data.head2}</h2>
        </div>
        <div className="container text-center text-md-left contain-align">
          <div className="row text-center text-md-left ">
            {myteam?.val.data.map((title, index) => {
              return (
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 mb-5" key={index}>
                  <img className='img-fluid' src={title.image} />
                  <h5 className="head font-weight-bold">{title.name}</h5>
                  <h5 className=" font-weight-bold text-dark">{title.position}</h5>
                  <a href={title.linkedin} target="_blank"><img className='img-fluid' src={Linked}></img></a>
                  <a href={title.mail} target="_blank" >
                    <img className='img-fluid' src={greenmail}></img>
                  </a>
                </div>
              )
            })
            }
          </div>
        </div>
      </section>
      {/* 6 */}
      <section>
        <div className='container d-flex justify-content-center align-items-center mt-5'>
          <div className="styling pt-5" >
            <img className='row d-flex' src={mypos?.val.data.icon} style={{ 'margin': '0 auto' }} /><br />
            <div className='row d-flex '>
              <h2 className=' d-flex justify-content-center head'>{mypos?.val.data.heading}</h2>
            </div>
            <div className='row d-flex justify-content-center para paragraph-Align'>
              <p>{mypos?.val.data.content}</p>
            </div>
            <div className='row d-flex justify-content-center contain-align '>

              <We />
            </div>
          </div>
        </div>
      </section>
      <section className='mt-3' id='contact'>
        <Formfill />
      </section>

    </>
  );
}

export default Home;