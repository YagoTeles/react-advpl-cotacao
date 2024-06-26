import React from 'react';
import {Route,BrowserRouter,Routes,Navigate} from "react-router-dom";
import GeraCotacao from '../pages/GeraCotacao/GeraCotacao';
import NavBar from '../components/Navbar/Navbar';

function RouteApp() {

    return (  
    <BrowserRouter>     
        <Routes>
            <Route path="/" element = {<Navigate to="/gera-cotacao" />}/> 
            <Route path="/gera-cotacao" element = {<NavBar><GeraCotacao/></NavBar>}/>     
        </Routes>            
    </BrowserRouter> 
    );
}

export default RouteApp;

/*
<PrivateRoute path="/home" component={HomePage} />
<PrivateRoute path="/other" component={OtherPage} />

*/