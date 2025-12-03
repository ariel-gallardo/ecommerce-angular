import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import {Response} from '../../models/common/response.model'; 
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { BaseResponse } from '@api/logs/models/base-response.model';
import { LogError } from '@api/logs/models/log-error.model';
import { ValidationError } from '@api/logs/models/validation-error.model';
import { DeleteRequest } from '@api/logs/services/log-error.service'; 
import { FiltersFirstGetRequest } from '@api/logs/services/log-error.service'; 
import { FiltersGetRequest } from '@api/logs/services/log-error.service'; 
import { GetRequest } from '@api/logs/services/log-error.service'; 
import { IdsGetRequest } from '@api/logs/services/log-error.service'; 
import { PostRequest } from '@api/logs/services/log-error.service'; 
import { PutRequest } from '@api/logs/services/log-error.service'; 
import { RangeDeleteRequest } from '@api/logs/services/log-error.service'; 
import { RangePostRequest } from '@api/logs/services/log-error.service'; 
import { RangePutRequest } from '@api/logs/services/log-error.service'; 
import { PageEvent } from '@angular/material/paginator';
import { HttpHeaders } from '@angular/common/http';

export class LogErrorActions {

  static Init = createAction('[LogError] Init');

  static DeleteInit = createAction('[LogError] DeleteInit');
  static DeleteDataInit = createAction('[LogError] DeleteDataInit');
  static DeleteExecute = createAction(
    '[LogError] Delete Execute'
  );
  
