import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';

import { UsersActions as Actions } from './users.actions';
import {Pagination} from '../../models/common/pagination.model';
import State from './users.state';
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

import { BaseResponse } from '@api/security/models/base-response.model'; 
import { User } from '@api/security/models/user.model'; 
import { UserLogin } from '@api/security/models/user-login.model'; 
import { UserRegister } from '@api/security/models/user-register.model'; 
import { ValidationError } from '@api/security/models/validation-error.model'; 
import { DeleteRequest } from '@api/security/services/users.service'; 
import { FiltersFirstGetRequest } from '@api/security/services/users.service'; 
import { FiltersGetRequest } from '@api/security/services/users.service'; 
import { GetRequest } from '@api/security/services/users.service'; 
import { IdsGetRequest } from '@api/security/services/users.service'; 
import { LoginPostRequest } from '@api/security/services/users.service'; 
import { PostRequest } from '@api/security/services/users.service'; 
import { PutRequest } from '@api/security/services/users.service'; 
import { RangeDeleteRequest } from '@api/security/services/users.service'; 
import { RangePostRequest } from '@api/security/services/users.service'; 
import { RangePutRequest } from '@api/security/services/users.service'; 
import { RegisterPostRequest } from '@api/security/services/users.service'; 
import { selectDeleteRequest } from './users.selector';

import { selectDeleteHasError } from './users.selector';
import { selectDeleteErrors } from './users.selector';
import { selectDeleteLoaded } from './users.selector';
import { selectFiltersFirstGetRequest } from './users.selector';
import { selectFiltersFirstGetData } from './users.selector';
import { selectFiltersFirstGetHasError } from './users.selector';
import { selectFiltersFirstGetErrors } from './users.selector';
import { selectFiltersFirstGetLoaded } from './users.selector';
import { selectFiltersGetRequest } from './users.selector';
import { selectFiltersGetData } from './users.selector';
import { selectFiltersGetHasError } from './users.selector';
import { selectFiltersGetErrors } from './users.selector';
import { selectFiltersGetLoaded } from './users.selector';
import { selectGetRequest } from './users.selector';
import { selectGetData } from './users.selector';
import { selectGetHasError } from './users.selector';
import { selectGetErrors } from './users.selector';
import { selectGetLoaded } from './users.selector';
import { selectIdsGetRequest } from './users.selector';
import { selectIdsGetData } from './users.selector';
import { selectIdsGetHasError } from './users.selector';
import { selectIdsGetErrors } from './users.selector';
import { selectIdsGetLoaded } from './users.selector';
import { selectLoginPostRequest } from './users.selector';
import { selectLoginPostData } from './users.selector';
import { selectLoginPostHasError } from './users.selector';
import { selectLoginPostErrors } from './users.selector';
import { selectLoginPostLoaded } from './users.selector';
import { selectPostRequest } from './users.selector';
import { selectPostData } from './users.selector';
import { selectPostHasError } from './users.selector';
import { selectPostErrors } from './users.selector';
import { selectPostLoaded } from './users.selector';
import { selectPutRequest } from './users.selector';
import { selectPutData } from './users.selector';
import { selectPutHasError } from './users.selector';
import { selectPutErrors } from './users.selector';
import { selectPutLoaded } from './users.selector';
import { selectRangeDeleteRequest } from './users.selector';

import { selectRangeDeleteHasError } from './users.selector';
import { selectRangeDeleteErrors } from './users.selector';
import { selectRangeDeleteLoaded } from './users.selector';
import { selectRangePostRequest } from './users.selector';
import { selectRangePostData } from './users.selector';
import { selectRangePostHasError } from './users.selector';
import { selectRangePostErrors } from './users.selector';
import { selectRangePostLoaded } from './users.selector';
import { selectRangePutRequest } from './users.selector';
import { selectRangePutData } from './users.selector';
import { selectRangePutHasError } from './users.selector';
import { selectRangePutErrors } from './users.selector';
import { selectRangePutLoaded } from './users.selector';
import { selectRegisterPostRequest } from './users.selector';
import { selectRegisterPostData } from './users.selector';
import { selectRegisterPostHasError } from './users.selector';
import { selectRegisterPostErrors } from './users.selector';
import { selectRegisterPostLoaded } from './users.selector';
import { PageEvent } from '@angular/material/paginator';

