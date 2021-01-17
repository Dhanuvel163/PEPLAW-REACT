import React, { Component,lazy, Suspense } from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './Partials/Header/headerComponent';
import Footer from './Partials/Footer/footerComponent';
import {fetchuserdata} from '../shared/actionCreators'
import SnackbarC from './Partials/Snackbar/Snackbar';
import {Spinner} from 'reactstrap'
const Lawyerlogin = lazy(() => import('./Lawyer/Login/lawerloginComponent'))
const Userlogin = lazy(() => import('./User/Login/userloginComponent'))
const Lawersignup = lazy(() => import('./Lawyer/Signup/lawersignupComponent'))
const Usersignup = lazy(() => import('./User/Signup/usersignupComponent'))
const Useredit = lazy(() => import('./Common/Useredit/usereditComponent'))
const Addcase = lazy(() => import('./User/Addcase/addcaseComponent'))
const Mycases = lazy(() => import('./Common/Mycases/mycasesComponent'))
const Allcases = lazy(() => import('./Common/Allcases/allcasesComponent'))
const Home = lazy(() => import('./homeComponent'))

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
        <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}>   
        <Spinner color="#a01ba7" style={{ width: '4rem', height: '4rem',color:'#a01ba7' }} />
        </div>
        }>
        {component}
        </Suspense>
    )
}
class Main extends Component{
    componentDidMount(){
        // this.props.fetchlawyers();
        this.props.fetchuserdata();
    }
    // componentDidUpdate(){
    // }
    render(){
        return(
            <>
                <Header userdata={this.props.users} fetchuserdata={this.props.fetchuserdata}></Header>
                <div style={{marginTop:70,padding:10,minHeight:700,paddingBottom:30}} className='text-white' >

                <SnackbarC></SnackbarC>

                {
                    this.props.loading.loading
                    ?
                    <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}> 
                    <Spinner color="#a01ba7" style={{ width: '4rem', height: '4rem',color:'#a01ba7' }} />
                    </div>
                    :
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
                            <Addcase/>
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
                            <Allcases/>
                            )
                            }>
                            </Route>
                            <Redirect to="/home"></Redirect>
                        </Switch>
                }
                </div>
                <Footer></Footer>
            </>
        );
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
// export default Main;