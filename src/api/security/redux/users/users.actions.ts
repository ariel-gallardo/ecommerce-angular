import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import {Response} from '../../models/common/response.model'; 
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { BaseResponse } from '@api/security/models/base-response.model';
import { User } from '@api/security/models/user.model';
import { UserLogin } from '@api/security/models/user-login.model';
import { UserRegister } from '@api/security/models/user-register.model';
import { ValidationError } from '@api/security/models/validation-error.model';
import { DeleteRequest } from '@api/security/services/users.service'; 
import { FiltersFirstGetRequest } from '@api/security/services/users.service'; 
import { FiltersGetRequest } from '@api/security/services/users.service'; 
import { GetRequest } from '@api/security/services/users.service'; 
import { IdsGetRequest } from '@api/security/services/users.service'; 
import { LoginPostRequest } from '@api/security/services/users.service'; 
import { PostRequest } from '@api/security/services/users.service'; 
import { PutRequest } from '@api/security/services/users.service'; 
import { RangeDeleteRequest } from '@api/security/services/users.service'; 
import { RangePostRequest } from '@api/security/services/users.service'; 
import { RangePutRequest } from '@api/security/services/users.service'; 
import { RegisterPostRequest } from '@api/security/services/users.service'; 
import { PageEvent } from '@angular/material/paginator';
import { HttpHeaders } from '@angular/common/http';

export class UsersActions {

  static Init = createAction('[Users] Init');

  static DeleteInit = createAction('[Users] DeleteInit');
  static DeleteDataInit = createAction('[Users] DeleteDataInit');
  static DeleteExecute = createAction(
    '[Users] Delete Execute'
  );
  
