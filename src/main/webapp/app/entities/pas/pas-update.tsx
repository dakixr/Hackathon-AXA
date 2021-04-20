import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './pas.reducer';
import { IPAS } from 'app/shared/model/pas.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IPASUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PASUpdate = (props: IPASUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { pASEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/pas' + props.location.search);
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
        ...pASEntity,
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
          <h2 id="axaApp.pAS.home.createOrEditLabel" data-cy="PASCreateUpdateHeading">
            Create or edit a PAS
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : pASEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="pas-id">ID</Label>
                  <AvInput id="pas-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="cifLabel" for="pas-cif">
                  Cif
                </Label>
                <AvField
                  id="pas-cif"
                  data-cy="cif"
                  type="text"
                  name="cif"
                  validate={{
                    pattern: { value: '[A-Z]-\\d{8}', errorMessage: "This field should follow pattern for '[A-Z]-\\d{8}'." },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nombreLabel" for="pas-nombre">
                  Nombre
                </Label>
                <AvField id="pas-nombre" data-cy="nombre" type="text" name="nombre" />
              </AvGroup>
              <AvGroup>
                <Label id="codigo_postalLabel" for="pas-codigo_postal">
                  Codigo Postal
                </Label>
                <AvField id="pas-codigo_postal" data-cy="codigo_postal" type="text" name="codigo_postal" />
              </AvGroup>
              <AvGroup>
                <Label id="emailLabel" for="pas-email">
                  Email
                </Label>
                <AvField id="pas-email" data-cy="email" type="text" name="email" />
              </AvGroup>
              <AvGroup>
                <Label id="tipo_proveedorLabel" for="pas-tipo_proveedor">
                  Tipo Proveedor
                </Label>
                <AvField id="pas-tipo_proveedor" data-cy="tipo_proveedor" type="text" name="tipo_proveedor" />
              </AvGroup>
              <AvGroup>
                <Label id="direccionLabel" for="pas-direccion">
                  Direccion
                </Label>
                <AvField id="pas-direccion" data-cy="direccion" type="text" name="direccion" />
              </AvGroup>
              <AvGroup>
                <Label id="persona_de_contactoLabel" for="pas-persona_de_contacto">
                  Persona De Contacto
                </Label>
                <AvField id="pas-persona_de_contacto" data-cy="persona_de_contacto" type="text" name="persona_de_contacto" />
              </AvGroup>
              <AvGroup>
                <Label id="poblacionLabel" for="pas-poblacion">
                  Poblacion
                </Label>
                <AvField id="pas-poblacion" data-cy="poblacion" type="text" name="poblacion" />
              </AvGroup>
              <AvGroup>
                <Label id="provinciaLabel" for="pas-provincia">
                  Provincia
                </Label>
                <AvField id="pas-provincia" data-cy="provincia" type="text" name="provincia" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/pas" replace color="info">
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
  pASEntity: storeState.pAS.entity,
  loading: storeState.pAS.loading,
  updating: storeState.pAS.updating,
  updateSuccess: storeState.pAS.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PASUpdate);
