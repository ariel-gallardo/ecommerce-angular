import { BaseResponse } from '@api/product/models/base-response.model';
import { Product } from '@api/product/models/product.model';
import { ValidationError } from '@api/product/models/validation-error.model';
import {Response} from '@api/product/models/common/response.model';
import {StateDetail, StateDetailBase} from '@api/product/models/common/state-detail.model';
import {Pagination} from '@api/product/models/common/pagination.model';

import { DeleteRequest } from '@api/product/services/product.service'; 
import { FiltersFirstGetRequest } from '@api/product/services/product.service'; 
import { FiltersGetRequest } from '@api/product/services/product.service'; 
import { GetRequest } from '@api/product/services/product.service'; 
import { IdsGetRequest } from '@api/product/services/product.service'; 
import { PostRequest } from '@api/product/services/product.service'; 
import { PutRequest } from '@api/product/services/product.service'; 
import { RangeDeleteRequest } from '@api/product/services/product.service'; 
import { RangePostRequest } from '@api/product/services/product.service'; 
import { RangePutRequest } from '@api/product/services/product.service'; 
import { HttpHeaders } from '@angular/common/http';

export default interface State
{
        Delete: StateDetailBase<DeleteRequest>
        FiltersFirstGet: StateDetail<Product,FiltersFirstGetRequest>
        FiltersGet: StateDetail<Pagination<Product>,FiltersGetRequest>
        Get: StateDetail<Product,GetRequest>
        IdsGet: StateDetail<Pagination<Product>,IdsGetRequest>
        Post: StateDetail<Product,PostRequest>
        Put: StateDetail<Product,PutRequest>
        RangeDelete: StateDetailBase<RangeDeleteRequest>
        RangePost: StateDetail<Pagination<Product>,RangePostRequest>
        RangePut: StateDetail<Pagination<Product>,RangePutRequest>
}
