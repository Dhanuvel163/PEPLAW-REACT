import React,{memo} from 'react'
import { Toast, ToastHeader } from 'reactstrap';
import './snackbar.css'
function SnackbarC({data,open,classN,close}) {


    return (
      <div className="snack">
      <div className={`d-flex justify-content-center align-items-center ${classN}`} style={{marginTop:10}}>  
        <Toast isOpen={open} className='toast-anim'>
          <ToastHeader toggle={close}>
            {data}
          </ToastHeader>
          {/* <ToastBody>
          </ToastBody> */}
        </Toast>        
      </div>
      </div>

    )
}

export default memo(SnackbarC)
