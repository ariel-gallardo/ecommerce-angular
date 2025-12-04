import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';

import { PermissionActions as Actions } from './permission.actions';
import {Pagination} from '../../models/common/pagination.model';
import State from './permission.state';
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

import { BaseResponse } from '@api/security/models/base-response.model'; 
import { Permission } from '@api/security/models/permission.model'; 
import { ValidationError } from '@api/security/models/validation-error.model'; 
import { CanAccessHeadRequest } from '@api/security/services/permission.service'; 
import { DeleteRequest } from '@api/security/services/permission.service'; 
import { FiltersFirstGetRequest } from '@api/security/services/permission.service'; 
import { FiltersGetRequest } from '@api/security/services/permission.service'; 
import { GetRequest } from '@api/security/services/permission.service'; 
import { IdsGetRequest } from '@api/security/services/permission.service'; 
import { PostRequest } from '@api/security/services/permission.service'; 
import { PutRequest } from '@api/security/services/permission.service'; 
import { RangeDeleteRequest } from '@api/security/services/permission.service'; 
import { RangePostRequest } from '@api/security/services/permission.service'; 
import { RangePutRequest } from '@api/security/services/permission.service'; 
import { selectCanAccessHeadRequest } from './permission.selector';
import { selectCanAccessHeadHasError } from './permission.selector';
import { selectCanAccessHeadErrors } from './permission.selector';
import { selectCanAccessHeadLoaded } from './permission.selector';
import { selectDeleteRequest } from './permission.selector';

import { selectDeleteHasError } from './permission.selector';
import { selectDeleteErrors } from './permission.selector';
import { selectDeleteLoaded } from './permission.selector';
import { selectFiltersFirstGetRequest } from './permission.selector';
import { selectFiltersFirstGetData } from './permission.selector';
import { selectFiltersFirstGetHasError } from './permission.selector';
import { selectFiltersFirstGetErrors } from './permission.selector';
import { selectFiltersFirstGetLoaded } from './permission.selector';
import { selectFiltersGetRequest } from './permission.selector';
import { selectFiltersGetData } from './permission.selector';
import { selectFiltersGetHasError } from './permission.selector';
import { selectFiltersGetErrors } from './permission.selector';
import { selectFiltersGetLoaded } from './permission.selector';
import { selectGetRequest } from './permission.selector';
import { selectGetData } from './permission.selector';
import { selectGetHasError } from './permission.selector';
import { selectGetErrors } from './permission.selector';
import { selectGetLoaded } from './permission.selector';
import { selectIdsGetRequest } from './permission.selector';
import { selectIdsGetData } from './permission.selector';
import { selectIdsGetHasError } from './permission.selector';
import { selectIdsGetErrors } from './permission.selector';
import { selectIdsGetLoaded } from './permission.selector';
import { selectPostRequest } from './permission.selector';
import { selectPostData } from './permission.selector';
import { selectPostHasError } from './permission.selector';
import { selectPostErrors } from './permission.selector';
import { selectPostLoaded } from './permission.selector';
import { selectPutRequest } from './permission.selector';
import { selectPutData } from './permission.selector';
import { selectPutHasError } from './permission.selector';
import { selectPutErrors } from './permission.selector';
import { selectPutLoaded } from './permission.selector';
import { selectRangeDeleteRequest } from './permission.selector';

import { selectRangeDeleteHasError } from './permission.selector';
import { selectRangeDeleteErrors } from './permission.selector';
import { selectRangeDeleteLoaded } from './permission.selector';
import { selectRangePostRequest } from './permission.selector';
import { selectRangePostData } from './permission.selector';
import { selectRangePostHasError } from './permission.selector';
import { selectRangePostErrors } from './permission.selector';
import { selectRangePostLoaded } from './permission.selector';
import { selectRangePutRequest } from './permission.selector';
import { selectRangePutData } from './permission.selector';
import { selectRangePutHasError } from './permission.selector';
import { selectRangePutErrors } from './permission.selector';
import { selectRangePutLoaded } from './permission.selector';
import { PageEvent } from '@angular/material/paginator';

