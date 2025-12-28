import { Component, OnInit, signal } from '@angular/core';
import { UsersFacade } from '@api/security/redux/users/users.facade';
import { PermissionFacade } from '@api/security/redux/permission/permission.facade';
import { ThemeFacade } from '@features/base/theme-toggle/theme/theme.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('title');
  constructor(
    private usersFacade: UsersFacade, 
    private permissionFacade: PermissionFacade,
    private themeFacade: ThemeFacade
  ) {
    
  }
  ngOnInit(): void {
    this.usersFacade.Init();
    this.permissionFacade.Init();
    this.themeFacade.Init();
  }
}
