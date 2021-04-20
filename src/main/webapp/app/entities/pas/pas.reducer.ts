import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IPAS, defaultValue } from 'app/shared/model/pas.model';

export const ACTION_TYPES = {
  FETCH_PAS_LIST: 'pAS/FETCH_PAS_LIST',
  FETCH_PAS: 'pAS/FETCH_PAS',
  CREATE_PAS: 'pAS/CREATE_PAS',
  UPDATE_PAS: 'pAS/UPDATE_PAS',
  PARTIAL_UPDATE_PAS: 'pAS/PARTIAL_UPDATE_PAS',
  DELETE_PAS: 'pAS/DELETE_PAS',
  RESET: 'pAS/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IPAS>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type PASState = Readonly<typeof initialState>;

// Reducer

export default (state: PASState = initialState, action): PASState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_PAS_LIST):
    case REQUEST(ACTION_TYPES.FETCH_PAS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_PAS):
    case REQUEST(ACTION_TYPES.UPDATE_PAS):
    case REQUEST(ACTION_TYPES.DELETE_PAS):
    case REQUEST(ACTION_TYPES.PARTIAL_UPDATE_PAS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_PAS_LIST):
    case FAILURE(ACTION_TYPES.FETCH_PAS):
    case FAILURE(ACTION_TYPES.CREATE_PAS):
    case FAILURE(ACTION_TYPES.UPDATE_PAS):
    case FAILURE(ACTION_TYPES.PARTIAL_UPDATE_PAS):
    case FAILURE(ACTION_TYPES.DELETE_PAS):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_PAS_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_PAS):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_PAS):
    case SUCCESS(ACTION_TYPES.UPDATE_PAS):
    case SUCCESS(ACTION_TYPES.PARTIAL_UPDATE_PAS):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_PAS):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/pas';

// Actions

export const getEntities: ICrudGetAllAction<IPAS> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_PAS_LIST,
    payload: axios.get<IPAS>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<IPAS> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_PAS,
    payload: axios.get<IPAS>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IPAS> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_PAS,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IPAS> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_PAS,
    payload: axios.put(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const partialUpdate: ICrudPutAction<IPAS> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.PARTIAL_UPDATE_PAS,
    payload: axios.patch(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IPAS> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_PAS,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
