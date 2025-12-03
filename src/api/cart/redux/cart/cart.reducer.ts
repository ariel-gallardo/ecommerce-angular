import { Action, createReducer, on } from '@ngrx/store';
import { CartActions as Actions } from './cart.actions';
import State from './cart.state';
import {Pagination} from '@api/cart/models/common/pagination.model';
import { BaseResponse } from '@api/cart/models/base-response.model';
import { Cart } from '@api/cart/models/cart.model';
import { ValidationError } from '@api/cart/models/validation-error.model';
import { DeleteRequest } from '@api/cart/services/cart.service'; 
import { FiltersFirstGetRequest } from '@api/cart/services/cart.service'; 
import { FiltersGetRequest } from '@api/cart/services/cart.service'; 
import { GetRequest } from '@api/cart/services/cart.service'; 
import { IdsGetRequest } from '@api/cart/services/cart.service'; 
import { PostRequest } from '@api/cart/services/cart.service'; 
import { PutRequest } from '@api/cart/services/cart.service'; 
import { RangeDeleteRequest } from '@api/cart/services/cart.service'; 
import { RangePostRequest } from '@api/cart/services/cart.service'; 
import { RangePutRequest } from '@api/cart/services/cart.service'; 
import { HttpHeaders } from '@angular/common/http';

const initialState = {
    Delete: {
        firstInit: true,
        hasError: false,
        isLoaded: false,
        errors: [],
        
        request: null,
    },
    FiltersFirstGet: {
        firstInit: true,
        hasError: false,
        isLoaded: false,
        errors: [],
        data:  {  } as Cart ,
        request: null,
    },
    FiltersGet: {
        firstInit: true,
        hasError: false,
        isLoaded: false,
        errors: [],
        data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart> ,
        request: null,
    },
    Get: {
        firstInit: true,
        hasError: false,
        isLoaded: false,
        errors: [],
        data:  {  } as Cart ,
        request: null,
    },
    IdsGet: {
        firstInit: true,
        hasError: false,
        isLoaded: false,
        errors: [],
        data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart> ,
        request: null,
    },
    Post: {
        firstInit: true,
        hasError: false,
        isLoaded: false,
        errors: [],
        data:  {  } as Cart ,
        request: null,
    },
    Put: {
        firstInit: true,
        hasError: false,
        isLoaded: false,
        errors: [],
        data:  {  } as Cart ,
        request: null,
    },
    RangeDelete: {
        firstInit: true,
        hasError: false,
        isLoaded: false,
        errors: [],
        
        request: null,
    },
    RangePost: {
        firstInit: true,
        hasError: false,
        isLoaded: false,
        errors: [],
        data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart> ,
        request: null,
    },
    RangePut: {
        firstInit: true,
        hasError: false,
        isLoaded: false,
        errors: [],
        data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart> ,
        request: null,
    },
} as State;

