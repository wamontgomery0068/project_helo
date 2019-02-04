import React from "react";
import { Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './ducks/store';

// Imported Components Below

import Nav from './component/Nav/Nav';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';

// Import Components Above

export default (
    <Provider store = {store}>
        <Switch>
            <Route component = {Auth} exact path = "/" />
            <Route component = {Dashboard} path = "/dashboard" />
            <Route component = {Post} path = '/post/:postid' />
            <Route component = {Form} path = "/new_post"/>
            <Route component = {Nav} path = "/nav"/>
        </Switch>
    </Provider>

);