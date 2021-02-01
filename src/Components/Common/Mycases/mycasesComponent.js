import React,{useEffect,useState} from 'react';
import './mycases.scss'
import {fetchusercases,postacceptbyuser} from '../../../shared/Actioncreators/actionCreators'
import {connect} from 'react-redux';
import {islawyerloggedin,isloggedin} from '../../../service/userservice'
import Cardprofile from './Cardprofile'
import Head from './Head'
// import {Helmet} from 'react-helmet'


const mapStateToProps=state=>{
    return {
        usercases:state.usercases
    }
}
const mapDispatchToProps=dispatch=>({
    fetchusercases:()=>dispatch(fetchusercases()),
    postacceptbyuser:(caseid,lawyer)=>dispatch(postacceptbyuser(caseid,lawyer))
})

let fetchedusercases = false

function Mycases(props){
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    useEffect(()=>{
        if(!fetchedusercases){
            props.fetchusercases()
            fetchedusercases=true
        }
        return ()=>{
        }
    })
    return(
        (!props.usercases)
        ?
        <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}>            
        <div>Something went wrong !</div>
        </div>
        :
        props.usercases.err
        ?
        <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}>            
        <div>{props.usercases.err} !</div>
        </div>
        :
        props.usercases.isloading
        ?
        <div style={{height:'100vh',overflow:'hidden'}} className="d-flex align-items-center justify-content-center">
                {/* <div className="spinner-border" style={{ width: '4rem', height: '4rem',color:'#a01ba7' }} role="status">           
                </div> */}
                <div  style={{minWidth:'300px'}}> 
                <div className="lzy_img__image loading"></div> 
                <div className="lzy_img__title loading"></div> 
                <div className="lzy_img__description loading"></div> 
                </div> 
        </div>
        :
        (props.usercases.usercasedata && props.usercases.usercasedata.cases && props.usercases.usercasedata.acceptedcases && props.usercases.usercasedata.pendingcases)
        ?
        <div className="container cases" style={{marginTop:50,marginBottom:50,height:'100%'}}>
            {/* <Helmet>
                <title>MYCASES | PEPLAW</title>
                <meta name="description" content="Here you can see your cases"/>
            </Helmet> */}
                {true && (document.title='MYCASES | PEPLAW')?null:null}
            <div>

                <ul className="nav nav-tabs">
                    <div className="nav-item">
                        <div className={activeTab === '1'?"nav-link active":"nav-link"} onClick={() => { toggle('1'); }}> 
                            Allcases
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className={activeTab === '2'?"nav-link active":"nav-link"} onClick={() => { toggle('2'); }}> 
                            Pending
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className={activeTab === '3'?"nav-link active":"nav-link"} onClick={() => { toggle('3'); }}> 
                            Accepted
                        </div>
                    </div>
                    {
                    (isloggedin() && islawyerloggedin() )?
                    <div className="nav-item">
                        <div className={activeTab === '4'?"nav-link active":"nav-link"} onClick={() => { toggle('4'); }}> 
                            Rejected
                        </div>
                    </div>
                    :
                    ''
                    }
                </ul>

            <div className="tab-content">
                <div className={activeTab === '1'?"tab-pane active":"tab-pane"}>
                    <Head data={props.usercases.usercasedata.cases} title="Your Cases !"/>
                    <div style={{marginTop:50}} className="row justify-content-lg-around">
                        {
                            props.usercases.usercasedata.cases.map((data)=>{
                                return(
                                <div key={data.dispositioncode}  className="col-sm-12 col-md-6 col-lg-3">
                                    <Cardprofile casedata={data} postacceptbyuser={props.postacceptbyuser}></Cardprofile>
                                </div>
                                );
                            }) 
                        }
                    </div>
                </div>
                <div className={activeTab === '2'?"tab-pane active":"tab-pane"}>
                    <Head data={props.usercases.usercasedata.pendingcases} title="Your Pending Cases !"/>
                    <div style={{marginTop:50}} className="row justify-content-lg-around">
                        {
                            props.usercases.usercasedata.pendingcases.map((data)=>{
                                return(
                                <div key={data.dispositioncode}  className="col-sm-12 col-md-6 col-lg-3">
                                    <Cardprofile casedata={data} postacceptbyuser={props.postacceptbyuser}></Cardprofile>
                                </div>
                                );
                            }) 
                        }
                    </div>
                </div>
                <div className={activeTab === '3'?"tab-pane active":"tab-pane"}>
                    <Head data={props.usercases.usercasedata.acceptedcases} title="Your Accepted Cases !"/>
                    <div style={{marginTop:50}} className="row justify-content-lg-around">
                        {
                            props.usercases.usercasedata.acceptedcases.map((data)=>{
                                return(
                                <div key={data.dispositioncode}  className="col-sm-12 col-md-6 col-lg-3">
                                    <Cardprofile casedata={data} postacceptbyuser={props.postacceptbyuser}></Cardprofile>
                                </div>
                                );
                            }) 
                        }
                    </div>
                </div>
                <div className={activeTab === '4'?"tab-pane active":"tab-pane"}>
                    {
                        (isloggedin && islawyerloggedin())?
                        <>
                        <Head data={props.usercases.usercasedata.rejectedcases} title="Your Rejected Cases !"/>
                        <div style={{marginTop:50}} className="row justify-content-lg-around">
                            {
                                props.usercases.usercasedata.rejectedcases.map((data)=>{
                                    return(
                                    <div key={data.dispositioncode}  className="col-sm-12 col-md-6 col-lg-3">
                                        <Cardprofile casedata={data} postacceptbyuser={props.postacceptbyuser}></Cardprofile>
                                    </div>
                                    );
                                }) 
                            }
                        </div>
                        </>:
                        <>

                        </>
                    }
                </div>
            </div>
            </div>

        </div>    
        :
        <div className="container cases" style={{marginTop:50,marginBottom:50,height:'100%'}}>
            <Head data={props.usercases.usercasedata}/>
            <div style={{marginTop:50}} className="row justify-content-lg-around">
            </div>
        </div>  
        )
}

export default connect(mapStateToProps,mapDispatchToProps)(Mycases);
