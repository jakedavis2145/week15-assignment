import React from "react";
import Header from "./header";
import App from "./App";

export default class Page extends React.Component{
    render(){
        return(
            <div className="container">
                <Header />
                <br/>
                <div id="content" className="col-sm">
                 <App />
                 </div>
            </div>
         
         
   ) }
}