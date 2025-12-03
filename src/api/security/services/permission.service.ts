/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec
        }       from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

import {Response} from '@api/security/models/common/response.model';
import {Pagination} from '@api/security/models/common/pagination.model';
import { BaseResponse } from '@api/security/models/base-response.model';
import { Permission } from '@api/security/models/permission.model';
import { ValidationError } from '@api/security/models/validation-error.model';
import { PermissionReduxModule } from '@api/security/redux/permission/permission.module';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { ServiceConfiguration } from '../configuration';
import { BaseService } from './api.base.service';

export class CanAccessHeadRequest {
    xUrl?: string | undefined | null;
    constructor(init: Partial<CanAccessHeadRequest> = {}){
             this.xUrl = null;
            
        const keys = (Object.keys(init) as (keyof CanAccessHeadRequest)[])
        .filter(k => this[k] !== init[k]);
        if(keys.length > 0){
            keys.forEach(k => {
                //@ts-ignore
                this[k] = init[k];
            });
        }
    }   
}
export class DeleteRequest {
    entityId?: number | undefined | null;
    constructor(init: Partial<DeleteRequest> = {}){
             this.entityId = 0;
            
        const keys = (Object.keys(init) as (keyof DeleteRequest)[])
        .filter(k => this[k] !== init[k]);
        if(keys.length > 0){
            keys.forEach(k => {
                //@ts-ignore
                this[k] = init[k];
            });
        }
    }   
}
export class FiltersFirstGetRequest {
    controller?: string | undefined | null;
    action?: string | undefined | null;
    url?: string | undefined | null;
    orderBy?: string | undefined | null;
    constructor(init: Partial<FiltersFirstGetRequest> = {}){
             this.controller = null;
            
             this.action = null;
            
             this.url = null;
            
             this.orderBy = null;
            
        const keys = (Object.keys(init) as (keyof FiltersFirstGetRequest)[])
        .filter(k => this[k] !== init[k]);
        if(keys.length > 0){
            keys.forEach(k => {
                //@ts-ignore
                this[k] = init[k];
            });
        }
    }   
}
export class FiltersGetRequest {
    controller?: string | undefined | null;
    action?: string | undefined | null;
    url?: string | undefined | null;
    orderBy?: string | undefined | null;
    page?: number | undefined | null;
    pageSize?: number | undefined | null;
    constructor(init: Partial<FiltersGetRequest> = {}){
             this.controller = null;
            
             this.action = null;
            
             this.url = null;
            
             this.orderBy = null;
            
             this.page = null;
            
             this.pageSize = null;
            
        const keys = (Object.keys(init) as (keyof FiltersGetRequest)[])
        .filter(k => this[k] !== init[k]);
        if(keys.length > 0){
            keys.forEach(k => {
                //@ts-ignore
                this[k] = init[k];
            });
        }
    }   
}
export class GetRequest {
    entityId?: number | undefined | null;
    constructor(init: Partial<GetRequest> = {}){
             this.entityId = 0;
            
        const keys = (Object.keys(init) as (keyof GetRequest)[])
        .filter(k => this[k] !== init[k]);
        if(keys.length > 0){
            keys.forEach(k => {
                //@ts-ignore
                this[k] = init[k];
            });
        }
    }   
}
export class IdsGetRequest {
    entityIds?: number[] | undefined | null;
    page?: number | undefined | null;
    pageSize?: number | undefined | null;
    constructor(init: Partial<IdsGetRequest> = {}){
             this.entityIds = [];
            
             this.page = null;
            
             this.pageSize = null;
            
        const keys = (Object.keys(init) as (keyof IdsGetRequest)[])
        .filter(k => this[k] !== init[k]);
        if(keys.length > 0){
            keys.forEach(k => {
                //@ts-ignore
                this[k] = init[k];
            });
        }
    }   
}
export class PostRequest {
    permission?: Permission | undefined | null;
    constructor(init: Partial<PostRequest> = {}){
            
             this.permission = new Permission(); 
        const keys = (Object.keys(init) as (keyof PostRequest)[])
        .filter(k => this[k] !== init[k]);
        if(keys.length > 0){
            keys.forEach(k => {
                //@ts-ignore
                this[k] = init[k];
            });
        }
    }   
}
export class PutRequest {
    permission?: Permission | undefined | null;
    constructor(init: Partial<PutRequest> = {}){
            
             this.permission = new Permission(); 
        const keys = (Object.keys(init) as (keyof PutRequest)[])
        .filter(k => this[k] !== init[k]);
        if(keys.length > 0){
            keys.forEach(k => {
                //@ts-ignore
                this[k] = init[k];
            });
        }
    }   
}
export class RangeDeleteRequest {
    requestBody?: number[] | undefined | null;
    constructor(init: Partial<RangeDeleteRequest> = {}){
             this.requestBody = [];
            
        const keys = (Object.keys(init) as (keyof RangeDeleteRequest)[])
        .filter(k => this[k] !== init[k]);
        if(keys.length > 0){
            keys.forEach(k => {
                //@ts-ignore
                this[k] = init[k];
            });
        }
    }   
}
export class RangePostRequest {
    permission?: Permission[] | undefined | null;
    constructor(init: Partial<RangePostRequest> = {}){
             this.permission = [];
            
        const keys = (Object.keys(init) as (keyof RangePostRequest)[])
        .filter(k => this[k] !== init[k]);
        if(keys.length > 0){
            keys.forEach(k => {
                //@ts-ignore
                this[k] = init[k];
            });
        }
    }   
}
export class RangePutRequest {
    permission?: Permission[] | undefined | null;
    constructor(init: Partial<RangePutRequest> = {}){
             this.permission = [];
            
        const keys = (Object.keys(init) as (keyof RangePutRequest)[])
        .filter(k => this[k] !== init[k]);
        if(keys.length > 0){
            keys.forEach(k => {
                //@ts-ignore
                this[k] = init[k];
            });
        }
    }   
}


