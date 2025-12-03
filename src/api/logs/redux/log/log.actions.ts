import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import {Response} from '../../models/common/response.model'; 
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { BaseResponse } from '@api/logs/models/base-response.model';
import { Log } from '@api/logs/models/log.model';
import { ValidationError } from '@api/logs/models/validation-error.model';
import { DeleteRequest } from '@api/logs/services/log.service'; 
import { FiltersFirstGetRequest } from '@api/logs/services/log.service'; 
import { FiltersGetRequest } from '@api/logs/services/log.service'; 
import { GetRequest } from '@api/logs/services/log.service'; 
import { IdsGetRequest } from '@api/logs/services/log.service'; 
import { PostRequest } from '@api/logs/services/log.service'; 
import { PutRequest } from '@api/logs/services/log.service'; 
import { RangeDeleteRequest } from '@api/logs/services/log.service'; 
import { RangePostRequest } from '@api/logs/services/log.service'; 
import { RangePutRequest } from '@api/logs/services/log.service'; 
import { PageEvent } from '@angular/material/paginator';
import { HttpHeaders } from '@angular/common/http';

export class LogActions {

  static Init = createAction('[Log] Init');

  static DeleteInit = createAction('[Log] DeleteInit');
  static DeleteDataInit = createAction('[Log] DeleteDataInit');
  static DeleteExecute = createAction(
    '[Log] Delete Execute'
  );
  
