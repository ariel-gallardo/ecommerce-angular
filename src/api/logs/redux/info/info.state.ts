import { Log } from '@api/logs/models/log.model';
import {StateDetail, StateDetailBase} from '@api/logs/models/common/state-detail.model';
import {Pagination} from '@api/logs/models/common/pagination.model';

import { DeleteRequest } from '@api/logs/services/info.service'; 
import { FiltersFirstGetRequest } from '@api/logs/services/info.service'; 
import { FiltersGetRequest } from '@api/logs/services/info.service'; 
import { GetRequest } from '@api/logs/services/info.service'; 
import { IdsGetRequest } from '@api/logs/services/info.service'; 
import { PostRequest } from '@api/logs/services/info.service'; 
import { PutRequest } from '@api/logs/services/info.service'; 
import { RangeDeleteRequest } from '@api/logs/services/info.service'; 
import { RangePostRequest } from '@api/logs/services/info.service'; 
import { RangePutRequest } from '@api/logs/services/info.service'; 

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
