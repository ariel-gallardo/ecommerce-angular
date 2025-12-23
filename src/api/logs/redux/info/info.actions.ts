import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import { Log } from '@api/logs/models/log.model';
import { ValidationError } from '@api/logs/models/validation-error.model';
import { DeleteRequest } from '@api/logs/services/info.service'; 
import { FiltersFirstGetRequest } from '@api/logs/services/info.service'; 
import { FiltersGetRequest } from '@api/logs/services/info.service'; 
import { GetRequest } from '@api/logs/services/info.service'; 
import { IdsGetRequest } from '@api/logs/services/info.service'; 
import { PostRequest } from '@api/logs/services/info.service'; 
import { PutRequest } from '@api/logs/services/info.service'; 
import { RangeDeleteRequest } from '@api/logs/services/info.service'; 
import { RangePostRequest } from '@api/logs/services/info.service'; 
import { RangePutRequest } from '@api/logs/services/info.service'; 
import { PageEvent } from '@angular/material/paginator';

export class InfoActions {

  static Init = createAction('[Info] Init');

  static DeleteInit = createAction('[Info] DeleteInit');
  static DeleteDataInit = createAction('[Info] DeleteDataInit');
  static DeleteExecute = createAction('[Info] Delete Execute');
  
  static DeleteRequestUpdate = createAction('[Info] Delete RequestUpdate', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateSuccess = createAction('[Info] Delete RequestUpdateSuccess', props<{request: DeleteRequest }>());
  static DeleteRequestUpdateOne = createAction('[Info] Delete RequestUpdateOne', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOneSuccess = createAction('[Info] Delete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static DeleteSuccess = createAction('[Info] Delete Success');
  static DeleteSetError = createAction('[Info] Delete SetError', props<{errors: ValidationError[][]}>());

  static FiltersFirstGetInit = createAction('[Info] FiltersFirstGetInit');
  static FiltersFirstGetDataInit = createAction('[Info] FiltersFirstGetDataInit');
  static FiltersFirstGetExecute = createAction('[Info] FiltersFirstGet Execute');
   static FiltersFirstGetSetData = createAction('[Info] FiltersFirstGet SetData', props<{data: Log }>()); 
  static FiltersFirstGetRequestUpdate = createAction('[Info] FiltersFirstGet RequestUpdate', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateSuccess = createAction('[Info] FiltersFirstGet RequestUpdateSuccess', props<{request: FiltersFirstGetRequest }>());
  static FiltersFirstGetRequestUpdateOne = createAction('[Info] FiltersFirstGet RequestUpdateOne', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOneSuccess = createAction('[Info] FiltersFirstGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersFirstGetSuccess = createAction('[Info] FiltersFirstGet Success');
  static FiltersFirstGetSetError = createAction('[Info] FiltersFirstGet SetError', props<{errors: ValidationError[][]}>());

  static FiltersGetInit = createAction('[Info] FiltersGetInit');
  static FiltersGetDataInit = createAction('[Info] FiltersGetDataInit');
  static FiltersGetExecute = createAction('[Info] FiltersGet Execute');
   static FiltersGetSetData = createAction('[Info] FiltersGet SetData', props<{data: Pagination<Log> }>()); 
  static FiltersGetRequestUpdate = createAction('[Info] FiltersGet RequestUpdate', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateSuccess = createAction('[Info] FiltersGet RequestUpdateSuccess', props<{request: FiltersGetRequest }>());
  static FiltersGetRequestUpdateOne = createAction('[Info] FiltersGet RequestUpdateOne', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOneSuccess = createAction('[Info] FiltersGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersGetSuccess = createAction('[Info] FiltersGet Success');
  static FiltersGetSetError = createAction('[Info] FiltersGet SetError', props<{errors: ValidationError[][]}>());
     
    static FiltersGetChangePage = createAction('[Info] FiltersGet ChangePage', props<{event: PageEvent }>());

  static GetInit = createAction('[Info] GetInit');
  static GetDataInit = createAction('[Info] GetDataInit');
  static GetExecute = createAction('[Info] Get Execute');
   static GetSetData = createAction('[Info] Get SetData', props<{data: Log }>()); 
  static GetRequestUpdate = createAction('[Info] Get RequestUpdate', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateSuccess = createAction('[Info] Get RequestUpdateSuccess', props<{request: GetRequest }>());
  static GetRequestUpdateOne = createAction('[Info] Get RequestUpdateOne', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOneSuccess = createAction('[Info] Get RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static GetSuccess = createAction('[Info] Get Success');
  static GetSetError = createAction('[Info] Get SetError', props<{errors: ValidationError[][]}>());

  static IdsGetInit = createAction('[Info] IdsGetInit');
  static IdsGetDataInit = createAction('[Info] IdsGetDataInit');
  static IdsGetExecute = createAction('[Info] IdsGet Execute');
   static IdsGetSetData = createAction('[Info] IdsGet SetData', props<{data: Pagination<Log> }>()); 
  static IdsGetRequestUpdate = createAction('[Info] IdsGet RequestUpdate', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateSuccess = createAction('[Info] IdsGet RequestUpdateSuccess', props<{request: IdsGetRequest }>());
  static IdsGetRequestUpdateOne = createAction('[Info] IdsGet RequestUpdateOne', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOneSuccess = createAction('[Info] IdsGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static IdsGetSuccess = createAction('[Info] IdsGet Success');
  static IdsGetSetError = createAction('[Info] IdsGet SetError', props<{errors: ValidationError[][]}>());
     
    static IdsGetChangePage = createAction('[Info] IdsGet ChangePage', props<{event: PageEvent }>());

  static PostInit = createAction('[Info] PostInit');
  static PostDataInit = createAction('[Info] PostDataInit');
  static PostExecute = createAction('[Info] Post Execute');
   static PostSetData = createAction('[Info] Post SetData', props<{data: Log }>()); 
  static PostRequestUpdate = createAction('[Info] Post RequestUpdate', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateSuccess = createAction('[Info] Post RequestUpdateSuccess', props<{request: PostRequest }>());
  static PostRequestUpdateOne = createAction('[Info] Post RequestUpdateOne', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOneSuccess = createAction('[Info] Post RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PostSuccess = createAction('[Info] Post Success');
  static PostSetError = createAction('[Info] Post SetError', props<{errors: ValidationError[][]}>());

  static PutInit = createAction('[Info] PutInit');
  static PutDataInit = createAction('[Info] PutDataInit');
  static PutExecute = createAction('[Info] Put Execute');
   static PutSetData = createAction('[Info] Put SetData', props<{data: Log }>()); 
  static PutRequestUpdate = createAction('[Info] Put RequestUpdate', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateSuccess = createAction('[Info] Put RequestUpdateSuccess', props<{request: PutRequest }>());
  static PutRequestUpdateOne = createAction('[Info] Put RequestUpdateOne', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOneSuccess = createAction('[Info] Put RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PutSuccess = createAction('[Info] Put Success');
  static PutSetError = createAction('[Info] Put SetError', props<{errors: ValidationError[][]}>());

  static RangeDeleteInit = createAction('[Info] RangeDeleteInit');
  static RangeDeleteDataInit = createAction('[Info] RangeDeleteDataInit');
  static RangeDeleteExecute = createAction('[Info] RangeDelete Execute');
  
  static RangeDeleteRequestUpdate = createAction('[Info] RangeDelete RequestUpdate', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateSuccess = createAction('[Info] RangeDelete RequestUpdateSuccess', props<{request: RangeDeleteRequest }>());
  static RangeDeleteRequestUpdateOne = createAction('[Info] RangeDelete RequestUpdateOne', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOneSuccess = createAction('[Info] RangeDelete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangeDeleteSuccess = createAction('[Info] RangeDelete Success');
  static RangeDeleteSetError = createAction('[Info] RangeDelete SetError', props<{errors: ValidationError[][]}>());

  static RangePostInit = createAction('[Info] RangePostInit');
  static RangePostDataInit = createAction('[Info] RangePostDataInit');
  static RangePostExecute = createAction('[Info] RangePost Execute');
   static RangePostSetData = createAction('[Info] RangePost SetData', props<{data: Pagination<Log> }>()); 
  static RangePostRequestUpdate = createAction('[Info] RangePost RequestUpdate', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateSuccess = createAction('[Info] RangePost RequestUpdateSuccess', props<{request: RangePostRequest }>());
  static RangePostRequestUpdateOne = createAction('[Info] RangePost RequestUpdateOne', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOneSuccess = createAction('[Info] RangePost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePostSuccess = createAction('[Info] RangePost Success');
  static RangePostSetError = createAction('[Info] RangePost SetError', props<{errors: ValidationError[][]}>());
     
    static RangePostChangePage = createAction('[Info] RangePost ChangePage', props<{event: PageEvent }>());

  static RangePutInit = createAction('[Info] RangePutInit');
  static RangePutDataInit = createAction('[Info] RangePutDataInit');
  static RangePutExecute = createAction('[Info] RangePut Execute');
   static RangePutSetData = createAction('[Info] RangePut SetData', props<{data: Pagination<Log> }>()); 
  static RangePutRequestUpdate = createAction('[Info] RangePut RequestUpdate', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateSuccess = createAction('[Info] RangePut RequestUpdateSuccess', props<{request: RangePutRequest }>());
  static RangePutRequestUpdateOne = createAction('[Info] RangePut RequestUpdateOne', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOneSuccess = createAction('[Info] RangePut RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePutSuccess = createAction('[Info] RangePut Success');
  static RangePutSetError = createAction('[Info] RangePut SetError', props<{errors: ValidationError[][]}>());
     
    static RangePutChangePage = createAction('[Info] RangePut ChangePage', props<{event: PageEvent }>());
}