  static DeleteRequestUpdate = createAction('[Log] Delete RequestUpdate', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOne = createAction('[Log] Delete RequestUpdateOne', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOneSuccess = createAction('[Log] Delete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static DeleteRequestUpdateSuccess = createAction('[Log] Delete RequestUpdateSuccess', props<{request: DeleteRequest }>());

  static DeleteSuccess = createAction(
    '[Log] Delete Success',
  );

  static DeleteSetError = createAction(
  '[Log] Delete SetError',
  props<{errors: ValidationError[][]}>()
  );

  static FiltersFirstGetInit = createAction('[Log] FiltersFirstGetInit');
  static FiltersFirstGetDataInit = createAction('[Log] FiltersFirstGetDataInit');
  static FiltersFirstGetExecute = createAction(
    '[Log] FiltersFirstGet Execute'
  );
   static FiltersFirstGetSetData = createAction('[Log] FiltersFirstGet SetData', props<{data: Log }>()); 
  static FiltersFirstGetRequestUpdate = createAction('[Log] FiltersFirstGet RequestUpdate', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOne = createAction('[Log] FiltersFirstGet RequestUpdateOne', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOneSuccess = createAction('[Log] FiltersFirstGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersFirstGetRequestUpdateSuccess = createAction('[Log] FiltersFirstGet RequestUpdateSuccess', props<{request: FiltersFirstGetRequest }>());

  static FiltersFirstGetSuccess = createAction(
    '[Log] FiltersFirstGet Success',
  );

  static FiltersFirstGetSetError = createAction(
  '[Log] FiltersFirstGet SetError',
  props<{errors: ValidationError[][]}>()
  );

  static FiltersGetInit = createAction('[Log] FiltersGetInit');
  static FiltersGetDataInit = createAction('[Log] FiltersGetDataInit');
  static FiltersGetExecute = createAction(
    '[Log] FiltersGet Execute'
  );
   static FiltersGetSetData = createAction('[Log] FiltersGet SetData', props<{data: Pagination<Log> }>()); 
  static FiltersGetRequestUpdate = createAction('[Log] FiltersGet RequestUpdate', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOne = createAction('[Log] FiltersGet RequestUpdateOne', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOneSuccess = createAction('[Log] FiltersGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersGetRequestUpdateSuccess = createAction('[Log] FiltersGet RequestUpdateSuccess', props<{request: FiltersGetRequest }>());

  static FiltersGetSuccess = createAction(
    '[Log] FiltersGet Success',
  );

  static FiltersGetSetError = createAction(
  '[Log] FiltersGet SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static FiltersGetChangePage = createAction('[Log] FiltersGet ChangePage', props<{event: PageEvent }>());

  static GetInit = createAction('[Log] GetInit');
  static GetDataInit = createAction('[Log] GetDataInit');
  static GetExecute = createAction(
    '[Log] Get Execute'
  );
   static GetSetData = createAction('[Log] Get SetData', props<{data: Log }>()); 
  static GetRequestUpdate = createAction('[Log] Get RequestUpdate', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOne = createAction('[Log] Get RequestUpdateOne', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOneSuccess = createAction('[Log] Get RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static GetRequestUpdateSuccess = createAction('[Log] Get RequestUpdateSuccess', props<{request: GetRequest }>());

  static GetSuccess = createAction(
    '[Log] Get Success',
  );

  static GetSetError = createAction(
  '[Log] Get SetError',
  props<{errors: ValidationError[][]}>()
  );

  static IdsGetInit = createAction('[Log] IdsGetInit');
  static IdsGetDataInit = createAction('[Log] IdsGetDataInit');
  static IdsGetExecute = createAction(
    '[Log] IdsGet Execute'
  );
   static IdsGetSetData = createAction('[Log] IdsGet SetData', props<{data: Pagination<Log> }>()); 
  static IdsGetRequestUpdate = createAction('[Log] IdsGet RequestUpdate', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOne = createAction('[Log] IdsGet RequestUpdateOne', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOneSuccess = createAction('[Log] IdsGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static IdsGetRequestUpdateSuccess = createAction('[Log] IdsGet RequestUpdateSuccess', props<{request: IdsGetRequest }>());

  static IdsGetSuccess = createAction(
    '[Log] IdsGet Success',
  );

  static IdsGetSetError = createAction(
  '[Log] IdsGet SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static IdsGetChangePage = createAction('[Log] IdsGet ChangePage', props<{event: PageEvent }>());

  static PostInit = createAction('[Log] PostInit');
  static PostDataInit = createAction('[Log] PostDataInit');
  static PostExecute = createAction(
    '[Log] Post Execute'
  );
   static PostSetData = createAction('[Log] Post SetData', props<{data: Log }>()); 
  static PostRequestUpdate = createAction('[Log] Post RequestUpdate', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOne = createAction('[Log] Post RequestUpdateOne', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOneSuccess = createAction('[Log] Post RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PostRequestUpdateSuccess = createAction('[Log] Post RequestUpdateSuccess', props<{request: PostRequest }>());

  static PostSuccess = createAction(
    '[Log] Post Success',
  );

  static PostSetError = createAction(
  '[Log] Post SetError',
  props<{errors: ValidationError[][]}>()
  );

  static PutInit = createAction('[Log] PutInit');
  static PutDataInit = createAction('[Log] PutDataInit');
  static PutExecute = createAction(
    '[Log] Put Execute'
  );
   static PutSetData = createAction('[Log] Put SetData', props<{data: Log }>()); 
  static PutRequestUpdate = createAction('[Log] Put RequestUpdate', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOne = createAction('[Log] Put RequestUpdateOne', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOneSuccess = createAction('[Log] Put RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PutRequestUpdateSuccess = createAction('[Log] Put RequestUpdateSuccess', props<{request: PutRequest }>());

  static PutSuccess = createAction(
    '[Log] Put Success',
  );

  static PutSetError = createAction(
  '[Log] Put SetError',
  props<{errors: ValidationError[][]}>()
  );

  static RangeDeleteInit = createAction('[Log] RangeDeleteInit');
  static RangeDeleteDataInit = createAction('[Log] RangeDeleteDataInit');
  static RangeDeleteExecute = createAction(
    '[Log] RangeDelete Execute'
  );
  
  static RangeDeleteRequestUpdate = createAction('[Log] RangeDelete RequestUpdate', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOne = createAction('[Log] RangeDelete RequestUpdateOne', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOneSuccess = createAction('[Log] RangeDelete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangeDeleteRequestUpdateSuccess = createAction('[Log] RangeDelete RequestUpdateSuccess', props<{request: RangeDeleteRequest }>());

  static RangeDeleteSuccess = createAction(
    '[Log] RangeDelete Success',
  );

  static RangeDeleteSetError = createAction(
  '[Log] RangeDelete SetError',
  props<{errors: ValidationError[][]}>()
  );

  static RangePostInit = createAction('[Log] RangePostInit');
  static RangePostDataInit = createAction('[Log] RangePostDataInit');
  static RangePostExecute = createAction(
    '[Log] RangePost Execute'
  );
   static RangePostSetData = createAction('[Log] RangePost SetData', props<{data: Pagination<Log> }>()); 
  static RangePostRequestUpdate = createAction('[Log] RangePost RequestUpdate', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOne = createAction('[Log] RangePost RequestUpdateOne', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOneSuccess = createAction('[Log] RangePost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePostRequestUpdateSuccess = createAction('[Log] RangePost RequestUpdateSuccess', props<{request: RangePostRequest }>());

  static RangePostSuccess = createAction(
    '[Log] RangePost Success',
  );

  static RangePostSetError = createAction(
  '[Log] RangePost SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static RangePostChangePage = createAction('[Log] RangePost ChangePage', props<{event: PageEvent }>());

  static RangePutInit = createAction('[Log] RangePutInit');
  static RangePutDataInit = createAction('[Log] RangePutDataInit');
  static RangePutExecute = createAction(
    '[Log] RangePut Execute'
  );
   static RangePutSetData = createAction('[Log] RangePut SetData', props<{data: Pagination<Log> }>()); 
  static RangePutRequestUpdate = createAction('[Log] RangePut RequestUpdate', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOne = createAction('[Log] RangePut RequestUpdateOne', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOneSuccess = createAction('[Log] RangePut RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePutRequestUpdateSuccess = createAction('[Log] RangePut RequestUpdateSuccess', props<{request: RangePutRequest }>());

  static RangePutSuccess = createAction(
    '[Log] RangePut Success',
  );

  static RangePutSetError = createAction(
  '[Log] RangePut SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static RangePutChangePage = createAction('[Log] RangePut ChangePage', props<{event: PageEvent }>());
}
