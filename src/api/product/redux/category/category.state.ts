import { BaseResponse } from '@api/product/models/base-response.model';
import { Category } from '@api/product/models/category.model';
import { ValidationError } from '@api/product/models/validation-error.model';
import {Response} from '@api/product/models/common/response.model';
import {StateDetail, StateDetailBase} from '@api/product/models/common/state-detail.model';
import {Pagination} from '@api/product/models/common/pagination.model';

import { DeleteRequest } from '@api/product/services/category.service'; 
import { FiltersFirstGetRequest } from '@api/product/services/category.service'; 
import { FiltersGetRequest } from '@api/product/services/category.service'; 
import { GetRequest } from '@api/product/services/category.service'; 
import { IdsGetRequest } from '@api/product/services/category.service'; 
import { PostRequest } from '@api/product/services/category.service'; 
import { PutRequest } from '@api/product/services/category.service'; 
import { RangeDeleteRequest } from '@api/product/services/category.service'; 
import { RangePostRequest } from '@api/product/services/category.service'; 
import { RangePutRequest } from '@api/product/services/category.service'; 
import { HttpHeaders } from '@angular/common/http';

export default interface State
{
        Delete: StateDetailBase<DeleteRequest>
        FiltersFirstGet: StateDetail<Category,FiltersFirstGetRequest>
        FiltersGet: StateDetail<Pagination<Category>,FiltersGetRequest>
        Get: StateDetail<Category,GetRequest>
        IdsGet: StateDetail<Pagination<Category>,IdsGetRequest>
        Post: StateDetail<Category,PostRequest>
        Put: StateDetail<Category,PutRequest>
        RangeDelete: StateDetailBase<RangeDeleteRequest>
        RangePost: StateDetail<Pagination<Category>,RangePostRequest>
        RangePut: StateDetail<Pagination<Category>,RangePutRequest>
}
