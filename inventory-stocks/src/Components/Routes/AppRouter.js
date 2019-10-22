import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import * as routes from './routes';
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'
import Dashboard from '../dashboard/Dashboard'

import AuthRoute from './AuthRoute'
import PrivateRoute from './PrivateRoute'

const AppRouter = () => {
    return (
        <Switch>
            <AuthRoute exact path={routes.SIGNIN} component={SignIn} />
            <AuthRoute path={routes.SIGNUP} component={SignUp} />
            <PrivateRoute path={routes.DASHBOARD} component={Dashboard} />
            <Route render={() => <Redirect to={routes.SIGNIN} />} /> 
        </Switch>
    );
};

export default AppRouter;