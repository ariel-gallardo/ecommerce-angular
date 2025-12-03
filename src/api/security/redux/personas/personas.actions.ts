import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import {Response} from '../../models/common/response.model'; 
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { BaseResponse } from '@api/security/models/base-response.model';
import { Persona } from '@api/security/models/persona.model';
import { ValidationError } from '@api/security/models/validation-error.model';
import { DeleteRequest } from '@api/security/services/personas.service'; 
import { FiltersFirstGetRequest } from '@api/security/services/personas.service'; 
import { FiltersGetRequest } from '@api/security/services/personas.service'; 
import { GetRequest } from '@api/security/services/personas.service'; 
import { IdsGetRequest } from '@api/security/services/personas.service'; 
import { PostRequest } from '@api/security/services/personas.service'; 
import { PutRequest } from '@api/security/services/personas.service'; 
import { RangeDeleteRequest } from '@api/security/services/personas.service'; 
import { RangePostRequest } from '@api/security/services/personas.service'; 
import { RangePutRequest } from '@api/security/services/personas.service'; 
import { PageEvent } from '@angular/material/paginator';
import { HttpHeaders } from '@angular/common/http';

export class PersonasActions {

  static Init = createAction('[Personas] Init');

  static DeleteInit = createAction('[Personas] DeleteInit');
  static DeleteDataInit = createAction('[Personas] DeleteDataInit');
  static DeleteExecute = createAction(
    '[Personas] Delete Execute'
  );
  
