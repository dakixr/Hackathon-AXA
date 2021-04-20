import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './cuadromedico.reducer';

export interface ICUADROMEDICODeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CUADROMEDICODeleteDialog = (props: ICUADROMEDICODeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/cuadromedico' + props.location.search);
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.cUADROMEDICOEntity.id);
  };

  const { cUADROMEDICOEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="cUADROMEDICODeleteDialogHeading">
        Confirm delete operation
      </ModalHeader>
      <ModalBody id="axaApp.cUADROMEDICO.delete.question">Are you sure you want to delete this CUADROMEDICO?</ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp; Cancel
        </Button>
        <Button id="jhi-confirm-delete-cUADROMEDICO" data-cy="entityConfirmDeleteButton" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp; Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ cUADROMEDICO }: IRootState) => ({
  cUADROMEDICOEntity: cUADROMEDICO.entity,
  updateSuccess: cUADROMEDICO.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CUADROMEDICODeleteDialog);
