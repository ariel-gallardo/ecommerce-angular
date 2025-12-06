import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from '@features/base/services/menu.service';


@Component({
  selector: 'app-admin-shell',
  standalone: false,
  templateUrl: './admin-shell.html',
  styleUrl: './admin-shell.scss',
})
export class AdminShell implements OnInit, OnDestroy {

  constructor(private menuService: MenuService) {
    
  }
  
  ngOnInit(): void {
    this.menuService.init([
      {
        icon: 'admin_panel_settings',
        label: 'Administración',
        route: '/users/admin',
        show: true
      },
      {
        icon: 'receipt_long',
        label: 'Logs',
        route: '/users/admin/logs',
        show: true
      },
       {
        icon: 'security',
        label: 'Permisos',
        route: '/users/admin/permissions',
        show: true
      }
    ]);
  }

  ngOnDestroy(): void {
    this.menuService.close();
  }

}
