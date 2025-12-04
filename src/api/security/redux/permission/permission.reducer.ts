import { Action, createReducer, on } from '@ngrx/store';
import { PermissionActions as Actions } from './permission.actions';
import State from './permission.state';
import {Pagination} from '@api/security/models/common/pagination.model';
import { Permission } from '@api/security/models/permission.model';

const initialState = {
    CanAccessHead: {
        firstInit: true,
        hasError: false,
        isLoaded: null,
        errors: [],
        request: null,
    },
    Delete: {
        firstInit: true,
        hasError: false,
        isLoaded: null,
        errors: [],
        
        request: null,
    },
    FiltersFirstGet: {
        firstInit: true,
        hasError: false,
        isLoaded: null,
        errors: [],
        data:  {  } as Permission ,
        request: null,
    },
    FiltersGet: {
        firstInit: true,
        hasError: false,
        isLoaded: null,
        errors: [],
        data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission> ,
        request: null,
    },
    Get: {
        firstInit: true,
        hasError: false,
        isLoaded: null,
        errors: [],
        data:  {  } as Permission ,
        request: null,
    },
    IdsGet: {
        firstInit: true,
        hasError: false,
        isLoaded: null,
        errors: [],
        data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission> ,
        request: null,
    },
    Post: {
        firstInit: true,
        hasError: false,
        isLoaded: null,
        errors: [],
        data:  {  } as Permission ,
        request: null,
    },
    Put: {
        firstInit: true,
        hasError: false,
        isLoaded: null,
        errors: [],
        data:  {  } as Permission ,
        request: null,
    },
    RangeDelete: {
        firstInit: true,
        hasError: false,
        isLoaded: null,
        errors: [],
        
        request: null,
    },
    RangePost: {
        firstInit: true,
        hasError: false,
        isLoaded: null,
        errors: [],
        data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission> ,
        request: null,
    },
    RangePut: {
        firstInit: true,
        hasError: false,
        isLoaded: null,
        errors: [],
        data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission> ,
        request: null,
    },
} as State;

