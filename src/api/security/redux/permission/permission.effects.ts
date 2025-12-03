import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of, switchMap, withLatestFrom, pairwise, filter, debounceTime } from 'rxjs';
import { PermissionService } from '@api/security/services/permission.service';
import { PermissionActions } from './permission.actions';
import { selectCanAccessHeadRequest } from './permission.selector';
import { selectCanAccessHeadFirstInit } from './permission.selector';
import { selectDeleteRequest } from './permission.selector';
import { selectDeleteFirstInit } from './permission.selector';
import { selectFiltersFirstGetRequest } from './permission.selector';
import { selectFiltersFirstGetFirstInit } from './permission.selector';
import { selectFiltersGetRequest } from './permission.selector';
import { selectFiltersGetFirstInit } from './permission.selector';
import { selectGetRequest } from './permission.selector';
import { selectGetFirstInit } from './permission.selector';
import { selectIdsGetRequest } from './permission.selector';
import { selectIdsGetFirstInit } from './permission.selector';
import { selectPostRequest } from './permission.selector';
import { selectPostFirstInit } from './permission.selector';
import { selectPutRequest } from './permission.selector';
import { selectPutFirstInit } from './permission.selector';
import { selectRangeDeleteRequest } from './permission.selector';
import { selectRangeDeleteFirstInit } from './permission.selector';
import { selectRangePostRequest } from './permission.selector';
import { selectRangePostFirstInit } from './permission.selector';
import { selectRangePutRequest } from './permission.selector';
import { selectRangePutFirstInit } from './permission.selector';
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
import { Store } from '@ngrx/store';
import { ValidationErrors } from '@angular/forms';
import { ValidationError } from '@api/security/models/validation-error.model';
import { HttpErrorResponse } from '@angular/common/http';
import {SnackbarService} from '@features/snackbar/snackbar-service'; 
import { Router } from '@angular/router';

@Injectable(
    
)
export class PermissionEffects {
    private actions$ = inject(Actions);
    private api = inject(PermissionService);
    private store = inject(Store);
    private snackbarService = inject(SnackbarService);
    private router = inject(Router);