@Injectable()
export class PermissionFacade {
  constructor(private store: Store<{ Permission: State }>) {}
  
  Init(){
    this.store.dispatch(Actions.Init());
  }

  public get CanAccessHeadIsLoaded$(): Observable<boolean> { return this.store.select(selectCanAccessHeadLoaded).pipe(filter(x => x != null)); }
  public get CanAccessHeadHasError$(): Observable<boolean> { return this.store.select(selectCanAccessHeadHasError); }
  public get CanAccessHeadErrors$(): Observable<ValidationError[][]> { return this.store.select(selectCanAccessHeadErrors); }
  public get CanAccessHeadRequest$(): Observable<CanAccessHeadRequest> { return this.store.select(selectCanAccessHeadRequest).pipe(filter(x => x !== null)); }
  public CanAccessHead(){
    this.store.dispatch(Actions.CanAccessHeadExecute());
  }
  public CanAccessHeadRequestUpdate(request: Partial<CanAccessHeadRequest>){
    this.store.dispatch(Actions.CanAccessHeadRequestUpdate({request}));
  }
  public CanAccessHeadRequestUpdateOne(request: Partial<CanAccessHeadRequest>){
    this.store.dispatch(Actions.CanAccessHeadRequestUpdateOne({request}));
  }
  public CanAccessHeadInit(){
    this.store.dispatch(Actions.CanAccessHeadInit());
  }
  public get DeleteIsLoaded$(): Observable<boolean> { return this.store.select(selectDeleteLoaded).pipe(filter(x => x != null)); }
  
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
  public get FiltersFirstGetIsLoaded$(): Observable<boolean> { return this.store.select(selectFiltersFirstGetLoaded).pipe(filter(x => x != null)); }
  public get FiltersFirstGet$(): Observable<Permission> { return this.store.select(selectFiltersFirstGetData); }
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
  public get FiltersGetIsLoaded$(): Observable<boolean> { return this.store.select(selectFiltersGetLoaded).pipe(filter(x => x != null)); }
  public get FiltersGet$(): Observable<Pagination<Permission>> { return this.store.select(selectFiltersGetData); }
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
  public get GetIsLoaded$(): Observable<boolean> { return this.store.select(selectGetLoaded).pipe(filter(x => x != null)); }
  public get Get$(): Observable<Permission> { return this.store.select(selectGetData); }
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
  public get IdsGetIsLoaded$(): Observable<boolean> { return this.store.select(selectIdsGetLoaded).pipe(filter(x => x != null)); }
  public get IdsGet$(): Observable<Pagination<Permission>> { return this.store.select(selectIdsGetData); }
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
  public get PostIsLoaded$(): Observable<boolean> { return this.store.select(selectPostLoaded).pipe(filter(x => x != null)); }
  public get Post$(): Observable<Permission> { return this.store.select(selectPostData); }
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
  public get PutIsLoaded$(): Observable<boolean> { return this.store.select(selectPutLoaded).pipe(filter(x => x != null)); }
  public get Put$(): Observable<Permission> { return this.store.select(selectPutData); }
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
  public get RangeDeleteIsLoaded$(): Observable<boolean> { return this.store.select(selectRangeDeleteLoaded).pipe(filter(x => x != null)); }
  
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
  public get RangePostIsLoaded$(): Observable<boolean> { return this.store.select(selectRangePostLoaded).pipe(filter(x => x != null)); }
  public get RangePost$(): Observable<Pagination<Permission>> { return this.store.select(selectRangePostData); }
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
  public get RangePutIsLoaded$(): Observable<boolean> { return this.store.select(selectRangePutLoaded).pipe(filter(x => x != null)); }
  public get RangePut$(): Observable<Pagination<Permission>> { return this.store.select(selectRangePutData); }
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
