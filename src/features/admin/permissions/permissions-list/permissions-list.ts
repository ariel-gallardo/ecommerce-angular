import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pagination } from '@api/security/models/common/pagination.model';
import { Permission } from '@api/security/models/permission.model';
import { PermissionFacade } from '@api/security/redux/permission/permission.facade';
import { Colors } from '@models/colors';
import { PermissionsEdit } from '../permissions-edit/permissions-edit';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'permissions-list',
  standalone: false,
  templateUrl: './permissions-list.html',
  styleUrl: './permissions-list.scss',
})
export class PermissionsList implements OnInit, OnDestroy {
  
  private permissions: WritableSignal<Pagination<Permission>>;
  public Colors = Colors;
  constructor(private readonly permissionnFacade: PermissionFacade, 
    private readonly dialog: MatDialog){
    this.permissionnFacade.FiltersGetInit();
    this.permissionnFacade.DeleteInit();
    this.permissions = signal({
      page: 0,
      items: [],
      pageSize: 0,
      totalCount: 0,
      totalPages: 0
    });
  }

  ngOnInit(): void {
    this.permissionnFacade.FiltersGet$.subscribe(permissions => {
      console.log(permissions)
      this.permissions = signal(permissions);
    });
    this.permissionnFacade.FiltersGet();
  }

  ngOnDestroy(): void {
    this.permissionnFacade.FiltersGetInit();
    this.permissionnFacade.DeleteInit();
  }
  
  columns: string[] = [
    'access',
    'policy',
    'acciones'
  ];

    editar(entityId: string){
    this.dialog.open(PermissionsEdit,{
      width: '50vw',
      height: '75vh',
      data:{
        id: entityId,
      }
    })
  }

  eliminar(entityId: string){
    this.permissionnFacade.DeleteRequestUpdate({entityId});
  }
 
  public get Permissions(){
    return this.permissions().items;
  }
  public get Pagination(){
    return {
      page: this.permissions().page,  
      pageSize: this.permissions().pageSize,  
      totalCount: this.permissions().totalCount,  
      totalPages: this.permissions().totalPages,  
    };
  }
  onPageChange(e: PageEvent) {
    this.permissionnFacade.FiltersGetChangePage(e);
  }

}
 