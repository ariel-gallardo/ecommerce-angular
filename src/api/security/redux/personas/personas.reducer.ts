import { Action, createReducer, on } from '@ngrx/store';
import { PersonasActions as Actions } from './personas.actions';
import State from './personas.state';
import {Pagination} from '@api/security/models/common/pagination.model';
import { BaseResponse } from '@api/security/models/base-response.model';
import { Persona } from '@api/security/models/persona.model';
import { ValidationError } from '@api/security/models/validation-error.model';
import { DeleteRequest } from '@api/security/services/personas.service'; 
import { FiltersFirstGetRequest } from '@api/security/services/personas.service'; 
import { FiltersGetRequest } from '@api/security/services/personas.service'; 
import { GetRequest } from '@api/security/services/personas.service'; 
import { IdsGetRequest } from '@api/security/services/personas.service'; 
import { PostRequest } from '@api/security/services/personas.service'; 
import { PutRequest } from '@api/security/services/personas.service'; 
import { RangeDeleteRequest } from '@api/security/services/personas.service'; 
import { RangePostRequest } from '@api/security/services/personas.service'; 
import { RangePutRequest } from '@api/security/services/personas.service'; 
import { HttpHeaders } from '@angular/common/http';

const initialState = {
    Delete: {
        firstInit: true,
        hasError: null,
        isLoaded: null,
        errors: [],
        data: null,
        request: null,
    },
    FiltersFirstGet: {
        firstInit: true,
        hasError: null,
        isLoaded: null,
        errors: [],
        data: null,
        request: null,
    },
    FiltersGet: {
        firstInit: true,
        hasError: null,
        isLoaded: null,
        errors: [],
        data: {page: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: []},
        request: null,
    },
    Get: {
        firstInit: true,
        hasError: null,
        isLoaded: null,
        errors: [],
        data: null,
        request: null,
    },
    IdsGet: {
        firstInit: true,
        hasError: null,
        isLoaded: null,
        errors: [],
        data: {page: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: []},
        request: null,
    },
    Post: {
        firstInit: true,
        hasError: null,
        isLoaded: null,
        errors: [],
        data: null,
        request: null,
    },
    Put: {
        firstInit: true,
        hasError: null,
        isLoaded: null,
        errors: [],
        data: null,
        request: null,
    },
    RangeDelete: {
        firstInit: true,
        hasError: null,
        isLoaded: null,
        errors: [],
        data: null,
        request: null,
    },
    RangePost: {
        firstInit: true,
        hasError: null,
        isLoaded: null,
        errors: [],
        data: {page: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: []},
        request: null,
    },
    RangePut: {
        firstInit: true,
        hasError: null,
        isLoaded: null,
        errors: [],
        data: {page: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: []},
        request: null,
    },
} as State;

