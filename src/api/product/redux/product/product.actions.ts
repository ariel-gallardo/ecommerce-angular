import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import {Response} from '../../models/common/response.model'; 
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { BaseResponse } from '@api/product/models/base-response.model';
import { Product } from '@api/product/models/product.model';
import { ValidationError } from '@api/product/models/validation-error.model';
import { DeleteRequest } from '@api/product/services/product.service'; 
import { FiltersFirstGetRequest } from '@api/product/services/product.service'; 
import { FiltersGetRequest } from '@api/product/services/product.service'; 
import { GetRequest } from '@api/product/services/product.service'; 
import { IdsGetRequest } from '@api/product/services/product.service'; 
import { PostRequest } from '@api/product/services/product.service'; 
import { PutRequest } from '@api/product/services/product.service'; 
import { RangeDeleteRequest } from '@api/product/services/product.service'; 
import { RangePostRequest } from '@api/product/services/product.service'; 
import { RangePutRequest } from '@api/product/services/product.service'; 
import { PageEvent } from '@angular/material/paginator';
import { HttpHeaders } from '@angular/common/http';

export class ProductActions {

  static Init = createAction('[Product] Init');

  static DeleteInit = createAction('[Product] DeleteInit');
  static DeleteDataInit = createAction('[Product] DeleteDataInit');
  static DeleteExecute = createAction('[Product] Delete Execute');
  
