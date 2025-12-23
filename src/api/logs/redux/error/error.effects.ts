import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of, switchMap, withLatestFrom, filter, debounceTime } from 'rxjs';
import { ErrorService } from '@api/logs/services/error.service';
import { ErrorActions } from './error.actions';
import { selectDeleteRequest } from './error.selector';
import { selectDeleteFirstInit } from './error.selector';
import { selectFiltersFirstGetRequest } from './error.selector';
import { selectFiltersFirstGetFirstInit } from './error.selector';
import { selectFiltersGetRequest } from './error.selector';
import { selectFiltersGetFirstInit } from './error.selector';
import { selectGetRequest } from './error.selector';
import { selectGetFirstInit } from './error.selector';
import { selectIdsGetRequest } from './error.selector';
import { selectIdsGetFirstInit } from './error.selector';
import { selectPostRequest } from './error.selector';
import { selectPostFirstInit } from './error.selector';
import { selectPutRequest } from './error.selector';
import { selectPutFirstInit } from './error.selector';
import { selectRangeDeleteRequest } from './error.selector';
import { selectRangeDeleteFirstInit } from './error.selector';
import { selectRangePostRequest } from './error.selector';
import { selectRangePostFirstInit } from './error.selector';
import { selectRangePutRequest } from './error.selector';
import { selectRangePutFirstInit } from './error.selector';
import { DeleteRequest } from '@api/logs/services/error.service'; 
import { FiltersFirstGetRequest } from '@api/logs/services/error.service'; 
import { FiltersGetRequest } from '@api/logs/services/error.service'; 
import { GetRequest } from '@api/logs/services/error.service'; 
import { IdsGetRequest } from '@api/logs/services/error.service'; 
import { PostRequest } from '@api/logs/services/error.service'; 
import { PutRequest } from '@api/logs/services/error.service'; 
import { RangeDeleteRequest } from '@api/logs/services/error.service'; 
import { RangePostRequest } from '@api/logs/services/error.service'; 
import { RangePutRequest } from '@api/logs/services/error.service'; 
import { Store } from '@ngrx/store';
import { ValidationError } from '@api/logs/models/validation-error.model';
import { HttpErrorResponse } from '@angular/common/http';
import {SnackbarService} from '@features/snackbar/snackbar-service'; 
import { Router } from '@angular/router';
import { BaseResponse } from '@api/logs/models/base-response.model';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ErrorEffects {
    private actions$ = inject(Actions);
    private api = inject(ErrorService);
    private store = inject(Store);
    private snackbarService = inject(SnackbarService);
    private router = inject(Router);
    private dialog = inject(MatDialog);

    Init$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ErrorActions.Init),
        mergeMap(() => [
                ErrorActions.DeleteInit(),
                ErrorActions.FiltersFirstGetInit(),
                ErrorActions.FiltersGetInit(),
                ErrorActions.GetInit(),
                ErrorActions.IdsGetInit(),
                ErrorActions.PostInit(),
                ErrorActions.PutInit(),
                ErrorActions.RangeDeleteInit(),
                ErrorActions.RangePostInit(),
                ErrorActions.RangePutInit(),
        ])
    ));

    DeleteUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ErrorActions.DeleteRequestUpdate),
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
            return ErrorActions.DeleteRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    DeleteUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.DeleteRequestUpdateOne),
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
                ErrorActions.DeleteRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        DeleteExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(ErrorActions.DeleteExecute),
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
                    return of(ErrorActions.DeleteSetError({ errors: newErrors }));
                }
                
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    FiltersFirstGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ErrorActions.FiltersFirstGetRequestUpdate),
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
            return ErrorActions.FiltersFirstGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    FiltersFirstGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.FiltersFirstGetRequestUpdateOne),
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
                ErrorActions.FiltersFirstGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        FiltersFirstGetExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(ErrorActions.FiltersFirstGetExecute),
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
                    
                    return ErrorActions.FiltersFirstGetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(ErrorActions.FiltersFirstGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(ErrorActions.FiltersFirstGetDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    
    FiltersGetChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.FiltersGetChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                page: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                ErrorActions.FiltersGetRequestUpdate({ request })
            )
        )
    );
    FiltersGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ErrorActions.FiltersGetRequestUpdate),
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
            return ErrorActions.FiltersGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    FiltersGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.FiltersGetRequestUpdateOne),
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
                ErrorActions.FiltersGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        FiltersGetExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(ErrorActions.FiltersGetExecute),
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
                    
                    return ErrorActions.FiltersGetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(ErrorActions.FiltersGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(ErrorActions.FiltersGetDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    GetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ErrorActions.GetRequestUpdate),
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
            return ErrorActions.GetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    GetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.GetRequestUpdateOne),
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
                ErrorActions.GetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        GetExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(ErrorActions.GetExecute),
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
                    
                    return ErrorActions.GetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(ErrorActions.GetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(ErrorActions.GetDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    
    IdsGetChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.IdsGetChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                page: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                ErrorActions.IdsGetRequestUpdate({ request })
            )
        )
    );
    IdsGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ErrorActions.IdsGetRequestUpdate),
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
            return ErrorActions.IdsGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    IdsGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.IdsGetRequestUpdateOne),
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
                ErrorActions.IdsGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        IdsGetExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(ErrorActions.IdsGetExecute),
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
                    
                    return ErrorActions.IdsGetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(ErrorActions.IdsGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(ErrorActions.IdsGetDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    PostUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ErrorActions.PostRequestUpdate),
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
            return ErrorActions.PostRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    PostUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.PostRequestUpdateOne),
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
                ErrorActions.PostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        PostExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(ErrorActions.PostExecute),
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
                    return ErrorActions.PostSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(ErrorActions.PostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(ErrorActions.PostDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    PutUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ErrorActions.PutRequestUpdate),
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
            return ErrorActions.PutRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    PutUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.PutRequestUpdateOne),
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
                ErrorActions.PutRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        PutExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(ErrorActions.PutExecute),
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
                    return ErrorActions.PutSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(ErrorActions.PutSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(ErrorActions.PutDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    RangeDeleteUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ErrorActions.RangeDeleteRequestUpdate),
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
            return ErrorActions.RangeDeleteRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangeDeleteUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.RangeDeleteRequestUpdateOne),
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
                ErrorActions.RangeDeleteRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangeDeleteExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(ErrorActions.RangeDeleteExecute),
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
                    return of(ErrorActions.RangeDeleteSetError({ errors: newErrors }));
                }
                
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    
    RangePostChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.RangePostChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                page: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                ErrorActions.RangePostRequestUpdate({ request })
            )
        )
    );
    RangePostUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ErrorActions.RangePostRequestUpdate),
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
            return ErrorActions.RangePostRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangePostUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.RangePostRequestUpdateOne),
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
                ErrorActions.RangePostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangePostExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(ErrorActions.RangePostExecute),
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
                    return ErrorActions.RangePostSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(ErrorActions.RangePostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(ErrorActions.RangePostDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    
    RangePutChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.RangePutChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                page: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                ErrorActions.RangePutRequestUpdate({ request })
            )
        )
    );
    RangePutUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ErrorActions.RangePutRequestUpdate),
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
            return ErrorActions.RangePutRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangePutUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.RangePutRequestUpdateOne),
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
                ErrorActions.RangePutRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangePutExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(ErrorActions.RangePutExecute),
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
                    return ErrorActions.RangePutSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(ErrorActions.RangePutSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(ErrorActions.RangePutDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

}
