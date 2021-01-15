import React, { useState,memo,useEffect } from "react";
import {Card,CardBody,CardTitle,CardText,Button} from "reactstrap";
import {Link} from "react-router-dom";

function Home(){

    useEffect(() => {
    const offlineAlert = function(){
        alert("Oh no, you lost your network connection.");
    }
    window.addEventListener("offline",offlineAlert);
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  const lazyImage = entry.target
                  let img = document.createElement("IMG")
                  img.setAttribute("alt","Card image cap")
                  img.setAttribute("class","card-img-top")
                  img.setAttribute("src",lazyImage.dataset.src)
                  img.onload = function(){
                  lazyImage.replaceWith(img)
                  }

                  // lazyImage.src = lazyImage.dataset.src
                  lazyImage.classList.remove("lzy_img");

                  imgObserver.unobserve(lazyImage);
              }
          })
      });
      const arr = document.querySelectorAll('.lzy_img')
      arr.forEach((v) => {
          imageObserver.observe(v);
      })
      return () => {
        imageObserver.disconnect();
        window.removeEventListener('offline',offlineAlert,true)
      }
    })

    let [cardData]=useState(
      [
        {
          image:'/assets/home1.webp',
          title:'Here you can add all your cases registered!!!'
        },
        {
          image:'/assets/home2.webp',
          title:'Here you can search for lawyers your cases !!!'
        },
        {
          image:'/assets/home3.webp',
          title:'Lawyers are able to accept the cases you want!!!'
        },
        {
          image:'/assets/home4.webp',
          title:'Here you can search for all cases registered!!!'
        },
      ]
    )
    return (
      <>
        <h3 className="text-center" style={{marginTop:60}}>
          <svg style={{marginRight:7,marginBottom:4}}
          xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
          </svg>
          WELCOME !!
        </h3>
        <div className="container" style={{ marginTop: 60 }}>
          <Card className="imgbox home-card">
            <CardBody style={{ marginTop: 30, minHeight: 400 }}>
                <CardTitle style={{ color: "black", textAlign: "left" }}>
                  <b style={{ fontWeight: 1000 }}>
                    One of the Best Lawyers and peoples Social Media Ever !!!
                  </b>
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
              <div className="row">
                  {cardData.map((data)=>(
                      <div key={data.title} className="col-12 col-md-6 mt-5">
                        <Card className="imgbox">
                          <div data-src={data.image} className="lzy_img"> 
                            <div className="lzy_img__image loading"></div> 
                            <div className="lzy_img__title loading"></div> 
                            <div className="lzy_img__description loading"></div> 
                          </div> 
                          <CardBody>
                            <CardText
                              style={{
                                color: "black",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              {data.title}
                            </CardText>
                          </CardBody>
                        </Card>
                      </div>
                  ))}
              </div>
        </div>
      </>
    );

}

export default memo(Home);
