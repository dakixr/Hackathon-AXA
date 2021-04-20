import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './medico.reducer';
import { IMEDICO } from 'app/shared/model/medico.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMEDICOUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MEDICOUpdate = (props: IMEDICOUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { mEDICOEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/medico' + props.location.search);
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
        ...mEDICOEntity,
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
          <h2 id="axaApp.mEDICO.home.createOrEditLabel" data-cy="MEDICOCreateUpdateHeading">
            Create or edit a MEDICO
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : mEDICOEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="medico-id">ID</Label>
                  <AvInput id="medico-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nombreLabel" for="medico-nombre">
                  Nombre
                </Label>
                <AvField id="medico-nombre" data-cy="nombre" type="text" name="nombre" />
              </AvGroup>
              <AvGroup>
                <Label id="apellidosLabel" for="medico-apellidos">
                  Apellidos
                </Label>
                <AvField id="medico-apellidos" data-cy="apellidos" type="text" name="apellidos" />
              </AvGroup>
              <AvGroup>
                <Label id="numero_colegiadoLabel" for="medico-numero_colegiado">
                  Numero Colegiado
                </Label>
                <AvField id="medico-numero_colegiado" data-cy="numero_colegiado" type="text" name="numero_colegiado" />
              </AvGroup>
              <AvGroup>
                <Label id="telefono_contactoLabel" for="medico-telefono_contacto">
                  Telefono Contacto
                </Label>
                <AvField id="medico-telefono_contacto" data-cy="telefono_contacto" type="text" name="telefono_contacto" />
              </AvGroup>
              <AvGroup>
                <Label id="especialidadLabel" for="medico-especialidad">
                  Especialidad
                </Label>
                <AvField id="medico-especialidad" data-cy="especialidad" type="text" name="especialidad" />
              </AvGroup>
              <AvGroup>
                <Label id="centro_sanitarioLabel" for="medico-centro_sanitario">
                  Centro Sanitario
                </Label>
                <AvField id="medico-centro_sanitario" data-cy="centro_sanitario" type="text" name="centro_sanitario" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/medico" replace color="info">
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
  mEDICOEntity: storeState.mEDICO.entity,
  loading: storeState.mEDICO.loading,
  updating: storeState.mEDICO.updating,
  updateSuccess: storeState.mEDICO.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MEDICOUpdate);
