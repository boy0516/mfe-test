import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { StylesProvider, createGenerateClassName} from '@material-ui/styles'
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/auth" component={AuthApp}/>
                    <Route path="/" component={MarketingApp}/>
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
};