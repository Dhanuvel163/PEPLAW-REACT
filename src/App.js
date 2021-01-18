import React,{useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './Components/mainComponent'
import {Provider} from 'react-redux';
import {configStore} from '../src/shared/store';

const store=configStore();

function App() {
    useEffect(() => {
    const offlineAlert = function(){
        alert("Oh no, you lost your network connection.");
    }
    window.addEventListener("offline",offlineAlert);
      return () => {
        window.removeEventListener('offline',offlineAlert,true)
      }
    })
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main></Main>    
      </BrowserRouter>
    </Provider>
    );
}

export default App;
