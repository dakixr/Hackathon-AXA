import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICUADROMEDICO, defaultValue } from 'app/shared/model/cuadromedico.model';

export const ACTION_TYPES = {
  FETCH_CUADROMEDICO_LIST: 'cUADROMEDICO/FETCH_CUADROMEDICO_LIST',
  FETCH_CUADROMEDICO: 'cUADROMEDICO/FETCH_CUADROMEDICO',
  CREATE_CUADROMEDICO: 'cUADROMEDICO/CREATE_CUADROMEDICO',
  UPDATE_CUADROMEDICO: 'cUADROMEDICO/UPDATE_CUADROMEDICO',
  PARTIAL_UPDATE_CUADROMEDICO: 'cUADROMEDICO/PARTIAL_UPDATE_CUADROMEDICO',
  DELETE_CUADROMEDICO: 'cUADROMEDICO/DELETE_CUADROMEDICO',
  RESET: 'cUADROMEDICO/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICUADROMEDICO>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type CUADROMEDICOState = Readonly<typeof initialState>;

// Reducer

export default (state: CUADROMEDICOState = initialState, action): CUADROMEDICOState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_CUADROMEDICO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_CUADROMEDICO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_CUADROMEDICO):
    case REQUEST(ACTION_TYPES.UPDATE_CUADROMEDICO):
    case REQUEST(ACTION_TYPES.DELETE_CUADROMEDICO):
    case REQUEST(ACTION_TYPES.PARTIAL_UPDATE_CUADROMEDICO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_CUADROMEDICO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_CUADROMEDICO):
    case FAILURE(ACTION_TYPES.CREATE_CUADROMEDICO):
    case FAILURE(ACTION_TYPES.UPDATE_CUADROMEDICO):
    case FAILURE(ACTION_TYPES.PARTIAL_UPDATE_CUADROMEDICO):
    case FAILURE(ACTION_TYPES.DELETE_CUADROMEDICO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CUADROMEDICO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_CUADROMEDICO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_CUADROMEDICO):
    case SUCCESS(ACTION_TYPES.UPDATE_CUADROMEDICO):
    case SUCCESS(ACTION_TYPES.PARTIAL_UPDATE_CUADROMEDICO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_CUADROMEDICO):
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

const apiUrl = 'api/cuadromedicos';

// Actions

export const getEntities: ICrudGetAllAction<ICUADROMEDICO> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_CUADROMEDICO_LIST,
    payload: axios.get<ICUADROMEDICO>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<ICUADROMEDICO> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_CUADROMEDICO,
    payload: axios.get<ICUADROMEDICO>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ICUADROMEDICO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_CUADROMEDICO,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICUADROMEDICO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_CUADROMEDICO,
    payload: axios.put(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const partialUpdate: ICrudPutAction<ICUADROMEDICO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.PARTIAL_UPDATE_CUADROMEDICO,
    payload: axios.patch(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICUADROMEDICO> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_CUADROMEDICO,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
