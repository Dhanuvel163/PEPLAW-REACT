import React, { useState,memo,useEffect } from "react";
import {Card,CardBody,CardTitle,CardText,CardImg,Button} from "reactstrap";
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
                  lazyImage.src = lazyImage.dataset.src
                  lazyImage.classList.remove("lzy_img");
                  imgObserver.unobserve(lazyImage);
              }
          })
      });
      const arr = document.querySelectorAll('img.lzy_img')
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
          Welcome !!
        </h3>
        <div className="container" style={{ marginTop: 60 }}>
          <Card className="imgbox"
            style={{
              backgroundImage: `url(/assets/homecardbg.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CardBody style={{ marginTop: 30, minHeight: 500 }}>
                <CardTitle style={{ color: "black", textAlign: "right" }}>
                  <b style={{ fontWeight: 1000 }}>
                    One of the Best Lawyers and peoples Social Media Ever !!!
                  </b>
                </CardTitle>
              <div className="d-flex justify-content-end">
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
                          <CardImg top 
                          className="lzy_img"
                         data-src={data.image} 
                          alt="Card image cap"
                          loading="lazy"
                          lazyload="on"
                          />
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
