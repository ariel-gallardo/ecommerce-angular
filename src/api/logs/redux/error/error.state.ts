import { LogError } from '@api/logs/models/log-error.model';
import {StateDetail, StateDetailBase} from '@api/logs/models/common/state-detail.model';
import {Pagination} from '@api/logs/models/common/pagination.model';

import { DeleteRequest } from '@api/logs/services/error.service'; 
import { FiltersFirstGetRequest } from '@api/logs/services/error.service'; 
import { FiltersGetRequest } from '@api/logs/services/error.service'; 
import { GetRequest } from '@api/logs/services/error.service'; 
import { IdsGetRequest } from '@api/logs/services/error.service'; 
import { PostRequest } from '@api/logs/services/error.service'; 
import { PutRequest } from '@api/logs/services/error.service'; 
import { RangeDeleteRequest } from '@api/logs/services/error.service'; 
import { RangePostRequest } from '@api/logs/services/error.service'; 
import { RangePutRequest } from '@api/logs/services/error.service'; 

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