@Injectable()
export class UsersFacade {
  constructor(private store: Store<{ Users: State }>) {}
  
  Init(){
    this.store.dispatch(Actions.Init());
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
  public get FiltersFirstGet$(): Observable<User> { return this.store.select(selectFiltersFirstGetData); }
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
  public get FiltersGet$(): Observable<Pagination<User>> { return this.store.select(selectFiltersGetData); }
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
  public get Get$(): Observable<User> { return this.store.select(selectGetData); }
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
  public get IdsGet$(): Observable<Pagination<User>> { return this.store.select(selectIdsGetData); }
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
  public get LoginPostIsLoaded$(): Observable<boolean> { return this.store.select(selectLoginPostLoaded).pipe(filter(x => x != null)); }
  public get LoginPost$(): Observable<string> { return this.store.select(selectLoginPostData); }
  public get LoginPostHasError$(): Observable<boolean> { return this.store.select(selectLoginPostHasError); }
  public get LoginPostErrors$(): Observable<ValidationError[][]> { return this.store.select(selectLoginPostErrors); }
  public get LoginPostRequest$(): Observable<LoginPostRequest> { return this.store.select(selectLoginPostRequest).pipe(filter(x => x !== null)); }
  public LoginPost(){
    this.store.dispatch(Actions.LoginPostExecute());
  }
  public LoginPostRequestUpdate(request: Partial<LoginPostRequest>){
    this.store.dispatch(Actions.LoginPostRequestUpdate({request}));
  }
  public LoginPostRequestUpdateOne(request: Partial<LoginPostRequest>){
    this.store.dispatch(Actions.LoginPostRequestUpdateOne({request}));
  }
  public LoginPostInit(){
    this.store.dispatch(Actions.LoginPostInit());
  }
  public get PostIsLoaded$(): Observable<boolean> { return this.store.select(selectPostLoaded).pipe(filter(x => x != null)); }
  public get Post$(): Observable<User> { return this.store.select(selectPostData); }
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
  public get Put$(): Observable<User> { return this.store.select(selectPutData); }
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
  public get RangePost$(): Observable<Pagination<User>> { return this.store.select(selectRangePostData); }
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
  public get RangePut$(): Observable<Pagination<User>> { return this.store.select(selectRangePutData); }
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
  public get RegisterPostIsLoaded$(): Observable<boolean> { return this.store.select(selectRegisterPostLoaded).pipe(filter(x => x != null)); }
  public get RegisterPost$(): Observable<User> { return this.store.select(selectRegisterPostData); }
  public get RegisterPostHasError$(): Observable<boolean> { return this.store.select(selectRegisterPostHasError); }
  public get RegisterPostErrors$(): Observable<ValidationError[][]> { return this.store.select(selectRegisterPostErrors); }
  public get RegisterPostRequest$(): Observable<RegisterPostRequest> { return this.store.select(selectRegisterPostRequest).pipe(filter(x => x !== null)); }
  public RegisterPost(){
    this.store.dispatch(Actions.RegisterPostExecute());
  }
  public RegisterPostRequestUpdate(request: Partial<RegisterPostRequest>){
    this.store.dispatch(Actions.RegisterPostRequestUpdate({request}));
  }
  public RegisterPostRequestUpdateOne(request: Partial<RegisterPostRequest>){
    this.store.dispatch(Actions.RegisterPostRequestUpdateOne({request}));
  }
  public RegisterPostInit(){
    this.store.dispatch(Actions.RegisterPostInit());
  }

}
