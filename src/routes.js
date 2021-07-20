import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'

import Repositories from './Repositories';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/repositories' component={Repositories}></Route>
            </Switch>

        </BrowserRouter>
    )
}