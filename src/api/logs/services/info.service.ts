/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpParams,
         HttpResponse, HttpEvent        }       from '@angular/common/http';
import { Observable } from 'rxjs';
import {cleanObject} from '@api/logs/utils/clean-object';
import {Response} from '@api/logs/models/common/response.model';
import {Pagination} from '@api/logs/models/common/pagination.model';
import { BaseResponse } from '@api/logs/models/base-response.model';
import { Log } from '@api/logs/models/log.model';
// @ts-ignore
import { BASE_PATH } from '../variables';
import { ServiceConfiguration } from '../configuration';
import { BaseService } from './api.base.service';

export class DeleteRequest {
    entityId?: string | undefined | null;
    constructor(init: Partial<DeleteRequest> = {}){
             this.entityId = '';
            
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
    serviceName?: string | undefined | null;
    traceId?: string | undefined | null;
    errorId?: string | undefined | null;
    id?: string | undefined | null;
    takeAll?: Boolean | undefined | null;
    orderBy?: string | undefined | null;
    constructor(init: Partial<FiltersFirstGetRequest> = {}){
             this.serviceName = '';
            
             this.traceId = '';
            
             this.errorId = '';
            
             this.id = '';
            
             this.takeAll = new Boolean();
            
             this.orderBy = '';
            
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
    serviceName?: string | undefined | null;
    traceId?: string | undefined | null;
    errorId?: string | undefined | null;
    id?: string | undefined | null;
    takeAll?: Boolean | undefined | null;
    orderBy?: string | undefined | null;
    page?: number | undefined | null;
    pageSize?: number | undefined | null;
    constructor(init: Partial<FiltersGetRequest> = {}){
             this.serviceName = '';
            
             this.traceId = '';
            
             this.errorId = '';
            
             this.id = '';
            
             this.takeAll = new Boolean();
            
             this.orderBy = '';
            
             this.page = 0;
            
             this.pageSize = 0;
            
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
    entityId?: string | undefined | null;
    constructor(init: Partial<GetRequest> = {}){
             this.entityId = '';
            
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
    entityIds?: string[] | undefined | null;
    page?: number | undefined | null;
    pageSize?: number | undefined | null;
    constructor(init: Partial<IdsGetRequest> = {}){
             this.entityIds = [];
            
             this.page = 0;
            
             this.pageSize = 0;
            
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
    log?: Log | undefined | null;
    constructor(init: Partial<PostRequest> = {}){
            
             this.log = new Log(); 
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
    log?: Log | undefined | null;
    constructor(init: Partial<PutRequest> = {}){
            
             this.log = new Log(); 
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
    requestBody?: string[] | undefined | null;
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
    log?: Log[] | undefined | null;
    constructor(init: Partial<RangePostRequest> = {}){
             this.log = [];
            
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
    log?: Log[] | undefined | null;
    constructor(init: Partial<RangePutRequest> = {}){
             this.log = [];
            
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
export class InfoService extends BaseService {

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string|string[], @Optional() configuration?: ServiceConfiguration) {
        super(basePath, configuration);
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
        let entityId = requestParameters?.entityId;
        entityId = cleanObject(entityId);

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

        let localVarPath = `/logs/Info`;
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
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Log>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Log>>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Log>>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        let serviceName = requestParameters?.serviceName;
        serviceName = cleanObject(serviceName);
        let traceId = requestParameters?.traceId;
        traceId = cleanObject(traceId);
        let errorId = requestParameters?.errorId;
        errorId = cleanObject(errorId);
        let id = requestParameters?.id;
        id = cleanObject(id);
        let takeAll = requestParameters?.takeAll;
        takeAll = cleanObject(takeAll);
        let orderBy = requestParameters?.orderBy;
        orderBy = cleanObject(orderBy);

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>serviceName, 'ServiceName');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>traceId, 'TraceId');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>errorId, 'ErrorId');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>id, 'Id');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>takeAll, 'TakeAll');
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

        let localVarPath = `/logs/Info/filters-first`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Log>('GET', `${basePath}${localVarPath}`,
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
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Log>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Log>>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Log>>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        let serviceName = requestParameters?.serviceName;
        serviceName = cleanObject(serviceName);
        let traceId = requestParameters?.traceId;
        traceId = cleanObject(traceId);
        let errorId = requestParameters?.errorId;
        errorId = cleanObject(errorId);
        let id = requestParameters?.id;
        id = cleanObject(id);
        let takeAll = requestParameters?.takeAll;
        takeAll = cleanObject(takeAll);
        let orderBy = requestParameters?.orderBy;
        orderBy = cleanObject(orderBy);
        let page = requestParameters?.page;
        page = cleanObject(page);
        let pageSize = requestParameters?.pageSize;
        pageSize = cleanObject(pageSize);

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>serviceName, 'ServiceName');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>traceId, 'TraceId');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>errorId, 'ErrorId');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>id, 'Id');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>takeAll, 'TakeAll');
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

        let localVarPath = `/logs/Info/filters`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Pagination<Log>>('GET', `${basePath}${localVarPath}`,
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
    public Get(requestParameters?: GetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Log>>;
    public Get(requestParameters?: GetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Log>>>;
    public Get(requestParameters?: GetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Log>>>;
    public Get(requestParameters?: GetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        let entityId = requestParameters?.entityId;
        entityId = cleanObject(entityId);

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

        let localVarPath = `/logs/Info`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Log>('GET', `${basePath}${localVarPath}`,
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
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Log>>>;
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Log>>>>;
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Log>>>>;
    public IdsGet(requestParameters?: IdsGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        let entityIds = requestParameters?.entityIds;
        entityIds = cleanObject(entityIds);
        let page = requestParameters?.page;
        page = cleanObject(page);
        let pageSize = requestParameters?.pageSize;
        pageSize = cleanObject(pageSize);

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

        let localVarPath = `/logs/Info/ids`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Pagination<Log>>('GET', `${basePath}${localVarPath}`,
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
    public Post(requestParameters: PostRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Log>>;
    public Post(requestParameters: PostRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Log>>>;
    public Post(requestParameters: PostRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Log>>>;
    public Post(requestParameters: PostRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        let log = requestParameters?.log;
        log = cleanObject(log);
        if (log === null || log === undefined) {
            throw new Error('Required parameter log was null or undefined when calling logsInfoPost.');
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
            'application/json-patch+json',
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

        let localVarPath = `/logs/Info`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Log>('POST', `${basePath}${localVarPath}`,
            {
                body: log,
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
    public Put(requestParameters: PutRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Log>>;
    public Put(requestParameters: PutRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Log>>>;
    public Put(requestParameters: PutRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Log>>>;
    public Put(requestParameters: PutRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        let log = requestParameters?.log;
        log = cleanObject(log);
        if (log === null || log === undefined) {
            throw new Error('Required parameter log was null or undefined when calling logsInfoPut.');
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
            'application/json-patch+json',
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

        let localVarPath = `/logs/Info`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Log>('PUT', `${basePath}${localVarPath}`,
            {
                body: log,
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
        let requestBody = requestParameters?.requestBody;
        requestBody = cleanObject(requestBody);
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling logsInfoRangeDelete.');
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
            'application/json-patch+json',
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

        let localVarPath = `/logs/Info/range`;
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
    public RangePost(requestParameters: RangePostRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Log>>>;
    public RangePost(requestParameters: RangePostRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Log>>>>;
    public RangePost(requestParameters: RangePostRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Log>>>>;
    public RangePost(requestParameters: RangePostRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        let log = requestParameters?.log;
        log = cleanObject(log);
        if (log === null || log === undefined) {
            throw new Error('Required parameter log was null or undefined when calling logsInfoRangePost.');
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
            'application/json-patch+json',
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

        let localVarPath = `/logs/Info/range`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Pagination<Log>>('POST', `${basePath}${localVarPath}`,
            {
                body: log,
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
    public RangePut(requestParameters: RangePutRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Log>>>;
    public RangePut(requestParameters: RangePutRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Log>>>>;
    public RangePut(requestParameters: RangePutRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Log>>>>;
    public RangePut(requestParameters: RangePutRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        let log = requestParameters?.log;
        log = cleanObject(log);
        if (log === null || log === undefined) {
            throw new Error('Required parameter log was null or undefined when calling logsInfoRangePut.');
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
            'application/json-patch+json',
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

        let localVarPath = `/logs/Info/range`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Pagination<Log>>('PUT', `${basePath}${localVarPath}`,
            {
                body: log,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
