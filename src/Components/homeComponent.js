import React, { useState,memo,useEffect } from "react";
import {Card,CardBody,CardTitle,CardText} from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from "react-router-dom";
import {imageObserver} from '../Components/CustomHooks/useLazyloading'
function Home(){

    useEffect(() => {
      const arr = document.querySelectorAll('.lzy_img')
      arr.forEach((v) => {
        imageObserver.observe(v);
      })
      return () => {
        imageObserver.disconnect();
      }
    })

    let [cardData]=useState(
      [
        {
          image:'/assets/home1.webp',
          title:'Here you can add all your cases registered.'
        },
        {
          image:'/assets/home2.webp',
          title:'Lawyers will be able to search through cases.'
        },
        {
          image:'/assets/home3.webp',
          title:'Lawyers are able to apply to the cases you want.'
        },
        {
          image:'/assets/home4.webp',
          title:'Users can accept the lawyer based on the application.'
        },
      ]
    )
    return (
      <>
        {/* <h3 className="text-center" style={{marginTop:60}}>
          <svg style={{marginRight:7,marginBottom:4}}
          xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
          </svg>
          WELCOME !!
        </h3> */}
        {/* //rgb(0, 0, 204) */}
        {/* <div style={{ marginTop: 60 }}> */}
        <div className="container" style={{ marginTop: 60 }}>
          <Card className="card-style four-box-shadow  home-card text-uppercase">
            <CardBody style={{ marginTop: 20, minHeight: 400 }}>
                <CardTitle style={{ color: "black", textAlign: "left" }}> 
                  <b style={{ fontWeight: 1000 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
                      <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                      <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                    </svg>

                    Find the best Lawyers for your Case !
                  </b>
                  <hr style={{backgroundColor:'black'}}/>
                </CardTitle>
              <div className="d-flex justify-content-start">
                <Link to="/user/signup" className="nav-link">
                  <Button>
                    Get Started 
                      <svg style={{marginLeft:6,marginBottom:3}}
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                      </svg>
                    {" "}
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
              <h5 className="text-left" style={{marginTop:60}}>
                <svg style={{marginRight:7,marginBottom:4}}
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                </svg>
                How It Works !!
              </h5>
              <hr style={{backgroundColor:'white'}}/>
              <div className="row">
                  {cardData.map((data)=>(
                      <div key={data.title} className="col-12 col-md-6 mt-5">
                        <Card className="card-style four-box-shadow ">
                          <div data-src={data.image} className="lzy_img"> 
                            <div className="lzy_img__image loading"></div> 
                            {/* <div className="lzy_img__title loading"></div>  */}
                            {/* <div className="lzy_img__description loading"></div>  */}
                          </div> 
                          <CardBody>
                            <CardText
                              style={{
                                color: "black",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                              </svg>
                              {data.title}
                            </CardText>
                          </CardBody>
                        </Card>
                      </div>
                  ))}
              </div>

              <h5 className="text-left" style={{marginTop:60}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-patch-exclamation-fill" viewBox="0 0 16 16">
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                Facing Any Problem ?
              </h5>
              <hr style={{backgroundColor:'white',marginBottom:48}}/>
              <Form action="mailto:dhanuram99@gmail.com">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <FormGroup>
                      <Label for="mail">Email</Label>
                      <Input type="mail" name="mail" placeholder="Your mail" required/>
                    </FormGroup>
                  </div>
                  <div className="col-12 col-sm-6">
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input type="name" name="name" placeholder="Your name" required/>
                    </FormGroup>
                  </div>
                </div>
                <FormGroup>
                  <Label for="comment">Detail</Label>
                  <Input type="textarea" name="comment" required/>
                </FormGroup>
                <div className="d-flex justify-content-center">
                <Button>SEND</Button>
                </div>
              </Form>

              <div style={{height:40}}></div>
        </div>
      </>
    );

}

export default memo(Home);
