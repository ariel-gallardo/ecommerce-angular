import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';

import { CartActions as Actions } from './cart.actions';
import {Pagination} from '../../models/common/pagination.model';
import State from './cart.state';
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

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
import { selectDeleteRequest } from './cart.selector';

import { selectDeleteHasError } from './cart.selector';
import { selectDeleteErrors } from './cart.selector';
import { selectDeleteLoaded } from './cart.selector';
import { selectFiltersFirstGetRequest } from './cart.selector';
import { selectFiltersFirstGetData } from './cart.selector';
import { selectFiltersFirstGetHasError } from './cart.selector';
import { selectFiltersFirstGetErrors } from './cart.selector';
import { selectFiltersFirstGetLoaded } from './cart.selector';
import { selectFiltersGetRequest } from './cart.selector';
import { selectFiltersGetData } from './cart.selector';
import { selectFiltersGetHasError } from './cart.selector';
import { selectFiltersGetErrors } from './cart.selector';
import { selectFiltersGetLoaded } from './cart.selector';
import { selectGetRequest } from './cart.selector';
import { selectGetData } from './cart.selector';
import { selectGetHasError } from './cart.selector';
import { selectGetErrors } from './cart.selector';
import { selectGetLoaded } from './cart.selector';
import { selectIdsGetRequest } from './cart.selector';
import { selectIdsGetData } from './cart.selector';
import { selectIdsGetHasError } from './cart.selector';
import { selectIdsGetErrors } from './cart.selector';
import { selectIdsGetLoaded } from './cart.selector';
import { selectPostRequest } from './cart.selector';
import { selectPostData } from './cart.selector';
import { selectPostHasError } from './cart.selector';
import { selectPostErrors } from './cart.selector';
import { selectPostLoaded } from './cart.selector';
import { selectPutRequest } from './cart.selector';
import { selectPutData } from './cart.selector';
import { selectPutHasError } from './cart.selector';
import { selectPutErrors } from './cart.selector';
import { selectPutLoaded } from './cart.selector';
import { selectRangeDeleteRequest } from './cart.selector';

import { selectRangeDeleteHasError } from './cart.selector';
import { selectRangeDeleteErrors } from './cart.selector';
import { selectRangeDeleteLoaded } from './cart.selector';
import { selectRangePostRequest } from './cart.selector';
import { selectRangePostData } from './cart.selector';
import { selectRangePostHasError } from './cart.selector';
import { selectRangePostErrors } from './cart.selector';
import { selectRangePostLoaded } from './cart.selector';
import { selectRangePutRequest } from './cart.selector';
import { selectRangePutData } from './cart.selector';
import { selectRangePutHasError } from './cart.selector';
import { selectRangePutErrors } from './cart.selector';
import { selectRangePutLoaded } from './cart.selector';
import { PageEvent } from '@angular/material/paginator';

@Injectable()
export class CartFacade {
  constructor(private store: Store<{ Cart: State }>) {}
  
  Init(){
    this.store.dispatch(Actions.Init());
  }

  public get DeleteIsLoaded$(): Observable<boolean> { return this.store.select(selectDeleteLoaded).pipe(filter(x => x != null)); }
  
