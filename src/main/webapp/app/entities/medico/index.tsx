import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import MEDICO from './medico';
import MEDICODetail from './medico-detail';
import MEDICOUpdate from './medico-update';
import MEDICODeleteDialog from './medico-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MEDICOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MEDICOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MEDICODetail} />
      <ErrorBoundaryRoute path={match.url} component={MEDICO} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MEDICODeleteDialog} />
  </>
);

export default Routes;
