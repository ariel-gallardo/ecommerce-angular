import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of, switchMap, withLatestFrom, pairwise, filter, debounceTime } from 'rxjs';
import { CartItemService } from '@api/cart/services/cart-item.service';
import { CartItemActions } from './cart-item.actions';
import { selectDeleteRequest } from './cart-item.selector';
import { selectDeleteFirstInit } from './cart-item.selector';
import { selectFiltersFirstGetRequest } from './cart-item.selector';
import { selectFiltersFirstGetFirstInit } from './cart-item.selector';
import { selectFiltersGetRequest } from './cart-item.selector';
import { selectFiltersGetFirstInit } from './cart-item.selector';
import { selectGetRequest } from './cart-item.selector';
import { selectGetFirstInit } from './cart-item.selector';
import { selectIdsGetRequest } from './cart-item.selector';
import { selectIdsGetFirstInit } from './cart-item.selector';
import { selectPostRequest } from './cart-item.selector';
import { selectPostFirstInit } from './cart-item.selector';
import { selectPutRequest } from './cart-item.selector';
import { selectPutFirstInit } from './cart-item.selector';
import { selectRangeDeleteRequest } from './cart-item.selector';
import { selectRangeDeleteFirstInit } from './cart-item.selector';
import { selectRangePostRequest } from './cart-item.selector';
import { selectRangePostFirstInit } from './cart-item.selector';
import { selectRangePutRequest } from './cart-item.selector';
import { selectRangePutFirstInit } from './cart-item.selector';
import { DeleteRequest } from '@api/cart/services/cart-item.service'; 
import { FiltersFirstGetRequest } from '@api/cart/services/cart-item.service'; 
import { FiltersGetRequest } from '@api/cart/services/cart-item.service'; 
import { GetRequest } from '@api/cart/services/cart-item.service'; 
import { IdsGetRequest } from '@api/cart/services/cart-item.service'; 
import { PostRequest } from '@api/cart/services/cart-item.service'; 
import { PutRequest } from '@api/cart/services/cart-item.service'; 
import { RangeDeleteRequest } from '@api/cart/services/cart-item.service'; 
import { RangePostRequest } from '@api/cart/services/cart-item.service'; 
import { RangePutRequest } from '@api/cart/services/cart-item.service'; 
import { Store } from '@ngrx/store';
import { ValidationErrors } from '@angular/forms';
import { ValidationError } from '@api/cart/models/validation-error.model';
import { HttpErrorResponse } from '@angular/common/http';
import {SnackbarService} from '@features/snackbar/snackbar-service'; 
import { Router } from '@angular/router';
import { BaseResponse } from '@api/cart/models/base-response.model';

@Injectable()
export class CartItemEffects {
    private actions$ = inject(Actions);
    private api = inject(CartItemService);
    private store = inject(Store);
    private snackbarService = inject(SnackbarService);
    private router = inject(Router);

