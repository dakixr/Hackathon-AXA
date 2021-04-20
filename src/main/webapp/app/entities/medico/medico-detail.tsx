import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './medico.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMEDICODetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MEDICODetail = (props: IMEDICODetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { mEDICOEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="mEDICODetailsHeading">MEDICO</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{mEDICOEntity.id}</dd>
          <dt>
            <span id="nombre">Nombre</span>
          </dt>
          <dd>{mEDICOEntity.nombre}</dd>
          <dt>
            <span id="apellidos">Apellidos</span>
          </dt>
          <dd>{mEDICOEntity.apellidos}</dd>
          <dt>
            <span id="numero_colegiado">Numero Colegiado</span>
          </dt>
          <dd>{mEDICOEntity.numero_colegiado}</dd>
          <dt>
            <span id="telefono_contacto">Telefono Contacto</span>
          </dt>
          <dd>{mEDICOEntity.telefono_contacto}</dd>
          <dt>
            <span id="especialidad">Especialidad</span>
          </dt>
          <dd>{mEDICOEntity.especialidad}</dd>
          <dt>
            <span id="centro_sanitario">Centro Sanitario</span>
          </dt>
          <dd>{mEDICOEntity.centro_sanitario}</dd>
        </dl>
        <Button tag={Link} to="/medico" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/medico/${mEDICOEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ mEDICO }: IRootState) => ({
  mEDICOEntity: mEDICO.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MEDICODetail);
