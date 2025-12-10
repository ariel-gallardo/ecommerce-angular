import { Component, Inject, OnDestroy, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NullableFormControl } from '@api/security/models/common/nullable-form-control.model';
import { Permission } from '@api/security/models/permission.model';
import { PermissionFacade } from '@api/security/redux/permission/permission.facade';
import { Policy } from '@models/policy';
import { Subscription } from 'rxjs';

@Component({
  selector: 'permissions-edit',
  standalone: false,
  templateUrl: './permissions-edit.html',
  styleUrl: './permissions-edit.scss',
})
export class PermissionsEdit implements OnInit, OnDestroy {
  
  private subs!: Subscription;
  public form: FormGroup<NullableFormControl<Permission>>;

  constructor(private readonly permissionFacade: PermissionFacade, 
    private readonly activatedRoute: ActivatedRoute, 
    private readonly fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) private readonly data: { id: string },
    @Optional() private readonly dialogRef: MatDialogRef<PermissionsEdit>,
    private readonly router: Router){
    this.permissionFacade.GetInit();
    this.permissionFacade.PutInit();
    this.form = fb.group<Permission>(new Permission());
  }
 
  ngOnInit(): void {
    if(!this.data?.id)
    this.subs = this.activatedRoute.params.subscribe(({id}) => this.permissionFacade.GetRequestUpdate({
      entityId: id
    }));
    else
      this.permissionFacade.GetRequestUpdate({entityId: this.data.id});
    if(!this.data?.id)
    this.subs.add(this.permissionFacade.Get$.subscribe(permission => {
      this.form.patchValue(permission);
    }));
    else{
      this.subs = this.permissionFacade.Get$.subscribe(permission => {
        this.form.patchValue(permission);
      });
    }
    this.subs.add(this.form.valueChanges.subscribe(permission => this.permissionFacade.PutRequestUpdate({
        permission
    })));
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.permissionFacade.GetInit();
    this.permissionFacade.PutInit();
  }

  public get Errors$(){
    return this.permissionFacade.PutErrors$;
  }

  public get PolicyOptions(){
    return Object.values(Policy);
  }

  public guardar(){
    this.permissionFacade.Put();
  }

  public cancelar(){
    if(this.dialogRef)
      this.dialogRef.close();
    else
      this.router.navigate(['/users/admin/permissions']);
  }
}
