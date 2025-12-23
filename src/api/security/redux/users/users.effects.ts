import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of, switchMap, withLatestFrom, pairwise, filter, debounceTime } from 'rxjs';
import { UsersService } from '@api/security/services/users.service';
import { UsersActions } from './users.actions';
import { selectDeleteRequest } from './users.selector';
import { selectDeleteFirstInit } from './users.selector';
import { selectFiltersFirstGetRequest } from './users.selector';
import { selectFiltersFirstGetFirstInit } from './users.selector';
import { selectFiltersGetRequest } from './users.selector';
import { selectFiltersGetFirstInit } from './users.selector';
import { selectGetRequest } from './users.selector';
import { selectGetFirstInit } from './users.selector';
import { selectIdsGetRequest } from './users.selector';
import { selectIdsGetFirstInit } from './users.selector';
import { selectLoginPostRequest } from './users.selector';
import { selectLoginPostFirstInit } from './users.selector';
import { selectPostRequest } from './users.selector';
import { selectPostFirstInit } from './users.selector';
import { selectPutRequest } from './users.selector';
import { selectPutFirstInit } from './users.selector';
import { selectRangeDeleteRequest } from './users.selector';
import { selectRangeDeleteFirstInit } from './users.selector';
import { selectRangePostRequest } from './users.selector';
import { selectRangePostFirstInit } from './users.selector';
import { selectRangePutRequest } from './users.selector';
import { selectRangePutFirstInit } from './users.selector';
import { selectRegisterPostRequest } from './users.selector';
import { selectRegisterPostFirstInit } from './users.selector';
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
import { Store } from '@ngrx/store';
import { ValidationErrors } from '@angular/forms';
import { ValidationError } from '@api/security/models/validation-error.model';
import { HttpErrorResponse } from '@angular/common/http';
import {SnackbarService} from '@features/snackbar/snackbar-service'; 
import { Router } from '@angular/router';
import { BaseResponse } from '@api/security/models/base-response.model';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class UsersEffects {
    private actions$ = inject(Actions);
    private api = inject(UsersService);
    private store = inject(Store);
    private snackbarService = inject(SnackbarService);
    private router = inject(Router);
    private dialog = inject(MatDialog);

    Init$ = createEffect(() =>
    this.actions$.pipe(
        ofType(UsersActions.Init),
        mergeMap(() => [
                UsersActions.DeleteInit(),
                UsersActions.FiltersFirstGetInit(),
                UsersActions.FiltersGetInit(),
                UsersActions.GetInit(),
                UsersActions.IdsGetInit(),
                UsersActions.LoginPostInit(),
                UsersActions.PostInit(),
                UsersActions.PutInit(),
                UsersActions.RangeDeleteInit(),
                UsersActions.RangePostInit(),
                UsersActions.RangePutInit(),
                UsersActions.RegisterPostInit(),
        ])
    ));

    DeleteUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(UsersActions.DeleteRequestUpdate),
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
            return UsersActions.DeleteRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    DeleteUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.DeleteRequestUpdateOne),
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
                UsersActions.DeleteRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        DeleteExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(UsersActions.DeleteExecute),
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
                    return of(UsersActions.DeleteSetError({ errors: newErrors }));
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
        ofType(UsersActions.FiltersFirstGetRequestUpdate),
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
            return UsersActions.FiltersFirstGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    FiltersFirstGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.FiltersFirstGetRequestUpdateOne),
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
                UsersActions.FiltersFirstGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        FiltersFirstGetExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(UsersActions.FiltersFirstGetExecute),
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
                    
                    return UsersActions.FiltersFirstGetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(UsersActions.FiltersFirstGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(UsersActions.FiltersFirstGetDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    
    FiltersGetChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.FiltersGetChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                page: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                UsersActions.FiltersGetRequestUpdate({ request })
            )
        )
    );
    FiltersGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(UsersActions.FiltersGetRequestUpdate),
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
            return UsersActions.FiltersGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    FiltersGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.FiltersGetRequestUpdateOne),
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
                UsersActions.FiltersGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        FiltersGetExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(UsersActions.FiltersGetExecute),
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
                    
                    return UsersActions.FiltersGetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(UsersActions.FiltersGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(UsersActions.FiltersGetDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    GetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(UsersActions.GetRequestUpdate),
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
            return UsersActions.GetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    GetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.GetRequestUpdateOne),
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
                UsersActions.GetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        GetExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(UsersActions.GetExecute),
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
                    
                    return UsersActions.GetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(UsersActions.GetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(UsersActions.GetDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    
    IdsGetChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.IdsGetChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                page: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                UsersActions.IdsGetRequestUpdate({ request })
            )
        )
    );
    IdsGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(UsersActions.IdsGetRequestUpdate),
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
            return UsersActions.IdsGetRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    IdsGetUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.IdsGetRequestUpdateOne),
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
                UsersActions.IdsGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        IdsGetExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(UsersActions.IdsGetExecute),
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
                    
                    return UsersActions.IdsGetSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                    
                    return of(UsersActions.IdsGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(UsersActions.IdsGetDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    LoginPostUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(UsersActions.LoginPostRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectLoginPostFirstInit),
            this.store.select(selectLoginPostRequest)
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
        if(prevRequest == null) prevRequest = new LoginPostRequest();
        const changedKeys = (Object.keys(request) as (keyof LoginPostRequest)[])
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
            const nRequest = new LoginPostRequest();
            // @ts-ignore
            Object.assign(nRequest,request);
            // @ts-ignore
            return UsersActions.LoginPostRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    LoginPostUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.LoginPostRequestUpdateOne),
            debounceTime(300),
            withLatestFrom(
                this.store.select(selectLoginPostFirstInit),
                this.store.select(selectLoginPostRequest)
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
            if(prevRequest == null) prevRequest = new LoginPostRequest();
            const key = (Object.keys(request) as (keyof LoginPostRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof LoginPostRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                UsersActions.LoginPostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        LoginPostExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(UsersActions.LoginPostExecute),
            withLatestFrom(
                this.store.select(selectLoginPostRequest),
                this.store.select(selectLoginPostFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit  || request == null ) {
                return EMPTY; 
            }
            // @ts-ignore
            return this.api.LoginPost(request as LoginPostRequest, 'response').pipe(
                map(response =>{
                      this.snackbarService.show(response.body!.message, response.body!.statusCode);
                    return UsersActions.LoginPostSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(UsersActions.LoginPostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(UsersActions.LoginPostDataInit());}
                else if (newErr.status === 401 && newErr.error){ const res = newErr.error as BaseResponse; this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    PostUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(UsersActions.PostRequestUpdate),
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
            return UsersActions.PostRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    PostUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.PostRequestUpdateOne),
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
                UsersActions.PostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        PostExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(UsersActions.PostExecute),
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
                    return UsersActions.PostSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(UsersActions.PostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(UsersActions.PostDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    PutUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(UsersActions.PutRequestUpdate),
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
            return UsersActions.PutRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    PutUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.PutRequestUpdateOne),
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
                UsersActions.PutRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        PutExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(UsersActions.PutExecute),
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
                    return UsersActions.PutSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(UsersActions.PutSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(UsersActions.PutDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    RangeDeleteUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(UsersActions.RangeDeleteRequestUpdate),
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
            return UsersActions.RangeDeleteRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangeDeleteUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.RangeDeleteRequestUpdateOne),
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
                UsersActions.RangeDeleteRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangeDeleteExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(UsersActions.RangeDeleteExecute),
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
                    return of(UsersActions.RangeDeleteSetError({ errors: newErrors }));
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
            ofType(UsersActions.RangePostChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                page: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                UsersActions.RangePostRequestUpdate({ request })
            )
        )
    );
    RangePostUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(UsersActions.RangePostRequestUpdate),
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
            return UsersActions.RangePostRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangePostUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.RangePostRequestUpdateOne),
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
                UsersActions.RangePostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangePostExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(UsersActions.RangePostExecute),
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
                    return UsersActions.RangePostSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(UsersActions.RangePostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(UsersActions.RangePostDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    
    RangePutChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.RangePutChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                page: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                UsersActions.RangePutRequestUpdate({ request })
            )
        )
    );
    RangePutUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(UsersActions.RangePutRequestUpdate),
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
            return UsersActions.RangePutRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RangePutUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.RangePutRequestUpdateOne),
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
                UsersActions.RangePutRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangePutExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(UsersActions.RangePutExecute),
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
                    return UsersActions.RangePutSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(UsersActions.RangePutSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(UsersActions.RangePutDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

    RegisterPostUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(UsersActions.RegisterPostRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectRegisterPostFirstInit),
            this.store.select(selectRegisterPostRequest)
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
        if(prevRequest == null) prevRequest = new RegisterPostRequest();
        const changedKeys = (Object.keys(request) as (keyof RegisterPostRequest)[])
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
            const nRequest = new RegisterPostRequest();
            // @ts-ignore
            Object.assign(nRequest,request);
            // @ts-ignore
            return UsersActions.RegisterPostRequestUpdateSuccess({ request: nRequest });
        })
    )
    );
    RegisterPostUpdateOneRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.RegisterPostRequestUpdateOne),
            debounceTime(300),
            withLatestFrom(
                this.store.select(selectRegisterPostFirstInit),
                this.store.select(selectRegisterPostRequest)
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
            if(prevRequest == null) prevRequest = new RegisterPostRequest();
            const key = (Object.keys(request) as (keyof RegisterPostRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof RegisterPostRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                UsersActions.RegisterPostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RegisterPostExecute$ = createEffect(() =>
        // @ts-ignore
        this.actions$.pipe(
            ofType(UsersActions.RegisterPostExecute),
            withLatestFrom(
                this.store.select(selectRegisterPostRequest),
                this.store.select(selectRegisterPostFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit  || request == null ) {
                return EMPTY; 
            }
            // @ts-ignore
            return this.api.RegisterPost(request as RegisterPostRequest, 'response').pipe(
                map(response =>{
                      this.snackbarService.show(response.body!.message, response.body!.statusCode);
                    return UsersActions.RegisterPostSetData({
                        data:                         
                        response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error!.data as ValidationError[][];
                      this.snackbarService.show(newErr.error!.message, newErr.error!.statusCode);
                    return of(UsersActions.RegisterPostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {return of(UsersActions.RegisterPostDataInit());}
                if(newErr.status === 401){cookieStore.delete('token');this.router.navigate(['/users/login']);this.dialog.closeAll();}else if(newErr.status === 403 && newErr.error){const res = newErr.error as BaseResponse;this.snackbarService.show(res.message, res.statusCode);}
                return EMPTY;
                })
            );
            })
        )
        );

}
