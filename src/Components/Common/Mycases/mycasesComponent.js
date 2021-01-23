import React,{useEffect,useState} from 'react';
import './mycases.scss'
import {fetchusercases} from '../../../shared/Actioncreators/actionCreators'
import {connect} from 'react-redux';
import {Spinner} from 'reactstrap'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {islawyerloggedin,isloggedin} from '../../../service/userservice'
import classnames from 'classnames';
import Cardprofile from './Cardprofile'
import Head from './Head'


const mapStateToProps=state=>{
    return {
        usercases:state.usercases
    }
}
const mapDispatchToProps=dispatch=>({
    fetchusercases:()=>dispatch(fetchusercases()),
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
        <div>Something went wrong ! {props.usercases.err} !</div>
        </div>
        :
        props.usercases.isloading
        ?
        <div style={{height:'100%',minHeight:500}} className="d-flex align-items-center justify-content-center">
                    <Spinner color="#a01ba7" style={{ width: '4rem', height: '4rem',color:'#a01ba7' }} />
        </div>
        :
        (props.usercases.usercasedata && props.usercases.usercasedata.cases && props.usercases.usercasedata.acceptedcases && props.usercases.usercasedata.pendingcases)
        ?
        <div className="container cases" style={{marginTop:50,marginBottom:50,height:'100%'}}>

            <div>
            <Nav tabs>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}
                >
                    Allcases
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { toggle('2'); }}
                >
                    Pending
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '3' })}
                    onClick={() => { toggle('3'); }}
                >
                    Accepted
                </NavLink>
                </NavItem>
                {
                (isloggedin() && islawyerloggedin() )?
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '4' })}
                    onClick={() => { toggle('4'); }}
                >
                    Rejected
                </NavLink>
                </NavItem>
                :
                ''
                }

            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Head data={props.usercases.usercasedata.cases} title="Your Cases !"/>
                    <div style={{marginTop:50}} className="row justify-content-lg-around">
                        {
                            props.usercases.usercasedata.cases.map((data)=>{
                                return(
                                <div key={data.dispositioncode}  className="col-sm-12 col-md-6 col-lg-3">
                                    <Cardprofile casedata={data}></Cardprofile>
                                </div>
                                );
                            }) 
                        }
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <Head data={props.usercases.usercasedata.pendingcases} title="Your Pending Cases !"/>
                    <div style={{marginTop:50}} className="row justify-content-lg-around">
                        {
                            props.usercases.usercasedata.pendingcases.map((data)=>{
                                return(
                                <div key={data.dispositioncode}  className="col-sm-12 col-md-6 col-lg-3">
                                    <Cardprofile casedata={data}></Cardprofile>
                                </div>
                                );
                            }) 
                        }
                    </div>
                </TabPane>
                <TabPane tabId="3">
                    <Head data={props.usercases.usercasedata.acceptedcases} title="Your Accepted Cases !"/>
                    <div style={{marginTop:50}} className="row justify-content-lg-around">
                        {
                            props.usercases.usercasedata.acceptedcases.map((data)=>{
                                return(
                                <div key={data.dispositioncode}  className="col-sm-12 col-md-6 col-lg-3">
                                    <Cardprofile casedata={data}></Cardprofile>
                                </div>
                                );
                            }) 
                        }
                    </div>
                </TabPane>
                <TabPane tabId="4">
                    {
                        (isloggedin && islawyerloggedin())?
                        <>
                        <Head data={props.usercases.usercasedata.rejectedcases} title="Your Rejected Cases !"/>
                        <div style={{marginTop:50}} className="row justify-content-lg-around">
                            {
                                props.usercases.usercasedata.rejectedcases.map((data)=>{
                                    return(
                                    <div key={data.dispositioncode}  className="col-sm-12 col-md-6 col-lg-3">
                                        <Cardprofile casedata={data}></Cardprofile>
                                    </div>
                                    );
                                }) 
                            }
                        </div>
                        </>:
                        <>

                        </>
                    }
                </TabPane>
            </TabContent>
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