  static DeleteRequestUpdate = createAction('[Personas] Delete RequestUpdate', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOne = createAction('[Personas] Delete RequestUpdateOne', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOneSuccess = createAction('[Personas] Delete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static DeleteRequestUpdateSuccess = createAction('[Personas] Delete RequestUpdateSuccess', props<{request: DeleteRequest }>());

  static DeleteSuccess = createAction(
    '[Personas] Delete Success',
  );

  static DeleteSetError = createAction(
  '[Personas] Delete SetError',
  props<{errors: ValidationError[][]}>()
  );

  static FiltersFirstGetInit = createAction('[Personas] FiltersFirstGetInit');
  static FiltersFirstGetDataInit = createAction('[Personas] FiltersFirstGetDataInit');
  static FiltersFirstGetExecute = createAction(
    '[Personas] FiltersFirstGet Execute'
  );
   static FiltersFirstGetSetData = createAction('[Personas] FiltersFirstGet SetData', props<{data: Persona }>()); 
  static FiltersFirstGetRequestUpdate = createAction('[Personas] FiltersFirstGet RequestUpdate', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOne = createAction('[Personas] FiltersFirstGet RequestUpdateOne', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOneSuccess = createAction('[Personas] FiltersFirstGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersFirstGetRequestUpdateSuccess = createAction('[Personas] FiltersFirstGet RequestUpdateSuccess', props<{request: FiltersFirstGetRequest }>());

  static FiltersFirstGetSuccess = createAction(
    '[Personas] FiltersFirstGet Success',
  );

  static FiltersFirstGetSetError = createAction(
  '[Personas] FiltersFirstGet SetError',
  props<{errors: ValidationError[][]}>()
  );

  static FiltersGetInit = createAction('[Personas] FiltersGetInit');
  static FiltersGetDataInit = createAction('[Personas] FiltersGetDataInit');
  static FiltersGetExecute = createAction(
    '[Personas] FiltersGet Execute'
  );
   static FiltersGetSetData = createAction('[Personas] FiltersGet SetData', props<{data: Pagination<Persona> }>()); 
  static FiltersGetRequestUpdate = createAction('[Personas] FiltersGet RequestUpdate', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOne = createAction('[Personas] FiltersGet RequestUpdateOne', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOneSuccess = createAction('[Personas] FiltersGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersGetRequestUpdateSuccess = createAction('[Personas] FiltersGet RequestUpdateSuccess', props<{request: FiltersGetRequest }>());

  static FiltersGetSuccess = createAction(
    '[Personas] FiltersGet Success',
  );

  static FiltersGetSetError = createAction(
  '[Personas] FiltersGet SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static FiltersGetChangePage = createAction('[Personas] FiltersGet ChangePage', props<{event: PageEvent }>());

  static GetInit = createAction('[Personas] GetInit');
  static GetDataInit = createAction('[Personas] GetDataInit');
  static GetExecute = createAction(
    '[Personas] Get Execute'
  );
   static GetSetData = createAction('[Personas] Get SetData', props<{data: Persona }>()); 
  static GetRequestUpdate = createAction('[Personas] Get RequestUpdate', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOne = createAction('[Personas] Get RequestUpdateOne', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOneSuccess = createAction('[Personas] Get RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static GetRequestUpdateSuccess = createAction('[Personas] Get RequestUpdateSuccess', props<{request: GetRequest }>());

  static GetSuccess = createAction(
    '[Personas] Get Success',
  );

  static GetSetError = createAction(
  '[Personas] Get SetError',
  props<{errors: ValidationError[][]}>()
  );

  static IdsGetInit = createAction('[Personas] IdsGetInit');
  static IdsGetDataInit = createAction('[Personas] IdsGetDataInit');
  static IdsGetExecute = createAction(
    '[Personas] IdsGet Execute'
  );
   static IdsGetSetData = createAction('[Personas] IdsGet SetData', props<{data: Pagination<Persona> }>()); 
  static IdsGetRequestUpdate = createAction('[Personas] IdsGet RequestUpdate', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOne = createAction('[Personas] IdsGet RequestUpdateOne', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOneSuccess = createAction('[Personas] IdsGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static IdsGetRequestUpdateSuccess = createAction('[Personas] IdsGet RequestUpdateSuccess', props<{request: IdsGetRequest }>());

  static IdsGetSuccess = createAction(
    '[Personas] IdsGet Success',
  );

  static IdsGetSetError = createAction(
  '[Personas] IdsGet SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static IdsGetChangePage = createAction('[Personas] IdsGet ChangePage', props<{event: PageEvent }>());

  static PostInit = createAction('[Personas] PostInit');
  static PostDataInit = createAction('[Personas] PostDataInit');
  static PostExecute = createAction(
    '[Personas] Post Execute'
  );
   static PostSetData = createAction('[Personas] Post SetData', props<{data: Persona }>()); 
  static PostRequestUpdate = createAction('[Personas] Post RequestUpdate', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOne = createAction('[Personas] Post RequestUpdateOne', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOneSuccess = createAction('[Personas] Post RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PostRequestUpdateSuccess = createAction('[Personas] Post RequestUpdateSuccess', props<{request: PostRequest }>());

  static PostSuccess = createAction(
    '[Personas] Post Success',
  );

  static PostSetError = createAction(
  '[Personas] Post SetError',
  props<{errors: ValidationError[][]}>()
  );

  static PutInit = createAction('[Personas] PutInit');
  static PutDataInit = createAction('[Personas] PutDataInit');
  static PutExecute = createAction(
    '[Personas] Put Execute'
  );
   static PutSetData = createAction('[Personas] Put SetData', props<{data: Persona }>()); 
  static PutRequestUpdate = createAction('[Personas] Put RequestUpdate', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOne = createAction('[Personas] Put RequestUpdateOne', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOneSuccess = createAction('[Personas] Put RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PutRequestUpdateSuccess = createAction('[Personas] Put RequestUpdateSuccess', props<{request: PutRequest }>());

  static PutSuccess = createAction(
    '[Personas] Put Success',
  );

  static PutSetError = createAction(
  '[Personas] Put SetError',
  props<{errors: ValidationError[][]}>()
  );

  static RangeDeleteInit = createAction('[Personas] RangeDeleteInit');
  static RangeDeleteDataInit = createAction('[Personas] RangeDeleteDataInit');
  static RangeDeleteExecute = createAction(
    '[Personas] RangeDelete Execute'
  );
  
  static RangeDeleteRequestUpdate = createAction('[Personas] RangeDelete RequestUpdate', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOne = createAction('[Personas] RangeDelete RequestUpdateOne', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOneSuccess = createAction('[Personas] RangeDelete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangeDeleteRequestUpdateSuccess = createAction('[Personas] RangeDelete RequestUpdateSuccess', props<{request: RangeDeleteRequest }>());

  static RangeDeleteSuccess = createAction(
    '[Personas] RangeDelete Success',
  );

  static RangeDeleteSetError = createAction(
  '[Personas] RangeDelete SetError',
  props<{errors: ValidationError[][]}>()
  );

  static RangePostInit = createAction('[Personas] RangePostInit');
  static RangePostDataInit = createAction('[Personas] RangePostDataInit');
  static RangePostExecute = createAction(
    '[Personas] RangePost Execute'
  );
   static RangePostSetData = createAction('[Personas] RangePost SetData', props<{data: Pagination<Persona> }>()); 
  static RangePostRequestUpdate = createAction('[Personas] RangePost RequestUpdate', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOne = createAction('[Personas] RangePost RequestUpdateOne', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOneSuccess = createAction('[Personas] RangePost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePostRequestUpdateSuccess = createAction('[Personas] RangePost RequestUpdateSuccess', props<{request: RangePostRequest }>());

  static RangePostSuccess = createAction(
    '[Personas] RangePost Success',
  );

  static RangePostSetError = createAction(
  '[Personas] RangePost SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static RangePostChangePage = createAction('[Personas] RangePost ChangePage', props<{event: PageEvent }>());

  static RangePutInit = createAction('[Personas] RangePutInit');
  static RangePutDataInit = createAction('[Personas] RangePutDataInit');
  static RangePutExecute = createAction(
    '[Personas] RangePut Execute'
  );
   static RangePutSetData = createAction('[Personas] RangePut SetData', props<{data: Pagination<Persona> }>()); 
  static RangePutRequestUpdate = createAction('[Personas] RangePut RequestUpdate', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOne = createAction('[Personas] RangePut RequestUpdateOne', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOneSuccess = createAction('[Personas] RangePut RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePutRequestUpdateSuccess = createAction('[Personas] RangePut RequestUpdateSuccess', props<{request: RangePutRequest }>());

  static RangePutSuccess = createAction(
    '[Personas] RangePut Success',
  );

  static RangePutSetError = createAction(
  '[Personas] RangePut SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static RangePutChangePage = createAction('[Personas] RangePut ChangePage', props<{event: PageEvent }>());
}
