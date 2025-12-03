import { Component, OnInit, signal } from '@angular/core';
import { UsersFacade } from '@api/security/redux/users/users.facade';
import { PermissionFacade } from '@api/security/redux/permission/permission.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('title');
  constructor(private usersFacade: UsersFacade, private permissionFacade: PermissionFacade) {
    
  }
  ngOnInit(): void {
    this.usersFacade.Init();
    this.permissionFacade.Init();
  }
}
