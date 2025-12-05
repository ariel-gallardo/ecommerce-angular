import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import {Response} from '../../models/common/response.model'; 
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { BaseResponse } from '@api/cart/models/base-response.model';
import { Cart } from '@api/cart/models/cart.model';
import { ValidationError } from '@api/cart/models/validation-error.model';
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
import { PageEvent } from '@angular/material/paginator';
import { HttpHeaders } from '@angular/common/http';

export class CartActions {

  static Init = createAction('[Cart] Init');

  static DeleteInit = createAction('[Cart] DeleteInit');
  static DeleteDataInit = createAction('[Cart] DeleteDataInit');
  static DeleteExecute = createAction('[Cart] Delete Execute');
  
  static DeleteRequestUpdate = createAction('[Cart] Delete RequestUpdate', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateSuccess = createAction('[Cart] Delete RequestUpdateSuccess', props<{request: DeleteRequest }>());
  static DeleteRequestUpdateOne = createAction('[Cart] Delete RequestUpdateOne', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOneSuccess = createAction('[Cart] Delete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static DeleteSuccess = createAction('[Cart] Delete Success');
  static DeleteSetError = createAction('[Cart] Delete SetError', props<{errors: ValidationError[][]}>());

  static FiltersFirstGetInit = createAction('[Cart] FiltersFirstGetInit');
  static FiltersFirstGetDataInit = createAction('[Cart] FiltersFirstGetDataInit');
  static FiltersFirstGetExecute = createAction('[Cart] FiltersFirstGet Execute');
   static FiltersFirstGetSetData = createAction('[Cart] FiltersFirstGet SetData', props<{data: Cart }>()); 
  static FiltersFirstGetRequestUpdate = createAction('[Cart] FiltersFirstGet RequestUpdate', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateSuccess = createAction('[Cart] FiltersFirstGet RequestUpdateSuccess', props<{request: FiltersFirstGetRequest }>());
  static FiltersFirstGetRequestUpdateOne = createAction('[Cart] FiltersFirstGet RequestUpdateOne', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOneSuccess = createAction('[Cart] FiltersFirstGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersFirstGetSuccess = createAction('[Cart] FiltersFirstGet Success');
  static FiltersFirstGetSetError = createAction('[Cart] FiltersFirstGet SetError', props<{errors: ValidationError[][]}>());

  static FiltersGetInit = createAction('[Cart] FiltersGetInit');
  static FiltersGetDataInit = createAction('[Cart] FiltersGetDataInit');
  static FiltersGetExecute = createAction('[Cart] FiltersGet Execute');
   static FiltersGetSetData = createAction('[Cart] FiltersGet SetData', props<{data: Pagination<Cart> }>()); 
  static FiltersGetRequestUpdate = createAction('[Cart] FiltersGet RequestUpdate', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateSuccess = createAction('[Cart] FiltersGet RequestUpdateSuccess', props<{request: FiltersGetRequest }>());
  static FiltersGetRequestUpdateOne = createAction('[Cart] FiltersGet RequestUpdateOne', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOneSuccess = createAction('[Cart] FiltersGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersGetSuccess = createAction('[Cart] FiltersGet Success');
  static FiltersGetSetError = createAction('[Cart] FiltersGet SetError', props<{errors: ValidationError[][]}>());
     
    static FiltersGetChangePage = createAction('[Cart] FiltersGet ChangePage', props<{event: PageEvent }>());

  static GetInit = createAction('[Cart] GetInit');
  static GetDataInit = createAction('[Cart] GetDataInit');
  static GetExecute = createAction('[Cart] Get Execute');
   static GetSetData = createAction('[Cart] Get SetData', props<{data: Cart }>()); 
  static GetRequestUpdate = createAction('[Cart] Get RequestUpdate', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateSuccess = createAction('[Cart] Get RequestUpdateSuccess', props<{request: GetRequest }>());
  static GetRequestUpdateOne = createAction('[Cart] Get RequestUpdateOne', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOneSuccess = createAction('[Cart] Get RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static GetSuccess = createAction('[Cart] Get Success');
  static GetSetError = createAction('[Cart] Get SetError', props<{errors: ValidationError[][]}>());

  static IdsGetInit = createAction('[Cart] IdsGetInit');
  static IdsGetDataInit = createAction('[Cart] IdsGetDataInit');
  static IdsGetExecute = createAction('[Cart] IdsGet Execute');
   static IdsGetSetData = createAction('[Cart] IdsGet SetData', props<{data: Pagination<Cart> }>()); 
  static IdsGetRequestUpdate = createAction('[Cart] IdsGet RequestUpdate', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateSuccess = createAction('[Cart] IdsGet RequestUpdateSuccess', props<{request: IdsGetRequest }>());
  static IdsGetRequestUpdateOne = createAction('[Cart] IdsGet RequestUpdateOne', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOneSuccess = createAction('[Cart] IdsGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static IdsGetSuccess = createAction('[Cart] IdsGet Success');
  static IdsGetSetError = createAction('[Cart] IdsGet SetError', props<{errors: ValidationError[][]}>());
     
    static IdsGetChangePage = createAction('[Cart] IdsGet ChangePage', props<{event: PageEvent }>());

  static PostInit = createAction('[Cart] PostInit');
  static PostDataInit = createAction('[Cart] PostDataInit');
  static PostExecute = createAction('[Cart] Post Execute');
   static PostSetData = createAction('[Cart] Post SetData', props<{data: Cart }>()); 
  static PostRequestUpdate = createAction('[Cart] Post RequestUpdate', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateSuccess = createAction('[Cart] Post RequestUpdateSuccess', props<{request: PostRequest }>());
  static PostRequestUpdateOne = createAction('[Cart] Post RequestUpdateOne', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOneSuccess = createAction('[Cart] Post RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PostSuccess = createAction('[Cart] Post Success');
  static PostSetError = createAction('[Cart] Post SetError', props<{errors: ValidationError[][]}>());

  static PutInit = createAction('[Cart] PutInit');
  static PutDataInit = createAction('[Cart] PutDataInit');
  static PutExecute = createAction('[Cart] Put Execute');
   static PutSetData = createAction('[Cart] Put SetData', props<{data: Cart }>()); 
  static PutRequestUpdate = createAction('[Cart] Put RequestUpdate', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateSuccess = createAction('[Cart] Put RequestUpdateSuccess', props<{request: PutRequest }>());
  static PutRequestUpdateOne = createAction('[Cart] Put RequestUpdateOne', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOneSuccess = createAction('[Cart] Put RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PutSuccess = createAction('[Cart] Put Success');
  static PutSetError = createAction('[Cart] Put SetError', props<{errors: ValidationError[][]}>());

  static RangeDeleteInit = createAction('[Cart] RangeDeleteInit');
  static RangeDeleteDataInit = createAction('[Cart] RangeDeleteDataInit');
  static RangeDeleteExecute = createAction('[Cart] RangeDelete Execute');
  
  static RangeDeleteRequestUpdate = createAction('[Cart] RangeDelete RequestUpdate', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateSuccess = createAction('[Cart] RangeDelete RequestUpdateSuccess', props<{request: RangeDeleteRequest }>());
  static RangeDeleteRequestUpdateOne = createAction('[Cart] RangeDelete RequestUpdateOne', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOneSuccess = createAction('[Cart] RangeDelete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangeDeleteSuccess = createAction('[Cart] RangeDelete Success');
  static RangeDeleteSetError = createAction('[Cart] RangeDelete SetError', props<{errors: ValidationError[][]}>());

  static RangePostInit = createAction('[Cart] RangePostInit');
  static RangePostDataInit = createAction('[Cart] RangePostDataInit');
  static RangePostExecute = createAction('[Cart] RangePost Execute');
   static RangePostSetData = createAction('[Cart] RangePost SetData', props<{data: Pagination<Cart> }>()); 
  static RangePostRequestUpdate = createAction('[Cart] RangePost RequestUpdate', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateSuccess = createAction('[Cart] RangePost RequestUpdateSuccess', props<{request: RangePostRequest }>());
  static RangePostRequestUpdateOne = createAction('[Cart] RangePost RequestUpdateOne', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOneSuccess = createAction('[Cart] RangePost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePostSuccess = createAction('[Cart] RangePost Success');
  static RangePostSetError = createAction('[Cart] RangePost SetError', props<{errors: ValidationError[][]}>());
     
    static RangePostChangePage = createAction('[Cart] RangePost ChangePage', props<{event: PageEvent }>());

  static RangePutInit = createAction('[Cart] RangePutInit');
  static RangePutDataInit = createAction('[Cart] RangePutDataInit');
  static RangePutExecute = createAction('[Cart] RangePut Execute');
   static RangePutSetData = createAction('[Cart] RangePut SetData', props<{data: Pagination<Cart> }>()); 
  static RangePutRequestUpdate = createAction('[Cart] RangePut RequestUpdate', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateSuccess = createAction('[Cart] RangePut RequestUpdateSuccess', props<{request: RangePutRequest }>());
  static RangePutRequestUpdateOne = createAction('[Cart] RangePut RequestUpdateOne', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOneSuccess = createAction('[Cart] RangePut RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePutSuccess = createAction('[Cart] RangePut Success');
  static RangePutSetError = createAction('[Cart] RangePut SetError', props<{errors: ValidationError[][]}>());
     
    static RangePutChangePage = createAction('[Cart] RangePut ChangePage', props<{event: PageEvent }>());
}
