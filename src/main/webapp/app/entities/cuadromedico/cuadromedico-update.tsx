import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './cuadromedico.reducer';
import { ICUADROMEDICO } from 'app/shared/model/cuadromedico.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICUADROMEDICOUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CUADROMEDICOUpdate = (props: ICUADROMEDICOUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { cUADROMEDICOEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/cuadromedico' + props.location.search);
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
        ...cUADROMEDICOEntity,
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
          <h2 id="axaApp.cUADROMEDICO.home.createOrEditLabel" data-cy="CUADROMEDICOCreateUpdateHeading">
            Create or edit a CUADROMEDICO
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : cUADROMEDICOEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="cuadromedico-id">ID</Label>
                  <AvInput id="cuadromedico-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="id_clienteLabel" for="cuadromedico-id_cliente">
                  Id Cliente
                </Label>
                <AvField
                  id="cuadromedico-id_cliente"
                  data-cy="id_cliente"
                  type="string"
                  className="form-control"
                  name="id_cliente"
                  validate={{
                    number: { value: true, errorMessage: 'This field should be a number.' },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="suscripcionLabel" for="cuadromedico-suscripcion">
                  Suscripcion
                </Label>
                <AvField id="cuadromedico-suscripcion" data-cy="suscripcion" type="text" name="suscripcion" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/cuadromedico" replace color="info">
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
  cUADROMEDICOEntity: storeState.cUADROMEDICO.entity,
  loading: storeState.cUADROMEDICO.loading,
  updating: storeState.cUADROMEDICO.updating,
  updateSuccess: storeState.cUADROMEDICO.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CUADROMEDICOUpdate);
