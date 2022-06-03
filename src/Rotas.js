import React from "react";
import { Routes, Route  } from 'react-router'
import Headers from "./Corpo/Headers";
import Article from "./Corpo/Article";
import Footer from "./Corpo/Footer"; 
import App from "./App";  
import Home from "./components/pages/Home/Home";

export default () => {
        return(
            <Routes>
                <Route exact path='/' element={<Home />}>
                    
                </Route>
                <Headers />

            </Routes>
        )
}
