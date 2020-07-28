import React,{Component} from 'react';
import {
    Card,CardBody,CardHeader,CardTitle,CardText, Button
  } from 'reactstrap';
  import ThumbsUpDownRoundedIcon from '@material-ui/icons/ThumbsUpDownRounded';
  import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h3 style={{marginTop:50}} className="text-center">
                    <ThumbsUpDownRoundedIcon style={{marginRight:7,fontSize:30}}/>
                    Welcome to PEP_LAW !!
                </h3>
                <div className="container" style={{marginTop:60}}>
                    <Card 
                    style={{backgroundImage:
                        `url(https://www.elegantthemes.com/blog/wp-content/uploads/2020/03/shutterstock_765436252-1080.jpg)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'}}
                    >
                        <CardBody style={{marginTop:30,minHeight:500}}>
                            <CardTitle style={{color:'black',textAlign:'right'}}>
                                <b style={{fontWeight:1000}}>
                                One of the Best Lawyers and peoples Social Media Ever !!!
                                </b>
                            </CardTitle>
                            <CardText style={{color:'blue',fontWeight:'bold',textAlign:'right'}}>
                                <i>
                                1.Here you can add all your cases registered!!!
                                </i>
                            </CardText>
                            <CardText style={{color:'blue',fontWeight:'bold',textAlign:'right'}}>
                                <i>
                                2.Here you can search for lawyers your cases registered!!!
                                </i>
                            </CardText>
                            <CardText style={{color:'blue',textAlign:'right',fontWeight:'bold'}}>
                                <i>
                                3.Here you can search for all cases registered!!!
                                </i>
                            </CardText>
                            <CardText style={{color:'blue',textAlign:'right',fontWeight:'bold'}}>
                                <i>
                                4.Lawyers are able to accept the cases you want!!!
                                </i>
                            </CardText>
                            <div className="d-flex justify-content-end">
                            <a href="/user/signup">
                            <Button>Get Started<ArrowRightRoundedIcon/> </Button>
                            </a>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Home;