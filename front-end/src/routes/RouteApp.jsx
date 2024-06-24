import React from 'react';
import {Route,BrowserRouter,Routes,Navigate} from "react-router-dom";
import CreatePv from '../pages/createpv/CreatePv';
import NavBar from '../components/Navbar/Navbar';

function RouteApp() {

    return (  
    <BrowserRouter>     
        <Routes>
            <Route path="/" element = {<Navigate to="/pedido-de-venda" />}/> 
            <Route path="/pedido-de-venda" element = {<NavBar><CreatePv/></NavBar>}/>     
        </Routes>            
    </BrowserRouter> 
    );
}

export default RouteApp;

/*
<PrivateRoute path="/home" component={HomePage} />
<PrivateRoute path="/other" component={OtherPage} />

*/