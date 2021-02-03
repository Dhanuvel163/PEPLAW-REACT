import React, { Component,lazy, Suspense } from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './Partials/Header/headerComponent';
import Footer from './Partials/Footer/footerComponent';
import {fetchuserdata} from '../shared/Actioncreators/actionCreators'
import SnackbarC from './Partials/Snackbar/Snackbar';
import {AuthProvider} from '../Context/userauth'
import { LawyerAuthProvider } from "../Context/lawyerauth"
import '../index.scss';
// const indexCss = lazyWithPreload(() => import('../index.scss'))
// const Footer = lazyWithPreload(() => import('./Partials/Footer/footerComponent')) ;

const Lawyerlogin = lazyWithPreload(() => import('./Lawyer/Login/lawerloginComponent'))
const Userlogin = lazyWithPreload(() => import('./User/Login/userloginComponent'))
const Lawersignup = lazyWithPreload(() => import('./Lawyer/Signup/lawersignupComponent'))
const Usersignup = lazyWithPreload(() => import('./User/Signup/usersignupComponent'))
const Useredit = lazyWithPreload(() => import('./Common/Useredit/usereditComponent'))
const Addcase = lazyWithPreload(() => import('./User/Addcase/addcaseComponent'))
const Mycases = lazyWithPreload(() => import('./Common/Mycases/mycasesComponent'))
const Allcases = lazyWithPreload(() => import('./Common/Allcases/allcasesComponent'))
const Userdetail = lazyWithPreload(() => import('./Common/UserDetail/Userdetail'))
const Home = lazyWithPreload(() => import('./homeComponent'))

const componentsPreload = {
    Lawyerlogin,
    Userlogin,
    Lawersignup,
    Usersignup,
    Useredit,
    Addcase,
    Mycases,
    Allcases,
    Userdetail,
    Home
}

function lazyWithPreload(factory) {
  const Component = lazy(factory);
  Component.preload = factory;
  return Component;
}

const mapStateToProps=state=>{
    return {
        users:state.users,
        loading:state.loading
        // lawyers:state.lawyers
    }
}
const mapDispatchToProps=dispatch=>({
    fetchuserdata:()=>dispatch(fetchuserdata()),
    // fetchlawyers:()=>dispatch(fetchlawyers()),
})

function Lazysuspense(component){
    return(
        <Suspense fallback={
            <div style={{height:'100vh',overflow:'hidden'}} className="d-flex align-items-center justify-content-center">
                    {/* <div className="spinner-border" style={{ width: '4rem', height: '4rem',color:'#a01ba7' }} role="status">           
                    </div> */}
                    <div  style={{minWidth:'300px'}}> 
                    <div className="lzy_img__image loading"></div> 
                    <div className="lzy_img__title loading"></div> 
                    <div className="lzy_img__description loading"></div> 
                    </div> 
            </div>
        }>
        {component}
        </Suspense>
    )
}
// let deferredPrompt;
class Main extends Component{
    componentDidMount(){
        // window.addEventListener('beforeinstallprompt', (e) => {
        //     console.log('beforeinstallprompt')
            // Prevent the mini-infobar from appearing on mobile
            // e.preventDefault();
            // Stash the event so it can be triggered later.
            // deferredPrompt = e;
            // Update UI notify the user they can install the PWA
            // showInstallPromotion();
        // });
        // function pr() {
        //     deferredPrompt.prompt();
        //     deferredPrompt.userChoice.then((choiceResult) => {
        //         if (choiceResult.outcome === 'accepted') {
        //             console.log('User accepted the install prompt');
        //         } else {
        //             console.log('User dismissed the install prompt');
        //         }
        //     })
        // }
        // indexCss.preload()

        // this.props.fetchlawyers();
        this.props.fetchuserdata();
    }
    // componentDidUpdate(){
    // }
    render(){
        return(
            <>
                <Header userdata={this.props.users} fetchuserdata={this.props.fetchuserdata} componentsPreload={componentsPreload}></Header>
                <div style={{marginTop:120,minHeight:'100vh',paddingBottom:30}} className='text-white' >

                <div style={{position:'relative'}}>
                <SnackbarC></SnackbarC>
                </div>

                {
                    this.props.loading.loading
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
                    <AuthProvider>
                        <LawyerAuthProvider>
                        <Switch>
                            <Route path='/home' component={()=>Lazysuspense(<Home/>)
                            }></Route>
                            <Route path='/lawyer/login' component={()=>
                            Lazysuspense(
                            <Lawyerlogin/>
                            )
                            }
                            ></Route>
                            <Route path='/lawyer/signup' component={()=>
                            Lazysuspense(
                            <Lawersignup/>
                            )
                            }>
                            </Route>
                            <Route path='/user/login' component={()=>
                            Lazysuspense(
                            <Userlogin/>
                            )
                            }>
                            </Route>
                            <Route path='/user/signup' component={()=>
                            Lazysuspense(
                            <Usersignup/>
                            )
                            }>
                            </Route>
                            <Route path='/user/edit' component={()=>
                            Lazysuspense(
                            <Useredit/>
                            )
                            }>
                            </Route>
                            <Route path='/user/case' component={()=>
                            Lazysuspense(
                            <Addcase />
                            )
                            }>
                            </Route>
                            <Route path='/user/mycases' component={()=>
                            Lazysuspense(
                            <Mycases/>
                            )
                            }>
                            </Route>
                            <Route path='/search/case' component={()=>
                            Lazysuspense(
                            <Allcases />
                            )
                            }>
                            </Route>
                            <Route path='/profile/:id' component={()=>
                            Lazysuspense(
                            <Userdetail/>
                            )
                            }>
                            </Route>
                            <Redirect to="/home"></Redirect>
                        </Switch>
                        </LawyerAuthProvider>
                    </AuthProvider>
                }
                </div>
                {/* {Lazysuspense(<Footer/>)} */}
                <Footer></Footer>
            </>
        );
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
// export default Main;