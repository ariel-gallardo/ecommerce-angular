import { Component, ViewChild } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Subscription } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-shell',
  standalone: false,
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {
  
  @ViewChild(MatDrawer) drawer!: MatDrawer;
  private subs!: Subscription;
  
  constructor(private baseService: MenuService) {
    
  }

  public get Items(){
    return this.baseService.Items();
  }

  public toggle(){
    this.baseService.toggleMenu();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.baseService.close();
  }

  ngAfterViewInit(): void {
    this.subs = this.baseService.menuState$.subscribe(isOpen => {
      if(isOpen) this.drawer.open();
      else this.drawer.close();
    });
  }
}
