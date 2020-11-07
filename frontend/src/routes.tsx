import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateOrphanage from './pages/CreateOrphanage';
import ForgotPassword from './pages/ForgotPassword';

import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';
import ResetPassword from './pages/ResetPassword';
import RestrictAccessLogin from './pages/RestrictAccessLogin';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />

        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />

        <Route path="/access" component={RestrictAccessLogin} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/resetpassword" component={ResetPassword} />
      </Switch>
    </BrowserRouter>
  );
}