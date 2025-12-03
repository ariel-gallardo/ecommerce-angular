import { BaseResponse } from '@api/logs/models/base-response.model';
import { Log } from '@api/logs/models/log.model';
import { ValidationError } from '@api/logs/models/validation-error.model';
import {Response} from '@api/logs/models/common/response.model';
import {StateDetail, StateDetailBase} from '@api/logs/models/common/state-detail.model';
import {Pagination} from '@api/logs/models/common/pagination.model';

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
import { HttpHeaders } from '@angular/common/http';

export default interface State
{
        Delete: StateDetailBase<DeleteRequest>
        FiltersFirstGet: StateDetail<Log,FiltersFirstGetRequest>
        FiltersGet: StateDetail<Pagination<Log>,FiltersGetRequest>
        Get: StateDetail<Log,GetRequest>
        IdsGet: StateDetail<Pagination<Log>,IdsGetRequest>
        Post: StateDetail<Log,PostRequest>
        Put: StateDetail<Log,PutRequest>
        RangeDelete: StateDetailBase<RangeDeleteRequest>
        RangePost: StateDetail<Pagination<Log>,RangePostRequest>
        RangePut: StateDetail<Pagination<Log>,RangePutRequest>
}
