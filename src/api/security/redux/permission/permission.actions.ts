import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import { Permission } from '@api/security/models/permission.model';
import { ValidationError } from '@api/security/models/validation-error.model';
import { CanAccessHeadRequest } from '@api/security/services/permission.service'; 
import { DeleteRequest } from '@api/security/services/permission.service'; 
import { FiltersFirstGetRequest } from '@api/security/services/permission.service'; 
import { FiltersGetRequest } from '@api/security/services/permission.service'; 
import { GetRequest } from '@api/security/services/permission.service'; 
import { IdsGetRequest } from '@api/security/services/permission.service'; 
import { PostRequest } from '@api/security/services/permission.service'; 
import { PutRequest } from '@api/security/services/permission.service'; 
import { RangeDeleteRequest } from '@api/security/services/permission.service'; 
import { RangePostRequest } from '@api/security/services/permission.service'; 
import { RangePutRequest } from '@api/security/services/permission.service'; 
import { PageEvent } from '@angular/material/paginator';
import { HttpHeaders } from '@angular/common/http';

export class PermissionActions {

  static Init = createAction('[Permission] Init');

  static CanAccessHeadInit = createAction('[Permission] CanAccessHeadInit');
  static CanAccessHeadDataInit = createAction('[Permission] CanAccessHeadDataInit');
  static CanAccessHeadExecute = createAction('[Permission] CanAccessHead Execute');
   static CanAccessHeadSetData = createAction('[Permission] CanAccessHead SetData', props<{data: HttpHeaders }>()); 
  static CanAccessHeadRequestUpdate = createAction('[Permission] CanAccessHead RequestUpdate', props<{ request: Partial<CanAccessHeadRequest> }>());
  static CanAccessHeadRequestUpdateSuccess = createAction('[Permission] CanAccessHead RequestUpdateSuccess', props<{request: CanAccessHeadRequest }>());
  static CanAccessHeadRequestUpdateOne = createAction('[Permission] CanAccessHead RequestUpdateOne', props<{ request: Partial<CanAccessHeadRequest> }>());
  static CanAccessHeadRequestUpdateOneSuccess = createAction('[Permission] CanAccessHead RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static CanAccessHeadSuccess = createAction('[Permission] CanAccessHead Success');
  static CanAccessHeadSetError = createAction('[Permission] CanAccessHead SetError', props<{errors: ValidationError[][]}>());

  static DeleteInit = createAction('[Permission] DeleteInit');
  static DeleteDataInit = createAction('[Permission] DeleteDataInit');
  static DeleteExecute = createAction('[Permission] Delete Execute');
  
  static DeleteRequestUpdate = createAction('[Permission] Delete RequestUpdate', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateSuccess = createAction('[Permission] Delete RequestUpdateSuccess', props<{request: DeleteRequest }>());
  static DeleteRequestUpdateOne = createAction('[Permission] Delete RequestUpdateOne', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOneSuccess = createAction('[Permission] Delete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static DeleteSuccess = createAction('[Permission] Delete Success');
  static DeleteSetError = createAction('[Permission] Delete SetError', props<{errors: ValidationError[][]}>());

  static FiltersFirstGetInit = createAction('[Permission] FiltersFirstGetInit');
  static FiltersFirstGetDataInit = createAction('[Permission] FiltersFirstGetDataInit');
  static FiltersFirstGetExecute = createAction('[Permission] FiltersFirstGet Execute');
   static FiltersFirstGetSetData = createAction('[Permission] FiltersFirstGet SetData', props<{data: Permission }>()); 
  static FiltersFirstGetRequestUpdate = createAction('[Permission] FiltersFirstGet RequestUpdate', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateSuccess = createAction('[Permission] FiltersFirstGet RequestUpdateSuccess', props<{request: FiltersFirstGetRequest }>());
  static FiltersFirstGetRequestUpdateOne = createAction('[Permission] FiltersFirstGet RequestUpdateOne', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOneSuccess = createAction('[Permission] FiltersFirstGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersFirstGetSuccess = createAction('[Permission] FiltersFirstGet Success');
  static FiltersFirstGetSetError = createAction('[Permission] FiltersFirstGet SetError', props<{errors: ValidationError[][]}>());

  static FiltersGetInit = createAction('[Permission] FiltersGetInit');
  static FiltersGetDataInit = createAction('[Permission] FiltersGetDataInit');
  static FiltersGetExecute = createAction('[Permission] FiltersGet Execute');
   static FiltersGetSetData = createAction('[Permission] FiltersGet SetData', props<{data: Pagination<Permission> }>()); 
  static FiltersGetRequestUpdate = createAction('[Permission] FiltersGet RequestUpdate', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateSuccess = createAction('[Permission] FiltersGet RequestUpdateSuccess', props<{request: FiltersGetRequest }>());
  static FiltersGetRequestUpdateOne = createAction('[Permission] FiltersGet RequestUpdateOne', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOneSuccess = createAction('[Permission] FiltersGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersGetSuccess = createAction('[Permission] FiltersGet Success');
  static FiltersGetSetError = createAction('[Permission] FiltersGet SetError', props<{errors: ValidationError[][]}>());
     
    static FiltersGetChangePage = createAction('[Permission] FiltersGet ChangePage', props<{event: PageEvent }>());

  static GetInit = createAction('[Permission] GetInit');
  static GetDataInit = createAction('[Permission] GetDataInit');
  static GetExecute = createAction('[Permission] Get Execute');
   static GetSetData = createAction('[Permission] Get SetData', props<{data: Permission }>()); 
  static GetRequestUpdate = createAction('[Permission] Get RequestUpdate', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateSuccess = createAction('[Permission] Get RequestUpdateSuccess', props<{request: GetRequest }>());
  static GetRequestUpdateOne = createAction('[Permission] Get RequestUpdateOne', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOneSuccess = createAction('[Permission] Get RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static GetSuccess = createAction('[Permission] Get Success');
  static GetSetError = createAction('[Permission] Get SetError', props<{errors: ValidationError[][]}>());

  static IdsGetInit = createAction('[Permission] IdsGetInit');
  static IdsGetDataInit = createAction('[Permission] IdsGetDataInit');
  static IdsGetExecute = createAction('[Permission] IdsGet Execute');
   static IdsGetSetData = createAction('[Permission] IdsGet SetData', props<{data: Pagination<Permission> }>()); 
  static IdsGetRequestUpdate = createAction('[Permission] IdsGet RequestUpdate', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateSuccess = createAction('[Permission] IdsGet RequestUpdateSuccess', props<{request: IdsGetRequest }>());
  static IdsGetRequestUpdateOne = createAction('[Permission] IdsGet RequestUpdateOne', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOneSuccess = createAction('[Permission] IdsGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static IdsGetSuccess = createAction('[Permission] IdsGet Success');
  static IdsGetSetError = createAction('[Permission] IdsGet SetError', props<{errors: ValidationError[][]}>());
     
    static IdsGetChangePage = createAction('[Permission] IdsGet ChangePage', props<{event: PageEvent }>());

  static PostInit = createAction('[Permission] PostInit');
  static PostDataInit = createAction('[Permission] PostDataInit');
  static PostExecute = createAction('[Permission] Post Execute');
   static PostSetData = createAction('[Permission] Post SetData', props<{data: Permission }>()); 
  static PostRequestUpdate = createAction('[Permission] Post RequestUpdate', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateSuccess = createAction('[Permission] Post RequestUpdateSuccess', props<{request: PostRequest }>());
  static PostRequestUpdateOne = createAction('[Permission] Post RequestUpdateOne', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOneSuccess = createAction('[Permission] Post RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PostSuccess = createAction('[Permission] Post Success');
  static PostSetError = createAction('[Permission] Post SetError', props<{errors: ValidationError[][]}>());

  static PutInit = createAction('[Permission] PutInit');
  static PutDataInit = createAction('[Permission] PutDataInit');
  static PutExecute = createAction('[Permission] Put Execute');
   static PutSetData = createAction('[Permission] Put SetData', props<{data: Permission }>()); 
  static PutRequestUpdate = createAction('[Permission] Put RequestUpdate', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateSuccess = createAction('[Permission] Put RequestUpdateSuccess', props<{request: PutRequest }>());
  static PutRequestUpdateOne = createAction('[Permission] Put RequestUpdateOne', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOneSuccess = createAction('[Permission] Put RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PutSuccess = createAction('[Permission] Put Success');
  static PutSetError = createAction('[Permission] Put SetError', props<{errors: ValidationError[][]}>());

  static RangeDeleteInit = createAction('[Permission] RangeDeleteInit');
  static RangeDeleteDataInit = createAction('[Permission] RangeDeleteDataInit');
  static RangeDeleteExecute = createAction('[Permission] RangeDelete Execute');
  
  static RangeDeleteRequestUpdate = createAction('[Permission] RangeDelete RequestUpdate', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateSuccess = createAction('[Permission] RangeDelete RequestUpdateSuccess', props<{request: RangeDeleteRequest }>());
  static RangeDeleteRequestUpdateOne = createAction('[Permission] RangeDelete RequestUpdateOne', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOneSuccess = createAction('[Permission] RangeDelete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangeDeleteSuccess = createAction('[Permission] RangeDelete Success');
  static RangeDeleteSetError = createAction('[Permission] RangeDelete SetError', props<{errors: ValidationError[][]}>());

  static RangePostInit = createAction('[Permission] RangePostInit');
  static RangePostDataInit = createAction('[Permission] RangePostDataInit');
  static RangePostExecute = createAction('[Permission] RangePost Execute');
   static RangePostSetData = createAction('[Permission] RangePost SetData', props<{data: Pagination<Permission> }>()); 
  static RangePostRequestUpdate = createAction('[Permission] RangePost RequestUpdate', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateSuccess = createAction('[Permission] RangePost RequestUpdateSuccess', props<{request: RangePostRequest }>());
  static RangePostRequestUpdateOne = createAction('[Permission] RangePost RequestUpdateOne', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOneSuccess = createAction('[Permission] RangePost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePostSuccess = createAction('[Permission] RangePost Success');
  static RangePostSetError = createAction('[Permission] RangePost SetError', props<{errors: ValidationError[][]}>());
     
    static RangePostChangePage = createAction('[Permission] RangePost ChangePage', props<{event: PageEvent }>());

  static RangePutInit = createAction('[Permission] RangePutInit');
  static RangePutDataInit = createAction('[Permission] RangePutDataInit');
  static RangePutExecute = createAction('[Permission] RangePut Execute');
   static RangePutSetData = createAction('[Permission] RangePut SetData', props<{data: Pagination<Permission> }>()); 
  static RangePutRequestUpdate = createAction('[Permission] RangePut RequestUpdate', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateSuccess = createAction('[Permission] RangePut RequestUpdateSuccess', props<{request: RangePutRequest }>());
  static RangePutRequestUpdateOne = createAction('[Permission] RangePut RequestUpdateOne', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOneSuccess = createAction('[Permission] RangePut RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePutSuccess = createAction('[Permission] RangePut Success');
  static RangePutSetError = createAction('[Permission] RangePut SetError', props<{errors: ValidationError[][]}>());
     
    static RangePutChangePage = createAction('[Permission] RangePut ChangePage', props<{event: PageEvent }>());
}
