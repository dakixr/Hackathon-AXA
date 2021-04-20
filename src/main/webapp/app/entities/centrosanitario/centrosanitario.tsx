import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, getSortState, IPaginationBaseState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './centrosanitario.reducer';
import { ICENTROSANITARIO } from 'app/shared/model/centrosanitario.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';

export interface ICENTROSANITARIOProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const CENTROSANITARIO = (props: ICENTROSANITARIOProps) => {
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const getAllEntities = () => {
    props.getEntities(paginationState.activePage - 1, paginationState.itemsPerPage, `${paginationState.sort},${paginationState.order}`);
  };

  const sortEntities = () => {
    getAllEntities();
    const endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const page = params.get('page');
    const sort = params.get('sort');
    if (page && sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: +page,
        sort: sortSplit[0],
        order: sortSplit[1],
      });
    }
  }, [props.location.search]);

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' ? 'desc' : 'asc',
      sort: p,
    });
  };

  const handlePagination = currentPage =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage,
    });

  const handleSyncList = () => {
    sortEntities();
  };

  const { cENTROSANITARIOList, match, loading, totalItems } = props;
  return (
    <div>
      <h2 id="centrosanitario-heading" data-cy="CENTROSANITARIOHeading">
        CENTROSANITARIOS
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new CENTROSANITARIO
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {cENTROSANITARIOList && cENTROSANITARIOList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('direccion')}>
                  Direccion <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('persona_de_contacto')}>
                  Persona De Contacto <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('email')}>
                  Email <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('codigo_postal')}>
                  Codigo Postal <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('especialidades')}>
                  Especialidades <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('coordenada_x')}>
                  Coordenada X <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('coordenada_y')}>
                  Coordenada Y <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('nombre_pas_asociado')}>
                  Nombre Pas Asociado <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('nombre_centro')}>
                  Nombre Centro <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cENTROSANITARIOList.map((cENTROSANITARIO, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${cENTROSANITARIO.id}`} color="link" size="sm">
                      {cENTROSANITARIO.id}
                    </Button>
                  </td>
                  <td>{cENTROSANITARIO.direccion}</td>
                  <td>{cENTROSANITARIO.persona_de_contacto}</td>
                  <td>{cENTROSANITARIO.email}</td>
                  <td>{cENTROSANITARIO.codigo_postal}</td>
                  <td>{cENTROSANITARIO.especialidades}</td>
                  <td>{cENTROSANITARIO.coordenada_x}</td>
                  <td>{cENTROSANITARIO.coordenada_y}</td>
                  <td>{cENTROSANITARIO.nombre_pas_asociado}</td>
                  <td>{cENTROSANITARIO.nombre_centro}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${cENTROSANITARIO.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${cENTROSANITARIO.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${cENTROSANITARIO.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No CENTROSANITARIOS found</div>
        )}
      </div>
      {props.totalItems ? (
        <div className={cENTROSANITARIOList && cENTROSANITARIOList.length > 0 ? '' : 'd-none'}>
          <Row className="justify-content-center">
            <JhiItemCount page={paginationState.activePage} total={totalItems} itemsPerPage={paginationState.itemsPerPage} />
          </Row>
          <Row className="justify-content-center">
            <JhiPagination
              activePage={paginationState.activePage}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={paginationState.itemsPerPage}
              totalItems={props.totalItems}
            />
          </Row>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = ({ cENTROSANITARIO }: IRootState) => ({
  cENTROSANITARIOList: cENTROSANITARIO.entities,
  loading: cENTROSANITARIO.loading,
  totalItems: cENTROSANITARIO.totalItems,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CENTROSANITARIO);
