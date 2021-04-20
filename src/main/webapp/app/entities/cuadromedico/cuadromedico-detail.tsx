import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './cuadromedico.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICUADROMEDICODetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CUADROMEDICODetail = (props: ICUADROMEDICODetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { cUADROMEDICOEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="cUADROMEDICODetailsHeading">CUADROMEDICO</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{cUADROMEDICOEntity.id}</dd>
          <dt>
            <span id="id_cliente">Id Cliente</span>
          </dt>
          <dd>{cUADROMEDICOEntity.id_cliente}</dd>
          <dt>
            <span id="suscripcion">Suscripcion</span>
          </dt>
          <dd>{cUADROMEDICOEntity.suscripcion}</dd>
        </dl>
        <Button tag={Link} to="/cuadromedico" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/cuadromedico/${cUADROMEDICOEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ cUADROMEDICO }: IRootState) => ({
  cUADROMEDICOEntity: cUADROMEDICO.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CUADROMEDICODetail);
