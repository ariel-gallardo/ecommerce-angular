import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal, ViewChild, WritableSignal } from '@angular/core';
import { MatTree, MatTreeNestedDataSource } from '@angular/material/tree';
import { Category } from '@api/product/models/category.model';
import { Pagination } from '@api/product/models/common/pagination.model';
import { Product } from '@api/product/models/product.model';
import { CategoryFacade } from '@api/product/redux/category/category.facade';
import { ProductFacade } from '@api/product/redux/product/product.facade';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

interface SortField {
  field: string;
  label: string;
  order: 'asc' | 'desc' | null;
}

@Component({
  selector: 'product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductList implements OnInit, OnDestroy {
  private subs: Subscription;
  public products: WritableSignal<Pagination<Product>>;
  public categoryTree: MatTreeNestedDataSource<Category>;
  @ViewChild(MatTree) public tree!: MatTree<Category>;

  // Filtros
  public searchName = signal<string>('');
  public selectedCategoryId = signal<string | undefined>(undefined);

  // Ordenamiento por múltiples campos
  public sortFields: SortField[] = [
    { field: 'name', label: 'Nombre', order: null },
    { field: 'description', label: 'Descripción', order: null },
  ];

  public childrenAccessor(category: Category) {
    return category!.children!;
  }

  public trackById(_: number, category: Category) {
    return category.id!;
  }

  public trackProductById(_: number, product: Product) {
    return product.id!;
  }

  public hasChild(element: number, node: Category) {
    return node.children!.length > 0;
  }

  public performAction(node: Category) {
    // Si el nodo tiene hijos y está expandido, cargar sus hijos
    if (this.tree.isExpanded(node) && node.children!.length == 0) {
      this.categoryFacade.FiltersGetRequestUpdate({
        parentId: node.id,
        page: 1,
        pageSize: 5,
        onlyParents: false
      });
    }
    // Filtrar productos por categoría seleccionada
    this.selectedCategoryId.set(node.id || undefined);
    this.applyFilters();
  }

  public onCategoryClick(node: Category): void {
    // Filtrar productos por categoría al hacer clic
    this.selectedCategoryId.set(node.id || undefined);
    this.applyFilters();
  }

  public getProductImage(product: Product): string {
    // Generar una imagen aleatoria basada en el ID del producto para consistencia
    const seed = product.id ? parseInt(product.id, 36) % 1000 : Math.floor(Math.random() * 1000);
    return `https://picsum.photos/seed/${seed}/400/300`;
  }

  public toggleSort(field: SortField): void {
    if (field.order === null) {
      field.order = 'asc';
    } else if (field.order === 'asc') {
      field.order = 'desc';
    } else {
      field.order = null;
    }
    this.applyFilters();
  }

  public getSortIcon(field: SortField): string {
    if (field.order === 'asc') return 'arrow_upward';
    if (field.order === 'desc') return 'arrow_downward';
    return 'unfold_more';
  }

  public onSearchChange(value: string): void {
    this.searchName.set(value);
    this.applyFilters();
  }

  public applyFilters(): void {
    // Construir el string de ordenamiento basado en los campos activos
    const activeSorts = this.sortFields
      .filter(f => f.order !== null)
      .map(f => f.order === 'desc' ? `${f.field}_desc` : f.field);
    
    const orderBy = activeSorts.length > 0 ? activeSorts.join(',') : undefined;

    this.productFacade.FiltersGetRequestUpdate({
      name: this.searchName() || undefined,
      orderBy: orderBy,
      categoryId: this.selectedCategoryId() || undefined,
      page: 1,
      pageSize: 12
    });
    this.productFacade.FiltersGet();
  }

  public clearFilters(): void {
    this.searchName.set('');
    this.selectedCategoryId.set(undefined);
    this.sortFields.forEach(field => field.order = null);
    this.productFacade.FiltersGetRequestUpdate({
      name: undefined,
      orderBy: undefined,
      categoryId: undefined,
      page: 1,
      pageSize: 12
    });
    this.productFacade.FiltersGet();
  }

  public onPageChange(event: PageEvent): void {
    this.productFacade.FiltersGetRequestUpdate({
      page: event.pageIndex + 1,
      pageSize: event.pageSize
    });
    this.productFacade.FiltersGet();
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
    this.productFacade.FiltersGetRequestUpdate({
      page: 1,
      pageSize: 12
    });
    this.productFacade.FiltersGet();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.categoryFacade.FiltersGetInit();
    this.productFacade.FiltersGetInit();
  }
}