  static DeleteRequestUpdate = createAction('[Users] Delete RequestUpdate', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOne = createAction('[Users] Delete RequestUpdateOne', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOneSuccess = createAction('[Users] Delete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static DeleteRequestUpdateSuccess = createAction('[Users] Delete RequestUpdateSuccess', props<{request: DeleteRequest }>());

  static DeleteSuccess = createAction(
    '[Users] Delete Success',
  );

  static DeleteSetError = createAction(
  '[Users] Delete SetError',
  props<{errors: ValidationError[][]}>()
  );

  static FiltersFirstGetInit = createAction('[Users] FiltersFirstGetInit');
  static FiltersFirstGetDataInit = createAction('[Users] FiltersFirstGetDataInit');
  static FiltersFirstGetExecute = createAction(
    '[Users] FiltersFirstGet Execute'
  );
   static FiltersFirstGetSetData = createAction('[Users] FiltersFirstGet SetData', props<{data: User }>()); 
  static FiltersFirstGetRequestUpdate = createAction('[Users] FiltersFirstGet RequestUpdate', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOne = createAction('[Users] FiltersFirstGet RequestUpdateOne', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOneSuccess = createAction('[Users] FiltersFirstGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersFirstGetRequestUpdateSuccess = createAction('[Users] FiltersFirstGet RequestUpdateSuccess', props<{request: FiltersFirstGetRequest }>());

  static FiltersFirstGetSuccess = createAction(
    '[Users] FiltersFirstGet Success',
  );

  static FiltersFirstGetSetError = createAction(
  '[Users] FiltersFirstGet SetError',
  props<{errors: ValidationError[][]}>()
  );

  static FiltersGetInit = createAction('[Users] FiltersGetInit');
  static FiltersGetDataInit = createAction('[Users] FiltersGetDataInit');
  static FiltersGetExecute = createAction(
    '[Users] FiltersGet Execute'
  );
   static FiltersGetSetData = createAction('[Users] FiltersGet SetData', props<{data: Pagination<User> }>()); 
  static FiltersGetRequestUpdate = createAction('[Users] FiltersGet RequestUpdate', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOne = createAction('[Users] FiltersGet RequestUpdateOne', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOneSuccess = createAction('[Users] FiltersGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersGetRequestUpdateSuccess = createAction('[Users] FiltersGet RequestUpdateSuccess', props<{request: FiltersGetRequest }>());

  static FiltersGetSuccess = createAction(
    '[Users] FiltersGet Success',
  );

  static FiltersGetSetError = createAction(
  '[Users] FiltersGet SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static FiltersGetChangePage = createAction('[Users] FiltersGet ChangePage', props<{event: PageEvent }>());

  static GetInit = createAction('[Users] GetInit');
  static GetDataInit = createAction('[Users] GetDataInit');
  static GetExecute = createAction(
    '[Users] Get Execute'
  );
   static GetSetData = createAction('[Users] Get SetData', props<{data: User }>()); 
  static GetRequestUpdate = createAction('[Users] Get RequestUpdate', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOne = createAction('[Users] Get RequestUpdateOne', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOneSuccess = createAction('[Users] Get RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static GetRequestUpdateSuccess = createAction('[Users] Get RequestUpdateSuccess', props<{request: GetRequest }>());

  static GetSuccess = createAction(
    '[Users] Get Success',
  );

  static GetSetError = createAction(
  '[Users] Get SetError',
  props<{errors: ValidationError[][]}>()
  );

  static IdsGetInit = createAction('[Users] IdsGetInit');
  static IdsGetDataInit = createAction('[Users] IdsGetDataInit');
  static IdsGetExecute = createAction(
    '[Users] IdsGet Execute'
  );
   static IdsGetSetData = createAction('[Users] IdsGet SetData', props<{data: Pagination<User> }>()); 
  static IdsGetRequestUpdate = createAction('[Users] IdsGet RequestUpdate', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOne = createAction('[Users] IdsGet RequestUpdateOne', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOneSuccess = createAction('[Users] IdsGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static IdsGetRequestUpdateSuccess = createAction('[Users] IdsGet RequestUpdateSuccess', props<{request: IdsGetRequest }>());

  static IdsGetSuccess = createAction(
    '[Users] IdsGet Success',
  );

  static IdsGetSetError = createAction(
  '[Users] IdsGet SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static IdsGetChangePage = createAction('[Users] IdsGet ChangePage', props<{event: PageEvent }>());

  static LoginPostInit = createAction('[Users] LoginPostInit');
  static LoginPostDataInit = createAction('[Users] LoginPostDataInit');
  static LoginPostExecute = createAction(
    '[Users] LoginPost Execute'
  );
   static LoginPostSetData = createAction('[Users] LoginPost SetData', props<{data: string }>()); 
  static LoginPostRequestUpdate = createAction('[Users] LoginPost RequestUpdate', props<{ request: Partial<LoginPostRequest> }>());
  static LoginPostRequestUpdateOne = createAction('[Users] LoginPost RequestUpdateOne', props<{ request: Partial<LoginPostRequest> }>());
  static LoginPostRequestUpdateOneSuccess = createAction('[Users] LoginPost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static LoginPostRequestUpdateSuccess = createAction('[Users] LoginPost RequestUpdateSuccess', props<{request: LoginPostRequest }>());

  static LoginPostSuccess = createAction(
    '[Users] LoginPost Success',
  );

  static LoginPostSetError = createAction(
  '[Users] LoginPost SetError',
  props<{errors: ValidationError[][]}>()
  );

  static PostInit = createAction('[Users] PostInit');
  static PostDataInit = createAction('[Users] PostDataInit');
  static PostExecute = createAction(
    '[Users] Post Execute'
  );
   static PostSetData = createAction('[Users] Post SetData', props<{data: User }>()); 
  static PostRequestUpdate = createAction('[Users] Post RequestUpdate', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOne = createAction('[Users] Post RequestUpdateOne', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOneSuccess = createAction('[Users] Post RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PostRequestUpdateSuccess = createAction('[Users] Post RequestUpdateSuccess', props<{request: PostRequest }>());

  static PostSuccess = createAction(
    '[Users] Post Success',
  );

  static PostSetError = createAction(
  '[Users] Post SetError',
  props<{errors: ValidationError[][]}>()
  );

  static PutInit = createAction('[Users] PutInit');
  static PutDataInit = createAction('[Users] PutDataInit');
  static PutExecute = createAction(
    '[Users] Put Execute'
  );
   static PutSetData = createAction('[Users] Put SetData', props<{data: User }>()); 
  static PutRequestUpdate = createAction('[Users] Put RequestUpdate', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOne = createAction('[Users] Put RequestUpdateOne', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOneSuccess = createAction('[Users] Put RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PutRequestUpdateSuccess = createAction('[Users] Put RequestUpdateSuccess', props<{request: PutRequest }>());

  static PutSuccess = createAction(
    '[Users] Put Success',
  );

  static PutSetError = createAction(
  '[Users] Put SetError',
  props<{errors: ValidationError[][]}>()
  );

  static RangeDeleteInit = createAction('[Users] RangeDeleteInit');
  static RangeDeleteDataInit = createAction('[Users] RangeDeleteDataInit');
  static RangeDeleteExecute = createAction(
    '[Users] RangeDelete Execute'
  );
  
  static RangeDeleteRequestUpdate = createAction('[Users] RangeDelete RequestUpdate', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOne = createAction('[Users] RangeDelete RequestUpdateOne', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOneSuccess = createAction('[Users] RangeDelete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangeDeleteRequestUpdateSuccess = createAction('[Users] RangeDelete RequestUpdateSuccess', props<{request: RangeDeleteRequest }>());

  static RangeDeleteSuccess = createAction(
    '[Users] RangeDelete Success',
  );

  static RangeDeleteSetError = createAction(
  '[Users] RangeDelete SetError',
  props<{errors: ValidationError[][]}>()
  );

  static RangePostInit = createAction('[Users] RangePostInit');
  static RangePostDataInit = createAction('[Users] RangePostDataInit');
  static RangePostExecute = createAction(
    '[Users] RangePost Execute'
  );
   static RangePostSetData = createAction('[Users] RangePost SetData', props<{data: Pagination<User> }>()); 
  static RangePostRequestUpdate = createAction('[Users] RangePost RequestUpdate', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOne = createAction('[Users] RangePost RequestUpdateOne', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOneSuccess = createAction('[Users] RangePost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePostRequestUpdateSuccess = createAction('[Users] RangePost RequestUpdateSuccess', props<{request: RangePostRequest }>());

  static RangePostSuccess = createAction(
    '[Users] RangePost Success',
  );

  static RangePostSetError = createAction(
  '[Users] RangePost SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static RangePostChangePage = createAction('[Users] RangePost ChangePage', props<{event: PageEvent }>());

  static RangePutInit = createAction('[Users] RangePutInit');
  static RangePutDataInit = createAction('[Users] RangePutDataInit');
  static RangePutExecute = createAction(
    '[Users] RangePut Execute'
  );
   static RangePutSetData = createAction('[Users] RangePut SetData', props<{data: Pagination<User> }>()); 
  static RangePutRequestUpdate = createAction('[Users] RangePut RequestUpdate', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOne = createAction('[Users] RangePut RequestUpdateOne', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOneSuccess = createAction('[Users] RangePut RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePutRequestUpdateSuccess = createAction('[Users] RangePut RequestUpdateSuccess', props<{request: RangePutRequest }>());

  static RangePutSuccess = createAction(
    '[Users] RangePut Success',
  );

  static RangePutSetError = createAction(
  '[Users] RangePut SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static RangePutChangePage = createAction('[Users] RangePut ChangePage', props<{event: PageEvent }>());

  static RegisterPostInit = createAction('[Users] RegisterPostInit');
  static RegisterPostDataInit = createAction('[Users] RegisterPostDataInit');
  static RegisterPostExecute = createAction(
    '[Users] RegisterPost Execute'
  );
   static RegisterPostSetData = createAction('[Users] RegisterPost SetData', props<{data: User }>()); 
  static RegisterPostRequestUpdate = createAction('[Users] RegisterPost RequestUpdate', props<{ request: Partial<RegisterPostRequest> }>());
  static RegisterPostRequestUpdateOne = createAction('[Users] RegisterPost RequestUpdateOne', props<{ request: Partial<RegisterPostRequest> }>());
  static RegisterPostRequestUpdateOneSuccess = createAction('[Users] RegisterPost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RegisterPostRequestUpdateSuccess = createAction('[Users] RegisterPost RequestUpdateSuccess', props<{request: RegisterPostRequest }>());

  static RegisterPostSuccess = createAction(
    '[Users] RegisterPost Success',
  );

  static RegisterPostSetError = createAction(
  '[Users] RegisterPost SetError',
  props<{errors: ValidationError[][]}>()
  );
}
