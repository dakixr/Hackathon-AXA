import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICENTROSANITARIO, defaultValue } from 'app/shared/model/centrosanitario.model';

export const ACTION_TYPES = {
  FETCH_CENTROSANITARIO_LIST: 'cENTROSANITARIO/FETCH_CENTROSANITARIO_LIST',
  FETCH_CENTROSANITARIO: 'cENTROSANITARIO/FETCH_CENTROSANITARIO',
  CREATE_CENTROSANITARIO: 'cENTROSANITARIO/CREATE_CENTROSANITARIO',
  UPDATE_CENTROSANITARIO: 'cENTROSANITARIO/UPDATE_CENTROSANITARIO',
  PARTIAL_UPDATE_CENTROSANITARIO: 'cENTROSANITARIO/PARTIAL_UPDATE_CENTROSANITARIO',
  DELETE_CENTROSANITARIO: 'cENTROSANITARIO/DELETE_CENTROSANITARIO',
  RESET: 'cENTROSANITARIO/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICENTROSANITARIO>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type CENTROSANITARIOState = Readonly<typeof initialState>;

// Reducer

export default (state: CENTROSANITARIOState = initialState, action): CENTROSANITARIOState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_CENTROSANITARIO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_CENTROSANITARIO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_CENTROSANITARIO):
    case REQUEST(ACTION_TYPES.UPDATE_CENTROSANITARIO):
    case REQUEST(ACTION_TYPES.DELETE_CENTROSANITARIO):
    case REQUEST(ACTION_TYPES.PARTIAL_UPDATE_CENTROSANITARIO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_CENTROSANITARIO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_CENTROSANITARIO):
    case FAILURE(ACTION_TYPES.CREATE_CENTROSANITARIO):
    case FAILURE(ACTION_TYPES.UPDATE_CENTROSANITARIO):
    case FAILURE(ACTION_TYPES.PARTIAL_UPDATE_CENTROSANITARIO):
    case FAILURE(ACTION_TYPES.DELETE_CENTROSANITARIO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CENTROSANITARIO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_CENTROSANITARIO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_CENTROSANITARIO):
    case SUCCESS(ACTION_TYPES.UPDATE_CENTROSANITARIO):
    case SUCCESS(ACTION_TYPES.PARTIAL_UPDATE_CENTROSANITARIO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_CENTROSANITARIO):
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

const apiUrl = 'api/centrosanitarios';

// Actions

export const getEntities: ICrudGetAllAction<ICENTROSANITARIO> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_CENTROSANITARIO_LIST,
    payload: axios.get<ICENTROSANITARIO>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<ICENTROSANITARIO> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_CENTROSANITARIO,
    payload: axios.get<ICENTROSANITARIO>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ICENTROSANITARIO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_CENTROSANITARIO,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICENTROSANITARIO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_CENTROSANITARIO,
    payload: axios.put(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const partialUpdate: ICrudPutAction<ICENTROSANITARIO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.PARTIAL_UPDATE_CENTROSANITARIO,
    payload: axios.patch(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICENTROSANITARIO> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_CENTROSANITARIO,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
