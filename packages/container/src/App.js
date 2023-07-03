import React, {lazy, useState, useEffect} from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import { StylesProvider, createGenerateClassName} from '@material-ui/styles';
import { createBrowserHistory } from 'history';


import Progress from './components/Progress';
import Header from './components/Header';
import { Suspense } from 'react';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const DashBoardLazy = lazy(() => import('./components/DashboardApp'));


const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    
    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        } else {
            history.push('/')
        }
    }, [isSignedIn])

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={() => setIsSignedIn(false) } isSignedIn={isSignedIn}/>
                    <Suspense fallback={<Progress/>}>
                        <Route path="/auth">
                            <AuthApp onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/dashboard">
                            {!isSignedIn && <Redirect to="/"/>}
                            <DashBoardLazy/>
                        </Route>
                        <Route path="/" component={MarketingApp}/>
                    </Suspense>

                </div>
            </StylesProvider>
        </Router>
    )
};