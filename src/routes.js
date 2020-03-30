import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home'
import Contato from './pages/contato'

export default function Routes(){
    return(
        <Switch>
            <div className="container-default">
                <Route path="/" exact component={Home}/>
                <Route path="/contato" component={Contato}/>
            </div>
        </Switch>
    )
}
