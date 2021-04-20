import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './pas.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPASDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PASDetail = (props: IPASDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { pASEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="pASDetailsHeading">PAS</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{pASEntity.id}</dd>
          <dt>
            <span id="cif">Cif</span>
          </dt>
          <dd>{pASEntity.cif}</dd>
          <dt>
            <span id="nombre">Nombre</span>
          </dt>
          <dd>{pASEntity.nombre}</dd>
          <dt>
            <span id="codigo_postal">Codigo Postal</span>
          </dt>
          <dd>{pASEntity.codigo_postal}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{pASEntity.email}</dd>
          <dt>
            <span id="tipo_proveedor">Tipo Proveedor</span>
          </dt>
          <dd>{pASEntity.tipo_proveedor}</dd>
          <dt>
            <span id="direccion">Direccion</span>
          </dt>
          <dd>{pASEntity.direccion}</dd>
          <dt>
            <span id="persona_de_contacto">Persona De Contacto</span>
          </dt>
          <dd>{pASEntity.persona_de_contacto}</dd>
          <dt>
            <span id="poblacion">Poblacion</span>
          </dt>
          <dd>{pASEntity.poblacion}</dd>
          <dt>
            <span id="provincia">Provincia</span>
          </dt>
          <dd>{pASEntity.provincia}</dd>
        </dl>
        <Button tag={Link} to="/pas" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/pas/${pASEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ pAS }: IRootState) => ({
  pASEntity: pAS.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PASDetail);
