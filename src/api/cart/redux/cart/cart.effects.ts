import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of, switchMap, withLatestFrom, pairwise, filter, debounceTime } from 'rxjs';
import { CartService } from '@api/cart/services/cart.service';
import { CartActions } from './cart.actions';
import { selectDeleteRequest } from './cart.selector';
import { selectDeleteFirstInit } from './cart.selector';
import { selectFiltersFirstGetRequest } from './cart.selector';
import { selectFiltersFirstGetFirstInit } from './cart.selector';
import { selectFiltersGetRequest } from './cart.selector';
import { selectFiltersGetFirstInit } from './cart.selector';
import { selectGetRequest } from './cart.selector';
import { selectGetFirstInit } from './cart.selector';
import { selectIdsGetRequest } from './cart.selector';
import { selectIdsGetFirstInit } from './cart.selector';
import { selectPostRequest } from './cart.selector';
import { selectPostFirstInit } from './cart.selector';
import { selectPutRequest } from './cart.selector';
import { selectPutFirstInit } from './cart.selector';
import { selectRangeDeleteRequest } from './cart.selector';
import { selectRangeDeleteFirstInit } from './cart.selector';
import { selectRangePostRequest } from './cart.selector';
import { selectRangePostFirstInit } from './cart.selector';
import { selectRangePutRequest } from './cart.selector';
import { selectRangePutFirstInit } from './cart.selector';
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
import { Store } from '@ngrx/store';
import { ValidationErrors } from '@angular/forms';
import { ValidationError } from '@api/cart/models/validation-error.model';
import { HttpErrorResponse } from '@angular/common/http';
import {SnackbarService} from '@features/snackbar/snackbar-service'; 

@Injectable(
    
)
export class CartEffects {
    private actions$ = inject(Actions);
    private api = inject(CartService);
    private store = inject(Store);
    private snackbarService = inject(SnackbarService);

    Init$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartActions.Init),
        mergeMap(() => [
                CartActions.DeleteInit(),
                CartActions.FiltersFirstGetInit(),
                CartActions.FiltersGetInit(),
                CartActions.GetInit(),
                CartActions.IdsGetInit(),
                CartActions.PostInit(),
                CartActions.PutInit(),
                CartActions.RangeDeleteInit(),
                CartActions.RangePostInit(),
                CartActions.RangePutInit(),
        ])
    ));

    DeleteUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartActions.DeleteRequestUpdate),
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
            return CartActions.DeleteRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    DeleteUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.DeleteRequestUpdateOne),
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
                CartActions.DeleteRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        DeleteExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.DeleteExecute),
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
                map(() => CartActions.DeleteSuccess()),
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(CartActions.DeleteSetError({ errors: newErrors }));
                }
                return EMPTY;
                })
            );
            })
        )
        );

    FiltersFirstGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartActions.FiltersFirstGetRequestUpdate),
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
            return CartActions.FiltersFirstGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    FiltersFirstGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.FiltersFirstGetRequestUpdateOne),
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
                CartActions.FiltersFirstGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        FiltersFirstGetExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.FiltersFirstGetExecute),
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
                    
                    return CartActions.FiltersFirstGetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(CartActions.FiltersFirstGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(CartActions.FiltersFirstGetDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    
    FiltersGetChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.FiltersGetChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                currentPage: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                CartActions.FiltersGetRequestUpdate({ request })
            )
        )
    );
    FiltersGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartActions.FiltersGetRequestUpdate),
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
            return CartActions.FiltersGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    FiltersGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.FiltersGetRequestUpdateOne),
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
                CartActions.FiltersGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        FiltersGetExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.FiltersGetExecute),
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
                    
                    return CartActions.FiltersGetSetData({
                        data: 
                        {
                            //@ts-ignore
                            items: response.body!.data,
                            currentPage: Number(response.headers.get('X-Current-Page')),
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
                    
                    return of(CartActions.FiltersGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(CartActions.FiltersGetDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    GetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartActions.GetRequestUpdate),
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
            return CartActions.GetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    GetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.GetRequestUpdateOne),
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
                CartActions.GetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        GetExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.GetExecute),
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
                    
                    return CartActions.GetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(CartActions.GetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(CartActions.GetDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    
    IdsGetChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.IdsGetChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                currentPage: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                CartActions.IdsGetRequestUpdate({ request })
            )
        )
    );
    IdsGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartActions.IdsGetRequestUpdate),
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
            return CartActions.IdsGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    IdsGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.IdsGetRequestUpdateOne),
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
                CartActions.IdsGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        IdsGetExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.IdsGetExecute),
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
                    
                    return CartActions.IdsGetSetData({
                        data: 
                        {
                            //@ts-ignore
                            items: response.body!.data,
                            currentPage: Number(response.headers.get('X-Current-Page')),
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
                    
                    return of(CartActions.IdsGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(CartActions.IdsGetDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    PostUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartActions.PostRequestUpdate),
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
            return CartActions.PostRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    PostUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.PostRequestUpdateOne),
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
                CartActions.PostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        PostExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.PostExecute),
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
                    return CartActions.PostSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(CartActions.PostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(CartActions.PostDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    PutUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartActions.PutRequestUpdate),
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
            return CartActions.PutRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    PutUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.PutRequestUpdateOne),
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
                CartActions.PutRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        PutExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.PutExecute),
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
                    return CartActions.PutSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(CartActions.PutSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(CartActions.PutDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    RangeDeleteUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartActions.RangeDeleteRequestUpdate),
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
            return CartActions.RangeDeleteRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangeDeleteUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.RangeDeleteRequestUpdateOne),
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
                CartActions.RangeDeleteRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangeDeleteExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.RangeDeleteExecute),
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
                map(() => CartActions.RangeDeleteSuccess()),
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(CartActions.RangeDeleteSetError({ errors: newErrors }));
                }
                return EMPTY;
                })
            );
            })
        )
        );

    
    RangePostChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.RangePostChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                currentPage: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                CartActions.RangePostRequestUpdate({ request })
            )
        )
    );
    RangePostUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartActions.RangePostRequestUpdate),
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
            return CartActions.RangePostRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangePostUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.RangePostRequestUpdateOne),
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
                CartActions.RangePostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangePostExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.RangePostExecute),
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
                    return CartActions.RangePostSetData({
                        data: 
                        {
                            //@ts-ignore
                            items: response.body!.data,
                            currentPage: Number(response.headers.get('X-Current-Page')),
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
                    return of(CartActions.RangePostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(CartActions.RangePostDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    
    RangePutChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.RangePutChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                currentPage: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                CartActions.RangePutRequestUpdate({ request })
            )
        )
    );
    RangePutUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CartActions.RangePutRequestUpdate),
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
            return CartActions.RangePutRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangePutUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.RangePutRequestUpdateOne),
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
                CartActions.RangePutRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangePutExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.RangePutExecute),
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
                    return CartActions.RangePutSetData({
                        data: 
                        {
                            //@ts-ignore
                            items: response.body!.data,
                            currentPage: Number(response.headers.get('X-Current-Page')),
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
                    return of(CartActions.RangePutSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(CartActions.RangePutDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

}
