import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import { LogError } from '@api/logs/models/log-error.model';
import { ValidationError } from '@api/logs/models/validation-error.model';
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
import { PageEvent } from '@angular/material/paginator';

export class ErrorActions {

  static Init = createAction('[Error] Init');

  static DeleteInit = createAction('[Error] DeleteInit');
  static DeleteDataInit = createAction('[Error] DeleteDataInit');
  static DeleteExecute = createAction('[Error] Delete Execute');
  
  static DeleteRequestUpdate = createAction('[Error] Delete RequestUpdate', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateSuccess = createAction('[Error] Delete RequestUpdateSuccess', props<{request: DeleteRequest }>());
  static DeleteRequestUpdateOne = createAction('[Error] Delete RequestUpdateOne', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOneSuccess = createAction('[Error] Delete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static DeleteSuccess = createAction('[Error] Delete Success');
  static DeleteSetError = createAction('[Error] Delete SetError', props<{errors: ValidationError[][]}>());

  static FiltersFirstGetInit = createAction('[Error] FiltersFirstGetInit');
  static FiltersFirstGetDataInit = createAction('[Error] FiltersFirstGetDataInit');
  static FiltersFirstGetExecute = createAction('[Error] FiltersFirstGet Execute');
   static FiltersFirstGetSetData = createAction('[Error] FiltersFirstGet SetData', props<{data: LogError }>()); 
  static FiltersFirstGetRequestUpdate = createAction('[Error] FiltersFirstGet RequestUpdate', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateSuccess = createAction('[Error] FiltersFirstGet RequestUpdateSuccess', props<{request: FiltersFirstGetRequest }>());
  static FiltersFirstGetRequestUpdateOne = createAction('[Error] FiltersFirstGet RequestUpdateOne', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOneSuccess = createAction('[Error] FiltersFirstGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersFirstGetSuccess = createAction('[Error] FiltersFirstGet Success');
  static FiltersFirstGetSetError = createAction('[Error] FiltersFirstGet SetError', props<{errors: ValidationError[][]}>());

  static FiltersGetInit = createAction('[Error] FiltersGetInit');
  static FiltersGetDataInit = createAction('[Error] FiltersGetDataInit');
  static FiltersGetExecute = createAction('[Error] FiltersGet Execute');
   static FiltersGetSetData = createAction('[Error] FiltersGet SetData', props<{data: Pagination<LogError> }>()); 
  static FiltersGetRequestUpdate = createAction('[Error] FiltersGet RequestUpdate', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateSuccess = createAction('[Error] FiltersGet RequestUpdateSuccess', props<{request: FiltersGetRequest }>());
  static FiltersGetRequestUpdateOne = createAction('[Error] FiltersGet RequestUpdateOne', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOneSuccess = createAction('[Error] FiltersGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersGetSuccess = createAction('[Error] FiltersGet Success');
  static FiltersGetSetError = createAction('[Error] FiltersGet SetError', props<{errors: ValidationError[][]}>());
     
    static FiltersGetChangePage = createAction('[Error] FiltersGet ChangePage', props<{event: PageEvent }>());

  static GetInit = createAction('[Error] GetInit');
  static GetDataInit = createAction('[Error] GetDataInit');
  static GetExecute = createAction('[Error] Get Execute');
   static GetSetData = createAction('[Error] Get SetData', props<{data: LogError }>()); 
  static GetRequestUpdate = createAction('[Error] Get RequestUpdate', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateSuccess = createAction('[Error] Get RequestUpdateSuccess', props<{request: GetRequest }>());
  static GetRequestUpdateOne = createAction('[Error] Get RequestUpdateOne', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOneSuccess = createAction('[Error] Get RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static GetSuccess = createAction('[Error] Get Success');
  static GetSetError = createAction('[Error] Get SetError', props<{errors: ValidationError[][]}>());

  static IdsGetInit = createAction('[Error] IdsGetInit');
  static IdsGetDataInit = createAction('[Error] IdsGetDataInit');
  static IdsGetExecute = createAction('[Error] IdsGet Execute');
   static IdsGetSetData = createAction('[Error] IdsGet SetData', props<{data: Pagination<LogError> }>()); 
  static IdsGetRequestUpdate = createAction('[Error] IdsGet RequestUpdate', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateSuccess = createAction('[Error] IdsGet RequestUpdateSuccess', props<{request: IdsGetRequest }>());
  static IdsGetRequestUpdateOne = createAction('[Error] IdsGet RequestUpdateOne', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOneSuccess = createAction('[Error] IdsGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static IdsGetSuccess = createAction('[Error] IdsGet Success');
  static IdsGetSetError = createAction('[Error] IdsGet SetError', props<{errors: ValidationError[][]}>());
     
    static IdsGetChangePage = createAction('[Error] IdsGet ChangePage', props<{event: PageEvent }>());

  static PostInit = createAction('[Error] PostInit');
  static PostDataInit = createAction('[Error] PostDataInit');
  static PostExecute = createAction('[Error] Post Execute');
   static PostSetData = createAction('[Error] Post SetData', props<{data: LogError }>()); 
  static PostRequestUpdate = createAction('[Error] Post RequestUpdate', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateSuccess = createAction('[Error] Post RequestUpdateSuccess', props<{request: PostRequest }>());
  static PostRequestUpdateOne = createAction('[Error] Post RequestUpdateOne', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOneSuccess = createAction('[Error] Post RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PostSuccess = createAction('[Error] Post Success');
  static PostSetError = createAction('[Error] Post SetError', props<{errors: ValidationError[][]}>());

  static PutInit = createAction('[Error] PutInit');
  static PutDataInit = createAction('[Error] PutDataInit');
  static PutExecute = createAction('[Error] Put Execute');
   static PutSetData = createAction('[Error] Put SetData', props<{data: LogError }>()); 
  static PutRequestUpdate = createAction('[Error] Put RequestUpdate', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateSuccess = createAction('[Error] Put RequestUpdateSuccess', props<{request: PutRequest }>());
  static PutRequestUpdateOne = createAction('[Error] Put RequestUpdateOne', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOneSuccess = createAction('[Error] Put RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PutSuccess = createAction('[Error] Put Success');
  static PutSetError = createAction('[Error] Put SetError', props<{errors: ValidationError[][]}>());

  static RangeDeleteInit = createAction('[Error] RangeDeleteInit');
  static RangeDeleteDataInit = createAction('[Error] RangeDeleteDataInit');
  static RangeDeleteExecute = createAction('[Error] RangeDelete Execute');
  
  static RangeDeleteRequestUpdate = createAction('[Error] RangeDelete RequestUpdate', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateSuccess = createAction('[Error] RangeDelete RequestUpdateSuccess', props<{request: RangeDeleteRequest }>());
  static RangeDeleteRequestUpdateOne = createAction('[Error] RangeDelete RequestUpdateOne', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOneSuccess = createAction('[Error] RangeDelete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangeDeleteSuccess = createAction('[Error] RangeDelete Success');
  static RangeDeleteSetError = createAction('[Error] RangeDelete SetError', props<{errors: ValidationError[][]}>());

  static RangePostInit = createAction('[Error] RangePostInit');
  static RangePostDataInit = createAction('[Error] RangePostDataInit');
  static RangePostExecute = createAction('[Error] RangePost Execute');
   static RangePostSetData = createAction('[Error] RangePost SetData', props<{data: Pagination<LogError> }>()); 
  static RangePostRequestUpdate = createAction('[Error] RangePost RequestUpdate', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateSuccess = createAction('[Error] RangePost RequestUpdateSuccess', props<{request: RangePostRequest }>());
  static RangePostRequestUpdateOne = createAction('[Error] RangePost RequestUpdateOne', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOneSuccess = createAction('[Error] RangePost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePostSuccess = createAction('[Error] RangePost Success');
  static RangePostSetError = createAction('[Error] RangePost SetError', props<{errors: ValidationError[][]}>());
     
    static RangePostChangePage = createAction('[Error] RangePost ChangePage', props<{event: PageEvent }>());

  static RangePutInit = createAction('[Error] RangePutInit');
  static RangePutDataInit = createAction('[Error] RangePutDataInit');
  static RangePutExecute = createAction('[Error] RangePut Execute');
   static RangePutSetData = createAction('[Error] RangePut SetData', props<{data: Pagination<LogError> }>()); 
  static RangePutRequestUpdate = createAction('[Error] RangePut RequestUpdate', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateSuccess = createAction('[Error] RangePut RequestUpdateSuccess', props<{request: RangePutRequest }>());
  static RangePutRequestUpdateOne = createAction('[Error] RangePut RequestUpdateOne', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOneSuccess = createAction('[Error] RangePut RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePutSuccess = createAction('[Error] RangePut Success');
  static RangePutSetError = createAction('[Error] RangePut SetError', props<{errors: ValidationError[][]}>());
     
    static RangePutChangePage = createAction('[Error] RangePut ChangePage', props<{event: PageEvent }>());
}
