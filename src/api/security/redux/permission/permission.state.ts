import { Permission } from '@api/security/models/permission.model';
import {StateDetail, StateDetailBase} from '@api/security/models/common/state-detail.model';
import {Pagination} from '@api/security/models/common/pagination.model';

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
import { HttpHeaders } from '@angular/common/http';

export default interface State
{
        CanAccessHead: StateDetail<HttpHeaders,CanAccessHeadRequest>
        Delete: StateDetailBase<DeleteRequest>
        FiltersFirstGet: StateDetail<Permission,FiltersFirstGetRequest>
        FiltersGet: StateDetail<Pagination<Permission>,FiltersGetRequest>
        Get: StateDetail<Permission,GetRequest>
        IdsGet: StateDetail<Pagination<Permission>,IdsGetRequest>
        Post: StateDetail<Permission,PostRequest>
        Put: StateDetail<Permission,PutRequest>
        RangeDelete: StateDetailBase<RangeDeleteRequest>
        RangePost: StateDetail<Pagination<Permission>,RangePostRequest>
        RangePut: StateDetail<Pagination<Permission>,RangePutRequest>
}
