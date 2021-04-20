import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CUADROMEDICO from './cuadromedico';
import CUADROMEDICODetail from './cuadromedico-detail';
import CUADROMEDICOUpdate from './cuadromedico-update';
import CUADROMEDICODeleteDialog from './cuadromedico-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CUADROMEDICOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CUADROMEDICOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CUADROMEDICODetail} />
      <ErrorBoundaryRoute path={match.url} component={CUADROMEDICO} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CUADROMEDICODeleteDialog} />
  </>
);

export default Routes;
