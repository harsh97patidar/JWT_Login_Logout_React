import React, { useState } from 'react';
import './App.css';
 import Login from "./pages/Login";
//  import Nav from "./components/Nav";
import { Redirect } from 'react-router-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
 import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
     const [id, setId] = useState('');

    // useEffect(() => {
    //     console.log("comming")
    //     (
        

    //         async () => {
    //             const response = await fetch('http://localhost:8000/user/1', {
    //                 headers: {'Content-Type': 'application/json'},
    //                 credentials: 'include',
    //             });

    //             const content = await response.json();

    //             setName(content.name);
    //         }
    //     )();
    // },[]);

    
    console.log("comming app")

    return (
        // <div className="App">
            <BrowserRouter>
            <Routes>
                {/* <Nav name={name} setName={setName}/> */}

                
                    <Route exact path="/register" element={<Register/>}/>
                    {id ? <Route path="/" exact element={<Home id={id}/>}/> : <Redirect
                     to='/login' />}
                    <Route path="/login" element={<Login setId={setId}/>}/>
                    
                </Routes>
            </BrowserRouter>
        // </div>
    );
}

export default App;