    Init$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartItemActions.Init),
        mergeMap(() => [
                CartItemActions.DeleteInit(),
                CartItemActions.FiltersFirstGetInit(),
                CartItemActions.FiltersGetInit(),
                CartItemActions.GetInit(),
                CartItemActions.IdsGetInit(),
                CartItemActions.PostInit(),
                CartItemActions.PutInit(),
                CartItemActions.RangeDeleteInit(),
                CartItemActions.RangePostInit(),
                CartItemActions.RangePutInit(),
        ])
    ));

    DeleteUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartItemActions.DeleteRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectDeleteFirstInit),
            this.store.select(selectDeleteRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip || request == null) {
            return [prevRequest, false] as const;
        }
        if(prevRequest == null) prevRequest = new DeleteRequest();
        const changedKeys = (Object.keys(request) as (keyof DeleteRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
        });
        return [updated, true] as const;
        }),
        filter(([_, status]) => status),
        // @ts-ignore
        map(([request]) => {
            // @ts-ignore
            const nRequest = new DeleteRequest();
            // @ts-ignore
            Object.assign(nRequest,request);
            // @ts-ignore
            return CartItemActions.DeleteRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    DeleteUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.DeleteRequestUpdateOne),
            debounceTime(300),
            withLatestFrom(
                this.store.select(selectDeleteFirstInit),
                this.store.select(selectDeleteRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip || request == null) {
                return [null, null] as const;
            }
            if(prevRequest == null) prevRequest = new DeleteRequest();
            const key = (Object.keys(request) as (keyof DeleteRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof DeleteRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                CartItemActions.DeleteRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        DeleteExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(CartItemActions.DeleteExecute),
            withLatestFrom(
                this.store.select(selectDeleteRequest),
                this.store.select(selectDeleteFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit  || request == null ) {
                return EMPTY; 
            }
            // @ts-ignore
            return this.api.Delete(request as DeleteRequest, 'response').pipe(
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(CartItemActions.DeleteSetError({ errors: newErrors }));
                }
                
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    FiltersFirstGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartItemActions.FiltersFirstGetRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectFiltersFirstGetFirstInit),
            this.store.select(selectFiltersFirstGetRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip || request == null) {
            return [prevRequest, false] as const;
        }
        if(prevRequest == null) prevRequest = new FiltersFirstGetRequest();
        const changedKeys = (Object.keys(request) as (keyof FiltersFirstGetRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
        });
        return [updated, true] as const;
        }),
        filter(([_, status]) => status),
        // @ts-ignore
        map(([request]) => {
            // @ts-ignore
            const nRequest = new FiltersFirstGetRequest();
            // @ts-ignore
            Object.assign(nRequest,request);
            // @ts-ignore
            return CartItemActions.FiltersFirstGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    FiltersFirstGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.FiltersFirstGetRequestUpdateOne),
            debounceTime(300),
            withLatestFrom(
                this.store.select(selectFiltersFirstGetFirstInit),
                this.store.select(selectFiltersFirstGetRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip || request == null) {
                return [null, null] as const;
            }
            if(prevRequest == null) prevRequest = new FiltersFirstGetRequest();
            const key = (Object.keys(request) as (keyof FiltersFirstGetRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof FiltersFirstGetRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                CartItemActions.FiltersFirstGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        FiltersFirstGetExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(CartItemActions.FiltersFirstGetExecute),
            withLatestFrom(
                this.store.select(selectFiltersFirstGetRequest),
                this.store.select(selectFiltersFirstGetFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit ) {
                return EMPTY; 
            }
            // @ts-ignore
            return this.api.FiltersFirstGet(request as FiltersFirstGetRequest, 'response').pipe(
                map(response =>{
                    
                    return CartItemActions.FiltersFirstGetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(CartItemActions.FiltersFirstGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(CartItemActions.FiltersFirstGetDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    
    FiltersGetChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.FiltersGetChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                page: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                CartItemActions.FiltersGetRequestUpdate({ request })
            )
        )
    );
    FiltersGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartItemActions.FiltersGetRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectFiltersGetFirstInit),
            this.store.select(selectFiltersGetRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip || request == null) {
            return [prevRequest, false] as const;
        }
        if(prevRequest == null) prevRequest = new FiltersGetRequest();
        const changedKeys = (Object.keys(request) as (keyof FiltersGetRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
        });
        return [updated, true] as const;
        }),
        filter(([_, status]) => status),
        // @ts-ignore
        map(([request]) => {
            // @ts-ignore
            const nRequest = new FiltersGetRequest();
            // @ts-ignore
            Object.assign(nRequest,request);
            // @ts-ignore
            return CartItemActions.FiltersGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    FiltersGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.FiltersGetRequestUpdateOne),
            debounceTime(300),
            withLatestFrom(
                this.store.select(selectFiltersGetFirstInit),
                this.store.select(selectFiltersGetRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip || request == null) {
                return [null, null] as const;
            }
            if(prevRequest == null) prevRequest = new FiltersGetRequest();
            const key = (Object.keys(request) as (keyof FiltersGetRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof FiltersGetRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                CartItemActions.FiltersGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        FiltersGetExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(CartItemActions.FiltersGetExecute),
            withLatestFrom(
                this.store.select(selectFiltersGetRequest),
                this.store.select(selectFiltersGetFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit ) {
                return EMPTY; 
            }
            // @ts-ignore
            return this.api.FiltersGet(request as FiltersGetRequest, 'response').pipe(
                map(response =>{
                    
                    return CartItemActions.FiltersGetSetData({
                        data: 
                        {
                            //@ts-ignore
                            items: response.body!.data,
                            page: Number(response.headers.get('X-Current-Page')),
                            totalPages: Number(response.headers.get('X-Total-Pages')),
                            pageSize: Number(response.headers.get('X-Page-Size')),
                            totalCount: Number(response.headers.get('X-Total-Count'))
                        }
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(CartItemActions.FiltersGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(CartItemActions.FiltersGetDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    GetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartItemActions.GetRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectGetFirstInit),
            this.store.select(selectGetRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip || request == null) {
            return [prevRequest, false] as const;
        }
        if(prevRequest == null) prevRequest = new GetRequest();
        const changedKeys = (Object.keys(request) as (keyof GetRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
        });
        return [updated, true] as const;
        }),
        filter(([_, status]) => status),
        // @ts-ignore
        map(([request]) => {
            // @ts-ignore
            const nRequest = new GetRequest();
            // @ts-ignore
            Object.assign(nRequest,request);
            // @ts-ignore
            return CartItemActions.GetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    GetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.GetRequestUpdateOne),
            debounceTime(300),
            withLatestFrom(
                this.store.select(selectGetFirstInit),
                this.store.select(selectGetRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip || request == null) {
                return [null, null] as const;
            }
            if(prevRequest == null) prevRequest = new GetRequest();
            const key = (Object.keys(request) as (keyof GetRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof GetRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                CartItemActions.GetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        GetExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(CartItemActions.GetExecute),
            withLatestFrom(
                this.store.select(selectGetRequest),
                this.store.select(selectGetFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit  || request == null ) {
                return EMPTY; 
            }
            // @ts-ignore
            return this.api.Get(request as GetRequest, 'response').pipe(
                map(response =>{
                    
                    return CartItemActions.GetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(CartItemActions.GetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(CartItemActions.GetDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    
    IdsGetChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.IdsGetChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                page: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                CartItemActions.IdsGetRequestUpdate({ request })
            )
        )
    );
    IdsGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartItemActions.IdsGetRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectIdsGetFirstInit),
            this.store.select(selectIdsGetRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip || request == null) {
            return [prevRequest, false] as const;
        }
        if(prevRequest == null) prevRequest = new IdsGetRequest();
        const changedKeys = (Object.keys(request) as (keyof IdsGetRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
        });
        return [updated, true] as const;
        }),
        filter(([_, status]) => status),
        // @ts-ignore
        map(([request]) => {
            // @ts-ignore
            const nRequest = new IdsGetRequest();
            // @ts-ignore
            Object.assign(nRequest,request);
            // @ts-ignore
            return CartItemActions.IdsGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    IdsGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.IdsGetRequestUpdateOne),
            debounceTime(300),
            withLatestFrom(
                this.store.select(selectIdsGetFirstInit),
                this.store.select(selectIdsGetRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip || request == null) {
                return [null, null] as const;
            }
            if(prevRequest == null) prevRequest = new IdsGetRequest();
            const key = (Object.keys(request) as (keyof IdsGetRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof IdsGetRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                CartItemActions.IdsGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        IdsGetExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(CartItemActions.IdsGetExecute),
            withLatestFrom(
                this.store.select(selectIdsGetRequest),
                this.store.select(selectIdsGetFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit  || request == null ) {
                return EMPTY; 
            }
            // @ts-ignore
            return this.api.IdsGet(request as IdsGetRequest, 'response').pipe(
                map(response =>{
                    
                    return CartItemActions.IdsGetSetData({
                        data: 
                        {
                            //@ts-ignore
                            items: response.body!.data,
                            page: Number(response.headers.get('X-Current-Page')),
                            totalPages: Number(response.headers.get('X-Total-Pages')),
                            pageSize: Number(response.headers.get('X-Page-Size')),
                            totalCount: Number(response.headers.get('X-Total-Count'))
                        }
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(CartItemActions.IdsGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(CartItemActions.IdsGetDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    PostUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartItemActions.PostRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectPostFirstInit),
            this.store.select(selectPostRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip || request == null) {
            return [prevRequest, false] as const;
        }
        if(prevRequest == null) prevRequest = new PostRequest();
        const changedKeys = (Object.keys(request) as (keyof PostRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
        });
        return [updated, true] as const;
        }),
        filter(([_, status]) => status),
        // @ts-ignore
        map(([request]) => {
            // @ts-ignore
            const nRequest = new PostRequest();
            // @ts-ignore
            Object.assign(nRequest,request);
            // @ts-ignore
            return CartItemActions.PostRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    PostUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.PostRequestUpdateOne),
            debounceTime(300),
            withLatestFrom(
                this.store.select(selectPostFirstInit),
                this.store.select(selectPostRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip || request == null) {
                return [null, null] as const;
            }
            if(prevRequest == null) prevRequest = new PostRequest();
            const key = (Object.keys(request) as (keyof PostRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof PostRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                CartItemActions.PostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        PostExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(CartItemActions.PostExecute),
            withLatestFrom(
                this.store.select(selectPostRequest),
                this.store.select(selectPostFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit  || request == null ) {
                return EMPTY; 
            }
            // @ts-ignore
            return this.api.Post(request as PostRequest, 'response').pipe(
                map(response =>{
                      this.snackbarService.show(response.body!.message, response.body!.statusCode);
                    return CartItemActions.PostSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(CartItemActions.PostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(CartItemActions.PostDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    PutUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartItemActions.PutRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectPutFirstInit),
            this.store.select(selectPutRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip || request == null) {
            return [prevRequest, false] as const;
        }
        if(prevRequest == null) prevRequest = new PutRequest();
        const changedKeys = (Object.keys(request) as (keyof PutRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
        });
        return [updated, true] as const;
        }),
        filter(([_, status]) => status),
        // @ts-ignore
        map(([request]) => {
            // @ts-ignore
            const nRequest = new PutRequest();
            // @ts-ignore
            Object.assign(nRequest,request);
            // @ts-ignore
            return CartItemActions.PutRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    PutUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.PutRequestUpdateOne),
            debounceTime(300),
            withLatestFrom(
                this.store.select(selectPutFirstInit),
                this.store.select(selectPutRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip || request == null) {
                return [null, null] as const;
            }
            if(prevRequest == null) prevRequest = new PutRequest();
            const key = (Object.keys(request) as (keyof PutRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof PutRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                CartItemActions.PutRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        PutExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(CartItemActions.PutExecute),
            withLatestFrom(
                this.store.select(selectPutRequest),
                this.store.select(selectPutFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit  || request == null ) {
                return EMPTY; 
            }
            // @ts-ignore
            return this.api.Put(request as PutRequest, 'response').pipe(
                map(response =>{
                      this.snackbarService.show(response.body!.message, response.body!.statusCode);
                    return CartItemActions.PutSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(CartItemActions.PutSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(CartItemActions.PutDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    RangeDeleteUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartItemActions.RangeDeleteRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectRangeDeleteFirstInit),
            this.store.select(selectRangeDeleteRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip || request == null) {
            return [prevRequest, false] as const;
        }
        if(prevRequest == null) prevRequest = new RangeDeleteRequest();
        const changedKeys = (Object.keys(request) as (keyof RangeDeleteRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
        });
        return [updated, true] as const;
        }),
        filter(([_, status]) => status),
        // @ts-ignore
        map(([request]) => {
            // @ts-ignore
            const nRequest = new RangeDeleteRequest();
            // @ts-ignore
            Object.assign(nRequest,request);
            // @ts-ignore
            return CartItemActions.RangeDeleteRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangeDeleteUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.RangeDeleteRequestUpdateOne),
            debounceTime(300),
            withLatestFrom(
                this.store.select(selectRangeDeleteFirstInit),
                this.store.select(selectRangeDeleteRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip || request == null) {
                return [null, null] as const;
            }
            if(prevRequest == null) prevRequest = new RangeDeleteRequest();
            const key = (Object.keys(request) as (keyof RangeDeleteRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof RangeDeleteRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                CartItemActions.RangeDeleteRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangeDeleteExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(CartItemActions.RangeDeleteExecute),
            withLatestFrom(
                this.store.select(selectRangeDeleteRequest),
                this.store.select(selectRangeDeleteFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit  || request == null ) {
                return EMPTY; 
            }
            // @ts-ignore
            return this.api.RangeDelete(request as RangeDeleteRequest, 'response').pipe(
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(CartItemActions.RangeDeleteSetError({ errors: newErrors }));
                }
                
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    
    RangePostChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.RangePostChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                page: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                CartItemActions.RangePostRequestUpdate({ request })
            )
        )
    );
    RangePostUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartItemActions.RangePostRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectRangePostFirstInit),
            this.store.select(selectRangePostRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip || request == null) {
            return [prevRequest, false] as const;
        }
        if(prevRequest == null) prevRequest = new RangePostRequest();
        const changedKeys = (Object.keys(request) as (keyof RangePostRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
        });
        return [updated, true] as const;
        }),
        filter(([_, status]) => status),
        // @ts-ignore
        map(([request]) => {
            // @ts-ignore
            const nRequest = new RangePostRequest();
            // @ts-ignore
            Object.assign(nRequest,request);
            // @ts-ignore
            return CartItemActions.RangePostRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangePostUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.RangePostRequestUpdateOne),
            debounceTime(300),
            withLatestFrom(
                this.store.select(selectRangePostFirstInit),
                this.store.select(selectRangePostRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip || request == null) {
                return [null, null] as const;
            }
            if(prevRequest == null) prevRequest = new RangePostRequest();
            const key = (Object.keys(request) as (keyof RangePostRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof RangePostRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                CartItemActions.RangePostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangePostExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(CartItemActions.RangePostExecute),
            withLatestFrom(
                this.store.select(selectRangePostRequest),
                this.store.select(selectRangePostFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit  || request == null ) {
                return EMPTY; 
            }
            // @ts-ignore
            return this.api.RangePost(request as RangePostRequest, 'response').pipe(
                map(response =>{
                      this.snackbarService.show(response.body!.message, response.body!.statusCode);
                    return CartItemActions.RangePostSetData({
                        data: 
                        {
                            //@ts-ignore
                            items: response.body!.data,
                            page: Number(response.headers.get('X-Current-Page')),
                            totalPages: Number(response.headers.get('X-Total-Pages')),
                            pageSize: Number(response.headers.get('X-Page-Size')),
                            totalCount: Number(response.headers.get('X-Total-Count'))
                        }
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(CartItemActions.RangePostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(CartItemActions.RangePostDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    
    RangePutChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.RangePutChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                page: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                CartItemActions.RangePutRequestUpdate({ request })
            )
        )
    );
    RangePutUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartItemActions.RangePutRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectRangePutFirstInit),
            this.store.select(selectRangePutRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip || request == null) {
            return [prevRequest, false] as const;
        }
        if(prevRequest == null) prevRequest = new RangePutRequest();
        const changedKeys = (Object.keys(request) as (keyof RangePutRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
        });
        return [updated, true] as const;
        }),
        filter(([_, status]) => status),
        // @ts-ignore
        map(([request]) => {
            // @ts-ignore
            const nRequest = new RangePutRequest();
            // @ts-ignore
            Object.assign(nRequest,request);
            // @ts-ignore
            return CartItemActions.RangePutRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangePutUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartItemActions.RangePutRequestUpdateOne),
            debounceTime(300),
            withLatestFrom(
                this.store.select(selectRangePutFirstInit),
                this.store.select(selectRangePutRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip || request == null) {
                return [null, null] as const;
            }
            if(prevRequest == null) prevRequest = new RangePutRequest();
            const key = (Object.keys(request) as (keyof RangePutRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof RangePutRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                CartItemActions.RangePutRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangePutExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(CartItemActions.RangePutExecute),
            withLatestFrom(
                this.store.select(selectRangePutRequest),
                this.store.select(selectRangePutFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit  || request == null ) {
                return EMPTY; 
            }
            // @ts-ignore
            return this.api.RangePut(request as RangePutRequest, 'response').pipe(
                map(response =>{
                      this.snackbarService.show(response.body!.message, response.body!.statusCode);
                    return CartItemActions.RangePutSetData({
                        data: 
                        {
                            //@ts-ignore
                            items: response.body!.data,
                            page: Number(response.headers.get('X-Current-Page')),
                            totalPages: Number(response.headers.get('X-Total-Pages')),
                            pageSize: Number(response.headers.get('X-Page-Size')),
                            totalCount: Number(response.headers.get('X-Total-Count'))
                        }
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(CartItemActions.RangePutSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(CartItemActions.RangePutDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

}
