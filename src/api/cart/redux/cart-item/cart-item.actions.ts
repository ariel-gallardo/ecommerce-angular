import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import {Response} from '../../models/common/response.model'; 
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { BaseResponse } from '@api/cart/models/base-response.model';
import { CartItem } from '@api/cart/models/cart-item.model';
import { ValidationError } from '@api/cart/models/validation-error.model';
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
import { PageEvent } from '@angular/material/paginator';
import { HttpHeaders } from '@angular/common/http';

export class CartItemActions {

  static Init = createAction('[CartItem] Init');

  static DeleteInit = createAction('[CartItem] DeleteInit');
  static DeleteDataInit = createAction('[CartItem] DeleteDataInit');
  static DeleteExecute = createAction('[CartItem] Delete Execute');
  
  static DeleteRequestUpdate = createAction('[CartItem] Delete RequestUpdate', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateSuccess = createAction('[CartItem] Delete RequestUpdateSuccess', props<{request: DeleteRequest }>());
  static DeleteRequestUpdateOne = createAction('[CartItem] Delete RequestUpdateOne', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOneSuccess = createAction('[CartItem] Delete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static DeleteSuccess = createAction('[CartItem] Delete Success');
  static DeleteSetError = createAction('[CartItem] Delete SetError', props<{errors: ValidationError[][]}>());

  static FiltersFirstGetInit = createAction('[CartItem] FiltersFirstGetInit');
  static FiltersFirstGetDataInit = createAction('[CartItem] FiltersFirstGetDataInit');
  static FiltersFirstGetExecute = createAction('[CartItem] FiltersFirstGet Execute');
   static FiltersFirstGetSetData = createAction('[CartItem] FiltersFirstGet SetData', props<{data: CartItem }>()); 
  static FiltersFirstGetRequestUpdate = createAction('[CartItem] FiltersFirstGet RequestUpdate', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateSuccess = createAction('[CartItem] FiltersFirstGet RequestUpdateSuccess', props<{request: FiltersFirstGetRequest }>());
  static FiltersFirstGetRequestUpdateOne = createAction('[CartItem] FiltersFirstGet RequestUpdateOne', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOneSuccess = createAction('[CartItem] FiltersFirstGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersFirstGetSuccess = createAction('[CartItem] FiltersFirstGet Success');
  static FiltersFirstGetSetError = createAction('[CartItem] FiltersFirstGet SetError', props<{errors: ValidationError[][]}>());

  static FiltersGetInit = createAction('[CartItem] FiltersGetInit');
  static FiltersGetDataInit = createAction('[CartItem] FiltersGetDataInit');
  static FiltersGetExecute = createAction('[CartItem] FiltersGet Execute');
   static FiltersGetSetData = createAction('[CartItem] FiltersGet SetData', props<{data: Pagination<CartItem> }>()); 
  static FiltersGetRequestUpdate = createAction('[CartItem] FiltersGet RequestUpdate', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateSuccess = createAction('[CartItem] FiltersGet RequestUpdateSuccess', props<{request: FiltersGetRequest }>());
  static FiltersGetRequestUpdateOne = createAction('[CartItem] FiltersGet RequestUpdateOne', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOneSuccess = createAction('[CartItem] FiltersGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersGetSuccess = createAction('[CartItem] FiltersGet Success');
  static FiltersGetSetError = createAction('[CartItem] FiltersGet SetError', props<{errors: ValidationError[][]}>());
     
    static FiltersGetChangePage = createAction('[CartItem] FiltersGet ChangePage', props<{event: PageEvent }>());

  static GetInit = createAction('[CartItem] GetInit');
  static GetDataInit = createAction('[CartItem] GetDataInit');
  static GetExecute = createAction('[CartItem] Get Execute');
   static GetSetData = createAction('[CartItem] Get SetData', props<{data: CartItem }>()); 
  static GetRequestUpdate = createAction('[CartItem] Get RequestUpdate', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateSuccess = createAction('[CartItem] Get RequestUpdateSuccess', props<{request: GetRequest }>());
  static GetRequestUpdateOne = createAction('[CartItem] Get RequestUpdateOne', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOneSuccess = createAction('[CartItem] Get RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static GetSuccess = createAction('[CartItem] Get Success');
  static GetSetError = createAction('[CartItem] Get SetError', props<{errors: ValidationError[][]}>());

  static IdsGetInit = createAction('[CartItem] IdsGetInit');
  static IdsGetDataInit = createAction('[CartItem] IdsGetDataInit');
  static IdsGetExecute = createAction('[CartItem] IdsGet Execute');
   static IdsGetSetData = createAction('[CartItem] IdsGet SetData', props<{data: Pagination<CartItem> }>()); 
  static IdsGetRequestUpdate = createAction('[CartItem] IdsGet RequestUpdate', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateSuccess = createAction('[CartItem] IdsGet RequestUpdateSuccess', props<{request: IdsGetRequest }>());
  static IdsGetRequestUpdateOne = createAction('[CartItem] IdsGet RequestUpdateOne', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOneSuccess = createAction('[CartItem] IdsGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static IdsGetSuccess = createAction('[CartItem] IdsGet Success');
  static IdsGetSetError = createAction('[CartItem] IdsGet SetError', props<{errors: ValidationError[][]}>());
     
    static IdsGetChangePage = createAction('[CartItem] IdsGet ChangePage', props<{event: PageEvent }>());

  static PostInit = createAction('[CartItem] PostInit');
  static PostDataInit = createAction('[CartItem] PostDataInit');
  static PostExecute = createAction('[CartItem] Post Execute');
   static PostSetData = createAction('[CartItem] Post SetData', props<{data: CartItem }>()); 
  static PostRequestUpdate = createAction('[CartItem] Post RequestUpdate', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateSuccess = createAction('[CartItem] Post RequestUpdateSuccess', props<{request: PostRequest }>());
  static PostRequestUpdateOne = createAction('[CartItem] Post RequestUpdateOne', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOneSuccess = createAction('[CartItem] Post RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PostSuccess = createAction('[CartItem] Post Success');
  static PostSetError = createAction('[CartItem] Post SetError', props<{errors: ValidationError[][]}>());

  static PutInit = createAction('[CartItem] PutInit');
  static PutDataInit = createAction('[CartItem] PutDataInit');
  static PutExecute = createAction('[CartItem] Put Execute');
   static PutSetData = createAction('[CartItem] Put SetData', props<{data: CartItem }>()); 
  static PutRequestUpdate = createAction('[CartItem] Put RequestUpdate', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateSuccess = createAction('[CartItem] Put RequestUpdateSuccess', props<{request: PutRequest }>());
  static PutRequestUpdateOne = createAction('[CartItem] Put RequestUpdateOne', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOneSuccess = createAction('[CartItem] Put RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PutSuccess = createAction('[CartItem] Put Success');
  static PutSetError = createAction('[CartItem] Put SetError', props<{errors: ValidationError[][]}>());

  static RangeDeleteInit = createAction('[CartItem] RangeDeleteInit');
  static RangeDeleteDataInit = createAction('[CartItem] RangeDeleteDataInit');
  static RangeDeleteExecute = createAction('[CartItem] RangeDelete Execute');
  
  static RangeDeleteRequestUpdate = createAction('[CartItem] RangeDelete RequestUpdate', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateSuccess = createAction('[CartItem] RangeDelete RequestUpdateSuccess', props<{request: RangeDeleteRequest }>());
  static RangeDeleteRequestUpdateOne = createAction('[CartItem] RangeDelete RequestUpdateOne', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOneSuccess = createAction('[CartItem] RangeDelete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangeDeleteSuccess = createAction('[CartItem] RangeDelete Success');
  static RangeDeleteSetError = createAction('[CartItem] RangeDelete SetError', props<{errors: ValidationError[][]}>());

  static RangePostInit = createAction('[CartItem] RangePostInit');
  static RangePostDataInit = createAction('[CartItem] RangePostDataInit');
  static RangePostExecute = createAction('[CartItem] RangePost Execute');
   static RangePostSetData = createAction('[CartItem] RangePost SetData', props<{data: Pagination<CartItem> }>()); 
  static RangePostRequestUpdate = createAction('[CartItem] RangePost RequestUpdate', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateSuccess = createAction('[CartItem] RangePost RequestUpdateSuccess', props<{request: RangePostRequest }>());
  static RangePostRequestUpdateOne = createAction('[CartItem] RangePost RequestUpdateOne', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOneSuccess = createAction('[CartItem] RangePost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePostSuccess = createAction('[CartItem] RangePost Success');
  static RangePostSetError = createAction('[CartItem] RangePost SetError', props<{errors: ValidationError[][]}>());
     
    static RangePostChangePage = createAction('[CartItem] RangePost ChangePage', props<{event: PageEvent }>());

  static RangePutInit = createAction('[CartItem] RangePutInit');
  static RangePutDataInit = createAction('[CartItem] RangePutDataInit');
  static RangePutExecute = createAction('[CartItem] RangePut Execute');
   static RangePutSetData = createAction('[CartItem] RangePut SetData', props<{data: Pagination<CartItem> }>()); 
  static RangePutRequestUpdate = createAction('[CartItem] RangePut RequestUpdate', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateSuccess = createAction('[CartItem] RangePut RequestUpdateSuccess', props<{request: RangePutRequest }>());
  static RangePutRequestUpdateOne = createAction('[CartItem] RangePut RequestUpdateOne', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOneSuccess = createAction('[CartItem] RangePut RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePutSuccess = createAction('[CartItem] RangePut Success');
  static RangePutSetError = createAction('[CartItem] RangePut SetError', props<{errors: ValidationError[][]}>());
     
    static RangePutChangePage = createAction('[CartItem] RangePut ChangePage', props<{event: PageEvent }>());
}