@Injectable()
export class PermissionService extends BaseService {

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string|string[], @Optional() configuration?: ServiceConfiguration) {
        super(basePath, configuration);
    }

    /**
     * @endpoint HEAD 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public CanAccessHead(requestParameters?: CanAccessHeadRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/plain' | 'text/json',}): Observable<BaseResponse>;
    public CanAccessHead(requestParameters?: CanAccessHeadRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/plain' | 'text/json',}): Observable<HttpResponse<BaseResponse>>;
    public CanAccessHead(requestParameters?: CanAccessHeadRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/plain' | 'text/json',}): Observable<HttpEvent<BaseResponse>>;
    public CanAccessHead(requestParameters?: CanAccessHeadRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/plain' | 'text/json',}): Observable<any> {
        const xUrl = requestParameters?.xUrl;

        let localVarHeaders = this.defaultHeaders;
        if (xUrl !== undefined && xUrl !== null) {
            localVarHeaders = localVarHeaders.set('X-Url', String(xUrl));
        }

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json',
            'text/plain',
            'text/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/security/Permission/can-access`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<BaseResponse>('HEAD', `${basePath}${localVarPath}`,
            {
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint DELETE 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Delete(requestParameters?: DeleteRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<BaseResponse>;
    public Delete(requestParameters?: DeleteRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<BaseResponse>>;
    public Delete(requestParameters?: DeleteRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<BaseResponse>>;
    public Delete(requestParameters?: DeleteRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const entityId = requestParameters?.entityId;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>entityId, 'entityId');

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/security/Permission`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<BaseResponse>('DELETE', `${basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint GET 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Permission>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Permission>>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Permission>>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const controller = requestParameters?.controller;
        const action = requestParameters?.action;
        const url = requestParameters?.url;
        const orderBy = requestParameters?.orderBy;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>controller, 'Controller');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>action, 'Action');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>url, 'Url');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>orderBy, 'OrderBy');

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/security/Permission/filters-first`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Permission>('GET', `${basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint GET 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Permission>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Permission>>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Permission>>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const controller = requestParameters?.controller;
        const action = requestParameters?.action;
        const url = requestParameters?.url;
        const orderBy = requestParameters?.orderBy;
        const page = requestParameters?.page;
        const pageSize = requestParameters?.pageSize;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>controller, 'Controller');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>action, 'Action');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>url, 'Url');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>orderBy, 'OrderBy');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>page, 'Page');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>pageSize, 'PageSize');

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/security/Permission/filters`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Permission[]>('GET', `${basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint GET 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Get(requestParameters?: GetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Permission>>;
    public Get(requestParameters?: GetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Permission>>>;
    public Get(requestParameters?: GetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Permission>>>;
    public Get(requestParameters?: GetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const entityId = requestParameters?.entityId;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>entityId, 'entityId');

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/security/Permission`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Permission>('GET', `${basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint GET 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Permission>>>;
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Permission>>>>;
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Permission>>>>;
    public IdsGet(requestParameters?: IdsGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const entityIds = requestParameters?.entityIds;
        const page = requestParameters?.page;
        const pageSize = requestParameters?.pageSize;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (entityIds) {
            entityIds.forEach((element) => {
                localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                  <any>element, 'entityIds');
            })
        }
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>page, 'page');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>pageSize, 'pageSize');

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/security/Permission/ids`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Permission[]>('GET', `${basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint POST 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Post(requestParameters: PostRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Permission>>;
    public Post(requestParameters: PostRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Permission>>>;
    public Post(requestParameters: PostRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Permission>>>;
    public Post(requestParameters: PostRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const permission = requestParameters?.permission;
        if (permission === null || permission === undefined) {
            throw new Error('Required parameter permission was null or undefined when calling securityPermissionPost.');
        }

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/security/Permission`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Permission>('POST', `${basePath}${localVarPath}`,
            {
                body: permission,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint PUT 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Put(requestParameters: PutRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Permission>>;
    public Put(requestParameters: PutRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Permission>>>;
    public Put(requestParameters: PutRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Permission>>>;
    public Put(requestParameters: PutRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const permission = requestParameters?.permission;
        if (permission === null || permission === undefined) {
            throw new Error('Required parameter permission was null or undefined when calling securityPermissionPut.');
        }

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/security/Permission`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Permission>('PUT', `${basePath}${localVarPath}`,
            {
                body: permission,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint DELETE 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public RangeDelete(requestParameters: RangeDeleteRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<BaseResponse>;
    public RangeDelete(requestParameters: RangeDeleteRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<BaseResponse>>;
    public RangeDelete(requestParameters: RangeDeleteRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<BaseResponse>>;
    public RangeDelete(requestParameters: RangeDeleteRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const requestBody = requestParameters?.requestBody;
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling securityPermissionRangeDelete.');
        }

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/security/Permission/range`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<BaseResponse>('DELETE', `${basePath}${localVarPath}`,
            {
                body: requestBody,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint POST 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public RangePost(requestParameters: RangePostRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Permission>>>;
    public RangePost(requestParameters: RangePostRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Permission>>>>;
    public RangePost(requestParameters: RangePostRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Permission>>>>;
    public RangePost(requestParameters: RangePostRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const permission = requestParameters?.permission;
        if (permission === null || permission === undefined) {
            throw new Error('Required parameter permission was null or undefined when calling securityPermissionRangePost.');
        }

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/security/Permission/range`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Permission[]>('POST', `${basePath}${localVarPath}`,
            {
                body: permission,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint PUT 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public RangePut(requestParameters: RangePutRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Permission>>>;
    public RangePut(requestParameters: RangePutRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Permission>>>>;
    public RangePut(requestParameters: RangePutRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Permission>>>>;
    public RangePut(requestParameters: RangePutRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const permission = requestParameters?.permission;
        if (permission === null || permission === undefined) {
            throw new Error('Required parameter permission was null or undefined when calling securityPermissionRangePut.');
        }

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/security/Permission/range`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Permission[]>('PUT', `${basePath}${localVarPath}`,
            {
                body: permission,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
