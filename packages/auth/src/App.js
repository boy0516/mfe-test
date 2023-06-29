import React from 'react';
import { Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import SignUp from './components/Signup';
import Signin from './components/Signin';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
})

export default ({history}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Route path="/auth/signin" component={Signin}/>
                <Route path="/auth/signup" component={SignUp}/>
            </Router>
        </StylesProvider>
    </div>
} 