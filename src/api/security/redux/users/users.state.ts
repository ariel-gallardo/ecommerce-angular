import { BaseResponse } from '@api/security/models/base-response.model';
import { User } from '@api/security/models/user.model';
import { UserLogin } from '@api/security/models/user-login.model';
import { UserRegister } from '@api/security/models/user-register.model';
import { ValidationError } from '@api/security/models/validation-error.model';
import {Response} from '@api/security/models/common/response.model';
import {StateDetail, StateDetailBase} from '@api/security/models/common/state-detail.model';
import {Pagination} from '@api/security/models/common/pagination.model';

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
import { HttpHeaders } from '@angular/common/http';

export default interface State
{
        Delete: StateDetailBase<DeleteRequest>
        FiltersFirstGet: StateDetail<User,FiltersFirstGetRequest>
        FiltersGet: StateDetail<Pagination<User>,FiltersGetRequest>
        Get: StateDetail<User,GetRequest>
        IdsGet: StateDetail<Pagination<User>,IdsGetRequest>
        LoginPost: StateDetail<string,LoginPostRequest>
        Post: StateDetail<User,PostRequest>
        Put: StateDetail<User,PutRequest>
        RangeDelete: StateDetailBase<RangeDeleteRequest>
        RangePost: StateDetail<Pagination<User>,RangePostRequest>
        RangePut: StateDetail<Pagination<User>,RangePutRequest>
        RegisterPost: StateDetail<User,RegisterPostRequest>
}
