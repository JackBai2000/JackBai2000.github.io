import React from "react";
import ReactDOM from "react-dom";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "./components/MainPage";
import PastProjects from "./components/PastProjects";
import WorkExperience from "./components/WorkExperience"
import Hobbies from "./components/Hobbies"
import './assets/css/noscript.css';
import './assets/css/main.css';

class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <Switch>
                <Route exact path ='/' component={MainPage}/>
                <Route path = '/PastProjects' component = {PastProjects}/>
                <Route path = '/WorkExperience' component = {WorkExperience}/>
                <Route path = '/Hobbies' component = {Hobbies}/>
                </Switch>
                </BrowserRouter>
            </div>
        );
    }
};


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)