const reducer = createReducer<State>(
  initialState,
    // @ts-ignore
    on(Actions.DeleteInit, state => ({...state, Delete:{ ...state.Delete, firstInit: false, hasError: false, errors: [],  isLoaded: false, request: null} })),
    // @ts-ignore
    
    // @ts-ignore
    
    // @ts-ignore
    on(Actions.DeleteSetError, (state,{errors}) => ({ ...state, Delete: {...state.Delete, isLoaded: false, hasError: true }})),
    // @ts-ignore
    on(Actions.DeleteSuccess, (state) => ({ ...state, Delete: {...state.Delete, data: state?.Delete?.data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.DeleteRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Delete: {...state.Delete, ...state.Delete ,request: {...state.Delete.request, [key]:value} }})),
    // @ts-ignore
    on(Actions.DeleteRequestUpdateSuccess, (state, {request}) => ({ ...state, Delete: {...state.Delete, ...state.Delete ,request: request }})),
    // @ts-ignore
    on(Actions.FiltersFirstGetInit, state => ({...state, FiltersFirstGet:{ ...state.FiltersFirstGet, firstInit: false, hasError: false, errors: [],  isLoaded: false, data:  {  } as Cart  , request: null} })),
    // @ts-ignore
    on(Actions.FiltersFirstGetDataInit, state => ({...state, FiltersFirstGet:{ ...state.FiltersFirstGet, data: {  } as Cart}})),
    // @ts-ignore
    on(Actions.FiltersFirstGetSetData, (state, {data}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, data: data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.FiltersFirstGetSetError, (state,{errors}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, isLoaded: false, hasError: true,errors: errors, data: {  } as Cart  }})),
    // @ts-ignore
    on(Actions.FiltersFirstGetSuccess, (state) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, data: state?.FiltersFirstGet?.data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.FiltersFirstGetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, ...state.FiltersFirstGet ,request: {...state.FiltersFirstGet.request, [key]:value} }})),
    // @ts-ignore
    on(Actions.FiltersFirstGetRequestUpdateSuccess, (state, {request}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, ...state.FiltersFirstGet ,request: request }})),
    // @ts-ignore
    on(Actions.FiltersGetInit, state => ({...state, FiltersGet:{ ...state.FiltersGet, firstInit: false, hasError: false, errors: [],  isLoaded: false, data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart>  , request: null} })),
    // @ts-ignore
    on(Actions.FiltersGetDataInit, state => ({...state, FiltersGet:{ ...state.FiltersGet, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart>}})),
    // @ts-ignore
    on(Actions.FiltersGetSetData, (state, {data}) => ({ ...state, FiltersGet: {...state.FiltersGet, data: data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.FiltersGetSetError, (state,{errors}) => ({ ...state, FiltersGet: {...state.FiltersGet, isLoaded: false, hasError: true,errors: errors, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart>  }})),
    // @ts-ignore
    on(Actions.FiltersGetSuccess, (state) => ({ ...state, FiltersGet: {...state.FiltersGet, data: state?.FiltersGet?.data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.FiltersGetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, FiltersGet: {...state.FiltersGet, ...state.FiltersGet ,request: {...state.FiltersGet.request, [key]:value} }})),
    // @ts-ignore
    on(Actions.FiltersGetRequestUpdateSuccess, (state, {request}) => ({ ...state, FiltersGet: {...state.FiltersGet, ...state.FiltersGet ,request: request }})),
    // @ts-ignore
    on(Actions.GetInit, state => ({...state, Get:{ ...state.Get, firstInit: false, hasError: false, errors: [],  isLoaded: false, data:  {  } as Cart  , request: null} })),
    // @ts-ignore
    on(Actions.GetDataInit, state => ({...state, Get:{ ...state.Get, data: {  } as Cart}})),
    // @ts-ignore
    on(Actions.GetSetData, (state, {data}) => ({ ...state, Get: {...state.Get, data: data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.GetSetError, (state,{errors}) => ({ ...state, Get: {...state.Get, isLoaded: false, hasError: true,errors: errors, data: {  } as Cart  }})),
    // @ts-ignore
    on(Actions.GetSuccess, (state) => ({ ...state, Get: {...state.Get, data: state?.Get?.data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.GetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Get: {...state.Get, ...state.Get ,request: {...state.Get.request, [key]:value} }})),
    // @ts-ignore
    on(Actions.GetRequestUpdateSuccess, (state, {request}) => ({ ...state, Get: {...state.Get, ...state.Get ,request: request }})),
    // @ts-ignore
    on(Actions.IdsGetInit, state => ({...state, IdsGet:{ ...state.IdsGet, firstInit: false, hasError: false, errors: [],  isLoaded: false, data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart>  , request: null} })),
    // @ts-ignore
    on(Actions.IdsGetDataInit, state => ({...state, IdsGet:{ ...state.IdsGet, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart>}})),
    // @ts-ignore
    on(Actions.IdsGetSetData, (state, {data}) => ({ ...state, IdsGet: {...state.IdsGet, data: data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.IdsGetSetError, (state,{errors}) => ({ ...state, IdsGet: {...state.IdsGet, isLoaded: false, hasError: true,errors: errors, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart>  }})),
    // @ts-ignore
    on(Actions.IdsGetSuccess, (state) => ({ ...state, IdsGet: {...state.IdsGet, data: state?.IdsGet?.data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.IdsGetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, IdsGet: {...state.IdsGet, ...state.IdsGet ,request: {...state.IdsGet.request, [key]:value} }})),
    // @ts-ignore
    on(Actions.IdsGetRequestUpdateSuccess, (state, {request}) => ({ ...state, IdsGet: {...state.IdsGet, ...state.IdsGet ,request: request }})),
    // @ts-ignore
    on(Actions.PostInit, state => ({...state, Post:{ ...state.Post, firstInit: false, hasError: false, errors: [],  isLoaded: false, data:  {  } as Cart  , request: null} })),
    // @ts-ignore
    on(Actions.PostDataInit, state => ({...state, Post:{ ...state.Post, data: {  } as Cart}})),
    // @ts-ignore
    on(Actions.PostSetData, (state, {data}) => ({ ...state, Post: {...state.Post, data: data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.PostSetError, (state,{errors}) => ({ ...state, Post: {...state.Post, isLoaded: false, hasError: true,errors: errors, data: {  } as Cart  }})),
    // @ts-ignore
    on(Actions.PostSuccess, (state) => ({ ...state, Post: {...state.Post, data: state?.Post?.data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.PostRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Post: {...state.Post, ...state.Post ,request: {...state.Post.request, [key]:value} }})),
    // @ts-ignore
    on(Actions.PostRequestUpdateSuccess, (state, {request}) => ({ ...state, Post: {...state.Post, ...state.Post ,request: request }})),
    // @ts-ignore
    on(Actions.PutInit, state => ({...state, Put:{ ...state.Put, firstInit: false, hasError: false, errors: [],  isLoaded: false, data:  {  } as Cart  , request: null} })),
    // @ts-ignore
    on(Actions.PutDataInit, state => ({...state, Put:{ ...state.Put, data: {  } as Cart}})),
    // @ts-ignore
    on(Actions.PutSetData, (state, {data}) => ({ ...state, Put: {...state.Put, data: data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.PutSetError, (state,{errors}) => ({ ...state, Put: {...state.Put, isLoaded: false, hasError: true,errors: errors, data: {  } as Cart  }})),
    // @ts-ignore
    on(Actions.PutSuccess, (state) => ({ ...state, Put: {...state.Put, data: state?.Put?.data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.PutRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Put: {...state.Put, ...state.Put ,request: {...state.Put.request, [key]:value} }})),
    // @ts-ignore
    on(Actions.PutRequestUpdateSuccess, (state, {request}) => ({ ...state, Put: {...state.Put, ...state.Put ,request: request }})),
    // @ts-ignore
    on(Actions.RangeDeleteInit, state => ({...state, RangeDelete:{ ...state.RangeDelete, firstInit: false, hasError: false, errors: [],  isLoaded: false, request: null} })),
    // @ts-ignore
    
    // @ts-ignore
    
    // @ts-ignore
    on(Actions.RangeDeleteSetError, (state,{errors}) => ({ ...state, RangeDelete: {...state.RangeDelete, isLoaded: false, hasError: true }})),
    // @ts-ignore
    on(Actions.RangeDeleteSuccess, (state) => ({ ...state, RangeDelete: {...state.RangeDelete, data: state?.RangeDelete?.data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.RangeDeleteRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, RangeDelete: {...state.RangeDelete, ...state.RangeDelete ,request: {...state.RangeDelete.request, [key]:value} }})),
    // @ts-ignore
    on(Actions.RangeDeleteRequestUpdateSuccess, (state, {request}) => ({ ...state, RangeDelete: {...state.RangeDelete, ...state.RangeDelete ,request: request }})),
    // @ts-ignore
    on(Actions.RangePostInit, state => ({...state, RangePost:{ ...state.RangePost, firstInit: false, hasError: false, errors: [],  isLoaded: false, data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart>  , request: null} })),
    // @ts-ignore
    on(Actions.RangePostDataInit, state => ({...state, RangePost:{ ...state.RangePost, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart>}})),
    // @ts-ignore
    on(Actions.RangePostSetData, (state, {data}) => ({ ...state, RangePost: {...state.RangePost, data: data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.RangePostSetError, (state,{errors}) => ({ ...state, RangePost: {...state.RangePost, isLoaded: false, hasError: true,errors: errors, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart>  }})),
    // @ts-ignore
    on(Actions.RangePostSuccess, (state) => ({ ...state, RangePost: {...state.RangePost, data: state?.RangePost?.data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.RangePostRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, RangePost: {...state.RangePost, ...state.RangePost ,request: {...state.RangePost.request, [key]:value} }})),
    // @ts-ignore
    on(Actions.RangePostRequestUpdateSuccess, (state, {request}) => ({ ...state, RangePost: {...state.RangePost, ...state.RangePost ,request: request }})),
    // @ts-ignore
    on(Actions.RangePutInit, state => ({...state, RangePut:{ ...state.RangePut, firstInit: false, hasError: false, errors: [],  isLoaded: false, data:  { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart>  , request: null} })),
    // @ts-ignore
    on(Actions.RangePutDataInit, state => ({...state, RangePut:{ ...state.RangePut, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart>}})),
    // @ts-ignore
    on(Actions.RangePutSetData, (state, {data}) => ({ ...state, RangePut: {...state.RangePut, data: data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.RangePutSetError, (state,{errors}) => ({ ...state, RangePut: {...state.RangePut, isLoaded: false, hasError: true,errors: errors, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Cart>  }})),
    // @ts-ignore
    on(Actions.RangePutSuccess, (state) => ({ ...state, RangePut: {...state.RangePut, data: state?.RangePut?.data, isLoaded: true, hasError: false, errors: [] }})),
    // @ts-ignore
    on(Actions.RangePutRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, RangePut: {...state.RangePut, ...state.RangePut ,request: {...state.RangePut.request, [key]:value} }})),
    // @ts-ignore
    on(Actions.RangePutRequestUpdateSuccess, (state, {request}) => ({ ...state, RangePut: {...state.RangePut, ...state.RangePut ,request: request }})),
);

export default function currentReducer(
  state: State,
  action: Action
) {
  return reducer(state, action);
}