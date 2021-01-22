import React from 'react'
import { Toast, ToastHeader } from 'reactstrap';
import './snackbar.css'
import {clearMessage} from '../../../shared/actionCreators'
import {connect} from 'react-redux';

const mapStateToProps=state=>{
    return {
        errors:state.errors,
    }
}
const mapDispatchToProps=dispatch=>({
    clearMessage:()=>dispatch(clearMessage()),
})
function SnackbarC({errors:{data,open,classN},clearMessage}) {
    return (
      <div className="snack">
      <div className={`d-flex justify-content-center align-items-center ${classN}`} style={{marginTop:10}}>  
        <Toast isOpen={open} className='toast-anim'>
          <ToastHeader toggle={clearMessage} icon={
          classN==='success'?
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
        }>
            {data}
          </ToastHeader>
          {/* <ToastBody>
          </ToastBody> */}
        </Toast>        
      </div>
      </div>

    )
}

export default connect(mapStateToProps,mapDispatchToProps)(SnackbarC);
