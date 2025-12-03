/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec
        }       from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

import {Response} from '@api/product/models/common/response.model';
import {Pagination} from '@api/product/models/common/pagination.model';
import { BaseResponse } from '@api/product/models/base-response.model';
import { Category } from '@api/product/models/category.model';
import { ValidationError } from '@api/product/models/validation-error.model';
import { CategoryReduxModule } from '@api/product/redux/category/category.module';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { ServiceConfiguration } from '../configuration';
import { BaseService } from './api.base.service';

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
    name?: string | undefined | null;
    description?: string | undefined | null;
    orderBy?: string | undefined | null;
    constructor(init: Partial<FiltersFirstGetRequest> = {}){
             this.name = null;
            
             this.description = null;
            
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
    name?: string | undefined | null;
    description?: string | undefined | null;
    orderBy?: string | undefined | null;
    page?: number | undefined | null;
    pageSize?: number | undefined | null;
    constructor(init: Partial<FiltersGetRequest> = {}){
             this.name = null;
            
             this.description = null;
            
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
    category?: Category | undefined | null;
    constructor(init: Partial<PostRequest> = {}){
            
             this.category = new Category(); 
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
    category?: Category | undefined | null;
    constructor(init: Partial<PutRequest> = {}){
            
             this.category = new Category(); 
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
    category?: Category[] | undefined | null;
    constructor(init: Partial<RangePostRequest> = {}){
             this.category = [];
            
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
    category?: Category[] | undefined | null;
    constructor(init: Partial<RangePutRequest> = {}){
             this.category = [];
            
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
export class CategoryService extends BaseService {

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

        let localVarPath = `/product/Category`;
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
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Category>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Category>>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Category>>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const name = requestParameters?.name;
        const description = requestParameters?.description;
        const orderBy = requestParameters?.orderBy;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>name, 'Name');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>description, 'Description');
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

        let localVarPath = `/product/Category/filters-first`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Category>('GET', `${basePath}${localVarPath}`,
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
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Category>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Category>>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Category>>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const name = requestParameters?.name;
        const description = requestParameters?.description;
        const orderBy = requestParameters?.orderBy;
        const page = requestParameters?.page;
        const pageSize = requestParameters?.pageSize;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>name, 'Name');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>description, 'Description');
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

        let localVarPath = `/product/Category/filters`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Category[]>('GET', `${basePath}${localVarPath}`,
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
    public Get(requestParameters?: GetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Category>>;
    public Get(requestParameters?: GetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Category>>>;
    public Get(requestParameters?: GetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Category>>>;
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

        let localVarPath = `/product/Category`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Category>('GET', `${basePath}${localVarPath}`,
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
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Category>>>;
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Category>>>>;
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Category>>>>;
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

        let localVarPath = `/product/Category/ids`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Category[]>('GET', `${basePath}${localVarPath}`,
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
    public Post(requestParameters: PostRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Category>>;
    public Post(requestParameters: PostRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Category>>>;
    public Post(requestParameters: PostRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Category>>>;
    public Post(requestParameters: PostRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const category = requestParameters?.category;
        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling productCategoryPost.');
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

        let localVarPath = `/product/Category`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Category>('POST', `${basePath}${localVarPath}`,
            {
                body: category,
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
    public Put(requestParameters: PutRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Category>>;
    public Put(requestParameters: PutRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Category>>>;
    public Put(requestParameters: PutRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Category>>>;
    public Put(requestParameters: PutRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const category = requestParameters?.category;
        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling productCategoryPut.');
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

        let localVarPath = `/product/Category`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Category>('PUT', `${basePath}${localVarPath}`,
            {
                body: category,
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
            throw new Error('Required parameter requestBody was null or undefined when calling productCategoryRangeDelete.');
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

        let localVarPath = `/product/Category/range`;
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
    public RangePost(requestParameters: RangePostRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Category>>>;
    public RangePost(requestParameters: RangePostRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Category>>>>;
    public RangePost(requestParameters: RangePostRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Category>>>>;
    public RangePost(requestParameters: RangePostRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const category = requestParameters?.category;
        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling productCategoryRangePost.');
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

        let localVarPath = `/product/Category/range`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Category[]>('POST', `${basePath}${localVarPath}`,
            {
                body: category,
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
    public RangePut(requestParameters: RangePutRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Category>>>;
    public RangePut(requestParameters: RangePutRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Category>>>>;
    public RangePut(requestParameters: RangePutRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Category>>>>;
    public RangePut(requestParameters: RangePutRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const category = requestParameters?.category;
        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling productCategoryRangePut.');
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

        let localVarPath = `/product/Category/range`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Category[]>('PUT', `${basePath}${localVarPath}`,
            {
                body: category,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