  static DeleteRequestUpdate = createAction('[Product] Delete RequestUpdate', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateSuccess = createAction('[Product] Delete RequestUpdateSuccess', props<{request: DeleteRequest }>());
  static DeleteRequestUpdateOne = createAction('[Product] Delete RequestUpdateOne', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOneSuccess = createAction('[Product] Delete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static DeleteSuccess = createAction('[Product] Delete Success');
  static DeleteSetError = createAction('[Product] Delete SetError', props<{errors: ValidationError[][]}>());

  static FiltersFirstGetInit = createAction('[Product] FiltersFirstGetInit');
  static FiltersFirstGetDataInit = createAction('[Product] FiltersFirstGetDataInit');
  static FiltersFirstGetExecute = createAction('[Product] FiltersFirstGet Execute');
   static FiltersFirstGetSetData = createAction('[Product] FiltersFirstGet SetData', props<{data: Product }>()); 
  static FiltersFirstGetRequestUpdate = createAction('[Product] FiltersFirstGet RequestUpdate', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateSuccess = createAction('[Product] FiltersFirstGet RequestUpdateSuccess', props<{request: FiltersFirstGetRequest }>());
  static FiltersFirstGetRequestUpdateOne = createAction('[Product] FiltersFirstGet RequestUpdateOne', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOneSuccess = createAction('[Product] FiltersFirstGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersFirstGetSuccess = createAction('[Product] FiltersFirstGet Success');
  static FiltersFirstGetSetError = createAction('[Product] FiltersFirstGet SetError', props<{errors: ValidationError[][]}>());

  static FiltersGetInit = createAction('[Product] FiltersGetInit');
  static FiltersGetDataInit = createAction('[Product] FiltersGetDataInit');
  static FiltersGetExecute = createAction('[Product] FiltersGet Execute');
   static FiltersGetSetData = createAction('[Product] FiltersGet SetData', props<{data: Pagination<Product> }>()); 
  static FiltersGetRequestUpdate = createAction('[Product] FiltersGet RequestUpdate', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateSuccess = createAction('[Product] FiltersGet RequestUpdateSuccess', props<{request: FiltersGetRequest }>());
  static FiltersGetRequestUpdateOne = createAction('[Product] FiltersGet RequestUpdateOne', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOneSuccess = createAction('[Product] FiltersGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersGetSuccess = createAction('[Product] FiltersGet Success');
  static FiltersGetSetError = createAction('[Product] FiltersGet SetError', props<{errors: ValidationError[][]}>());
     
    static FiltersGetChangePage = createAction('[Product] FiltersGet ChangePage', props<{event: PageEvent }>());

  static GetInit = createAction('[Product] GetInit');
  static GetDataInit = createAction('[Product] GetDataInit');
  static GetExecute = createAction('[Product] Get Execute');
   static GetSetData = createAction('[Product] Get SetData', props<{data: Product }>()); 
  static GetRequestUpdate = createAction('[Product] Get RequestUpdate', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateSuccess = createAction('[Product] Get RequestUpdateSuccess', props<{request: GetRequest }>());
  static GetRequestUpdateOne = createAction('[Product] Get RequestUpdateOne', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOneSuccess = createAction('[Product] Get RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static GetSuccess = createAction('[Product] Get Success');
  static GetSetError = createAction('[Product] Get SetError', props<{errors: ValidationError[][]}>());

  static IdsGetInit = createAction('[Product] IdsGetInit');
  static IdsGetDataInit = createAction('[Product] IdsGetDataInit');
  static IdsGetExecute = createAction('[Product] IdsGet Execute');
   static IdsGetSetData = createAction('[Product] IdsGet SetData', props<{data: Pagination<Product> }>()); 
  static IdsGetRequestUpdate = createAction('[Product] IdsGet RequestUpdate', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateSuccess = createAction('[Product] IdsGet RequestUpdateSuccess', props<{request: IdsGetRequest }>());
  static IdsGetRequestUpdateOne = createAction('[Product] IdsGet RequestUpdateOne', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOneSuccess = createAction('[Product] IdsGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static IdsGetSuccess = createAction('[Product] IdsGet Success');
  static IdsGetSetError = createAction('[Product] IdsGet SetError', props<{errors: ValidationError[][]}>());
     
    static IdsGetChangePage = createAction('[Product] IdsGet ChangePage', props<{event: PageEvent }>());

  static PostInit = createAction('[Product] PostInit');
  static PostDataInit = createAction('[Product] PostDataInit');
  static PostExecute = createAction('[Product] Post Execute');
   static PostSetData = createAction('[Product] Post SetData', props<{data: Product }>()); 
  static PostRequestUpdate = createAction('[Product] Post RequestUpdate', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateSuccess = createAction('[Product] Post RequestUpdateSuccess', props<{request: PostRequest }>());
  static PostRequestUpdateOne = createAction('[Product] Post RequestUpdateOne', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOneSuccess = createAction('[Product] Post RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PostSuccess = createAction('[Product] Post Success');
  static PostSetError = createAction('[Product] Post SetError', props<{errors: ValidationError[][]}>());

  static PutInit = createAction('[Product] PutInit');
  static PutDataInit = createAction('[Product] PutDataInit');
  static PutExecute = createAction('[Product] Put Execute');
   static PutSetData = createAction('[Product] Put SetData', props<{data: Product }>()); 
  static PutRequestUpdate = createAction('[Product] Put RequestUpdate', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateSuccess = createAction('[Product] Put RequestUpdateSuccess', props<{request: PutRequest }>());
  static PutRequestUpdateOne = createAction('[Product] Put RequestUpdateOne', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOneSuccess = createAction('[Product] Put RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PutSuccess = createAction('[Product] Put Success');
  static PutSetError = createAction('[Product] Put SetError', props<{errors: ValidationError[][]}>());

  static RangeDeleteInit = createAction('[Product] RangeDeleteInit');
  static RangeDeleteDataInit = createAction('[Product] RangeDeleteDataInit');
  static RangeDeleteExecute = createAction('[Product] RangeDelete Execute');
  
  static RangeDeleteRequestUpdate = createAction('[Product] RangeDelete RequestUpdate', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateSuccess = createAction('[Product] RangeDelete RequestUpdateSuccess', props<{request: RangeDeleteRequest }>());
  static RangeDeleteRequestUpdateOne = createAction('[Product] RangeDelete RequestUpdateOne', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOneSuccess = createAction('[Product] RangeDelete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangeDeleteSuccess = createAction('[Product] RangeDelete Success');
  static RangeDeleteSetError = createAction('[Product] RangeDelete SetError', props<{errors: ValidationError[][]}>());

  static RangePostInit = createAction('[Product] RangePostInit');
  static RangePostDataInit = createAction('[Product] RangePostDataInit');
  static RangePostExecute = createAction('[Product] RangePost Execute');
   static RangePostSetData = createAction('[Product] RangePost SetData', props<{data: Pagination<Product> }>()); 
  static RangePostRequestUpdate = createAction('[Product] RangePost RequestUpdate', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateSuccess = createAction('[Product] RangePost RequestUpdateSuccess', props<{request: RangePostRequest }>());
  static RangePostRequestUpdateOne = createAction('[Product] RangePost RequestUpdateOne', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOneSuccess = createAction('[Product] RangePost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePostSuccess = createAction('[Product] RangePost Success');
  static RangePostSetError = createAction('[Product] RangePost SetError', props<{errors: ValidationError[][]}>());
     
    static RangePostChangePage = createAction('[Product] RangePost ChangePage', props<{event: PageEvent }>());

  static RangePutInit = createAction('[Product] RangePutInit');
  static RangePutDataInit = createAction('[Product] RangePutDataInit');
  static RangePutExecute = createAction('[Product] RangePut Execute');
   static RangePutSetData = createAction('[Product] RangePut SetData', props<{data: Pagination<Product> }>()); 
  static RangePutRequestUpdate = createAction('[Product] RangePut RequestUpdate', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateSuccess = createAction('[Product] RangePut RequestUpdateSuccess', props<{request: RangePutRequest }>());
  static RangePutRequestUpdateOne = createAction('[Product] RangePut RequestUpdateOne', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOneSuccess = createAction('[Product] RangePut RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePutSuccess = createAction('[Product] RangePut Success');
  static RangePutSetError = createAction('[Product] RangePut SetError', props<{errors: ValidationError[][]}>());
     
    static RangePutChangePage = createAction('[Product] RangePut ChangePage', props<{event: PageEvent }>());
}
