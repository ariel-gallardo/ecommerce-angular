import { BaseResponse } from '@api/logs/models/base-response.model';
import { LogError } from '@api/logs/models/log-error.model';
import { ValidationError } from '@api/logs/models/validation-error.model';
import {Response} from '@api/logs/models/common/response.model';
import {StateDetail, StateDetailBase} from '@api/logs/models/common/state-detail.model';
import {Pagination} from '@api/logs/models/common/pagination.model';

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
import { HttpHeaders } from '@angular/common/http';

export default interface State
{
        Delete: StateDetailBase<DeleteRequest>
        FiltersFirstGet: StateDetail<LogError,FiltersFirstGetRequest>
        FiltersGet: StateDetail<Pagination<LogError>,FiltersGetRequest>
        Get: StateDetail<LogError,GetRequest>
        IdsGet: StateDetail<Pagination<LogError>,IdsGetRequest>
        Post: StateDetail<LogError,PostRequest>
        Put: StateDetail<LogError,PutRequest>
        RangeDelete: StateDetailBase<RangeDeleteRequest>
        RangePost: StateDetail<Pagination<LogError>,RangePostRequest>
        RangePut: StateDetail<Pagination<LogError>,RangePutRequest>
}
