import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CENTROSANITARIO from './centrosanitario';
import CENTROSANITARIODetail from './centrosanitario-detail';
import CENTROSANITARIOUpdate from './centrosanitario-update';
import CENTROSANITARIODeleteDialog from './centrosanitario-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CENTROSANITARIOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CENTROSANITARIOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CENTROSANITARIODetail} />
      <ErrorBoundaryRoute path={match.url} component={CENTROSANITARIO} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CENTROSANITARIODeleteDialog} />
  </>
);

export default Routes;
