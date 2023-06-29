import React, {lazy, useState} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { StylesProvider, createGenerateClassName} from '@material-ui/styles'

import Progress from './components/Progress';
import Header from './components/Header';
import { Suspense } from 'react';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header onSignOut={() => setIsSignedIn(false) } isSignedIn={isSignedIn}/>
                    <Suspense fallback={<Progress/>}>
                        <Route path="/auth">
                            <AuthApp onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/" component={MarketingApp}/>
                    </Suspense>

                </div>
            </BrowserRouter>
        </StylesProvider>
    )
};