const reducer = createReducer<State>(
  initialState,
    on(Actions.DeleteInit, state => ({...state, Delete:{ ...state.Delete, firstInit: false, hasError: null, errors: [], isLoaded: null, data: null   , request: null} })),
    on(Actions.DeleteDataInit, state => ({...state, Delete:{ ...state.Delete , data: null  } })),
    
    on(Actions.DeleteSetError, (state,{errors}) => ({ ...state, Delete: {...state.Delete, isLoaded: false, hasError: true,errors: errors  }})),
    on(Actions.DeleteSuccess, (state) => ({ ...state, Delete: {...state.Delete, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.DeleteRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Delete: {...state.Delete, request: {...state.Delete.request, [key]: value } }})),
    on(Actions.DeleteRequestUpdateSuccess, (state, {request}) => ({ ...state, Delete: {...state.Delete, request: request }})),
    on(Actions.FiltersFirstGetInit, state => ({...state, FiltersFirstGet:{ ...state.FiltersFirstGet, firstInit: false, hasError: null, errors: [], isLoaded: null, data: null   , request: null} })),
    on(Actions.FiltersFirstGetDataInit, state => ({...state, FiltersFirstGet:{ ...state.FiltersFirstGet , data: null  } })),
    on(Actions.FiltersFirstGetSetData, (state, {data}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, data: data, isLoaded: null, hasError: false, errors: [] }})),
    on(Actions.FiltersFirstGetSetError, (state,{errors}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, isLoaded: false, hasError: true,errors: errors  }})),
    on(Actions.FiltersFirstGetSuccess, (state) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.FiltersFirstGetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, request: {...state.FiltersFirstGet.request, [key]: value } }})),
    on(Actions.FiltersFirstGetRequestUpdateSuccess, (state, {request}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, request: request }})),
    on(Actions.FiltersGetInit, state => ({...state, FiltersGet:{ ...state.FiltersGet, firstInit: false, hasError: null, errors: [], isLoaded: null, data: {page: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: []}   , request: null} })),
    on(Actions.FiltersGetDataInit, state => ({...state, FiltersGet:{ ...state.FiltersGet , data: {page: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: []}  } })),
    on(Actions.FiltersGetSetData, (state, {data}) => ({ ...state, FiltersGet: {...state.FiltersGet, data: data, isLoaded: null, hasError: false, errors: [] }})),
    on(Actions.FiltersGetSetError, (state,{errors}) => ({ ...state, FiltersGet: {...state.FiltersGet, isLoaded: false, hasError: true,errors: errors  }})),
    on(Actions.FiltersGetSuccess, (state) => ({ ...state, FiltersGet: {...state.FiltersGet, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.FiltersGetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, FiltersGet: {...state.FiltersGet, request: {...state.FiltersGet.request, [key]: value } }})),
    on(Actions.FiltersGetRequestUpdateSuccess, (state, {request}) => ({ ...state, FiltersGet: {...state.FiltersGet, request: request }})),
    on(Actions.GetInit, state => ({...state, Get:{ ...state.Get, firstInit: false, hasError: null, errors: [], isLoaded: null, data: null   , request: null} })),
    on(Actions.GetDataInit, state => ({...state, Get:{ ...state.Get , data: null  } })),
    on(Actions.GetSetData, (state, {data}) => ({ ...state, Get: {...state.Get, data: data, isLoaded: null, hasError: false, errors: [] }})),
    on(Actions.GetSetError, (state,{errors}) => ({ ...state, Get: {...state.Get, isLoaded: false, hasError: true,errors: errors  }})),
    on(Actions.GetSuccess, (state) => ({ ...state, Get: {...state.Get, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.GetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Get: {...state.Get, request: {...state.Get.request, [key]: value } }})),
    on(Actions.GetRequestUpdateSuccess, (state, {request}) => ({ ...state, Get: {...state.Get, request: request }})),
    on(Actions.IdsGetInit, state => ({...state, IdsGet:{ ...state.IdsGet, firstInit: false, hasError: null, errors: [], isLoaded: null, data: {page: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: []}   , request: null} })),
    on(Actions.IdsGetDataInit, state => ({...state, IdsGet:{ ...state.IdsGet , data: {page: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: []}  } })),
    on(Actions.IdsGetSetData, (state, {data}) => ({ ...state, IdsGet: {...state.IdsGet, data: data, isLoaded: null, hasError: false, errors: [] }})),
    on(Actions.IdsGetSetError, (state,{errors}) => ({ ...state, IdsGet: {...state.IdsGet, isLoaded: false, hasError: true,errors: errors  }})),
    on(Actions.IdsGetSuccess, (state) => ({ ...state, IdsGet: {...state.IdsGet, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.IdsGetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, IdsGet: {...state.IdsGet, request: {...state.IdsGet.request, [key]: value } }})),
    on(Actions.IdsGetRequestUpdateSuccess, (state, {request}) => ({ ...state, IdsGet: {...state.IdsGet, request: request }})),
    on(Actions.PostInit, state => ({...state, Post:{ ...state.Post, firstInit: false, hasError: null, errors: [], isLoaded: null, data: null   , request: null} })),
    on(Actions.PostDataInit, state => ({...state, Post:{ ...state.Post , data: null  } })),
    on(Actions.PostSetData, (state, {data}) => ({ ...state, Post: {...state.Post, data: data, isLoaded: null, hasError: false, errors: [] }})),
    on(Actions.PostSetError, (state,{errors}) => ({ ...state, Post: {...state.Post, isLoaded: false, hasError: true,errors: errors  }})),
    on(Actions.PostSuccess, (state) => ({ ...state, Post: {...state.Post, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.PostRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Post: {...state.Post, request: {...state.Post.request, [key]: value } }})),
    on(Actions.PostRequestUpdateSuccess, (state, {request}) => ({ ...state, Post: {...state.Post, request: request }})),
    on(Actions.PutInit, state => ({...state, Put:{ ...state.Put, firstInit: false, hasError: null, errors: [], isLoaded: null, data: null   , request: null} })),
    on(Actions.PutDataInit, state => ({...state, Put:{ ...state.Put , data: null  } })),
    on(Actions.PutSetData, (state, {data}) => ({ ...state, Put: {...state.Put, data: data, isLoaded: null, hasError: false, errors: [] }})),
    on(Actions.PutSetError, (state,{errors}) => ({ ...state, Put: {...state.Put, isLoaded: false, hasError: true,errors: errors  }})),
    on(Actions.PutSuccess, (state) => ({ ...state, Put: {...state.Put, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.PutRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Put: {...state.Put, request: {...state.Put.request, [key]: value } }})),
    on(Actions.PutRequestUpdateSuccess, (state, {request}) => ({ ...state, Put: {...state.Put, request: request }})),
    on(Actions.RangeDeleteInit, state => ({...state, RangeDelete:{ ...state.RangeDelete, firstInit: false, hasError: null, errors: [], isLoaded: null, data: null   , request: null} })),
    on(Actions.RangeDeleteDataInit, state => ({...state, RangeDelete:{ ...state.RangeDelete , data: null  } })),
    
    on(Actions.RangeDeleteSetError, (state,{errors}) => ({ ...state, RangeDelete: {...state.RangeDelete, isLoaded: false, hasError: true,errors: errors  }})),
    on(Actions.RangeDeleteSuccess, (state) => ({ ...state, RangeDelete: {...state.RangeDelete, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.RangeDeleteRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, RangeDelete: {...state.RangeDelete, request: {...state.RangeDelete.request, [key]: value } }})),
    on(Actions.RangeDeleteRequestUpdateSuccess, (state, {request}) => ({ ...state, RangeDelete: {...state.RangeDelete, request: request }})),
    on(Actions.RangePostInit, state => ({...state, RangePost:{ ...state.RangePost, firstInit: false, hasError: null, errors: [], isLoaded: null, data: {page: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: []}   , request: null} })),
    on(Actions.RangePostDataInit, state => ({...state, RangePost:{ ...state.RangePost , data: {page: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: []}  } })),
    on(Actions.RangePostSetData, (state, {data}) => ({ ...state, RangePost: {...state.RangePost, data: data, isLoaded: null, hasError: false, errors: [] }})),
    on(Actions.RangePostSetError, (state,{errors}) => ({ ...state, RangePost: {...state.RangePost, isLoaded: false, hasError: true,errors: errors  }})),
    on(Actions.RangePostSuccess, (state) => ({ ...state, RangePost: {...state.RangePost, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.RangePostRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, RangePost: {...state.RangePost, request: {...state.RangePost.request, [key]: value } }})),
    on(Actions.RangePostRequestUpdateSuccess, (state, {request}) => ({ ...state, RangePost: {...state.RangePost, request: request }})),
    on(Actions.RangePutInit, state => ({...state, RangePut:{ ...state.RangePut, firstInit: false, hasError: null, errors: [], isLoaded: null, data: {page: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: []}   , request: null} })),
    on(Actions.RangePutDataInit, state => ({...state, RangePut:{ ...state.RangePut , data: {page: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: []}  } })),
    on(Actions.RangePutSetData, (state, {data}) => ({ ...state, RangePut: {...state.RangePut, data: data, isLoaded: null, hasError: false, errors: [] }})),
    on(Actions.RangePutSetError, (state,{errors}) => ({ ...state, RangePut: {...state.RangePut, isLoaded: false, hasError: true,errors: errors  }})),
    on(Actions.RangePutSuccess, (state) => ({ ...state, RangePut: {...state.RangePut, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.RangePutRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, RangePut: {...state.RangePut, request: {...state.RangePut.request, [key]: value } }})),
    on(Actions.RangePutRequestUpdateSuccess, (state, {request}) => ({ ...state, RangePut: {...state.RangePut, request: request }})),
);

export default function currentReducer(
  state: State,
  action: Action
) {
  return reducer(state, action);
}