import React, { Component } from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './headerComponent';import Footer from './footerComponent';
import Lawersignup from './lawersignupComponent';import Usersignup from './usersignupComponent';
import Userlogin from './userloginComponent';import Lawyerlogin from './lawerloginComponent';
import Home from './homeComponent';import Useredit from './usereditComponent';
import Addcase from "./addcaseComponent";
import Mycases from './mycasesComponent';
import Allcases from './allcasesComponent';

import {postlawyersignup,
    postlawyersignin,
    postusersignin,
    postusersignup,
    fetchuserdata,
    postprofiledata,
    fetchprofiledata,
    postusercase,
    fetchusercases,
    fetchallcases,
    postaccept,
    fetchlawyers} from '../shared/actionCreators'
import {actions} from 'react-redux-form';

const mapStateToProps=state=>{
    return {
        users:state.users,
        profiledata:state.profiledata,
        usercases:state.usercases,
        allcases:state.allcases
        // lawyers:state.lawyers
    }
}

const mapDispatchToProps=dispatch=>({
    postlawyersignup:(name,email,password,mobile)=>dispatch(postlawyersignup(name,email,password,mobile)),
    postlawyersignin:(email,password)=>dispatch(postlawyersignin(email,password)),
    postusersignup:(name,email,password,mobile)=>dispatch(postusersignup(name,email,password,mobile)),
    postusersignin:(email,password)=>dispatch(postusersignin(email,password)),
    
    fetchuserdata:()=>dispatch(fetchuserdata()),
    
    fetchprofiledata:()=>dispatch(fetchprofiledata()),
    postprofiledata:(name,email)=>dispatch(postprofiledata(name,email)),
    
    fetchusercases:()=>dispatch(fetchusercases()),
    postusercase:(dcode,ddate,stime,acharge,desc)=>dispatch(postusercase(dcode,ddate,stime,acharge,desc)),

    fetchallcases:()=>dispatch(fetchallcases()),

    postaccept:(id)=>dispatch(postaccept(id)),
    // fetchlawyers:()=>dispatch(fetchlawyers()),
    lawyersignupformreset:()=>dispatch(actions.reset('lawyersignupform'))
})



class Main extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // this.props.fetchlawyers();
        this.props.fetchuserdata();
        this.props.fetchprofiledata();
        this.props.fetchusercases();
        this.props.fetchallcases();
    }
    lawyersprofile
    render(){
        return(
            <div>
                <Header userdata={this.props.users} fetchuserdata={this.props.fetchuserdata}></Header>
                <div style={{backgroundColor:'#009b',marginTop:56,padding:1,minHeight:700}} className='text-white' >
                    <Switch>
                        <Route path='/home' component={()=><Home/>}></Route>
                        <Route path='/lawyer/login' component={()=><Lawyerlogin
                            postlawyersignin={this.props.postlawyersignin}
                            fetchuserdata={this.props.fetchuserdata}
                        />}
                        ></Route>
                        <Route path='/lawyer/signup' component={()=><Lawersignup
                            postlawyersignup={this.props.postlawyersignup}
                            lawyersignupformreset={this.props.lawyersignupformreset}
                            fetchuserdata={this.props.fetchuserdata}
                        />}>
                        </Route>
                        <Route path='/user/login' component={()=><Userlogin 
                            postusersignin={this.props.postusersignin}
                            fetchuserdata={this.props.fetchuserdata}
                        />}>
                        </Route>
                        <Route path='/user/signup' component={()=><Usersignup
                            postusersignup={this.props.postusersignup}   
                            fetchuserdata={this.props.fetchuserdata}
                        />}>
                        </Route>
                        <Route path='/user/edit' component={()=><Useredit
                            fetchuserdata={this.props.fetchuserdata}
                            profiledata={this.props.profiledata}
                            fetchprofiledata={this.props.fetchprofiledata}
                            postprofiledata={this.props.postprofiledata}
                        />}>
                        </Route>
                        <Route path='/user/case' component={()=><Addcase
                        postusercase={this.props.postusercase}
                        />}>
                        </Route>
                        <Route path='/user/mycases' component={()=><Mycases
                        usercases={this.props.usercases}
                        />}>
                        </Route>
                        <Route path='/search/case' component={()=><Allcases
                        allcases={this.props.allcases}
                        postaccept={this.props.postaccept}
                        />}>
                        </Route>
                        <Redirect to="/home"></Redirect>
                    </Switch>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
// export default Main;