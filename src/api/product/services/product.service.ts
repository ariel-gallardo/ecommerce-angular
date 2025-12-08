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
import { Product } from '@api/product/models/product.model';
import { ValidationError } from '@api/product/models/validation-error.model';
import { ProductReduxModule } from '@api/product/redux/product/product.module';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { ServiceConfiguration } from '../configuration';
import { BaseService } from './api.base.service';

export class DeleteRequest {
    entityId?: string | undefined | null;
    constructor(init: Partial<DeleteRequest> = {}){
             this.entityId = null;
            
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
    category?: string | undefined | null;
    categoryId?: string | undefined | null;
    orderBy?: string | undefined | null;
    constructor(init: Partial<FiltersFirstGetRequest> = {}){
             this.name = null;
            
             this.description = null;
            
             this.category = null;
            
             this.categoryId = null;
            
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
    category?: string | undefined | null;
    categoryId?: string | undefined | null;
    orderBy?: string | undefined | null;
    page?: number | undefined | null;
    pageSize?: number | undefined | null;
    constructor(init: Partial<FiltersGetRequest> = {}){
             this.name = null;
            
             this.description = null;
            
             this.category = null;
            
             this.categoryId = null;
            
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
    entityId?: string | undefined | null;
    constructor(init: Partial<GetRequest> = {}){
             this.entityId = null;
            
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
    product?: Product | undefined | null;
    constructor(init: Partial<PostRequest> = {}){
            
             this.product = new Product(); 
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
    product?: Product | undefined | null;
    constructor(init: Partial<PutRequest> = {}){
            
             this.product = new Product(); 
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
    product?: Product[] | undefined | null;
    constructor(init: Partial<RangePostRequest> = {}){
             this.product = [];
            
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
    product?: Product[] | undefined | null;
    constructor(init: Partial<RangePutRequest> = {}){
             this.product = [];
            
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
export class ProductService extends BaseService {

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

        let localVarPath = `/product/Product`;
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
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Product>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Product>>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Product>>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const name = requestParameters?.name;
        const description = requestParameters?.description;
        const category = requestParameters?.category;
        const categoryId = requestParameters?.categoryId;
        const orderBy = requestParameters?.orderBy;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>name, 'Name');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>description, 'Description');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>category, 'Category');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>categoryId, 'CategoryId');
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

        let localVarPath = `/product/Product/filters-first`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Product>('GET', `${basePath}${localVarPath}`,
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
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Product>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Product>>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Product>>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const name = requestParameters?.name;
        const description = requestParameters?.description;
        const category = requestParameters?.category;
        const categoryId = requestParameters?.categoryId;
        const orderBy = requestParameters?.orderBy;
        const page = requestParameters?.page;
        const pageSize = requestParameters?.pageSize;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>name, 'Name');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>description, 'Description');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>category, 'Category');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>categoryId, 'CategoryId');
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

        let localVarPath = `/product/Product/filters`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Product[]>('GET', `${basePath}${localVarPath}`,
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
    public Get(requestParameters?: GetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Product>>;
    public Get(requestParameters?: GetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Product>>>;
    public Get(requestParameters?: GetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Product>>>;
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

        let localVarPath = `/product/Product`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Product>('GET', `${basePath}${localVarPath}`,
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
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Product>>>;
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Product>>>>;
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Product>>>>;
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

        let localVarPath = `/product/Product/ids`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Product[]>('GET', `${basePath}${localVarPath}`,
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
    public Post(requestParameters: PostRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Product>>;
    public Post(requestParameters: PostRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Product>>>;
    public Post(requestParameters: PostRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Product>>>;
    public Post(requestParameters: PostRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const product = requestParameters?.product;
        if (product === null || product === undefined) {
            throw new Error('Required parameter product was null or undefined when calling productProductPost.');
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

        let localVarPath = `/product/Product`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Product>('POST', `${basePath}${localVarPath}`,
            {
                body: product,
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
    public Put(requestParameters: PutRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Product>>;
    public Put(requestParameters: PutRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Product>>>;
    public Put(requestParameters: PutRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Product>>>;
    public Put(requestParameters: PutRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const product = requestParameters?.product;
        if (product === null || product === undefined) {
            throw new Error('Required parameter product was null or undefined when calling productProductPut.');
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

        let localVarPath = `/product/Product`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Product>('PUT', `${basePath}${localVarPath}`,
            {
                body: product,
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
            throw new Error('Required parameter requestBody was null or undefined when calling productProductRangeDelete.');
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

        let localVarPath = `/product/Product/range`;
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
    public RangePost(requestParameters: RangePostRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Product>>>;
    public RangePost(requestParameters: RangePostRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Product>>>>;
    public RangePost(requestParameters: RangePostRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Product>>>>;
    public RangePost(requestParameters: RangePostRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const product = requestParameters?.product;
        if (product === null || product === undefined) {
            throw new Error('Required parameter product was null or undefined when calling productProductRangePost.');
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

        let localVarPath = `/product/Product/range`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Product[]>('POST', `${basePath}${localVarPath}`,
            {
                body: product,
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
    public RangePut(requestParameters: RangePutRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Product>>>;
    public RangePut(requestParameters: RangePutRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Product>>>>;
    public RangePut(requestParameters: RangePutRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Product>>>>;
    public RangePut(requestParameters: RangePutRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const product = requestParameters?.product;
        if (product === null || product === undefined) {
            throw new Error('Required parameter product was null or undefined when calling productProductRangePut.');
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

        let localVarPath = `/product/Product/range`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Product[]>('PUT', `${basePath}${localVarPath}`,
            {
                body: product,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
