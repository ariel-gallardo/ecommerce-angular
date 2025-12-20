import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal, ViewChild, WritableSignal } from '@angular/core';
import { MatTree, MatTreeNestedDataSource } from '@angular/material/tree';
import { Category } from '@api/product/models/category.model';
import { Pagination } from '@api/product/models/common/pagination.model';
import { Product } from '@api/product/models/product.model';
import { CategoryFacade } from '@api/product/redux/category/category.facade';
import { ProductFacade } from '@api/product/redux/product/product.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductList implements OnInit, OnDestroy {
  private subs: Subscription;
  private products: WritableSignal<Pagination<Product>>;
  public categoryTree: MatTreeNestedDataSource<Category>;
  @ViewChild(MatTree) public tree!: MatTree<Category>;

  public childrenAccessor(category: Category) {
    return category!.children!;
  }

  public trackById(_: number, category: Category) {
    return category.id!;
  }

  public hasChild(element: number, node: Category) {
    return node.children!.length > 0;
  }

  public performAction(node: Category) {
    if (this.tree.isExpanded(node) && node.children!.length == 0) {
      this.categoryFacade.FiltersGetRequestUpdate({
        parentId: node.id,
        page: 1,
        pageSize: 5,
        onlyParents: false
      });
    }
  }


  constructor(private readonly productFacade: ProductFacade, private readonly categoryFacade: CategoryFacade) {
    this.productFacade.FiltersGetInit();
    this.categoryFacade.FiltersGetInit();
    this.products = signal({
      page: 0,
      items: [],
      pageSize: 0,
      totalCount: 0,
      totalPages: 0
    });
    this.categoryTree = new MatTreeNestedDataSource<Category>();
    this.subs = this.categoryFacade.FiltersGet$.subscribe(categories => {
      this.categoryTree.data = categories.items.map(category => new Category(category));
    });
    this.subs.add(this.productFacade.FiltersGet$.subscribe(products => this.products.set(products)));
  }

  ngOnInit(): void {
    this.categoryFacade.FiltersGetRequestUpdate({
      onlyParents: true,
      page: 1,
      pageSize: 5
    });
    this.productFacade.FiltersGet();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.categoryFacade.FiltersGetInit();
    this.productFacade.FiltersGetInit();
  }
}
