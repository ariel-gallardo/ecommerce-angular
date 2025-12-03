import { BaseResponse } from '@api/security/models/base-response.model';
import { Persona } from '@api/security/models/persona.model';
import { ValidationError } from '@api/security/models/validation-error.model';
import {Response} from '@api/security/models/common/response.model';
import {StateDetail, StateDetailBase} from '@api/security/models/common/state-detail.model';
import {Pagination} from '@api/security/models/common/pagination.model';

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
import { HttpHeaders } from '@angular/common/http';

export default interface State
{
        Delete: StateDetailBase<DeleteRequest>
        FiltersFirstGet: StateDetail<Persona,FiltersFirstGetRequest>
        FiltersGet: StateDetail<Pagination<Persona>,FiltersGetRequest>
        Get: StateDetail<Persona,GetRequest>
        IdsGet: StateDetail<Pagination<Persona>,IdsGetRequest>
        Post: StateDetail<Persona,PostRequest>
        Put: StateDetail<Persona,PutRequest>
        RangeDelete: StateDetailBase<RangeDeleteRequest>
        RangePost: StateDetail<Pagination<Persona>,RangePostRequest>
        RangePut: StateDetail<Pagination<Persona>,RangePutRequest>
}
