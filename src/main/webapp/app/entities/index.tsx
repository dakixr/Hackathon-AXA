import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PAS from './pas';
import MEDICO from './medico';
import CENTROSANITARIO from './centrosanitario';
import CUADROMEDICO from './cuadromedico';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}pas`} component={PAS} />
      <ErrorBoundaryRoute path={`${match.url}medico`} component={MEDICO} />
      <ErrorBoundaryRoute path={`${match.url}centrosanitario`} component={CENTROSANITARIO} />
      <ErrorBoundaryRoute path={`${match.url}cuadromedico`} component={CUADROMEDICO} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