  public get DeleteHasError$(): Observable<boolean> { return this.store.select(selectDeleteHasError).pipe(filter(x => x !== null)); }
  public get DeleteErrors$(): Observable<ValidationError[][]> { return this.store.select(selectDeleteErrors); }
  public get DeleteRequest$(): Observable<DeleteRequest> { return this.store.select(selectDeleteRequest).pipe(filter(x => x !== null)); }
  public Delete(){
    this.store.dispatch(Actions.DeleteExecute());
  }
  public DeleteRequestUpdate(request: Partial<DeleteRequest>){
    this.store.dispatch(Actions.DeleteRequestUpdate({request}));
  }
  public DeleteRequestUpdateOne(request: Partial<DeleteRequest>){
    this.store.dispatch(Actions.DeleteRequestUpdateOne({request}));
  }
  public DeleteInit(){
    this.store.dispatch(Actions.DeleteInit());
  }
  public get FiltersFirstGetIsLoaded$(): Observable<boolean> { return this.store.select(selectFiltersFirstGetLoaded).pipe(filter(x => x != null)); }
  public get FiltersFirstGet$(): Observable<Cart> { return this.store.select(selectFiltersFirstGetData).pipe(filter(x => x !== null)); }
  public get FiltersFirstGetHasError$(): Observable<boolean> { return this.store.select(selectFiltersFirstGetHasError).pipe(filter(x => x !== null)); }
  public get FiltersFirstGetErrors$(): Observable<ValidationError[][]> { return this.store.select(selectFiltersFirstGetErrors); }
  public get FiltersFirstGetRequest$(): Observable<FiltersFirstGetRequest> { return this.store.select(selectFiltersFirstGetRequest).pipe(filter(x => x !== null)); }
  public FiltersFirstGet(){
    this.store.dispatch(Actions.FiltersFirstGetExecute());
  }
  public FiltersFirstGetRequestUpdate(request: Partial<FiltersFirstGetRequest>){
    this.store.dispatch(Actions.FiltersFirstGetRequestUpdate({request}));
  }
  public FiltersFirstGetRequestUpdateOne(request: Partial<FiltersFirstGetRequest>){
    this.store.dispatch(Actions.FiltersFirstGetRequestUpdateOne({request}));
  }
  public FiltersFirstGetInit(){
    this.store.dispatch(Actions.FiltersFirstGetInit());
  }
  public get FiltersGetIsLoaded$(): Observable<boolean> { return this.store.select(selectFiltersGetLoaded).pipe(filter(x => x != null)); }
  public get FiltersGet$(): Observable<Pagination<Cart>> { return this.store.select(selectFiltersGetData).pipe(filter(x => x !== null)); }
  public get FiltersGetHasError$(): Observable<boolean> { return this.store.select(selectFiltersGetHasError).pipe(filter(x => x !== null)); }
  public get FiltersGetErrors$(): Observable<ValidationError[][]> { return this.store.select(selectFiltersGetErrors); }
  public get FiltersGetRequest$(): Observable<FiltersGetRequest> { return this.store.select(selectFiltersGetRequest).pipe(filter(x => x !== null)); }
  public FiltersGet(){
    this.store.dispatch(Actions.FiltersGetExecute());
  }
  public FiltersGetRequestUpdate(request: Partial<FiltersGetRequest>){
    this.store.dispatch(Actions.FiltersGetRequestUpdate({request}));
  }
  public FiltersGetRequestUpdateOne(request: Partial<FiltersGetRequest>){
    this.store.dispatch(Actions.FiltersGetRequestUpdateOne({request}));
  }
  
