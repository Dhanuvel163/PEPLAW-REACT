import React from 'react';
import './cardprofile.css'
import {Button,Card,CardHeader,CardBody,CardTitle,CardText } from 'reactstrap';
export default function Cardprofile(props){
    const acceptHandler=(id)=>{
        props.postaccept(id);
    }
        return(
            <Card inverse className="box" color="danger" style={{marginTop:'45px'}}>
                <CardHeader style={{textTransform:'uppercase'}}>
                <span className="text-warning" style={{fontWeight:'bold'}}> Disposition Code : </span>
                {/* <span className="chips"> */}
                 {props.casedata.dispositioncode}
                {/* </span> */}
                </CardHeader>
                <CardBody className="allcases">
                    <CardTitle>
                        <span className="text-warning" style={{fontWeight:'bold'}}> Amended Charge : </span>
                        {/* <span className="chips"> */}
                        {props.casedata.amendedcharge}
                        {/* </span>                         */}
                    </CardTitle>
                    <CardText>
                        <span className="text-warning" style={{fontWeight:'bold'}}> Disposition date : </span>
                        {/* <span className="chips"> */}
                            {props.casedata.dispositiondate}
                        {/* </span>                         */}
                    </CardText>
                    <CardText>
                        <span className="text-warning" style={{fontWeight:'bold'}}> Sentencetime : </span>
                        {/* <span className="chips"> */}
                            {props.casedata.sentencetime}
                        {/* </span>                         */}
                    </CardText>
                    <CardText>
                        <span className="text-warning" style={{fontWeight:'bold'}}> Description : </span>
                        {/* <span className="chips"> */}
                            {props.casedata.description?`${props.casedata.description}`:'No Data !'}
                        {/* </span> */}
                    </CardText>
                    <Button onClick={()=>acceptHandler(props.casedata._id)} color="primary">ACCEPT</Button>
                </CardBody>
            </Card>
        )
}
