import { Component, Inject, OnDestroy, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NullableFormControl } from '@api/security/models/common/nullable-form-control.model';
import { Permission } from '@api/security/models/permission.model';
import { PermissionFacade } from '@api/security/redux/permission/permission.facade';
import { Policy } from '@models/policy';
import { Subscription } from 'rxjs';

@Component({
  selector: 'permissions-add',
  standalone: false,
  templateUrl: './permissions-add.html',
  styleUrl: './permissions-add.scss',
})
export class PermissionsAdd implements OnInit, OnDestroy {
  
  private subs!: Subscription;
  public form: FormGroup<NullableFormControl<Permission>>;

  constructor(private readonly permissionFacade: PermissionFacade, 
    fb: FormBuilder,
    private readonly router: Router){
    this.permissionFacade.PostInit();
    this.form = fb.group<Permission>(new Permission());
  }

  ngOnInit(): void {
    
    this.subs = this.form.valueChanges.subscribe(permission => this.permissionFacade.PostRequestUpdate({
        permission
    }));
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.permissionFacade.PostInit();
  }

  public get Errors$(){
    return this.permissionFacade.PostErrors$;
  }

  public get PolicyOptions(){
    return Object.values(Policy);
  }

  public guardar(){
    this.permissionFacade.Post();
  }

  public cancelar(){
    this.router.navigate(['/users/admin/permissions']);
  }
}
