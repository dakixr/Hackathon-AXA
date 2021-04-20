import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PAS from './pas';
import PASDetail from './pas-detail';
import PASUpdate from './pas-update';
import PASDeleteDialog from './pas-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PASUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PASUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PASDetail} />
      <ErrorBoundaryRoute path={match.url} component={PAS} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PASDeleteDialog} />
  </>
);

export default Routes;
