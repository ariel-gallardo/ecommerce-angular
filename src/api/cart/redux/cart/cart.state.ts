import { BaseResponse } from '@api/cart/models/base-response.model';
import { Cart } from '@api/cart/models/cart.model';
import { ValidationError } from '@api/cart/models/validation-error.model';
import {Response} from '@api/cart/models/common/response.model';
import {StateDetail, StateDetailBase} from '@api/cart/models/common/state-detail.model';
import {Pagination} from '@api/cart/models/common/pagination.model';

import { DeleteRequest } from '@api/cart/services/cart.service'; 
import { FiltersFirstGetRequest } from '@api/cart/services/cart.service'; 
import { FiltersGetRequest } from '@api/cart/services/cart.service'; 
import { GetRequest } from '@api/cart/services/cart.service'; 
import { IdsGetRequest } from '@api/cart/services/cart.service'; 
import { PostRequest } from '@api/cart/services/cart.service'; 
import { PutRequest } from '@api/cart/services/cart.service'; 
import { RangeDeleteRequest } from '@api/cart/services/cart.service'; 
import { RangePostRequest } from '@api/cart/services/cart.service'; 
import { RangePutRequest } from '@api/cart/services/cart.service'; 
import { HttpHeaders } from '@angular/common/http';

export default interface State
{
        Delete: StateDetailBase<DeleteRequest>
        FiltersFirstGet: StateDetail<Cart,FiltersFirstGetRequest>
        FiltersGet: StateDetail<Pagination<Cart>,FiltersGetRequest>
        Get: StateDetail<Cart,GetRequest>
        IdsGet: StateDetail<Pagination<Cart>,IdsGetRequest>
        Post: StateDetail<Cart,PostRequest>
        Put: StateDetail<Cart,PutRequest>
        RangeDelete: StateDetailBase<RangeDeleteRequest>
        RangePost: StateDetail<Pagination<Cart>,RangePostRequest>
        RangePut: StateDetail<Pagination<Cart>,RangePutRequest>
}