  public FiltersGetChangePage(event: PageEvent) {
    this.store.dispatch(Actions.FiltersGetChangePage({ event }));
  }
  public FiltersGetInit(){
    this.store.dispatch(Actions.FiltersGetInit());
  }
  public get GetIsLoaded$(): Observable<boolean> { return this.store.select(selectGetLoaded).pipe(filter(x => x != null)); }
  public get Get$(): Observable<Cart> { return this.store.select(selectGetData).pipe(filter(x => x !== null)); }
  public get GetHasError$(): Observable<boolean> { return this.store.select(selectGetHasError).pipe(filter(x => x !== null)); }
  public get GetErrors$(): Observable<ValidationError[][]> { return this.store.select(selectGetErrors); }
  public get GetRequest$(): Observable<GetRequest> { return this.store.select(selectGetRequest).pipe(filter(x => x !== null)); }
  public Get(){
    this.store.dispatch(Actions.GetExecute());
  }
  public GetRequestUpdate(request: Partial<GetRequest>){
    this.store.dispatch(Actions.GetRequestUpdate({request}));
  }
  public GetRequestUpdateOne(request: Partial<GetRequest>){
    this.store.dispatch(Actions.GetRequestUpdateOne({request}));
  }
  public GetInit(){
    this.store.dispatch(Actions.GetInit());
  }
  public get IdsGetIsLoaded$(): Observable<boolean> { return this.store.select(selectIdsGetLoaded).pipe(filter(x => x != null)); }
  public get IdsGet$(): Observable<Pagination<Cart>> { return this.store.select(selectIdsGetData).pipe(filter(x => x !== null)); }
  public get IdsGetHasError$(): Observable<boolean> { return this.store.select(selectIdsGetHasError).pipe(filter(x => x !== null)); }
  public get IdsGetErrors$(): Observable<ValidationError[][]> { return this.store.select(selectIdsGetErrors); }
  public get IdsGetRequest$(): Observable<IdsGetRequest> { return this.store.select(selectIdsGetRequest).pipe(filter(x => x !== null)); }
  public IdsGet(){
    this.store.dispatch(Actions.IdsGetExecute());
  }
  public IdsGetRequestUpdate(request: Partial<IdsGetRequest>){
    this.store.dispatch(Actions.IdsGetRequestUpdate({request}));
  }
  public IdsGetRequestUpdateOne(request: Partial<IdsGetRequest>){
    this.store.dispatch(Actions.IdsGetRequestUpdateOne({request}));
  }
  
  public IdsGetChangePage(event: PageEvent) {
    this.store.dispatch(Actions.IdsGetChangePage({ event }));
  }
  public IdsGetInit(){
    this.store.dispatch(Actions.IdsGetInit());
  }
  public get PostIsLoaded$(): Observable<boolean> { return this.store.select(selectPostLoaded).pipe(filter(x => x != null)); }
  public get Post$(): Observable<Cart> { return this.store.select(selectPostData).pipe(filter(x => x !== null)); }
  public get PostHasError$(): Observable<boolean> { return this.store.select(selectPostHasError).pipe(filter(x => x !== null)); }
  public get PostErrors$(): Observable<ValidationError[][]> { return this.store.select(selectPostErrors); }
  public get PostRequest$(): Observable<PostRequest> { return this.store.select(selectPostRequest).pipe(filter(x => x !== null)); }
  public Post(){
    this.store.dispatch(Actions.PostExecute());
  }
  public PostRequestUpdate(request: Partial<PostRequest>){
    this.store.dispatch(Actions.PostRequestUpdate({request}));
  }
  public PostRequestUpdateOne(request: Partial<PostRequest>){
    this.store.dispatch(Actions.PostRequestUpdateOne({request}));
  }
  public PostInit(){
    this.store.dispatch(Actions.PostInit());
  }
  public get PutIsLoaded$(): Observable<boolean> { return this.store.select(selectPutLoaded).pipe(filter(x => x != null)); }
  public get Put$(): Observable<Cart> { return this.store.select(selectPutData).pipe(filter(x => x !== null)); }
  public get PutHasError$(): Observable<boolean> { return this.store.select(selectPutHasError).pipe(filter(x => x !== null)); }
  public get PutErrors$(): Observable<ValidationError[][]> { return this.store.select(selectPutErrors); }
  public get PutRequest$(): Observable<PutRequest> { return this.store.select(selectPutRequest).pipe(filter(x => x !== null)); }
  public Put(){
    this.store.dispatch(Actions.PutExecute());
  }
  public PutRequestUpdate(request: Partial<PutRequest>){
    this.store.dispatch(Actions.PutRequestUpdate({request}));
  }
  public PutRequestUpdateOne(request: Partial<PutRequest>){
    this.store.dispatch(Actions.PutRequestUpdateOne({request}));
  }
  public PutInit(){
    this.store.dispatch(Actions.PutInit());
  }
  public get RangeDeleteIsLoaded$(): Observable<boolean> { return this.store.select(selectRangeDeleteLoaded).pipe(filter(x => x != null)); }
  
