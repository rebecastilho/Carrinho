import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Carrinho from './pages/Carrinho';

export default function Routes() {

    return (
        <Router>
            <Route path="/" exact component={Carrinho} />
        </Router>
    )
}