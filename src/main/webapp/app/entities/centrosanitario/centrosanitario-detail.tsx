import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './centrosanitario.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICENTROSANITARIODetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CENTROSANITARIODetail = (props: ICENTROSANITARIODetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { cENTROSANITARIOEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="cENTROSANITARIODetailsHeading">CENTROSANITARIO</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{cENTROSANITARIOEntity.id}</dd>
          <dt>
            <span id="direccion">Direccion</span>
          </dt>
          <dd>{cENTROSANITARIOEntity.direccion}</dd>
          <dt>
            <span id="persona_de_contacto">Persona De Contacto</span>
          </dt>
          <dd>{cENTROSANITARIOEntity.persona_de_contacto}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{cENTROSANITARIOEntity.email}</dd>
          <dt>
            <span id="codigo_postal">Codigo Postal</span>
          </dt>
          <dd>{cENTROSANITARIOEntity.codigo_postal}</dd>
          <dt>
            <span id="especialidades">Especialidades</span>
          </dt>
          <dd>{cENTROSANITARIOEntity.especialidades}</dd>
          <dt>
            <span id="coordenada_x">Coordenada X</span>
          </dt>
          <dd>{cENTROSANITARIOEntity.coordenada_x}</dd>
          <dt>
            <span id="coordenada_y">Coordenada Y</span>
          </dt>
          <dd>{cENTROSANITARIOEntity.coordenada_y}</dd>
          <dt>
            <span id="nombre_pas_asociado">Nombre Pas Asociado</span>
          </dt>
          <dd>{cENTROSANITARIOEntity.nombre_pas_asociado}</dd>
          <dt>
            <span id="nombre_centro">Nombre Centro</span>
          </dt>
          <dd>{cENTROSANITARIOEntity.nombre_centro}</dd>
        </dl>
        <Button tag={Link} to="/centrosanitario" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/centrosanitario/${cENTROSANITARIOEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ cENTROSANITARIO }: IRootState) => ({
  cENTROSANITARIOEntity: cENTROSANITARIO.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CENTROSANITARIODetail);
