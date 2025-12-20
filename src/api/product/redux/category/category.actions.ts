import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import { Category } from '@api/product/models/category.model';
import { ValidationError } from '@api/product/models/validation-error.model';
import { DeleteRequest } from '@api/product/services/category.service'; 
import { FiltersFirstGetRequest } from '@api/product/services/category.service'; 
import { FiltersGetRequest } from '@api/product/services/category.service'; 
import { GetRequest } from '@api/product/services/category.service'; 
import { IdsGetRequest } from '@api/product/services/category.service'; 
import { PostRequest } from '@api/product/services/category.service'; 
import { PutRequest } from '@api/product/services/category.service'; 
import { RangeDeleteRequest } from '@api/product/services/category.service'; 
import { RangePostRequest } from '@api/product/services/category.service'; 
import { RangePutRequest } from '@api/product/services/category.service'; 
import { PageEvent } from '@angular/material/paginator';

export class CategoryActions {

  static Init = createAction('[Category] Init');

  static DeleteInit = createAction('[Category] DeleteInit');
  static DeleteDataInit = createAction('[Category] DeleteDataInit');
  static DeleteExecute = createAction('[Category] Delete Execute');
  
  static DeleteRequestUpdate = createAction('[Category] Delete RequestUpdate', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateSuccess = createAction('[Category] Delete RequestUpdateSuccess', props<{request: DeleteRequest }>());
  static DeleteRequestUpdateOne = createAction('[Category] Delete RequestUpdateOne', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOneSuccess = createAction('[Category] Delete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static DeleteSuccess = createAction('[Category] Delete Success');
  static DeleteSetError = createAction('[Category] Delete SetError', props<{errors: ValidationError[][]}>());

  static FiltersFirstGetInit = createAction('[Category] FiltersFirstGetInit');
  static FiltersFirstGetDataInit = createAction('[Category] FiltersFirstGetDataInit');
  static FiltersFirstGetExecute = createAction('[Category] FiltersFirstGet Execute');
   static FiltersFirstGetSetData = createAction('[Category] FiltersFirstGet SetData', props<{data: Category }>()); 
  static FiltersFirstGetRequestUpdate = createAction('[Category] FiltersFirstGet RequestUpdate', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateSuccess = createAction('[Category] FiltersFirstGet RequestUpdateSuccess', props<{request: FiltersFirstGetRequest }>());
  static FiltersFirstGetRequestUpdateOne = createAction('[Category] FiltersFirstGet RequestUpdateOne', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOneSuccess = createAction('[Category] FiltersFirstGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersFirstGetSuccess = createAction('[Category] FiltersFirstGet Success');
  static FiltersFirstGetSetError = createAction('[Category] FiltersFirstGet SetError', props<{errors: ValidationError[][]}>());

  static FiltersGetInit = createAction('[Category] FiltersGetInit');
  static FiltersGetDataInit = createAction('[Category] FiltersGetDataInit');
  static FiltersGetExecute = createAction('[Category] FiltersGet Execute');
   static FiltersGetSetData = createAction('[Category] FiltersGet SetData', props<{data: Pagination<Category> }>()); 
  static FiltersGetRequestUpdate = createAction('[Category] FiltersGet RequestUpdate', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateSuccess = createAction('[Category] FiltersGet RequestUpdateSuccess', props<{request: FiltersGetRequest }>());
  static FiltersGetRequestUpdateOne = createAction('[Category] FiltersGet RequestUpdateOne', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOneSuccess = createAction('[Category] FiltersGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersGetSuccess = createAction('[Category] FiltersGet Success');
  static FiltersGetSetError = createAction('[Category] FiltersGet SetError', props<{errors: ValidationError[][]}>());
     
    static FiltersGetChangePage = createAction('[Category] FiltersGet ChangePage', props<{event: PageEvent }>());

  static GetInit = createAction('[Category] GetInit');
  static GetDataInit = createAction('[Category] GetDataInit');
  static GetExecute = createAction('[Category] Get Execute');
   static GetSetData = createAction('[Category] Get SetData', props<{data: Category }>()); 
  static GetRequestUpdate = createAction('[Category] Get RequestUpdate', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateSuccess = createAction('[Category] Get RequestUpdateSuccess', props<{request: GetRequest }>());
  static GetRequestUpdateOne = createAction('[Category] Get RequestUpdateOne', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOneSuccess = createAction('[Category] Get RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static GetSuccess = createAction('[Category] Get Success');
  static GetSetError = createAction('[Category] Get SetError', props<{errors: ValidationError[][]}>());

  static IdsGetInit = createAction('[Category] IdsGetInit');
  static IdsGetDataInit = createAction('[Category] IdsGetDataInit');
  static IdsGetExecute = createAction('[Category] IdsGet Execute');
   static IdsGetSetData = createAction('[Category] IdsGet SetData', props<{data: Pagination<Category> }>()); 
  static IdsGetRequestUpdate = createAction('[Category] IdsGet RequestUpdate', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateSuccess = createAction('[Category] IdsGet RequestUpdateSuccess', props<{request: IdsGetRequest }>());
  static IdsGetRequestUpdateOne = createAction('[Category] IdsGet RequestUpdateOne', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOneSuccess = createAction('[Category] IdsGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static IdsGetSuccess = createAction('[Category] IdsGet Success');
  static IdsGetSetError = createAction('[Category] IdsGet SetError', props<{errors: ValidationError[][]}>());
     
    static IdsGetChangePage = createAction('[Category] IdsGet ChangePage', props<{event: PageEvent }>());

  static PostInit = createAction('[Category] PostInit');
  static PostDataInit = createAction('[Category] PostDataInit');
  static PostExecute = createAction('[Category] Post Execute');
   static PostSetData = createAction('[Category] Post SetData', props<{data: Category }>()); 
  static PostRequestUpdate = createAction('[Category] Post RequestUpdate', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateSuccess = createAction('[Category] Post RequestUpdateSuccess', props<{request: PostRequest }>());
  static PostRequestUpdateOne = createAction('[Category] Post RequestUpdateOne', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOneSuccess = createAction('[Category] Post RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PostSuccess = createAction('[Category] Post Success');
  static PostSetError = createAction('[Category] Post SetError', props<{errors: ValidationError[][]}>());

  static PutInit = createAction('[Category] PutInit');
  static PutDataInit = createAction('[Category] PutDataInit');
  static PutExecute = createAction('[Category] Put Execute');
   static PutSetData = createAction('[Category] Put SetData', props<{data: Category }>()); 
  static PutRequestUpdate = createAction('[Category] Put RequestUpdate', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateSuccess = createAction('[Category] Put RequestUpdateSuccess', props<{request: PutRequest }>());
  static PutRequestUpdateOne = createAction('[Category] Put RequestUpdateOne', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOneSuccess = createAction('[Category] Put RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PutSuccess = createAction('[Category] Put Success');
  static PutSetError = createAction('[Category] Put SetError', props<{errors: ValidationError[][]}>());

  static RangeDeleteInit = createAction('[Category] RangeDeleteInit');
  static RangeDeleteDataInit = createAction('[Category] RangeDeleteDataInit');
  static RangeDeleteExecute = createAction('[Category] RangeDelete Execute');
  
  static RangeDeleteRequestUpdate = createAction('[Category] RangeDelete RequestUpdate', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateSuccess = createAction('[Category] RangeDelete RequestUpdateSuccess', props<{request: RangeDeleteRequest }>());
  static RangeDeleteRequestUpdateOne = createAction('[Category] RangeDelete RequestUpdateOne', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOneSuccess = createAction('[Category] RangeDelete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangeDeleteSuccess = createAction('[Category] RangeDelete Success');
  static RangeDeleteSetError = createAction('[Category] RangeDelete SetError', props<{errors: ValidationError[][]}>());

  static RangePostInit = createAction('[Category] RangePostInit');
  static RangePostDataInit = createAction('[Category] RangePostDataInit');
  static RangePostExecute = createAction('[Category] RangePost Execute');
   static RangePostSetData = createAction('[Category] RangePost SetData', props<{data: Pagination<Category> }>()); 
  static RangePostRequestUpdate = createAction('[Category] RangePost RequestUpdate', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateSuccess = createAction('[Category] RangePost RequestUpdateSuccess', props<{request: RangePostRequest }>());
  static RangePostRequestUpdateOne = createAction('[Category] RangePost RequestUpdateOne', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOneSuccess = createAction('[Category] RangePost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePostSuccess = createAction('[Category] RangePost Success');
  static RangePostSetError = createAction('[Category] RangePost SetError', props<{errors: ValidationError[][]}>());
     
    static RangePostChangePage = createAction('[Category] RangePost ChangePage', props<{event: PageEvent }>());

  static RangePutInit = createAction('[Category] RangePutInit');
  static RangePutDataInit = createAction('[Category] RangePutDataInit');
  static RangePutExecute = createAction('[Category] RangePut Execute');
   static RangePutSetData = createAction('[Category] RangePut SetData', props<{data: Pagination<Category> }>()); 
  static RangePutRequestUpdate = createAction('[Category] RangePut RequestUpdate', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateSuccess = createAction('[Category] RangePut RequestUpdateSuccess', props<{request: RangePutRequest }>());
  static RangePutRequestUpdateOne = createAction('[Category] RangePut RequestUpdateOne', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOneSuccess = createAction('[Category] RangePut RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePutSuccess = createAction('[Category] RangePut Success');
  static RangePutSetError = createAction('[Category] RangePut SetError', props<{errors: ValidationError[][]}>());
     
    static RangePutChangePage = createAction('[Category] RangePut ChangePage', props<{event: PageEvent }>());
}
