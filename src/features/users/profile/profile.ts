import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Address } from '@api/security/models/address.model';
import { Coordinates } from '@api/security/models/coordinates.model';
import { Persona } from '@api/security/models/persona.model';
import { MenuService } from '@features/base/services/menu.service';
import { CoordinateSelect } from '@features/shared/coordinate-select/coordinate-select';
import { AuthService } from '../services/auth-service';
import { UsersFacade } from '@api/security/redux/users/users.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'user-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit, OnDestroy {


  public form: FormGroup;
  private editing: boolean = false;
  private subs: Subscription;

  constructor(private readonly menuService: MenuService, 
    private readonly fb: FormBuilder, 
    private readonly dialog: MatDialog,
    private readonly authService: AuthService,
    private readonly usersFacade: UsersFacade) {
    this.form = fb.group({
      ...new Persona(), address: fb.group({
        ...new Address(),
        coordinates: fb.group<Coordinates>(new Coordinates())
      })
    });
    this.form.disable();
    this.subs = this.form.valueChanges.subscribe(persona => this.usersFacade.PutRequestUpdate(persona));
    this.patchUser();
  }

  private patchUser(){
    this.form.patchValue(new Persona({
      id: this.authService.NameIdentifier,
      name: this.authService.Name,
      address: new Address({
        street: this.authService.Street,
        number: this.authService.Number,
        neighborhood: this.authService.Neighborhood,
        description: this.authService.Description,
        coordinates: new Coordinates({
          latitude: this.authService.Latitude,
          longitude: this.authService.Longitude
        })
      })
    }))
  }

  public get isEditing() {
    return this.editing;
  }

  public toggleEdit() {
    this.editing = !this.editing;
    if(!this.editing)
    {
      this.form.disable();
      this.patchUser();
    }
    else
      this.form.enable();
    
  }

  public save() {
    this.usersFacade.Put();
  }

  public openCoordinateSelector() {
    const dialogRef = this.dialog.open(CoordinateSelect, {
      height: '50vh',
      width: '50vw',
    });


    dialogRef.afterOpened().subscribe(() => {
      const instance = dialogRef.componentInstance;
      setTimeout(() => {
        instance.map?.invalidateSize();
      }, 50);
    });

    dialogRef.afterClosed().subscribe((coordinates) => {
      this.form.patchValue({address: {
        coordinates
      }});
    });
  }


  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.menuService.close();
  }
  ngOnInit(): void {
    this.menuService.init([
      {
        icon: 'account_circle',
        label: 'Perfil',
        route: '/users/profile',
        show: true
      },
      {
        icon: 'admin_panel_settings',
        label: 'Administración',
        route: '/users/admin',
        show: true
      }
    ]);
  }
}
