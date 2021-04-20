import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './centrosanitario.reducer';
import { ICENTROSANITARIO } from 'app/shared/model/centrosanitario.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICENTROSANITARIOUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CENTROSANITARIOUpdate = (props: ICENTROSANITARIOUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { cENTROSANITARIOEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/centrosanitario' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...cENTROSANITARIOEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="axaApp.cENTROSANITARIO.home.createOrEditLabel" data-cy="CENTROSANITARIOCreateUpdateHeading">
            Create or edit a CENTROSANITARIO
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : cENTROSANITARIOEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="centrosanitario-id">ID</Label>
                  <AvInput id="centrosanitario-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="direccionLabel" for="centrosanitario-direccion">
                  Direccion
                </Label>
                <AvField id="centrosanitario-direccion" data-cy="direccion" type="text" name="direccion" />
              </AvGroup>
              <AvGroup>
                <Label id="persona_de_contactoLabel" for="centrosanitario-persona_de_contacto">
                  Persona De Contacto
                </Label>
                <AvField id="centrosanitario-persona_de_contacto" data-cy="persona_de_contacto" type="text" name="persona_de_contacto" />
              </AvGroup>
              <AvGroup>
                <Label id="emailLabel" for="centrosanitario-email">
                  Email
                </Label>
                <AvField id="centrosanitario-email" data-cy="email" type="text" name="email" />
              </AvGroup>
              <AvGroup>
                <Label id="codigo_postalLabel" for="centrosanitario-codigo_postal">
                  Codigo Postal
                </Label>
                <AvField id="centrosanitario-codigo_postal" data-cy="codigo_postal" type="text" name="codigo_postal" />
              </AvGroup>
              <AvGroup>
                <Label id="especialidadesLabel" for="centrosanitario-especialidades">
                  Especialidades
                </Label>
                <AvField id="centrosanitario-especialidades" data-cy="especialidades" type="text" name="especialidades" />
              </AvGroup>
              <AvGroup>
                <Label id="coordenada_xLabel" for="centrosanitario-coordenada_x">
                  Coordenada X
                </Label>
                <AvField
                  id="centrosanitario-coordenada_x"
                  data-cy="coordenada_x"
                  type="string"
                  className="form-control"
                  name="coordenada_x"
                />
              </AvGroup>
              <AvGroup>
                <Label id="coordenada_yLabel" for="centrosanitario-coordenada_y">
                  Coordenada Y
                </Label>
                <AvField
                  id="centrosanitario-coordenada_y"
                  data-cy="coordenada_y"
                  type="string"
                  className="form-control"
                  name="coordenada_y"
                />
              </AvGroup>
              <AvGroup>
                <Label id="nombre_pas_asociadoLabel" for="centrosanitario-nombre_pas_asociado">
                  Nombre Pas Asociado
                </Label>
                <AvField id="centrosanitario-nombre_pas_asociado" data-cy="nombre_pas_asociado" type="text" name="nombre_pas_asociado" />
              </AvGroup>
              <AvGroup>
                <Label id="nombre_centroLabel" for="centrosanitario-nombre_centro">
                  Nombre Centro
                </Label>
                <AvField id="centrosanitario-nombre_centro" data-cy="nombre_centro" type="text" name="nombre_centro" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/centrosanitario" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  cENTROSANITARIOEntity: storeState.cENTROSANITARIO.entity,
  loading: storeState.cENTROSANITARIO.loading,
  updating: storeState.cENTROSANITARIO.updating,
  updateSuccess: storeState.cENTROSANITARIO.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CENTROSANITARIOUpdate);