    Init$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PermissionActions.Init),
        mergeMap(() => [
                PermissionActions.CanAccessHeadInit(),
                PermissionActions.DeleteInit(),
                PermissionActions.FiltersFirstGetInit(),
                PermissionActions.FiltersGetInit(),
                PermissionActions.GetInit(),
                PermissionActions.IdsGetInit(),
                PermissionActions.PostInit(),
                PermissionActions.PutInit(),
                PermissionActions.RangeDeleteInit(),
                PermissionActions.RangePostInit(),
                PermissionActions.RangePutInit(),
        ])
    ));

    CanAccessHeadUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PermissionActions.CanAccessHeadRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectCanAccessHeadFirstInit),
            this.store.select(selectCanAccessHeadRequest)
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
        if(prevRequest == null) prevRequest = new CanAccessHeadRequest();
        const changedKeys = (Object.keys(request) as (keyof CanAccessHeadRequest)[])
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
            const nRequest = new CanAccessHeadRequest();
            // @ts-ignore
            Object.assign(nRequest,request);
            // @ts-ignore
            return PermissionActions.CanAccessHeadRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    CanAccessHeadUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.CanAccessHeadRequestUpdateOne),
            debounceTime(300),
            withLatestFrom(
                this.store.select(selectCanAccessHeadFirstInit),
                this.store.select(selectCanAccessHeadRequest)
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
            if(prevRequest == null) prevRequest = new CanAccessHeadRequest();
            const key = (Object.keys(request) as (keyof CanAccessHeadRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof CanAccessHeadRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                PermissionActions.CanAccessHeadRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        CanAccessHeadExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.CanAccessHeadExecute),
            withLatestFrom(
                this.store.select(selectCanAccessHeadRequest),
                this.store.select(selectCanAccessHeadFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit  || request == null ) {
                return EMPTY; 
            }
      
            return this.api.CanAccessHead(request as CanAccessHeadRequest, 'response').pipe(
                map(response =>{
                    return PermissionActions.CanAccessHeadSetData()
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(PermissionActions.CanAccessHeadSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {       
                    this.router.navigate(['/']);       
                    return of(PermissionActions.CanAccessHeadDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    DeleteUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PermissionActions.DeleteRequestUpdate),
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
            return PermissionActions.DeleteRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    DeleteUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.DeleteRequestUpdateOne),
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
                PermissionActions.DeleteRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        DeleteExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.DeleteExecute),
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
                map(() => PermissionActions.DeleteSuccess()),
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(PermissionActions.DeleteSetError({ errors: newErrors }));
                }
                return EMPTY;
                })
            );
            })
        )
        );

    FiltersFirstGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PermissionActions.FiltersFirstGetRequestUpdate),
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
            return PermissionActions.FiltersFirstGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    FiltersFirstGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.FiltersFirstGetRequestUpdateOne),
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
                PermissionActions.FiltersFirstGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        FiltersFirstGetExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.FiltersFirstGetExecute),
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
                    
                    return PermissionActions.FiltersFirstGetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(PermissionActions.FiltersFirstGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(PermissionActions.FiltersFirstGetDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    
    FiltersGetChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.FiltersGetChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                currentPage: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                PermissionActions.FiltersGetRequestUpdate({ request })
            )
        )
    );
    FiltersGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PermissionActions.FiltersGetRequestUpdate),
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
            return PermissionActions.FiltersGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    FiltersGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.FiltersGetRequestUpdateOne),
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
                PermissionActions.FiltersGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        FiltersGetExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.FiltersGetExecute),
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
                    
                    return PermissionActions.FiltersGetSetData({
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
                    
                    return of(PermissionActions.FiltersGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(PermissionActions.FiltersGetDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    GetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PermissionActions.GetRequestUpdate),
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
            return PermissionActions.GetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    GetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.GetRequestUpdateOne),
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
                PermissionActions.GetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        GetExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.GetExecute),
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
                    
                    return PermissionActions.GetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(PermissionActions.GetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(PermissionActions.GetDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    
    IdsGetChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.IdsGetChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                currentPage: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                PermissionActions.IdsGetRequestUpdate({ request })
            )
        )
    );
    IdsGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PermissionActions.IdsGetRequestUpdate),
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
            return PermissionActions.IdsGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    IdsGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.IdsGetRequestUpdateOne),
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
                PermissionActions.IdsGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        IdsGetExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.IdsGetExecute),
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
                    
                    return PermissionActions.IdsGetSetData({
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
                    
                    return of(PermissionActions.IdsGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(PermissionActions.IdsGetDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    PostUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PermissionActions.PostRequestUpdate),
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
            return PermissionActions.PostRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    PostUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.PostRequestUpdateOne),
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
                PermissionActions.PostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        PostExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.PostExecute),
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
                    return PermissionActions.PostSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(PermissionActions.PostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(PermissionActions.PostDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    PutUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PermissionActions.PutRequestUpdate),
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
            return PermissionActions.PutRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    PutUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.PutRequestUpdateOne),
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
                PermissionActions.PutRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        PutExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.PutExecute),
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
                    return PermissionActions.PutSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(PermissionActions.PutSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(PermissionActions.PutDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    RangeDeleteUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PermissionActions.RangeDeleteRequestUpdate),
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
            return PermissionActions.RangeDeleteRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangeDeleteUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.RangeDeleteRequestUpdateOne),
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
                PermissionActions.RangeDeleteRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangeDeleteExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.RangeDeleteExecute),
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
                map(() => PermissionActions.RangeDeleteSuccess()),
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(PermissionActions.RangeDeleteSetError({ errors: newErrors }));
                }
                return EMPTY;
                })
            );
            })
        )
        );

    
    RangePostChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.RangePostChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                currentPage: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                PermissionActions.RangePostRequestUpdate({ request })
            )
        )
    );
    RangePostUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PermissionActions.RangePostRequestUpdate),
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
            return PermissionActions.RangePostRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangePostUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.RangePostRequestUpdateOne),
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
                PermissionActions.RangePostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangePostExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.RangePostExecute),
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
                    return PermissionActions.RangePostSetData({
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
                    return of(PermissionActions.RangePostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(PermissionActions.RangePostDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    
    RangePutChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.RangePutChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                currentPage: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                PermissionActions.RangePutRequestUpdate({ request })
            )
        )
    );
    RangePutUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PermissionActions.RangePutRequestUpdate),
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
            return PermissionActions.RangePutRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangePutUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.RangePutRequestUpdateOne),
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
                PermissionActions.RangePutRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangePutExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.RangePutExecute),
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
                    return PermissionActions.RangePutSetData({
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
                    return of(PermissionActions.RangePutSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(PermissionActions.RangePutDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

}