  public get RangeDeleteHasError$(): Observable<boolean> { return this.store.select(selectRangeDeleteHasError).pipe(filter(x => x !== null)); }
  public get RangeDeleteErrors$(): Observable<ValidationError[][]> { return this.store.select(selectRangeDeleteErrors); }
  public get RangeDeleteRequest$(): Observable<RangeDeleteRequest> { return this.store.select(selectRangeDeleteRequest).pipe(filter(x => x !== null)); }
  public RangeDelete(){
    this.store.dispatch(Actions.RangeDeleteExecute());
  }
  public RangeDeleteRequestUpdate(request: Partial<RangeDeleteRequest>){
    this.store.dispatch(Actions.RangeDeleteRequestUpdate({request}));
  }
  public RangeDeleteRequestUpdateOne(request: Partial<RangeDeleteRequest>){
    this.store.dispatch(Actions.RangeDeleteRequestUpdateOne({request}));
  }
  public RangeDeleteInit(){
    this.store.dispatch(Actions.RangeDeleteInit());
  }
  public get RangePostIsLoaded$(): Observable<boolean> { return this.store.select(selectRangePostLoaded).pipe(filter(x => x != null)); }
  public get RangePost$(): Observable<Pagination<Cart>> { return this.store.select(selectRangePostData).pipe(filter(x => x !== null)); }
  public get RangePostHasError$(): Observable<boolean> { return this.store.select(selectRangePostHasError).pipe(filter(x => x !== null)); }
  public get RangePostErrors$(): Observable<ValidationError[][]> { return this.store.select(selectRangePostErrors); }
  public get RangePostRequest$(): Observable<RangePostRequest> { return this.store.select(selectRangePostRequest).pipe(filter(x => x !== null)); }
  public RangePost(){
    this.store.dispatch(Actions.RangePostExecute());
  }
  public RangePostRequestUpdate(request: Partial<RangePostRequest>){
    this.store.dispatch(Actions.RangePostRequestUpdate({request}));
  }
  public RangePostRequestUpdateOne(request: Partial<RangePostRequest>){
    this.store.dispatch(Actions.RangePostRequestUpdateOne({request}));
  }
  
  public RangePostChangePage(event: PageEvent) {
    this.store.dispatch(Actions.RangePostChangePage({ event }));
  }
  public RangePostInit(){
    this.store.dispatch(Actions.RangePostInit());
  }
  public get RangePutIsLoaded$(): Observable<boolean> { return this.store.select(selectRangePutLoaded).pipe(filter(x => x != null)); }
  public get RangePut$(): Observable<Pagination<Cart>> { return this.store.select(selectRangePutData).pipe(filter(x => x !== null)); }
  public get RangePutHasError$(): Observable<boolean> { return this.store.select(selectRangePutHasError).pipe(filter(x => x !== null)); }
  public get RangePutErrors$(): Observable<ValidationError[][]> { return this.store.select(selectRangePutErrors); }
  public get RangePutRequest$(): Observable<RangePutRequest> { return this.store.select(selectRangePutRequest).pipe(filter(x => x !== null)); }
  public RangePut(){
    this.store.dispatch(Actions.RangePutExecute());
  }
  public RangePutRequestUpdate(request: Partial<RangePutRequest>){
    this.store.dispatch(Actions.RangePutRequestUpdate({request}));
  }
  public RangePutRequestUpdateOne(request: Partial<RangePutRequest>){
    this.store.dispatch(Actions.RangePutRequestUpdateOne({request}));
  }
  
  public RangePutChangePage(event: PageEvent) {
    this.store.dispatch(Actions.RangePutChangePage({ event }));
  }
  public RangePutInit(){
    this.store.dispatch(Actions.RangePutInit());
  }

}
