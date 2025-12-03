import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';

import { ProductActions as Actions } from './product.actions';
import {Pagination} from '../../models/common/pagination.model';
import State from './product.state';
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

import { BaseResponse } from '@api/product/models/base-response.model'; 
import { Product } from '@api/product/models/product.model'; 
import { ValidationError } from '@api/product/models/validation-error.model'; 
import { DeleteRequest } from '@api/product/services/product.service'; 
import { FiltersFirstGetRequest } from '@api/product/services/product.service'; 
import { FiltersGetRequest } from '@api/product/services/product.service'; 
import { GetRequest } from '@api/product/services/product.service'; 
import { IdsGetRequest } from '@api/product/services/product.service'; 
import { PostRequest } from '@api/product/services/product.service'; 
import { PutRequest } from '@api/product/services/product.service'; 
import { RangeDeleteRequest } from '@api/product/services/product.service'; 
import { RangePostRequest } from '@api/product/services/product.service'; 
import { RangePutRequest } from '@api/product/services/product.service'; 
import { selectDeleteRequest } from './product.selector';

import { selectDeleteHasError } from './product.selector';
import { selectDeleteErrors } from './product.selector';
import { selectDeleteLoaded } from './product.selector';
import { selectFiltersFirstGetRequest } from './product.selector';
import { selectFiltersFirstGetData } from './product.selector';
import { selectFiltersFirstGetHasError } from './product.selector';
import { selectFiltersFirstGetErrors } from './product.selector';
import { selectFiltersFirstGetLoaded } from './product.selector';
import { selectFiltersGetRequest } from './product.selector';
import { selectFiltersGetData } from './product.selector';
import { selectFiltersGetHasError } from './product.selector';
import { selectFiltersGetErrors } from './product.selector';
import { selectFiltersGetLoaded } from './product.selector';
import { selectGetRequest } from './product.selector';
import { selectGetData } from './product.selector';
import { selectGetHasError } from './product.selector';
import { selectGetErrors } from './product.selector';
import { selectGetLoaded } from './product.selector';
import { selectIdsGetRequest } from './product.selector';
import { selectIdsGetData } from './product.selector';
import { selectIdsGetHasError } from './product.selector';
import { selectIdsGetErrors } from './product.selector';
import { selectIdsGetLoaded } from './product.selector';
import { selectPostRequest } from './product.selector';
import { selectPostData } from './product.selector';
import { selectPostHasError } from './product.selector';
import { selectPostErrors } from './product.selector';
import { selectPostLoaded } from './product.selector';
import { selectPutRequest } from './product.selector';
import { selectPutData } from './product.selector';
import { selectPutHasError } from './product.selector';
import { selectPutErrors } from './product.selector';
import { selectPutLoaded } from './product.selector';
import { selectRangeDeleteRequest } from './product.selector';

import { selectRangeDeleteHasError } from './product.selector';
import { selectRangeDeleteErrors } from './product.selector';
import { selectRangeDeleteLoaded } from './product.selector';
import { selectRangePostRequest } from './product.selector';
import { selectRangePostData } from './product.selector';
import { selectRangePostHasError } from './product.selector';
import { selectRangePostErrors } from './product.selector';
import { selectRangePostLoaded } from './product.selector';
import { selectRangePutRequest } from './product.selector';
import { selectRangePutData } from './product.selector';
import { selectRangePutHasError } from './product.selector';
import { selectRangePutErrors } from './product.selector';
import { selectRangePutLoaded } from './product.selector';
import { PageEvent } from '@angular/material/paginator';

@Injectable()
export class ProductFacade {
  constructor(private store: Store<{ Product: State }>) {}
  
  Init(){
    this.store.dispatch(Actions.Init());
  }

  public get DeleteIsLoaded$(): Observable<boolean> { return this.store.select(selectDeleteLoaded); }
  
  public get DeleteHasError$(): Observable<boolean> { return this.store.select(selectDeleteHasError); }
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
  public get FiltersFirstGetIsLoaded$(): Observable<boolean> { return this.store.select(selectFiltersFirstGetLoaded); }
  public get FiltersFirstGet$(): Observable<Product> { return this.store.select(selectFiltersFirstGetData); }
  public get FiltersFirstGetHasError$(): Observable<boolean> { return this.store.select(selectFiltersFirstGetHasError); }
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
  public get FiltersGetIsLoaded$(): Observable<boolean> { return this.store.select(selectFiltersGetLoaded); }
  public get FiltersGet$(): Observable<Pagination<Product>> { return this.store.select(selectFiltersGetData); }
  public get FiltersGetHasError$(): Observable<boolean> { return this.store.select(selectFiltersGetHasError); }
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
  public get GetIsLoaded$(): Observable<boolean> { return this.store.select(selectGetLoaded); }
  public get Get$(): Observable<Product> { return this.store.select(selectGetData); }
  public get GetHasError$(): Observable<boolean> { return this.store.select(selectGetHasError); }
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
  public get IdsGetIsLoaded$(): Observable<boolean> { return this.store.select(selectIdsGetLoaded); }
  public get IdsGet$(): Observable<Pagination<Product>> { return this.store.select(selectIdsGetData); }
  public get IdsGetHasError$(): Observable<boolean> { return this.store.select(selectIdsGetHasError); }
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
  public get PostIsLoaded$(): Observable<boolean> { return this.store.select(selectPostLoaded); }
  public get Post$(): Observable<Product> { return this.store.select(selectPostData); }
  public get PostHasError$(): Observable<boolean> { return this.store.select(selectPostHasError); }
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
  public get PutIsLoaded$(): Observable<boolean> { return this.store.select(selectPutLoaded); }
  public get Put$(): Observable<Product> { return this.store.select(selectPutData); }
  public get PutHasError$(): Observable<boolean> { return this.store.select(selectPutHasError); }
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
  public get RangeDeleteIsLoaded$(): Observable<boolean> { return this.store.select(selectRangeDeleteLoaded); }
  
  public get RangeDeleteHasError$(): Observable<boolean> { return this.store.select(selectRangeDeleteHasError); }
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
  public get RangePostIsLoaded$(): Observable<boolean> { return this.store.select(selectRangePostLoaded); }
  public get RangePost$(): Observable<Pagination<Product>> { return this.store.select(selectRangePostData); }
  public get RangePostHasError$(): Observable<boolean> { return this.store.select(selectRangePostHasError); }
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
  public get RangePutIsLoaded$(): Observable<boolean> { return this.store.select(selectRangePutLoaded); }
  public get RangePut$(): Observable<Pagination<Product>> { return this.store.select(selectRangePutData); }
  public get RangePutHasError$(): Observable<boolean> { return this.store.select(selectRangePutHasError); }
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
