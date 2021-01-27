import React,{useEffect} from 'react'
import {Card,CardBody,CardHeader} from "reactstrap";
import {fetchdetailpagedata} from '../../../shared/Actioncreators/actionCreators'
import {connect} from 'react-redux';
import {Spinner} from 'reactstrap'
import { useParams} from 'react-router-dom'
// import {Helmet} from 'react-helmet'
import '../Useredit/useredit.scss'
const mapStateToProps=state=>{
    return {
        detailpage:state.detailpage,
    }
}
const mapDispatchToProps=dispatch=>({
    fetchdetailpagedata:(id)=>dispatch(fetchdetailpagedata(id)),
})

function Userdetail({detailpage,fetchdetailpagedata}) {
    let params = useParams();
    useEffect(()=>{
           fetchdetailpagedata(params.id)
        return ()=>{
        }
    },[params.id,fetchdetailpagedata])
    return (
        <div className="container" style={{marginTop:100}}>
            {
                (!detailpage)
                ?
                <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}>            
                <div>Something went wrong !</div>
                </div>
                :
               detailpage.err
                ?
                <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}>            
                <div>Something went wrong ! {detailpage.err} !</div>
                </div>
                :
               detailpage.isloading
                ?
                <div style={{height:'100%',minHeight:'500px'}} className="d-flex align-items-center justify-content-center">
                            <Spinner color="#a01ba7" style={{ width: '4rem', height: '4rem',color:'#a01ba7' }} />
                </div>
                :
               (detailpage.detailpage && detailpage.detailpage.name)
                ?
            <Card className="card-style four-box-shadow" inverse color="danger">
                {/* <Helmet>
                    <title>{detailpage.detailpage.name.toUpperCase()} | PEPLAW </title>
                <meta name="description" content="Peplaw profile detail page"/>
                </Helmet> */}
                {true && (document.title=`${detailpage.detailpage.name.toUpperCase()} | PEPLAW`)?null:null}
                <CardHeader>
                    <div className="mb-3">
                    <img  src={detailpage.detailpage.picture} className="profile-img" alt={detailpage.detailpage.name}/>
                    <span style={{marginLeft:'15px'}}>
                    {detailpage.detailpage.name}
                    </span>
                    </div>
                </CardHeader>
                <CardBody className="profile">
                    <pre>
                    <span>Mail         : </span>   {detailpage.detailpage.email}
                    </pre>
                    <pre>
                    <span>Mobile     : </span>   {detailpage.detailpage.mobile}
                    </pre>
                    <pre>
                    <span>Address  : </span>   {detailpage.detailpage.address ? detailpage.detailpage.address.addr1 : 'No Data !'}
                    </pre>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <pre>
                            <span>State       : </span>   {detailpage.detailpage.address ? detailpage.detailpage.address.state ? detailpage.detailpage.address.state : 'No Data !' : 'No Data !'}
                            </pre>
                            <pre>
                            <span>Country : </span>   {detailpage.detailpage.country || 'No Data !'}
                            </pre>
                        </div>
                        <div className="col-12 col-md-6">
                            <pre>
                            <span>Pincode  : </span>   {detailpage.detailpage.address ? detailpage.detailpage.address.postalCode ? detailpage.detailpage.address.postalCode : 'No Data !': 'No Data !'}
                            </pre> 
                            <pre>
                            <span>City         : </span>   {detailpage.detailpage.city || 'No Data !'}
                            </pre>               
                        </div>
                    </div>
                </CardBody>
            </Card>
            :<div></div>
            }

        </div>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Userdetail);
