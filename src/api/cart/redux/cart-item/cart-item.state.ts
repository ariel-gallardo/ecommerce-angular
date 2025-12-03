import { BaseResponse } from '@api/cart/models/base-response.model';
import { CartItem } from '@api/cart/models/cart-item.model';
import { ValidationError } from '@api/cart/models/validation-error.model';
import {Response} from '@api/cart/models/common/response.model';
import {StateDetail, StateDetailBase} from '@api/cart/models/common/state-detail.model';
import {Pagination} from '@api/cart/models/common/pagination.model';

import { DeleteRequest } from '@api/cart/services/cart-item.service'; 
import { FiltersFirstGetRequest } from '@api/cart/services/cart-item.service'; 
import { FiltersGetRequest } from '@api/cart/services/cart-item.service'; 
import { GetRequest } from '@api/cart/services/cart-item.service'; 
import { IdsGetRequest } from '@api/cart/services/cart-item.service'; 
import { PostRequest } from '@api/cart/services/cart-item.service'; 
import { PutRequest } from '@api/cart/services/cart-item.service'; 
import { RangeDeleteRequest } from '@api/cart/services/cart-item.service'; 
import { RangePostRequest } from '@api/cart/services/cart-item.service'; 
import { RangePutRequest } from '@api/cart/services/cart-item.service'; 
import { HttpHeaders } from '@angular/common/http';

export default interface State
{
        Delete: StateDetailBase<DeleteRequest>
        FiltersFirstGet: StateDetail<CartItem,FiltersFirstGetRequest>
        FiltersGet: StateDetail<Pagination<CartItem>,FiltersGetRequest>
        Get: StateDetail<CartItem,GetRequest>
        IdsGet: StateDetail<Pagination<CartItem>,IdsGetRequest>
        Post: StateDetail<CartItem,PostRequest>
        Put: StateDetail<CartItem,PutRequest>
        RangeDelete: StateDetailBase<RangeDeleteRequest>
        RangePost: StateDetail<Pagination<CartItem>,RangePostRequest>
        RangePut: StateDetail<Pagination<CartItem>,RangePutRequest>
}