const reducer = createReducer<State>(
  initialState,

    on(Actions.CanAccessHeadInit, state => ({...state, CanAccessHead:{ ...state.CanAccessHead, firstInit: false, hasError: false, errors: [],  isLoaded: null , request: null} })),

    on(Actions.CanAccessHeadDataInit, state => ({...state, CanAccessHead:{ ...state.CanAccessHead, isLoaded: null, hasError: false, errors: []}})),

    on(Actions.CanAccessHeadSetData, (state) => ({ ...state, CanAccessHead: {...state.CanAccessHead, isLoaded: true, hasError: false, errors: [] }})),

    on(Actions.CanAccessHeadSetError, (state,{errors}) => ({ ...state, CanAccessHead: {...state.CanAccessHead, isLoaded: false, hasError: true,errors: errors  }})),

    on(Actions.CanAccessHeadSuccess, (state) => ({ ...state, CanAccessHead: {...state.CanAccessHead, isLoaded: true, hasError: false, errors: [] }})),

    on(Actions.CanAccessHeadRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, CanAccessHead: {...state.CanAccessHead,request: {...state.CanAccessHead.request, [key]:value} }})),
    
    on(Actions.CanAccessHeadRequestUpdateSuccess, (state, {request}) => ({ ...state, CanAccessHead: {...state.CanAccessHead,request: request }})),
    
    on(Actions.DeleteInit, state => ({...state, Delete:{ ...state.Delete, firstInit: false, hasError: false, errors: [],  isLoaded: null, request: null} })),
    
    
    
    
    
    on(Actions.DeleteSetError, (state,{errors}) => ({ ...state, Delete: {...state.Delete, isLoaded: false, hasError: true }})),
    
    on(Actions.DeleteSuccess, (state) => ({ ...state, Delete: {...state.Delete, isLoaded: true, hasError: false, errors: [] }})),
    
    on(Actions.DeleteRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Delete: {...state.Delete, ...state.Delete ,request: {...state.Delete.request, [key]:value} }})),
    
    on(Actions.DeleteRequestUpdateSuccess, (state, {request}) => ({ ...state, Delete: {...state.Delete, ...state.Delete ,request: request }})),
    
    on(Actions.FiltersFirstGetInit, state => ({...state, FiltersFirstGet:{ ...state.FiltersFirstGet, firstInit: false, hasError: false, errors: [],  isLoaded: null, data:  {  } as Permission  , request: null} })),
    
    on(Actions.FiltersFirstGetDataInit, state => ({...state, FiltersFirstGet:{ ...state.FiltersFirstGet, data: {  } as Permission}})),
    
    on(Actions.FiltersFirstGetSetData, (state, {data}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, data: data, isLoaded: null, hasError: false, errors: [] }})),
    
    on(Actions.FiltersFirstGetSetError, (state,{errors}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, isLoaded: false, hasError: true,errors: errors, data: {  } as Permission  }})),
    
    on(Actions.FiltersFirstGetSuccess, (state) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, data: state?.FiltersFirstGet?.data, isLoaded: true, hasError: false, errors: [] }})),
    
    on(Actions.FiltersFirstGetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, ...state.FiltersFirstGet ,request: {...state.FiltersFirstGet.request, [key]:value} }})),
    
    on(Actions.FiltersFirstGetRequestUpdateSuccess, (state, {request}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, ...state.FiltersFirstGet ,request: request }})),
    
    on(Actions.FiltersGetInit, state => ({...state, FiltersGet:{ ...state.FiltersGet, firstInit: false, hasError: false, errors: [],  isLoaded: null, data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission>  , request: null} })),
    
    on(Actions.FiltersGetDataInit, state => ({...state, FiltersGet:{ ...state.FiltersGet, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission>}})),
    
    on(Actions.FiltersGetSetData, (state, {data}) => ({ ...state, FiltersGet: {...state.FiltersGet, data: data, isLoaded: null, hasError: false, errors: [] }})),
    
    on(Actions.FiltersGetSetError, (state,{errors}) => ({ ...state, FiltersGet: {...state.FiltersGet, isLoaded: false, hasError: true,errors: errors, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission>  }})),
    
    on(Actions.FiltersGetSuccess, (state) => ({ ...state, FiltersGet: {...state.FiltersGet, data: state?.FiltersGet?.data, isLoaded: true, hasError: false, errors: [] }})),
    
    on(Actions.FiltersGetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, FiltersGet: {...state.FiltersGet, ...state.FiltersGet ,request: {...state.FiltersGet.request, [key]:value} }})),
    
    on(Actions.FiltersGetRequestUpdateSuccess, (state, {request}) => ({ ...state, FiltersGet: {...state.FiltersGet, ...state.FiltersGet ,request: request }})),
    
    on(Actions.GetInit, state => ({...state, Get:{ ...state.Get, firstInit: false, hasError: false, errors: [],  isLoaded: null, data:  {  } as Permission  , request: null} })),
    
    on(Actions.GetDataInit, state => ({...state, Get:{ ...state.Get, data: {  } as Permission}})),
    
    on(Actions.GetSetData, (state, {data}) => ({ ...state, Get: {...state.Get, data: data, isLoaded: null, hasError: false, errors: [] }})),
    
    on(Actions.GetSetError, (state,{errors}) => ({ ...state, Get: {...state.Get, isLoaded: false, hasError: true,errors: errors, data: {  } as Permission  }})),
    
    on(Actions.GetSuccess, (state) => ({ ...state, Get: {...state.Get, data: state?.Get?.data, isLoaded: true, hasError: false, errors: [] }})),
    
    on(Actions.GetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Get: {...state.Get, ...state.Get ,request: {...state.Get.request, [key]:value} }})),
    
    on(Actions.GetRequestUpdateSuccess, (state, {request}) => ({ ...state, Get: {...state.Get, ...state.Get ,request: request }})),
    
    on(Actions.IdsGetInit, state => ({...state, IdsGet:{ ...state.IdsGet, firstInit: false, hasError: false, errors: [],  isLoaded: null, data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission>  , request: null} })),
    
    on(Actions.IdsGetDataInit, state => ({...state, IdsGet:{ ...state.IdsGet, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission>}})),
    
    on(Actions.IdsGetSetData, (state, {data}) => ({ ...state, IdsGet: {...state.IdsGet, data: data, isLoaded: null, hasError: false, errors: [] }})),
    
    on(Actions.IdsGetSetError, (state,{errors}) => ({ ...state, IdsGet: {...state.IdsGet, isLoaded: false, hasError: true,errors: errors, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission>  }})),
    
    on(Actions.IdsGetSuccess, (state) => ({ ...state, IdsGet: {...state.IdsGet, data: state?.IdsGet?.data, isLoaded: true, hasError: false, errors: [] }})),
    
    on(Actions.IdsGetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, IdsGet: {...state.IdsGet, ...state.IdsGet ,request: {...state.IdsGet.request, [key]:value} }})),
    
    on(Actions.IdsGetRequestUpdateSuccess, (state, {request}) => ({ ...state, IdsGet: {...state.IdsGet, ...state.IdsGet ,request: request }})),
    
    on(Actions.PostInit, state => ({...state, Post:{ ...state.Post, firstInit: false, hasError: false, errors: [],  isLoaded: null, data:  {  } as Permission  , request: null} })),
    
    on(Actions.PostDataInit, state => ({...state, Post:{ ...state.Post, data: {  } as Permission}})),
    
    on(Actions.PostSetData, (state, {data}) => ({ ...state, Post: {...state.Post, data: data, isLoaded: null, hasError: false, errors: [] }})),
    
    on(Actions.PostSetError, (state,{errors}) => ({ ...state, Post: {...state.Post, isLoaded: false, hasError: true,errors: errors, data: {  } as Permission  }})),
    
    on(Actions.PostSuccess, (state) => ({ ...state, Post: {...state.Post, data: state?.Post?.data, isLoaded: true, hasError: false, errors: [] }})),
    
    on(Actions.PostRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Post: {...state.Post, ...state.Post ,request: {...state.Post.request, [key]:value} }})),
    
    on(Actions.PostRequestUpdateSuccess, (state, {request}) => ({ ...state, Post: {...state.Post, ...state.Post ,request: request }})),
    
    on(Actions.PutInit, state => ({...state, Put:{ ...state.Put, firstInit: false, hasError: false, errors: [],  isLoaded: null, data:  {  } as Permission  , request: null} })),
    
    on(Actions.PutDataInit, state => ({...state, Put:{ ...state.Put, data: {  } as Permission}})),
    
    on(Actions.PutSetData, (state, {data}) => ({ ...state, Put: {...state.Put, data: data, isLoaded: null, hasError: false, errors: [] }})),
    
    on(Actions.PutSetError, (state,{errors}) => ({ ...state, Put: {...state.Put, isLoaded: false, hasError: true,errors: errors, data: {  } as Permission  }})),
    
    on(Actions.PutSuccess, (state) => ({ ...state, Put: {...state.Put, data: state?.Put?.data, isLoaded: true, hasError: false, errors: [] }})),
    
    on(Actions.PutRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Put: {...state.Put, ...state.Put ,request: {...state.Put.request, [key]:value} }})),
    
    on(Actions.PutRequestUpdateSuccess, (state, {request}) => ({ ...state, Put: {...state.Put, ...state.Put ,request: request }})),
    
    on(Actions.RangeDeleteInit, state => ({...state, RangeDelete:{ ...state.RangeDelete, firstInit: false, hasError: false, errors: [],  isLoaded: null, request: null} })),
    
    
    
    
    
    on(Actions.RangeDeleteSetError, (state,{errors}) => ({ ...state, RangeDelete: {...state.RangeDelete, isLoaded: false, hasError: true }})),
    
    on(Actions.RangeDeleteSuccess, (state) => ({ ...state, RangeDelete: {...state.RangeDelete, isLoaded: true, hasError: false, errors: [] }})),
    
    on(Actions.RangeDeleteRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, RangeDelete: {...state.RangeDelete, ...state.RangeDelete ,request: {...state.RangeDelete.request, [key]:value} }})),
    
    on(Actions.RangeDeleteRequestUpdateSuccess, (state, {request}) => ({ ...state, RangeDelete: {...state.RangeDelete, ...state.RangeDelete ,request: request }})),
    
    on(Actions.RangePostInit, state => ({...state, RangePost:{ ...state.RangePost, firstInit: false, hasError: false, errors: [],  isLoaded: null, data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission>  , request: null} })),
    
    on(Actions.RangePostDataInit, state => ({...state, RangePost:{ ...state.RangePost, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission>}})),
    
    on(Actions.RangePostSetData, (state, {data}) => ({ ...state, RangePost: {...state.RangePost, data: data, isLoaded: null, hasError: false, errors: [] }})),
    
    on(Actions.RangePostSetError, (state,{errors}) => ({ ...state, RangePost: {...state.RangePost, isLoaded: false, hasError: true,errors: errors, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission>  }})),
    
    on(Actions.RangePostSuccess, (state) => ({ ...state, RangePost: {...state.RangePost, data: state?.RangePost?.data, isLoaded: true, hasError: false, errors: [] }})),
    
    on(Actions.RangePostRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, RangePost: {...state.RangePost, ...state.RangePost ,request: {...state.RangePost.request, [key]:value} }})),
    
    on(Actions.RangePostRequestUpdateSuccess, (state, {request}) => ({ ...state, RangePost: {...state.RangePost, ...state.RangePost ,request: request }})),
    
    on(Actions.RangePutInit, state => ({...state, RangePut:{ ...state.RangePut, firstInit: false, hasError: false, errors: [],  isLoaded: null, data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission>  , request: null} })),
    
    on(Actions.RangePutDataInit, state => ({...state, RangePut:{ ...state.RangePut, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission>}})),
    
    on(Actions.RangePutSetData, (state, {data}) => ({ ...state, RangePut: {...state.RangePut, data: data, isLoaded: null, hasError: false, errors: [] }})),
    
    on(Actions.RangePutSetError, (state,{errors}) => ({ ...state, RangePut: {...state.RangePut, isLoaded: false, hasError: true,errors: errors, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Permission>  }})),
    
    on(Actions.RangePutSuccess, (state) => ({ ...state, RangePut: {...state.RangePut, data: state?.RangePut?.data, isLoaded: true, hasError: false, errors: [] }})),
    
    on(Actions.RangePutRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, RangePut: {...state.RangePut, ...state.RangePut ,request: {...state.RangePut.request, [key]:value} }})),
    
    on(Actions.RangePutRequestUpdateSuccess, (state, {request}) => ({ ...state, RangePut: {...state.RangePut, ...state.RangePut ,request: request }})),
);

export default function currentReducer(
  state: State,
  action: Action
) {
  return reducer(state, action);
}