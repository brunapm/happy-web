import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/happy" component={OrphanagesMap} />

                <Route path="/orfanatos/criar" component={CreateOrphanage} />
                <Route path="/orfanatos/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
