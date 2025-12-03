import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';

import { LogErrorActions as Actions } from './log-error.actions';
import {Pagination} from '../../models/common/pagination.model';
import State from './log-error.state';
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

import { BaseResponse } from '@api/logs/models/base-response.model'; 
import { LogError } from '@api/logs/models/log-error.model'; 
import { ValidationError } from '@api/logs/models/validation-error.model'; 
import { DeleteRequest } from '@api/logs/services/log-error.service'; 
import { FiltersFirstGetRequest } from '@api/logs/services/log-error.service'; 
import { FiltersGetRequest } from '@api/logs/services/log-error.service'; 
import { GetRequest } from '@api/logs/services/log-error.service'; 
import { IdsGetRequest } from '@api/logs/services/log-error.service'; 
import { PostRequest } from '@api/logs/services/log-error.service'; 
import { PutRequest } from '@api/logs/services/log-error.service'; 
import { RangeDeleteRequest } from '@api/logs/services/log-error.service'; 
import { RangePostRequest } from '@api/logs/services/log-error.service'; 
import { RangePutRequest } from '@api/logs/services/log-error.service'; 
import { selectDeleteRequest } from './log-error.selector';

import { selectDeleteHasError } from './log-error.selector';
import { selectDeleteErrors } from './log-error.selector';
import { selectDeleteLoaded } from './log-error.selector';
import { selectFiltersFirstGetRequest } from './log-error.selector';
import { selectFiltersFirstGetData } from './log-error.selector';
import { selectFiltersFirstGetHasError } from './log-error.selector';
import { selectFiltersFirstGetErrors } from './log-error.selector';
import { selectFiltersFirstGetLoaded } from './log-error.selector';
import { selectFiltersGetRequest } from './log-error.selector';
import { selectFiltersGetData } from './log-error.selector';
import { selectFiltersGetHasError } from './log-error.selector';
import { selectFiltersGetErrors } from './log-error.selector';
import { selectFiltersGetLoaded } from './log-error.selector';
import { selectGetRequest } from './log-error.selector';
import { selectGetData } from './log-error.selector';
import { selectGetHasError } from './log-error.selector';
import { selectGetErrors } from './log-error.selector';
import { selectGetLoaded } from './log-error.selector';
import { selectIdsGetRequest } from './log-error.selector';
import { selectIdsGetData } from './log-error.selector';
import { selectIdsGetHasError } from './log-error.selector';
import { selectIdsGetErrors } from './log-error.selector';
import { selectIdsGetLoaded } from './log-error.selector';
import { selectPostRequest } from './log-error.selector';
import { selectPostData } from './log-error.selector';
import { selectPostHasError } from './log-error.selector';
import { selectPostErrors } from './log-error.selector';
import { selectPostLoaded } from './log-error.selector';
import { selectPutRequest } from './log-error.selector';
import { selectPutData } from './log-error.selector';
import { selectPutHasError } from './log-error.selector';
import { selectPutErrors } from './log-error.selector';
import { selectPutLoaded } from './log-error.selector';
import { selectRangeDeleteRequest } from './log-error.selector';

import { selectRangeDeleteHasError } from './log-error.selector';
import { selectRangeDeleteErrors } from './log-error.selector';
import { selectRangeDeleteLoaded } from './log-error.selector';
import { selectRangePostRequest } from './log-error.selector';
import { selectRangePostData } from './log-error.selector';
import { selectRangePostHasError } from './log-error.selector';
import { selectRangePostErrors } from './log-error.selector';
import { selectRangePostLoaded } from './log-error.selector';
import { selectRangePutRequest } from './log-error.selector';
import { selectRangePutData } from './log-error.selector';
import { selectRangePutHasError } from './log-error.selector';
import { selectRangePutErrors } from './log-error.selector';
import { selectRangePutLoaded } from './log-error.selector';
import { PageEvent } from '@angular/material/paginator';

@Injectable()
export class LogErrorFacade {
  constructor(private store: Store<{ LogError: State }>) {}
  
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
  public get FiltersFirstGet$(): Observable<LogError> { return this.store.select(selectFiltersFirstGetData); }
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
  public get FiltersGet$(): Observable<Pagination<LogError>> { return this.store.select(selectFiltersGetData); }
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
  public get Get$(): Observable<LogError> { return this.store.select(selectGetData); }
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
  public get IdsGet$(): Observable<Pagination<LogError>> { return this.store.select(selectIdsGetData); }
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
  public get Post$(): Observable<LogError> { return this.store.select(selectPostData); }
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
  public get Put$(): Observable<LogError> { return this.store.select(selectPutData); }
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
  public get RangePost$(): Observable<Pagination<LogError>> { return this.store.select(selectRangePostData); }
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
  public get RangePut$(): Observable<Pagination<LogError>> { return this.store.select(selectRangePutData); }
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