  static DeleteRequestUpdate = createAction('[LogError] Delete RequestUpdate', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOne = createAction('[LogError] Delete RequestUpdateOne', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOneSuccess = createAction('[LogError] Delete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static DeleteRequestUpdateSuccess = createAction('[LogError] Delete RequestUpdateSuccess', props<{request: DeleteRequest }>());

  static DeleteSuccess = createAction(
    '[LogError] Delete Success',
  );

  static DeleteSetError = createAction(
  '[LogError] Delete SetError',
  props<{errors: ValidationError[][]}>()
  );

  static FiltersFirstGetInit = createAction('[LogError] FiltersFirstGetInit');
  static FiltersFirstGetDataInit = createAction('[LogError] FiltersFirstGetDataInit');
  static FiltersFirstGetExecute = createAction(
    '[LogError] FiltersFirstGet Execute'
  );
   static FiltersFirstGetSetData = createAction('[LogError] FiltersFirstGet SetData', props<{data: LogError }>()); 
  static FiltersFirstGetRequestUpdate = createAction('[LogError] FiltersFirstGet RequestUpdate', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOne = createAction('[LogError] FiltersFirstGet RequestUpdateOne', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOneSuccess = createAction('[LogError] FiltersFirstGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersFirstGetRequestUpdateSuccess = createAction('[LogError] FiltersFirstGet RequestUpdateSuccess', props<{request: FiltersFirstGetRequest }>());

  static FiltersFirstGetSuccess = createAction(
    '[LogError] FiltersFirstGet Success',
  );

  static FiltersFirstGetSetError = createAction(
  '[LogError] FiltersFirstGet SetError',
  props<{errors: ValidationError[][]}>()
  );

  static FiltersGetInit = createAction('[LogError] FiltersGetInit');
  static FiltersGetDataInit = createAction('[LogError] FiltersGetDataInit');
  static FiltersGetExecute = createAction(
    '[LogError] FiltersGet Execute'
  );
   static FiltersGetSetData = createAction('[LogError] FiltersGet SetData', props<{data: Pagination<LogError> }>()); 
  static FiltersGetRequestUpdate = createAction('[LogError] FiltersGet RequestUpdate', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOne = createAction('[LogError] FiltersGet RequestUpdateOne', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOneSuccess = createAction('[LogError] FiltersGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersGetRequestUpdateSuccess = createAction('[LogError] FiltersGet RequestUpdateSuccess', props<{request: FiltersGetRequest }>());

  static FiltersGetSuccess = createAction(
    '[LogError] FiltersGet Success',
  );

  static FiltersGetSetError = createAction(
  '[LogError] FiltersGet SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static FiltersGetChangePage = createAction('[LogError] FiltersGet ChangePage', props<{event: PageEvent }>());

  static GetInit = createAction('[LogError] GetInit');
  static GetDataInit = createAction('[LogError] GetDataInit');
  static GetExecute = createAction(
    '[LogError] Get Execute'
  );
   static GetSetData = createAction('[LogError] Get SetData', props<{data: LogError }>()); 
  static GetRequestUpdate = createAction('[LogError] Get RequestUpdate', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOne = createAction('[LogError] Get RequestUpdateOne', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOneSuccess = createAction('[LogError] Get RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static GetRequestUpdateSuccess = createAction('[LogError] Get RequestUpdateSuccess', props<{request: GetRequest }>());

  static GetSuccess = createAction(
    '[LogError] Get Success',
  );

  static GetSetError = createAction(
  '[LogError] Get SetError',
  props<{errors: ValidationError[][]}>()
  );

  static IdsGetInit = createAction('[LogError] IdsGetInit');
  static IdsGetDataInit = createAction('[LogError] IdsGetDataInit');
  static IdsGetExecute = createAction(
    '[LogError] IdsGet Execute'
  );
   static IdsGetSetData = createAction('[LogError] IdsGet SetData', props<{data: Pagination<LogError> }>()); 
  static IdsGetRequestUpdate = createAction('[LogError] IdsGet RequestUpdate', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOne = createAction('[LogError] IdsGet RequestUpdateOne', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOneSuccess = createAction('[LogError] IdsGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static IdsGetRequestUpdateSuccess = createAction('[LogError] IdsGet RequestUpdateSuccess', props<{request: IdsGetRequest }>());

  static IdsGetSuccess = createAction(
    '[LogError] IdsGet Success',
  );

  static IdsGetSetError = createAction(
  '[LogError] IdsGet SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static IdsGetChangePage = createAction('[LogError] IdsGet ChangePage', props<{event: PageEvent }>());

  static PostInit = createAction('[LogError] PostInit');
  static PostDataInit = createAction('[LogError] PostDataInit');
  static PostExecute = createAction(
    '[LogError] Post Execute'
  );
   static PostSetData = createAction('[LogError] Post SetData', props<{data: LogError }>()); 
  static PostRequestUpdate = createAction('[LogError] Post RequestUpdate', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOne = createAction('[LogError] Post RequestUpdateOne', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOneSuccess = createAction('[LogError] Post RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PostRequestUpdateSuccess = createAction('[LogError] Post RequestUpdateSuccess', props<{request: PostRequest }>());

  static PostSuccess = createAction(
    '[LogError] Post Success',
  );

  static PostSetError = createAction(
  '[LogError] Post SetError',
  props<{errors: ValidationError[][]}>()
  );

  static PutInit = createAction('[LogError] PutInit');
  static PutDataInit = createAction('[LogError] PutDataInit');
  static PutExecute = createAction(
    '[LogError] Put Execute'
  );
   static PutSetData = createAction('[LogError] Put SetData', props<{data: LogError }>()); 
  static PutRequestUpdate = createAction('[LogError] Put RequestUpdate', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOne = createAction('[LogError] Put RequestUpdateOne', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOneSuccess = createAction('[LogError] Put RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PutRequestUpdateSuccess = createAction('[LogError] Put RequestUpdateSuccess', props<{request: PutRequest }>());

  static PutSuccess = createAction(
    '[LogError] Put Success',
  );

  static PutSetError = createAction(
  '[LogError] Put SetError',
  props<{errors: ValidationError[][]}>()
  );

  static RangeDeleteInit = createAction('[LogError] RangeDeleteInit');
  static RangeDeleteDataInit = createAction('[LogError] RangeDeleteDataInit');
  static RangeDeleteExecute = createAction(
    '[LogError] RangeDelete Execute'
  );
  
  static RangeDeleteRequestUpdate = createAction('[LogError] RangeDelete RequestUpdate', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOne = createAction('[LogError] RangeDelete RequestUpdateOne', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOneSuccess = createAction('[LogError] RangeDelete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangeDeleteRequestUpdateSuccess = createAction('[LogError] RangeDelete RequestUpdateSuccess', props<{request: RangeDeleteRequest }>());

  static RangeDeleteSuccess = createAction(
    '[LogError] RangeDelete Success',
  );

  static RangeDeleteSetError = createAction(
  '[LogError] RangeDelete SetError',
  props<{errors: ValidationError[][]}>()
  );

  static RangePostInit = createAction('[LogError] RangePostInit');
  static RangePostDataInit = createAction('[LogError] RangePostDataInit');
  static RangePostExecute = createAction(
    '[LogError] RangePost Execute'
  );
   static RangePostSetData = createAction('[LogError] RangePost SetData', props<{data: Pagination<LogError> }>()); 
  static RangePostRequestUpdate = createAction('[LogError] RangePost RequestUpdate', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOne = createAction('[LogError] RangePost RequestUpdateOne', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOneSuccess = createAction('[LogError] RangePost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePostRequestUpdateSuccess = createAction('[LogError] RangePost RequestUpdateSuccess', props<{request: RangePostRequest }>());

  static RangePostSuccess = createAction(
    '[LogError] RangePost Success',
  );

  static RangePostSetError = createAction(
  '[LogError] RangePost SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static RangePostChangePage = createAction('[LogError] RangePost ChangePage', props<{event: PageEvent }>());

  static RangePutInit = createAction('[LogError] RangePutInit');
  static RangePutDataInit = createAction('[LogError] RangePutDataInit');
  static RangePutExecute = createAction(
    '[LogError] RangePut Execute'
  );
   static RangePutSetData = createAction('[LogError] RangePut SetData', props<{data: Pagination<LogError> }>()); 
  static RangePutRequestUpdate = createAction('[LogError] RangePut RequestUpdate', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOne = createAction('[LogError] RangePut RequestUpdateOne', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOneSuccess = createAction('[LogError] RangePut RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePutRequestUpdateSuccess = createAction('[LogError] RangePut RequestUpdateSuccess', props<{request: RangePutRequest }>());

  static RangePutSuccess = createAction(
    '[LogError] RangePut Success',
  );

  static RangePutSetError = createAction(
  '[LogError] RangePut SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static RangePutChangePage = createAction('[LogError] RangePut ChangePage', props<{event: PageEvent }>());
}
